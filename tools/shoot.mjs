/**
 * Capturas de verificación con el Chrome ya instalado.
 *
 *   node tools/shoot.mjs                      → escritorio, tramos + secciones
 *   node tools/shoot.mjs --mobile             → viewport móvil
 *   node tools/shoot.mjs --at 0.6 --sel "#inteligencia"
 */
import puppeteer from "puppeteer-core";
import { mkdirSync } from "node:fs";
import path from "node:path";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const URL = process.env.SHOOT_URL || "http://localhost:4321/";
const OUT = process.env.SHOOT_OUT || "shots";

const args = process.argv.slice(2);
const has = (f) => args.includes(f);
const val = (f, d) => {
  const i = args.indexOf(f);
  return i >= 0 && args[i + 1] ? args[i + 1] : d;
};

const mobile = has("--mobile");
const viewport = mobile
  ? { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true }
  : { width: 1440, height: 900, deviceScaleFactor: 1 };

mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--hide-scrollbars", "--force-color-profile=srgb"],
  defaultViewport: viewport,
});

const page = await browser.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
page.on("console", (m) => m.type() === "error" && errors.push(m.text()));

await page.goto(URL, { waitUntil: "networkidle0" });
await page.evaluate(() => document.fonts.ready);

const shot = async (name) => {
  const file = path.join(OUT, `${mobile ? "m-" : ""}${name}.png`);
  await page.screenshot({ path: file });
  return file;
};

const settle = (ms = 900) => new Promise((r) => setTimeout(r, ms));

// Recorre la página entera para disparar todos los revelados
const docH = await page.evaluate(() => document.documentElement.scrollHeight);
for (let y = 0; y < docH; y += viewport.height * 0.8) {
  await page.evaluate((v) => scrollTo(0, v), y);
  await settle(120);
}
await page.evaluate(() => scrollTo(0, 0));
await settle(700);

if (has("--at")) {
  // Captura a una fracción concreta del recorrido de un elemento
  const frac = parseFloat(val("--at", "0.5"));
  const sel = val("--sel", "[data-chip-track]");
  await page.evaluate(
    (s, f) => {
      const el = document.querySelector(s);
      const top = el.getBoundingClientRect().top + scrollY;
      document.documentElement.style.scrollBehavior = "auto";
      scrollTo(0, top + (el.offsetHeight - innerHeight) * f);
    },
    sel,
    frac,
  );
  await settle(1400);
  console.log(await shot(`at-${String(frac).replace(".", "_")}`));
} else {
  // Una captura por sección
  const sections = await page.evaluate(() =>
    Array.from(document.querySelectorAll("header, section[id], footer")).map((s) => ({
      id: s.id || s.tagName.toLowerCase(),
      top: Math.round(s.getBoundingClientRect().top + scrollY),
    })),
  );
  for (const s of sections) {
    await page.evaluate((y) => {
      document.documentElement.style.scrollBehavior = "auto";
      scrollTo(0, y);
    }, s.top);
    await settle(700);
    console.log(await shot(s.id));
  }
}

if (errors.length) {
  console.log("\n!! ERRORES EN PÁGINA:");
  errors.forEach((e) => console.log("  " + e));
} else {
  console.log("\nSin errores de consola.");
}

await browser.close();
