/** Renderiza public/og.html a public/og-image.png (1200×630). */
import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: "new",
  args: ["--hide-scrollbars", "--force-color-profile=srgb"],
  defaultViewport: { width: 1200, height: 630, deviceScaleFactor: 1 },
});

const page = await browser.newPage();
await page.goto("http://localhost:4321/og.html", { waitUntil: "networkidle0" });
await page.evaluate(() => document.fonts.ready);
await new Promise((r) => setTimeout(r, 600));
await page.screenshot({ path: "public/og-image.png" });
await browser.close();
console.log("og-image renderizada");
