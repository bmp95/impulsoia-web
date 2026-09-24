import { BRAND, type S } from "../data/content";

/**
 * Marca un elemento como traducible. Solo emite `data-en`: el texto espanol es
 * el propio contenido del elemento, asi que duplicarlo en un `data-es` era
 * escribir cada cadena dos veces en el HTML.
 * Uso:  <span {...ta(texto)}>{texto.es}</span>
 */
export const ta = (v: S) => ({ "data-en": v.en });

/** Enlace de WhatsApp con mensaje ya redactado (funciona aunque falle el JS). */
export const wa = (msg: string) =>
  `https://wa.me/${BRAND.phone}?text=${encodeURIComponent(msg)}`;
