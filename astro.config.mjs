// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://impulsoia.io',
  // Salida 100% estática: dist/ se sube tal cual a Hostinger, sin servidor Node.
  output: 'static',
  // La carpeta de assets se llama `assets`, no `_astro`: algunos gestores de
  // archivos y clientes FTP se saltan en silencio las carpetas que empiezan por
  // guion bajo, y el sitio se sube sin CSS sin que salte ningun error.
  build: {
    inlineStylesheets: 'auto',
    assets: 'assets',
    // `file` genera "pagina.html" en la raiz en vez de "pagina/index.html".
    // Es obligatorio aqui: el despliegue es plano porque el gestor de archivos
    // de Hostinger no sube carpetas. El .htaccess reescribe las URLs sin
    // extension, asi que el visitante ve /ia-para-clinicas-dentales igualmente.
    format: 'file',
  },
  vite: { plugins: [tailwindcss()] },
});
