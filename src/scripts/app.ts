/* Comportamiento de impulsoia.io — sin dependencias externas. */

const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) =>
  r.querySelector(s) as T | null;
const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) =>
  Array.from(r.querySelectorAll(s)) as T[];
const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

/* ---------------- Idioma ---------------- */

/** El texto espanol original de cada elemento, capturado antes de tocarlo. */
const ES = new WeakMap<Element, string>();

const esText = (el: Element) => {
  let v = ES.get(el);
  if (v === undefined) {
    v = el.textContent ?? "";
    ES.set(el, v);
  }
  return v;
};

/** Para textos que genera el JS: registra el espanol y pinta el idioma activo. */
function setBilingual(el: Element, es: string, en: string) {
  ES.set(el, es);
  el.setAttribute("data-en", en);
  el.textContent = document.documentElement.lang === "en" ? en : es;
}

function applyLang(lang: "es" | "en") {
  $$("[data-en]").forEach((el) => {
    const es = esText(el);
    el.textContent = lang === "es" ? es : (el.getAttribute("data-en") ?? es);
  });

  document.documentElement.lang = lang;

  const es = $("[data-lang-es]");
  const en = $("[data-lang-en]");
  es?.classList.toggle("text-accent", lang === "es");
  es?.classList.toggle("opacity-45", lang !== "es");
  en?.classList.toggle("text-accent", lang === "en");
  en?.classList.toggle("opacity-45", lang !== "en");

  try {
    localStorage.setItem("impulso-lang", lang);
  } catch {}
}

function initLang() {
  // Espanol SIEMPRE por defecto. Solo se cambia si el visitante pulso el boton
  // en una visita anterior.
  //
  // Antes se miraba navigator.language, y eso era un fallo grave de SEO: el
  // Chrome headless con el que Google renderiza usa locale en-US, asi que la
  // pagina se volcaba a ingles ANTES de que Google tomara la instantanea que
  // indexa, incluido el lang del <html>. Un negocio local espanol se arriesgaba
  // a quedar indexado en ingles. La deteccion automatica no compensa ese riesgo.
  let lang: "es" | "en" = "es";
  try {
    const saved = localStorage.getItem("impulso-lang");
    if (saved === "es" || saved === "en") lang = saved;
  } catch {}

  applyLang(lang);

  $("[data-lang-toggle]")?.addEventListener("click", () => {
    applyLang(document.documentElement.lang === "es" ? "en" : "es");
  });
}

/* ---------------- Menú móvil ---------------- */

function initMenu() {
  const btn = $("[data-menu-toggle]");
  const menu = $("[data-menu]");
  if (!btn || !menu) return;

  const open = $("[data-menu-open]");
  const close = $("[data-menu-close]");

  const set = (isOpen: boolean) => {
    menu.classList.toggle("hidden", !isOpen);
    btn.setAttribute("aria-expanded", String(isOpen));
    open?.classList.toggle("hidden", isOpen);
    close?.classList.toggle("hidden", !isOpen);
  };

  btn.addEventListener("click", () => set(menu.classList.contains("hidden")));
  $$("[data-menu-link]", menu).forEach((a) => a.addEventListener("click", () => set(false)));
  addEventListener("keydown", (e) => {
    if (e.key === "Escape") set(false);
  });
}

/* ---------------- Revelados ---------------- */

function initReveal() {
  const items = $$(".reveal");
  if (reduced || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );
  items.forEach((el) => io.observe(el));
}

/* ---------------- Spotlight con el cursor ---------------- */

