/**
 * Apunta el CSS y las precargas a las fuentes recortadas, y borra las que
 * quedan huerfanas. Los subconjuntos ya cubren latin y latin-ext, asi que las
 * variantes -ext de Instrument y Plex Mono desaparecen.
 */
import { readFileSync, writeFileSync, rmSync, existsSync } from "node:fs";

const css = "src/styles/global.css";
let t = readFileSync(css, "utf8");

// Bloque nuevo: una sola cara por familia, sin unicode-range (el subconjunto
// ya define exactamente que caracteres trae).
const NEW = `@font-face {
  font-family: "Instrument Serif";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("/fonts/instrument.woff2") format("woff2");
}
@font-face {
  font-family: "Instrument Serif";
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url("/fonts/instrument-italic.woff2") format("woff2");
}
@font-face {
  font-family: "IBM Plex Mono";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("/fonts/plexmono.woff2") format("woff2");
}
`;

// Se eliminan los cuatro bloques de Instrument y los dos de Plex Mono
const familyBlock = (family, extra = "") =>
  new RegExp(
    `@font-face \\{\\s*font-family: "${family}";[^}]*?${extra}[^}]*?\\}\\s*`,
    "g",
  );

const before = t.length;
t = t.replace(familyBlock("Instrument Serif"), "");
t = t.replace(familyBlock("IBM Plex Mono"), "");

// Se insertan los nuevos justo antes de los de Schibsted, que no se tocan
const anchor = "/* Schibsted Grotesk es variable: un archivo cubre 400–700 */";
if (!t.includes(anchor)) throw new Error("no encuentro el bloque de Schibsted");
t = t.replace(anchor, NEW + "\n" + anchor);

writeFileSync(css, t);
console.log(`CSS: ${before} -> ${t.length} caracteres`);

// Precargas
const page = "src/pages/index.astro";
let p = readFileSync(page, "utf8");
p = p
  .replace('"/fonts/instrument-latin.woff2"', '"/fonts/instrument.woff2"')
  .replace('"/fonts/plexmono-latin.woff2"', '"/fonts/plexmono.woff2"');
writeFileSync(page, p);
console.log("precargas actualizadas");

// Archivos huerfanos
const dead = [
  "instrument-latin.woff2",
  "instrument-latin-ext.woff2",
  "instrument-italic-latin.woff2",
  "instrument-italic-latin-ext.woff2",
  "plexmono-latin.woff2",
  "plexmono-latin-ext.woff2",
];
let freed = 0;
for (const f of dead) {
  const path = `public/fonts/${f}`;
  if (existsSync(path)) {
    freed += (await import("node:fs")).statSync(path).size;
    rmSync(path);
  }
}
console.log(`borrados ${dead.length} archivos huerfanos (${(freed / 1024).toFixed(1)} KB en disco)`);
