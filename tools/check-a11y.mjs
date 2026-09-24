import puppeteer from "puppeteer-core";
const b = await puppeteer.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: "new", defaultViewport: { width: 1440, height: 900 },
});
const p = await b.newPage();
await p.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
await p.goto("http://localhost:4321/", { waitUntil: "networkidle0" });
await p.evaluate(() => document.fonts.ready);
await new Promise((r) => setTimeout(r, 800));

const r = await p.evaluate(() => {
  const lines = [...document.querySelectorAll(".line-in")].map((el) => {
    const cs = getComputedStyle(el);
    return { text: el.textContent.slice(0, 24), opacity: cs.opacity, transform: cs.transform };
  });
  const eyebrow = getComputedStyle(document.querySelector(".eyebrow"), "::before").transform;
  const hidden = [...document.querySelectorAll(".reveal")].filter(
    (e) => getComputedStyle(e).opacity === "0").length;
  return { lines, eyebrow, revealsInvisibles: hidden };
});
console.log("--- prefers-reduced-motion: reduce ---");
r.lines.forEach((l) => console.log(`  opacidad ${l.opacity}  transform ${l.transform}  "${l.text}"`));
console.log("  filete del antetitulo:", r.eyebrow);
console.log("  elementos .reveal invisibles:", r.revealsInvisibles);
await b.close();
