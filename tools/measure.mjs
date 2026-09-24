/** Mide el peso real de la primera visita contra el sitio compilado. */
import puppeteer from "puppeteer-core";
import zlib from "node:zlib";

const target = process.argv[2] || "http://localhost:4322/";
const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: "new",
  defaultViewport: { width: 1440, height: 900 },
});

const page = await browser.newPage();
const seen = [];
page.on("response", async (res) => {
  try {
    const buf = await res.buffer();
    const type = (res.headers()["content-type"] || "").split(";")[0];
    // El hosting real sirve con gzip; lo simulamos para texto
    const compressible = /text|javascript|json|svg|xml/.test(type);
    seen.push({
      url: new URL(res.url()).pathname,
      type,
      raw: buf.length,
      wire: compressible ? zlib.gzipSync(buf, { level: 9 }).length : buf.length,
    });
  } catch {}
});

const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
await page.goto(target, { waitUntil: "networkidle0" });
await page.evaluate(() => document.fonts.ready);

const metrics = await page.evaluate(() => {
  const n = performance.getEntriesByType("navigation")[0];
  const fcp = performance.getEntriesByName("first-contentful-paint")[0];
  return {
    domContentLoaded: Math.round(n.domContentLoadedEventEnd),
    load: Math.round(n.loadEventEnd),
    fcp: Math.round(fcp ? fcp.startTime : 0),
  };
});

const sum = (f) => seen.reduce((a, x) => a + f(x), 0);
console.log(`\nRecursos: ${seen.length}`);
for (const r of seen.sort((a, b) => b.wire - a.wire)) {
  console.log(`  ${(r.wire / 1024).toFixed(1).padStart(7)} KB  ${r.url}`);
}
console.log(`\n  ${(sum((x) => x.raw) / 1024).toFixed(1).padStart(7)} KB  sin comprimir`);
console.log(`  ${(sum((x) => x.wire) / 1024).toFixed(1).padStart(7)} KB  transferido (con gzip)`);
console.log(`\n  FCP ${metrics.fcp} ms · DOMContentLoaded ${metrics.domContentLoaded} ms · load ${metrics.load} ms`);
console.log(errors.length ? `\n!! ERRORES: ${errors.join(" | ")}` : "\nSin errores de página.");

await browser.close();
