import puppeteer from "puppeteer-core";
const b = await puppeteer.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: "new", defaultViewport: { width: 1440, height: 900 },
});
const p = await b.newPage();
const errs = [];
p.on("pageerror", (e) => errs.push(String(e)));
await p.goto("http://localhost:4321/", { waitUntil: "networkidle0" });
await p.evaluate(() => document.fonts.ready);

// 1. Ningun CTA de accion debe apuntar ya a wa.me
const links = await p.evaluate(() =>
  [...document.querySelectorAll("a[href]")].map((a) => ({
    href: a.getAttribute("href"),
    prefill: a.getAttribute("data-prefill"),
    text: a.innerText.trim().slice(0, 34).replace(/\n/g, " "),
  })).filter((l) => l.href.includes("wa.me") || l.prefill));
console.log("--- CTAs ---");
for (const l of links) console.log(`  ${l.prefill ? "FORM" : "WA  "}  ${l.text}`);

// 2. Pulsar un CTA de plan y comprobar que el formulario queda relleno
await p.evaluate(() => {
  document.documentElement.style.scrollBehavior = "auto";
  const el = [...document.querySelectorAll("[data-prefill]")].find((e) =>
    (e.getAttribute("data-prefill") || "").includes("Motor"));
  el.click();
});
await new Promise((r) => setTimeout(r, 1500));
const state = await p.evaluate(() => ({
  msg: document.querySelector("[data-f-msg]").value,
  focused: document.activeElement?.getAttribute("data-f-name") !== null,
  scrolled: Math.round(scrollY),
  contactTop: Math.round(document.querySelector("#contacto").getBoundingClientRect().top),
}));
console.log("\n--- tras pulsar 'Empezar por aqui' del plan Motor ---");
console.log("  textarea:", JSON.stringify(state.msg));
console.log("  foco en el campo nombre:", state.focused);
console.log("  #contacto en viewport (top):", state.contactTop);

// 3. Huecos reales entre secciones
const gaps = await p.evaluate(() => {
  const s = [...document.querySelectorAll("header, section[id]")];
  const out = [];
  for (let i = 0; i < s.length - 1; i++) {
    const a = s[i].getBoundingClientRect(), bb = s[i + 1].getBoundingClientRect();
    out.push(`${(s[i].id || "hero").padEnd(13)}-> ${(s[i + 1].id || "").padEnd(13)} ${Math.round(bb.top - a.bottom)}px`);
  }
  return out;
});
console.log("\n--- separacion entre secciones ---");
gaps.forEach((g) => console.log("  " + g));
console.log(errs.length ? "\n!! " + errs.join(" | ") : "\nSin errores de pagina.");
await b.close();
