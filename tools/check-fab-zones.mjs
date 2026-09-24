import puppeteer from "puppeteer-core";
const b = await puppeteer.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: "new",
  defaultViewport: { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true },
});
const p = await b.newPage();
await p.goto("http://localhost:4327/", { waitUntil: "networkidle0" });
await p.evaluate(() => document.fonts.ready);
await p.evaluate(() => { document.documentElement.style.scrollBehavior = "auto"; });
for (const id of ["servicios", "cercania", "casos", "planes", "faq", "contacto"]) {
  await p.evaluate((s) => {
    const el = document.querySelector("#" + s);
    scrollTo(0, el.getBoundingClientRect().top + scrollY - 100);
  }, id);
  await new Promise((r) => setTimeout(r, 800));
  const v = await p.evaluate(() => document.querySelector("[data-fab]").classList.contains("show"));
  console.log(`  #${id.padEnd(12)} boton ${v ? "VISIBLE" : "oculto"}`);
}
await b.close();
