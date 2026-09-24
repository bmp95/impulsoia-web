/**
 * Anade a cada paquete una linea de referencia contra el coste de contratar.
 * Fuente del dato: coste empresa de un contrato a jornada completa con el SMI
 * 2026 en Espana, mas de 22.500 EUR al ano (unos 1.900 EUR al mes).
 */
import { readFileSync, writeFileSync } from "node:fs";

const FILE = "src/data/content.ts";
let t = readFileSync(FILE, "utf8");

const E = [
  // Despegue: 149/mes son ~4,97 EUR/dia y menos del 8 % de 1.900 EUR
  [
    `      monthly: { es: "+ 149 €/mes", en: "+ €149/mo" },`,
    `      monthly: { es: "+ 149 €/mes", en: "+ €149/mo" },
      anchor: {
        es: "Menos de 5 € al día. La décima parte de tener a alguien contratado.",
        en: "Under €5 a day. A tenth of what one employee costs you.",
      },`,
  ],
  // Motor: 390/1900 = 20,5 %
  [
    `      monthly: { es: "+ 390 €/mes", en: "+ €390/mo" },`,
    `      monthly: { es: "+ 390 €/mes", en: "+ €390/mo" },
      anchor: {
        es: "Una quinta parte de lo que cuesta contratar a una persona a jornada completa.",
        en: "A fifth of what hiring one full-time person costs you.",
      },`,
  ],
  // Socio IA: el dato desnudo, que la resta la haga el lector
  [
    `      monthly: { es: "+ 1.200 €/mes", en: "+ €1,200/mo" },`,
    `      monthly: { es: "+ 1.200 €/mes", en: "+ €1,200/mo" },
      anchor: {
        es: "Una sola persona a salario mínimo le cuesta a tu empresa cerca de 1.900 € al mes.",
        en: "A single minimum-wage hire costs your company close to €1,900 a month.",
      },`,
  ],
  // Nota al pie de la seccion: de donde sale la cifra
  [
    `    es: "Precios de arranque para pyme, sin permanencia. Para negocios de mayor facturación, presupuesto a medida. El 50 % se abona al empezar.",`,
    `    es: "Precios de arranque para pyme, sin permanencia. El 50 % se abona al empezar. Las comparaciones usan el coste real para la empresa de un contrato a jornada completa con el salario mínimo de 2026: más de 22.500 € al año.",`,
  ],
  [
    `    en: "Starting prices for small businesses, no lock-in. For larger operations, custom quote. 50 % is paid upfront.",`,
    `    en: "Starting prices for small businesses, no lock-in. 50 % is paid upfront. Comparisons use the real employer cost of one full-time minimum-wage contract in 2026: over €22,500 a year.",`,
  ],
];

let bad = 0;
for (const [oldStr, newStr] of E) {
  const n = t.split(oldStr).length - 1;
  if (n !== 1) {
    console.log(`  !! aparece ${n} veces: ${oldStr.slice(0, 70)}`);
    bad++;
    continue;
  }
  t = t.replace(oldStr, newStr);
}

writeFileSync(FILE, t);
console.log(`${E.length - bad} de ${E.length} aplicados${bad ? ` · ${bad} fallaron` : ""}`);