function initSpotlight() {
  if (matchMedia("(pointer: coarse)").matches) return;
  $$(".spot").forEach((card) => {
    card.addEventListener("pointermove", (ev) => {
      const e = ev as PointerEvent;
      const r = card.getBoundingClientRect();
      (card as HTMLElement).style.setProperty("--mx", `${e.clientX - r.left}px`);
      (card as HTMLElement).style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });
}

/* ---------------- Tilt 3D del panel de chat ---------------- */

function initTilt() {
  const el = $("[data-tilt]");
  if (!el || reduced || matchMedia("(pointer: coarse)").matches) return;

  el.addEventListener("pointermove", (ev) => {
    const e = ev as PointerEvent;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-py * 5}deg) rotateY(${px * 6}deg) translateZ(0)`;
  });
  el.addEventListener("pointerleave", () => {
    el.style.transform = "";
  });
}

/* ---------------- Nav + barra de progreso ---------------- */

function initScrollChrome() {
  const nav = $("[data-nav]");
  const bar = $("[data-progress]");

  const tick = () => {
    const y = scrollY;

    if (nav) {
      const solid = y > 40;
      nav.style.background = solid ? "rgb(8 11 20 / .72)" : "transparent";
      nav.style.backdropFilter = solid ? "blur(18px) saturate(1.4)" : "none";
      (nav.style as any).webkitBackdropFilter = solid ? "blur(18px) saturate(1.4)" : "none";
      nav.style.borderBottomColor = solid ? "rgb(255 255 255 / .08)" : "transparent";
    }

    if (bar) {
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
    }
  };

  addEventListener("scroll", tick, { passive: true });
  addEventListener("resize", tick);
  tick();
}

/* ---------------- Cascada de los nodos del flujo ---------------- */

function initFlow() {
  const wrap = $("[data-flow]");
  if (!wrap) return;
  const nodes = $$("[data-flow-node]", wrap);

  const io = new IntersectionObserver(
    (entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      nodes.forEach((n, i) => {
        setTimeout(
          () => {
            const dot = $("[data-dot]", n);
            if (dot) {
              dot.style.background = "var(--color-accent2)";
              dot.style.boxShadow = "0 0 18px var(--color-accent2)";
            }
          },
          reduced ? 0 : i * 320,
        );
      });
      io.disconnect();
    },
    { threshold: 0.35 },
  );
  io.observe(wrap);
}

/* ---------------- Vídeo del chip, dirigido por el scroll ----------------
   El vídeo va recortado (sin la marca de agua del generador), sin audio y con
   un keyframe por segundo, así que `currentTime` responde al instante y no hace
   falta extraer fotogramas a canvas como hacía la versión anterior.
   Sólo se descarga cuando la sección está a una pantalla de distancia. */

function initChipVideo() {
  const track = $("[data-chip-track]");
  const video = $<HTMLVideoElement>("[data-chip-video]");
  if (!track || !video) return;

  const bar = $("[data-chip-bar]");
  const pct = $("[data-chip-pct]");
  const status = $("[data-chip-status]");
  const steps = $$("[data-chip-step]");

  let progress = 0;
  let shown = 0;
  let ready = false;
  let raf = 0;

  const readProgress = () => {
    const r = track.getBoundingClientRect();
    const total = track.offsetHeight - innerHeight;
    // Se reserva una cola del 22 % para que aguante al 100 % mientras sigue fijada
    progress = total > 0 ? clamp(-r.top / (total * 0.78)) : 0;
  };

  const paintUi = () => {
    const v = Math.round(shown * 100);
    if (bar) bar.style.width = `${v}%`;
    if (pct) pct.textContent = `${v}%`;

    if (status) {
      const lang = document.documentElement.lang === "en" ? "en" : "es";
      const label =
        v < 5
          ? { es: "En reposo", en: "Idle" }
          : v < 45
            ? { es: "Conectando…", en: "Connecting…" }
            : v < 80
              ? { es: "Aprendiendo…", en: "Learning…" }
              : v < 99
                ? { es: "Automatizando…", en: "Automating…" }
                : { es: "Operativa", en: "Live" };
      setBilingual(status, label.es, label.en);
    }

    steps.forEach((s) => {
      const at = parseFloat(s.getAttribute("data-chip-step") || "0");
      const on = shown >= at;
      s.style.borderColor = on ? "rgb(59 130 246 / .55)" : "rgb(255 255 255 / .12)";
      s.style.color = on ? "var(--color-ink)" : "var(--color-muted)";
      s.style.background = on ? "rgb(59 130 246 / .12)" : "transparent";
    });
  };

  const seek = () => {
    if (!ready || video.seeking) return;
    const d = video.duration;
    if (!d || !isFinite(d)) return;
    const target = shown * (d - 0.06);
    if (Math.abs(video.currentTime - target) > 0.02) video.currentTime = target;
  };

  const loop = () => {
    shown += (progress - shown) * 0.12;
    if (Math.abs(progress - shown) < 0.0005) shown = progress;
    seek();
    paintUi();
    raf = requestAnimationFrame(loop);
  };

  const load = () => {
    if (video.dataset.loaded) return;
    video.dataset.loaded = "1";

    const poster = video.dataset.poster;
    if (poster) video.poster = poster;

    // Con movimiento reducido nos quedamos en el póster: nada de reproducir ni buscar
    if (reduced) {
      video.classList.remove("opacity-0");
      return;
    }

    video.src = video.dataset.src || "";
    video.load();

    video.addEventListener(
      "loadeddata",
      () => {
        ready = true;
        video.classList.remove("opacity-0");
        // Safari/iOS no permiten fijar currentTime hasta que el vídeo se ha
        // reproducido una vez; este play/pause silencioso lo desbloquea.
        const p = video.play();
        if (p && typeof p.then === "function") p.then(() => video.pause()).catch(() => {});
      },
      { once: true },
    );
  };

  readProgress();
  shown = progress;
  paintUi();

  addEventListener("scroll", readProgress, { passive: true });
  addEventListener("resize", readProgress);

  // Descarga anticipada: una pantalla antes de llegar
  const pre = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        load();
        pre.disconnect();
      }
    },
    { rootMargin: "100% 0px" },
  );
  pre.observe(track);

  // Sólo animar mientras la sección esté a la vista
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting && !raf) raf = requestAnimationFrame(loop);
      else if (!e.isIntersecting && raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    });
  });
  io.observe(track);
}

/* ---------------- Formulario ---------------- */

function initForm() {
  const form = $<HTMLFormElement>("[data-contact-form]");
  if (!form) return;

  const hint = $("[data-f-hint]");
  const phone = form.dataset.phone || "";
  const key = form.dataset.key || "";
  const lang = () => (document.documentElement.lang === "en" ? "en" : "es");

  const T = {
    sending: { es: "Enviando…", en: "Sending…" },
    sent: { es: "¡Recibido! Te respondemos hoy mismo.", en: "Got it! We'll reply today." },
    error: {
      es: "No se pudo enviar. Escríbenos por WhatsApp y lo vemos.",
      en: "Couldn't send. Message us on WhatsApp instead.",
    },
    needName: {
      es: "Dinos al menos tu nombre para poder responderte.",
      en: "Tell us your name at least, so we can reply.",
    },
  };

  const say = (m: { es: string; en: string }, color = "") => {
    if (!hint) return;
    setBilingual(hint, m.es, m.en);
    hint.style.color = color || "";
  };

  const read = () => ({
    name: ($("[data-f-name]", form) as HTMLInputElement)?.value.trim() || "",
    business: ($("[data-f-business]", form) as HTMLInputElement)?.value.trim() || "",
    phone: ($("[data-f-phone]", form) as HTMLInputElement)?.value.trim() || "",
    msg: ($("[data-f-msg]", form) as HTMLTextAreaElement)?.value.trim() || "",
  });

  const compose = (d: ReturnType<typeof read>) =>
    lang() === "en"
      ? `Hi, I'm ${d.name}.${d.business ? ` Business: ${d.business}.` : ""}${
          d.phone ? ` Phone: ${d.phone}.` : ""
        }${d.msg ? ` ${d.msg}` : ""}`
      : `Hola, soy ${d.name}.${d.business ? ` Negocio: ${d.business}.` : ""}${
          d.phone ? ` Teléfono: ${d.phone}.` : ""
        }${d.msg ? ` ${d.msg}` : ""}`;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = read();
    if (!d.name) {
      say(T.needName, "var(--color-warn)");
      return;
    }
    track("form-whatsapp");
    open(`https://wa.me/${phone}?text=${encodeURIComponent(compose(d))}`, "_blank", "noopener");
  });

  $("[data-email-btn]", form)?.addEventListener("click", async () => {
    const d = read();
    if (!d.name) {
      say(T.needName, "var(--color-warn)");
      return;
    }
    track("form-email");
    say(T.sending);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: key,
          subject: `Nuevo contacto web — ${d.name}`,
          from_name: "impulsoia.io",
          nombre: d.name,
          negocio: d.business,
          telefono: d.phone,
          mensaje: d.msg,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      track("form-email-enviado");
      say(T.sent, "var(--color-accent3)");
      form.reset();
    } catch {
      track("form-email-error");
      say(T.error, "var(--color-warn)");
    }
  });
}

