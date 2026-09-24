/**
 * Extrae de lucide-static (ISC) sólo los iconos que usa la web y los escribe
 * en src/lib/icons.ts. Así el sitio no arrastra la librería entera: en el build
 * final sólo viajan los paths que se usan.
 *
 *   node tools/gen-icons.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";

// nombre en la web → nombre del icono en Lucide
const MAP = {
  scan: "scan-search", // Radiografía Digital
  headset: "headset", // Recepcionista IA 24/7
  layout: "layout-template", // Rediseño Cinematográfico
  play: "circle-play", // Motor de Canal
  clapper: "clapperboard", // Fábrica de Contenido
  fingerprint: "fingerprint", // Diagnóstico de Marca
  bag: "shopping-bag", // Rescate de Ecommerce
  wrench: "wrench", // Herramienta a Medida
  check: "check",
  arrow: "arrow-right",
  mail: "mail",
  users: "users-round", // «hablas siempre con la misma persona»
};

const inner = (name) => {
  const svg = readFileSync(`node_modules/lucide-static/icons/${name}.svg`, "utf8");
  const body = svg.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>[\s\S]*$/, "");
  return body
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .join("");
};

const entries = Object.entries(MAP).map(([key, lucide]) => {
  const body = inner(lucide);
  return `  ${key}: ${JSON.stringify(body)},`;
});

const out = `// GENERADO por tools/gen-icons.mjs - no editar a mano.
// Iconos de Lucide (https://lucide.dev), licencia ISC.
// Para anadir uno: edita el mapa de tools/gen-icons.mjs y vuelve a ejecutarlo.

export const LUCIDE: Record<string, string> = {
${entries.join("\n")}
};
`;

writeFileSync("src/lib/icons.ts", out);
console.log(`${entries.length} iconos escritos en src/lib/icons.ts`);
