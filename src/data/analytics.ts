/**
 * ANALITICA — configuracion en un solo sitio.
 *
 * Elegida sin cookies a proposito: la politica de privacidad de la web promete
 * que "no usa cookies de rastreo ni herramientas de analitica publicitaria".
 * Todo lo de aqui lo cumple, asi que NO hace falta banner de consentimiento.
 *
 * Para activarla: pon `provider` y pega tu `siteId`. Mientras `provider` sea
 * "none" no se carga ningun script ni se envia nada.
 */

export type AnalyticsProvider = "none" | "umami" | "plausible" | "cloudflare";

export const analytics = {
  /**
   * "none"       — desactivada (por defecto, hasta que pegues tu ID)
   * "umami"      — plan gratuito hasta 10.000 eventos/mes. Recomendada para empezar
   * "plausible"  — 9 €/mes, la mas comoda de leer
   * "cloudflare" — gratis e ilimitada, pero SIN eventos personalizados:
   *                verias visitas pero no cuantos rellenan el formulario
   */
  provider: "umami" as AnalyticsProvider,

  /** Umami: el "Website ID" que da el panel. Plausible: tu dominio. Cloudflare: el token. */
  siteId: "de606f8d-75fb-4a7b-91bf-26fbdfc50c10",

  /**
   * Solo Umami. Si usas su nube, dejalo tal cual.
   * Si te lo autoalojas algun dia, cambia el dominio.
   */
  umamiHost: "https://cloud.umami.is",
};

/** Eventos que se miden. Cambiar un nombre aqui rompe el historico del panel. */
export const EVENTS = {
  ctaRadiografia: "cta-radiografia",
  ctaPlan: "cta-plan",
  ctaFlotante: "cta-flotante",
  formWhatsapp: "form-whatsapp",
  formEmail: "form-email",
  formEmailOk: "form-email-enviado",
  formEmailError: "form-email-error",
  whatsappDirecto: "whatsapp-directo",
  emailDirecto: "email-directo",
  cambioIdioma: "cambio-idioma",
  leeHastaPlanes: "lee-hasta-planes",
} as const;
