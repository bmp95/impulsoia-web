# ⚡ impulsoia.io

**Web comercial construida para cargar en 102 KB, sin cookies y sin un solo servidor detrás.**

*A commercial site built to load in 102 KB, with no cookies and no server behind it.*

![Astro](https://img.shields.io/badge/Astro-5-BC52EE?logo=astro&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Static](https://img.shields.io/badge/output-100%25%20est%C3%A1tico-3DDC84)

[**🇪🇸 Español**](#-español) · [**🇬🇧 English**](#-english)

---

## 🇪🇸 Español

Sitio de **Impulso IA**, consultoría de implantación de IA. Astro + Tailwind 4 con salida
**100 % estática**: compila a HTML/CSS/JS planos. No hay Node en producción, no hay base de
datos, no hay backend que mantener.

El objetivo no era "una web bonita" sino una que **cargue instantáneamente en el móvil de
alguien que la abre desde un enlace de WhatsApp**, porque ese es el canal real por el que
llegan los clientes.

### 🎯 Decisiones técnicas

| Decisión | Por qué |
|---|---|
| 🪶 **102 KB en la primera carga** | El vídeo de fondo no recibe `src` hasta que su sección está a una pantalla de distancia: con vídeo o sin él, la primera visita pesa lo mismo |
| 🔤 **Fuentes locales y recortadas** | Cero llamadas a Google Fonts. Las tipografías decorativas se recortan a los 146 caracteres que realmente usan (56,5 KB → 29,1 KB); la del formulario se deja completa, porque tiene que poder escribir cualquier nombre |
| 🍪 **Sin cookies, sin banner** | La analítica elegida no usa cookies, así que no hace falta consentimiento y la política de privacidad dice la verdad |
| 🎬 **Vídeo reprocesado** | El original traía marca de agua, audio inútil y **un keyframe en 240 fotogramas**. Reencodado a 1 keyframe/segundo para que el scroll pueda controlar `currentTime` sin saltos |
| 🌍 **Bilingüe sin duplicar HTML** | El español es el contenido del elemento y el inglés viaja en `data-en`; antes cada cadena se escribía dos veces |
| ♿ **`prefers-reduced-motion`** | Respetado en todas las animaciones |

### 🛠️ Stack

**Astro 5** · **Tailwind 4** · **TypeScript** · iconos de **Lucide** (solo los usados, extraídos en build) · **Puppeteer** para las capturas de verificación

### 📁 Estructura

```
src/
├── data/content.ts      Todo el texto ES/EN en un único archivo
├── styles/global.css    Sistema de diseño: paleta, tipografías, cristal, aurora
├── lib/i18n.ts          Helpers de idioma
├── scripts/app.ts       Idioma, menú, revelados, animación de red neuronal, formulario
├── components/          Una sección por archivo
└── pages/index.astro    Ensamblado + schema SEO

public/                  Se copia tal cual: fuentes, logo, favicon, robots, sitemap
tools/                   Scripts de verificación (no se despliegan)
```

### ▶️ Comandos

```bash
npm run dev       # servidor local con recarga en http://localhost:4321
npm run build     # compila a dist/ — es lo que se despliega
npm run preview   # sirve dist/ para comprobar el resultado final
```

### 🔍 Herramientas de verificación

Scripts propios que comprueban el resultado en vez de confiar en que "se ve bien":

```bash
node tools/measure.mjs http://localhost:4321/   # peso real con gzip + FCP
node tools/check-fonts.mjs                      # ningún carácter se quedó fuera del subsetting
node tools/check-a11y.mjs                       # accesibilidad
node tools/shoot.mjs                            # captura por sección (--mobile para 390×844)
```

---

## 🇬🇧 English

Commercial site for **Impulso IA**, an AI-implementation consultancy. Astro + Tailwind 4,
**fully static output**: it compiles to plain HTML/CSS/JS. No Node in production, no
database, no backend to maintain.

The goal was never "a pretty website" — it was one that **loads instantly on the phone of
someone opening it from a WhatsApp link**, because that's the channel clients actually
arrive through.

### 🎯 Technical decisions

| Decision | Why |
|---|---|
| 🪶 **102 KB first load** | The background video gets no `src` until its section is one screen away — first visit weighs the same with or without it |
| 🔤 **Local, subsetted fonts** | Zero Google Fonts calls. Display faces are cut down to the 146 characters actually used (56.5 KB → 29.1 KB); the form face is left whole, since it has to render any name someone types |
| 🍪 **No cookies, no banner** | The chosen analytics uses no cookies, so no consent prompt is needed and the privacy policy tells the truth |
| 🎬 **Re-encoded video** | The source had a watermark, a useless audio track and **one keyframe across 240 frames**. Re-encoded to 1 keyframe/second so scroll can drive `currentTime` smoothly |
| 🌍 **Bilingual without duplicated HTML** | Spanish is the element's own content, English rides in `data-en`; previously every string was written twice |
| ♿ **`prefers-reduced-motion`** | Honoured across every animation |

### 🛠️ Stack

**Astro 5** · **Tailwind 4** · **TypeScript** · **Lucide** icons (only the used ones, extracted at build) · **Puppeteer** for verification screenshots

### ▶️ Commands

```bash
npm run dev       # local server with hot reload
npm run build     # compiles to dist/ — this is what ships
npm run preview   # serves dist/ to check the final result
```

---

<sub>Built by [Bernabé Muñoz Peñas](https://www.linkedin.com/in/bernabemunozpenas/) · Astro · Tailwind · TypeScript</sub>
