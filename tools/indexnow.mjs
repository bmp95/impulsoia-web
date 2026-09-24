/**
 * Avisa a Bing (y Yandex) de que las URLs del sitio existen o han cambiado.
 *
 * IndexNow es un ping: se envia la lista de URLs y el buscador viene a
 * rastrearlas en horas, en vez de esperar a que las descubra solo. Google no
 * lo soporta; para Google se usa Search Console.
 *
 * Requisito: el fichero de clave tiene que estar accesible en la raiz del
 * dominio ANTES de enviar nada. Si no lo esta, la API responde 403 y el aviso
 * se descarta entero. Por eso aqui se comprueba primero.
 *
 *   node tools/indexnow.mjs
 */
import { readFileSync, readdirSync } from "node:fs";

const SITE = "https://impulsoia.io";
const HOST = "impulsoia.io";

const key = readFileSync(new URL("../.indexnow-key", import.meta.url), "utf8").trim();

// Las URLs salen del sitemap ya construido, no de una lista a mano: asi no se
// puede olvidar una pagina nueva.
const sitemap = readFileSync(new URL("../dist/sitemap.xml", import.meta.url), "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if (!urls.length) {
  console.error("No hay URLs en dist/sitemap.xml. Construye primero: npm run build");
  process.exit(1);
}

// 1) La clave tiene que estar publicada.
const keyUrl = `${SITE}/${key}.txt`;
process.stdout.write(`Comprobando ${keyUrl} ... `);
let vivo;
try {
  const r = await fetch(keyUrl);
  vivo = r.ok && (await r.text()).trim() === key;
  console.log(r.status);
} catch (e) {
  console.log("sin respuesta");
  vivo = false;
}

if (!vivo) {
  console.error(
    `\nEl fichero de clave no esta publicado todavia.\n` +
      `Sube ${key}.txt a la raiz del dominio y vuelve a lanzar esto.\n` +
      `Sin ese fichero, IndexNow rechaza el aviso entero (403).`,
  );
  process.exit(1);
}

// 2) Aviso.
console.log(`\nEnviando ${urls.length} URLs:`);
urls.forEach((u) => console.log(`  ${u}`));

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key, keyLocation: keyUrl, urlList: urls }),
});

// 200 = aceptado. 202 = aceptado, clave pendiente de validar. Ambos son exito.
console.log(`\nRespuesta: ${res.status} ${res.statusText}`);
if (res.status === 200 || res.status === 202) {
  console.log("Aceptado. Bing rastreara estas URLs en las proximas horas.");
} else {
  console.log(await res.text());
  process.exit(1);
}
