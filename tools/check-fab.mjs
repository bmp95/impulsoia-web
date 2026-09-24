/** Comprueba que el boton flotante aparece y desaparece donde debe. */
import puppeteer from "puppeteer-core";

const URL = process.argv[2] || "http://localhost:4321/";
const mobile = process.argv.includes("--mobile");

const browser = await puppeteer.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: "new",
  defaultViewport: mobile
    ? { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true }
    : { width: 1440, height: 900 },
});

const page = await browser.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
await page.goto(URL, { waitUntil: "networkidle0" });
await page.evaluate(() => document.fonts.ready);
await page.evaluate(() => (document.documentElement.style.scrollBehavior = "auto"));

const state = async () =>
  page.evaluate(() => {
    const f = document.querySelector("[data-fab]");
    const cs = getComputedStyle(f);
    return {
      visible: f.classList.contains("show"),
      opacity: cs.opacity,
      clicks: cs.pointerEvents,
      aria: f.getAttribute("aria-label"),
    };
  });

const at = async (label, fn) => {
  await page.evaluate(fn);
  await new Promise((r) => setTimeout(r, 900));
  const s = await state();
  console.log(
    `  ${label.padEnd(30)} visible=${String(s.visible).padEnd(5)} opacidad=${s.opacity} clicks=${s.clicks}`,
  );
  return s;
};

console.log(`--- boton flotante (${mobile ? "movil" : "escritorio"}) ---`);
const top = await at("arriba del todo", () => scrollTo(0, 0));
const mid = await at("mitad de la pagina", () => scrollTo(0, document.body.scrollHeight * 0.45));
const form = await at("formulario a la vista", () => {
  const c = document.querySelector("#contacto");
  scrollTo(0, c.getBoundingClientRect().top + scrollY - 120);
});

// Pulsar el boton desde la mitad y comprobar que rellena el formulario
await page.evaluate(() => scrollTo(0, document.body.scrollHeight * 0.45));
await new Promise((r) => setTimeout(r, 700));
await page.evaluate(() => document.querySelector("[data-fab]").click());
await new Promise((r) => setTimeout(r, 1600));
const after = await page.evaluate(() => ({
  msg: document.querySelector("[data-f-msg]").value,
  contactTop: Math.round(document.querySelector("#contacto").getBoundingClientRect().top),
}));
console.log(`\n  al pulsarlo -> textarea: ${JSON.stringify(after.msg)}`);
console.log(`  #contacto en pantalla (top): ${after.contactTop}px`);

const ok =
  top.visible === false && mid.visible === true && form.visible === false && after.msg.length > 0;
console.log(`\n  ${ok ? "CORRECTO" : "FALLA"}: oculto arriba, visible en medio, oculto en el formulario`);
console.log(errors.length ? `!! ${errors.join(" | ")}` : "Sin errores de pagina.");

await browser.close();
process.exit(ok ? 0 : 1);
