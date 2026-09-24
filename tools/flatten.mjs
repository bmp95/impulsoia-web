/**
 * Deja el sitio en UNA SOLA carpeta, sin subdirectorios.
 *
 * Por que: el gestor de archivos de Hostinger sube ficheros sueltos pero se salta
 * las carpetas sin avisar. El sitio acababa publicado con el HTML correcto y sin
 * CSS, fuentes ni video. Con todo plano, cualquier metodo de subida funciona.
 *
 *   npm run build && node tools/flatten.mjs
 *
 * Genera `deploy/` a partir de `dist/`. Los nombres con hash se conservan, asi
 * que la cache larga del .htaccess sigue siendo segura.
 */
import { readdirSync, statSync, mkdirSync, copyFileSync, readFileSync, writeFileSync, rmSync, existsSync } from "node:fs";
import { join, basename, extname } from "node:path";

const SRC = "dist";
const OUT = "deploy";

if (!existsSync(SRC)) {
  console.error("No hay dist/. Ejecuta `npm run build` antes.");
  process.exit(1);
}
if (existsSync(OUT)) rmSync(OUT, { recursive: true });
mkdirSync(OUT);

/** Recorre dist/ y devuelve [rutaRelativa, rutaAbsoluta] de cada fichero. */
const walk = (dir, base = "") => {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const rel = base ? `${base}/${name}` : name;
    if (statSync(full).isDirectory()) out.push(...walk(full, rel));
    else out.push([rel, full]);
  }
  return out;
};

const files = walk(SRC);

// Mapa ruta-original -> nombre-plano. Si dos ficheros colisionan al aplanar,
// se antepone la carpeta al nombre para no pisar ninguno.
const taken = new Set();
const map = new Map();

for (const [rel] of files) {
  let flat = basename(rel);
  if (taken.has(flat)) {
    const folder = rel.split("/").slice(0, -1).join("-");
    flat = `${folder}-${flat}`;
  }
  taken.add(flat);
  map.set(rel, flat);
}

// Copiar ya con el nombre plano
for (const [rel, full] of files) copyFileSync(full, join(OUT, map.get(rel)));

// Reescribir las referencias dentro de HTML, CSS y JS
const REWRITABLE = new Set([".html", ".css", ".js", ".xml", ".txt"]);
let rewrites = 0;

for (const [rel] of files) {
  const flat = map.get(rel);
  if (!REWRITABLE.has(extname(flat))) continue;

  const path = join(OUT, flat);
  let text = readFileSync(path, "utf8");
  const before = text;

  for (const [origRel, flatName] of map) {
    if (!origRel.includes("/")) continue; // ya estaba en la raiz
    // Se sustituye tanto "/carpeta/fichero" como "carpeta/fichero"
    text = text.split(`/${origRel}`).join(`/${flatName}`);
    text = text.split(`"${origRel}`).join(`"${flatName}`);
  }

  if (text !== before) {
    writeFileSync(path, text);
    rewrites++;
  }
}

const moved = [...map.entries()].filter(([rel]) => rel.includes("/"));
console.log(`${files.length} ficheros en deploy/, ninguna carpeta`);
console.log(`${rewrites} ficheros con referencias reescritas\n`);
for (const [rel, flat] of moved) console.log(`  ${rel}  ->  ${flat}`);
