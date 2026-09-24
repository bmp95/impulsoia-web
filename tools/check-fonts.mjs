/**
 * Dos comprobaciones que el ojo no hace bien:
 *  1. El conmutador ES/EN sigue funcionando sin los atributos data-es.
 *  2. Ningun caracter del sitio se quedo fuera del recorte de las fuentes.
 */
import puppeteer from "puppeteer-core";

const target = process.argv[2] || "http://localhost:4321/";
const browser = await puppeteer.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: "new",
  defaultViewport: { width: 1440, height: 900 },
});
const page = await browser.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
await page.goto(target, { waitUntil: "networkidle0" });
await page.evaluate(() => document.fonts.ready);

// ---------- 1. idioma ----------
const sample = () =>
  page.evaluate(() => ({
    lang: document.documentElement.lang,
    h1: document.querySelector("h1").innerText.replace(/\n/g, " "),
    plan: document.querySelector("#planes h3").textContent.trim(),
    faq: document.querySelector("#faq summary span").textContent.trim(),
  }));

const es1 = await sample();
await page.evaluate(() => document.querySelector("[data-lang-toggle]").click());
await new Promise((r) => setTimeout(r, 400));
const en = await sample();
await page.evaluate(() => document.querySelector("[data-lang-toggle]").click());
await new Promise((r) => setTimeout(r, 400));
const es2 = await sample();

console.log("--- conmutador de idioma ---");
console.log(`  ES  ${es1.lang}  "${es1.h1.slice(0, 46)}" · ${es1.plan} · ${es1.faq.slice(0, 30)}`);
console.log(`  EN  ${en.lang}  "${en.h1.slice(0, 46)}" · ${en.plan} · ${en.faq.slice(0, 30)}`);
console.log(`  ES  ${es2.lang}  "${es2.h1.slice(0, 46)}" · ${es2.plan} · ${es2.faq.slice(0, 30)}`);

const langOk =
  es1.lang === "es" && en.lang === "en" && es2.lang === "es" &&
  es1.h1 !== en.h1 && es1.h1 === es2.h1 && es1.plan === es2.plan && es1.faq === es2.faq;
console.log(`  ${langOk ? "CORRECTO" : "FALLA"}: cambia a ingles y vuelve al espanol identico\n`);

// ---------- 2. glifos ----------
// Se recorren los dos idiomas y se comprueba, caracter a caracter, que la
// fuente asignada a cada elemento puede pintarlo.
const missing = await page.evaluate(async () => {
  const out = new Set();
  const check = () => {
    const els = document.querySelectorAll("h1,h2,h3,.eyebrow,.display,.gradtext,[class*=font-mono],.field-label");
    for (const el of els) {
      const cs = getComputedStyle(el);
      const font = `${cs.fontStyle} ${cs.fontWeight} 16px ${cs.fontFamily}`;
      for (const ch of el.textContent || "") {
        if (ch.trim() === "") continue;
        if (!document.fonts.check(font, ch)) out.add(ch + " @ " + cs.fontFamily.split(",")[0]);
      }
    }
  };
  check();
  document.querySelector("[data-lang-toggle]").click();
  await new Promise((r) => setTimeout(r, 300));
  await document.fonts.ready;
  check();
  document.querySelector("[data-lang-toggle]").click();
  return [...out];
});

console.log("--- glifos tras el recorte ---");
if (missing.length === 0) {
  console.log("  CORRECTO: ningun caracter se quedo fuera del subconjunto");
} else {
  console.log(`  FALTAN ${missing.length}:`);
  missing.forEach((m) => console.log("    " + m));
}

console.log(errors.length ? `\n!! ${errors.join(" | ")}` : "\nSin errores de pagina.");
await browser.close();
process.exit(langOk && missing.length === 0 ? 0 : 1);