/* ---------------- CTAs que llevan al formulario ya rellenado ----------------
   Los botones de accion (Radiografia, planes) no van directos a wa.me: llevan al
   formulario, para que quede registro del lead aunque no llegue a enviar nada y
   para que llegue diciendo que venia buscando. */

function initPrefill() {
  const msg = $<HTMLTextAreaElement>("[data-f-msg]");
  const name = $<HTMLInputElement>("[data-f-name]");
  if (!msg) return;

  $$("[data-prefill]").forEach((el) =>
    el.addEventListener("click", () => {
      msg.value = el.getAttribute("data-prefill") || "";

      // Destello breve para que se vea que el formulario ya trae contexto
      msg.style.borderColor = "var(--color-accent2)";
      msg.style.boxShadow = "0 0 0 3px rgb(6 214 245 / .18)";
      setTimeout(() => {
        msg.style.borderColor = "";
        msg.style.boxShadow = "";
      }, 1600);

      // Se enfoca el nombre, que es lo unico que queda por rellenar
      setTimeout(() => name?.focus({ preventScroll: true }), reduced ? 0 : 800);
    }),
  );
}

/* ---------------- Boton flotante ----------------
   Aparece pasado el hero (que ya tiene su propio CTA) y se esconde cuando el
   formulario entra en pantalla, para no tapar los campos. */

