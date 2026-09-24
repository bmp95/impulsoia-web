import puppeteer from "puppeteer-core";
const b = await puppeteer.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: "new", defaultViewport: { width: 1440, height: 900 },
});
const p = await b.newPage();
// Se inyecta un proveedor falso ANTES de que corra la web
await p.evaluateOnNewDocument(() => {
  window.__eventos = [];
  window.umami = { track: (n, props) => window.__eventos.push({ n, props }) };
});
await p.goto("http://127.0.0.1:4400/", { waitUntil: "networkidle0" });
await p.evaluate(() => { document.documentElement.style.scrollBehavior = "auto"; });

const click = async (sel, label) => {
  const ok = await p.evaluate((s) => { const e = document.querySelector(s); if (!e) return false; e.click(); return true; }, sel);
  await new Promise(r => setTimeout(r, 350));
  console.log(`  ${ok ? "ok " : "!! "} ${label}`);
};
await click('[data-track="cta-radiografia"]', "CTA Radiografia (hero)");
await click('[data-track="cta-plan"]', "CTA de plan");
await click('[data-lang-toggle]', "cambio de idioma");
await p.evaluate(() => { const el=document.querySelector("#planes"); scrollTo(0, el.getBoundingClientRect().top+scrollY); });
await new Promise(r => setTimeout(r, 900));

const ev = await p.evaluate(() => window.__eventos);
console.log("\n  eventos capturados:");
for (const e of ev) console.log("    " + e.n + (e.props ? "  " + JSON.stringify(e.props) : ""));
console.log(`\n  total: ${ev.length}`);
await b.close();
