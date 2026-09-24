/**
 * Sitemap generado, no escrito a mano.
 *
 * Antes era un fichero estatico en public/ y habria que acordarse de tocarlo
 * cada vez que se anade una pagina de sector. Asi se mantiene solo.
 */
import type { APIRoute } from "astro";
import { BRAND } from "../data/content";
import { verticales } from "../data/verticales";
import { combos } from "../data/ciudades";

export const GET: APIRoute = () => {
  const hoy = new Date().toISOString().slice(0, 10);

  const urls = [
    { loc: BRAND.site, priority: "1.0", changefreq: "monthly" },
    ...verticales.map((v) => ({
      loc: `${BRAND.site}${v.slug}`,
      priority: "0.8",
      changefreq: "monthly",
    })),
    // Las de ciudad van con prioridad algo menor que su eje: no es que importen
    // menos, es que le dicen a Google cual es la canonica del tema si duda.
    ...combos.map((c) => ({
      loc: `${BRAND.site}${c.slug}`,
      priority: "0.7",
      changefreq: "monthly",
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${hoy}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