function initFab() {
  const fab = $("[data-fab]");
  if (!fab) return;

  // Se esconde donde ya hay llamadas a la accion propias: en los planes (tres
  // botones) y en el formulario. Si no, en movil tapa el boton de un plan.
  const zones = ["#planes", "#contacto"].map((s) => $(s)).filter(Boolean) as HTMLElement[];
  const covered = new Set<Element>();

  const sync = () => {
    const pastHero = scrollY > innerHeight * 0.75;
    fab.classList.toggle("show", pastHero && covered.size === 0);
  };

  if (zones.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? covered.add(e.target) : covered.delete(e.target)));
        sync();
      },
      { threshold: 0.15 },
    );
    zones.forEach((z) => io.observe(z));
  }

  addEventListener("scroll", sync, { passive: true });
  addEventListener("resize", sync);
  sync();

  // El aria-label tambien cambia de idioma
  const applyAria = () =>
    fab.setAttribute(
      "aria-label",
      fab.getAttribute(document.documentElement.lang === "en" ? "data-aria-en" : "data-aria-es") || "",
    );
  applyAria();
  $("[data-lang-toggle]")?.addEventListener("click", () => setTimeout(applyAria, 0));
}

/* ---------------- Medicion ----------------
   Envuelve al proveedor configurado en src/data/analytics.ts. Si no hay ninguno,
   no hace absolutamente nada: ni peticiones, ni errores en consola.
   Sin cookies y sin datos personales, para no romper la promesa de la politica
   de privacidad ni obligar a poner banner de consentimiento. */

type Props = Record<string, string | number>;

function track(event: string, props?: Props) {
  try {
    const w = window as any;
    // Umami
    if (typeof w.umami?.track === "function") {
      props ? w.umami.track(event, props) : w.umami.track(event);
      return;
    }
    // Plausible
    if (typeof w.plausible === "function") {
      w.plausible(event, props ? { props } : undefined);
      return;
    }
  } catch {}
}

function initTracking() {
  // Cualquier elemento con data-track se mide al pulsarlo
  $$("[data-track]").forEach((el) =>
    el.addEventListener("click", () => {
      const name = el.getAttribute("data-track");
      if (!name) return;
      const detail = el.getAttribute("data-track-detail");
      track(name, detail ? { detalle: detail } : undefined);
    }),
  );

  // Llegar hasta los planes es la senal de interes mas fiable que hay
  const planes = $("#planes");
  if (planes) {
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          track("lee-hasta-planes");
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(planes);
  }

  $("[data-lang-toggle]")?.addEventListener("click", () =>
    track("cambio-idioma", { a: document.documentElement.lang === "es" ? "en" : "es" }),
  );
}

/* ---------------- Enlace del pie abre la politica ---------------- */

function initPrivacyLink() {
  const abrir = (sel: string, enlace: string) => {
    const d = $<HTMLDetailsElement>(sel);
    $$(enlace).forEach((a) =>
      a.addEventListener("click", () => {
        if (d) d.open = true;
      }),
    );
  };
  abrir("[data-privacy]", "[data-priv-link]");
  abrir("[data-legal]", "[data-legal-link]");
}

/* ---------------- Arranque ---------------- */

function boot() {
  initLang();
  initMenu();
  initReveal();
  initSpotlight();
  initTilt();
  initScrollChrome();
  initFlow();
  initChipVideo();
  initForm();
  initPrefill();
  initFab();
  initTracking();
  initPrivacyLink();
}

if (document.readyState === "loading") {
  addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
