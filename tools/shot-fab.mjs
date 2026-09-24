import puppeteer from "puppeteer-core";
const mobile = process.argv.includes("--mobile");
const b = await puppeteer.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: "new", args: ["--hide-scrollbars"],
  defaultViewport: mobile
    ? { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true }
    : { width: 1440, height: 900 },
});
const p = await b.newPage();
await p.goto("http://localhost:4326/", { waitUntil: "networkidle0" });
await p.evaluate(() => document.fonts.ready);
await p.evaluate(() => { document.documentElement.style.scrollBehavior = "auto"; });
const y = await p.evaluate(() => {
  const el = document.querySelector("#planes");
  return el.getBoundingClientRect().top + scrollY;
});
await p.evaluate((v) => scrollTo(0, v), y);
await new Promise((r) => setTimeout(r, 1400));
const f = `shots-fab/${mobile ? "m-" : ""}fab.png`;
await p.screenshot({ path: f });
console.log(f);
await b.close();
