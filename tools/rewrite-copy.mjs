/**
 * Reescritura de textos con mas gancho. Un solo uso; se conserva por trazabilidad
 * de que se cambio y por que. La fuente de verdad sigue siendo src/data/content.ts.
 */
import { readFileSync, writeFileSync } from "node:fs";

const FILE = "src/data/content.ts";
let t = readFileSync(FILE, "utf8");

const E = [
  // ---------- Hero ----------
  [`es: "Implementación integral de IA para pequeños negocios.",`,
   `es: "Instalamos IA en negocios que ya funcionan.",`],
  [`en: "End-to-end AI implementation for small businesses.",`,
   `en: "We install AI in businesses that already work.",`],
  [`es: "Implementación integral de IA",`, `es: "IA instalada, no explicada",`],
  [`en: "End-to-end AI implementation",`, `en: "AI installed, not explained",`],
  [`{ es: "Trato humano", en: "Human touch" },`,
   `{ es: "Hablas con quien lo monta", en: "You talk to who builds it" },`],

  // ---------- Servicios ----------
  [`es: "Todo lo que tu negocio necesita para operar con IA.",`,
   `es: "Ocho formas de quitarte trabajo de encima.",`],
  [`en: "Everything your business needs to run on AI.",`,
   `en: "Eight ways to take work off your hands.",`],
  [`es: "Un solo equipo para diseñar, conectar y cuidar tu ecosistema digital.",`,
   `es: "No hace falta contratarlas todas. Empiezas por una, y la Radiografía te dice cuál.",`],
  [`en: "A single team to design, connect and care for your digital ecosystem.",`,
   `en: "You don't need all of them. You start with one, and the X-Ray tells you which.",`],

  [`es: "Atiende WhatsApp y tu web, responde al instante, filtra y agenda por ti. Día, noche y festivos.",`,
   `es: "Contesta en segundos a las once de la noche, distingue al curioso del cliente y te llena la agenda mientras duermes.",`],
  [`en: "Handles WhatsApp and your site, replies instantly, qualifies and books for you. Day, night and holidays.",`,
   `en: "Answers in seconds at eleven at night, tells browsers from buyers, and fills your calendar while you sleep.",`],

  [`es: "Tu web rehecha para que capte y convierta, no solo para que se vea bien. Conectada al asistente desde el primer día.",`,
   `es: "La mayoría de webs son un folleto caro que no hace nada. La tuya pide el teléfono, resuelve dudas y cierra la cita.",`],
  [`en: "Your site rebuilt to capture and convert, not just to look good. Wired to the assistant from day one.",`,
   `en: "Most sites are an expensive brochure that does nothing. Yours asks for the phone, answers questions and books the appointment.",`],

  [`es: "Analizamos tu canal, encontramos qué funciona de verdad y montamos la máquina para repetirlo.",`,
   `es: "Miramos qué vídeos te traen clientes y cuáles solo traen visitas. Después montamos la máquina de repetir los primeros.",`],
  [`en: "We analyse your channel, find what actually works and build the machine to repeat it.",`,
   `en: "We look at which videos bring customers and which only bring views. Then we build the machine to repeat the first kind.",`],

  [`es: "Producción continua de vídeo y publicaciones sin que tengas que grabar ni editar tú.",`,
   `es: "Doce vídeos al mes sin que enciendas la cámara ni abras un editor.",`],
  [`en: "Continuous video and post production without you filming or editing.",`,
   `en: "Twelve videos a month without you turning on a camera or opening an editor.",`],

  [`es: "Para creadores y marcas personales: qué está funcionando en tu audiencia y qué te está frenando.",`,
   `es: "Qué parte de tu audiencia compra, qué contenido la aleja y qué sigues haciendo solo por costumbre.",`],
  [`en: "For creators and personal brands: what's working with your audience and what's holding you back.",`,
   `en: "Which part of your audience buys, what content pushes them away, and what you keep doing out of habit.",`],

  [`es: "Tienda online que factura pero se ha quedado plana. Cada mejora se traduce en euros medibles.",`,
   `es: "Vendes, pero llevas dos años en la misma cifra. Buscamos por dónde se cae el carrito y lo tapamos.",`],
  [`en: "An online shop that sells but has flatlined. Every fix translates into measurable euros.",`,
   `en: "You sell, but you have been stuck at the same number for two years. We find where the cart leaks and plug it.",`],

  [`es: "Cuando tu problema no lo resuelve nada de lo anterior, te construimos la herramienta que le falta a tu negocio.",`,
   `es: "Si tu problema no está en esta lista, te construimos el software que le falta a tu negocio.",`],
  [`en: "When nothing above solves your problem, we build the tool your business is missing.",`,
   `en: "If your problem is not on this list, we build the software your business is missing.",`],

  [`es: "Empieza por la Radiografía Digital.",`, `es: "¿No sabes cuál te toca? Para eso está la Radiografía.",`],
  [`en: "Start with the Digital X-Ray.",`, `en: "Not sure which one you need? That is what the X-Ray is for.",`],

  // ---------- Proceso ----------
  [`es: "Simple para ti. Potente por dentro.",`,
   `es: "De la primera llamada a funcionando, en semanas. No en meses.",`],
  [`en: "Simple for you. Powerful under the hood.",`,
   `en: "From first call to up and running in weeks. Not months.",`],
  [`es: "Analizamos tu negocio y detectamos dónde la IA genera más impacto.",`,
   `es: "Miramos tu negocio por dentro: por dónde entran los clientes, dónde se atascan y qué te está robando las horas.",`],
  [`en: "We analyze your business and pinpoint where AI creates the most impact.",`,
   `en: "We look inside your business: how customers come in, where they get stuck, and what is eating your hours.",`],
  [`es: "Montamos tu web, tus automatizaciones y tu asistente. Llave en mano.",`,
   `es: "Lo montamos nosotros entero. Tú das los accesos una vez y no vuelves a tocar nada hasta la formación.",`],
  [`en: "We build your site, your automations and your assistant. Turnkey.",`,
   `en: "We build all of it. You hand over access once and touch nothing until the training session.",`],
  [`es: "Medimos, ajustamos y escalamos lo que funciona, mes a mes.",`,
   `es: "Cada mes tocamos algo y te enseñamos el número. Lo que no mejora, se cambia o se quita.",`],
  [`en: "We measure, tune and scale what works, month after month.",`,
   `en: "Every month we adjust something and show you the number. What does not improve gets changed or removed.",`],

  // ---------- Flujo ----------
  [`es: "Tu negocio atiende incluso cuando tú descansas.",`,
   `es: "El cliente que escribe un domingo a las once no se queda esperando al lunes.",`],
  [`en: "Your business responds even while you rest.",`,
   `en: "The customer who writes at eleven on a Sunday is not left waiting until Monday.",`],
  [`{ es: "Disponible siempre", en: "Always available" }`, `{ es: "No cierras nunca", en: "You never close" }`],
  [`es: "Ningún cliente se queda esperando una respuesta.",`,
   `es: "El que pregunta y no recibe respuesta no vuelve: escribe al siguiente de la lista.",`],
  [`en: "No customer is left waiting for an answer.",`,
   `en: "Whoever asks and gets no answer does not come back. They message the next name on the list.",`],
  [`es: "Conversaciones, citas y ventas en un mismo lugar.",`,
   `es: "Conversaciones, citas y ventas en la misma pantalla. La abres el día 25 y se entiende sola.",`],
  [`en: "Conversations, bookings and sales in one place.",`,
   `en: "Conversations, bookings and sales on one screen. You open it on the 25th and it explains itself.",`],

  // ---------- Casos ----------
  [`es: "Negocios reales, resultados reales.",`,
   `es: "Lo que cambia cuando deja de contestar nadie y empieza a contestar la IA.",`],
  [`en: "Real businesses, real results.",`,
   `en: "What changes when nobody answers and the AI starts answering instead.",`],

  // ---------- Planes ----------
  [`es: "Empieza por donde tu negocio lo necesite.",`,
   `es: "Elige por dónde empezar. Se sube de nivel cuando el anterior ya se paga solo.",`],
  [`en: "Start wherever your business needs it.",`,
   `en: "Pick where to start. You move up when the previous step already pays for itself.",`],
  [`es: "Tres formas de entrar. Todas escalables y a tu medida.",`,
   `es: "Sin permanencia y sin letra pequeña: la mitad al empezar y el resto cuando esté funcionando.",`],
  [`en: "Three ways in. All scalable and tailored to you.",`,
   `en: "No lock-in and no fine print: half upfront and the rest once it is running.",`],

  // ---------- Contacto ----------
  [`es: "¿Listo para que la IA trabaje por tu negocio?",`, `es: "Cuéntanos qué se te está cayendo.",`],
  [`en: "Ready to put AI to work for your business?",`, `en: "Tell us what is falling through the cracks.",`],
  [`es: "Rellena el formulario y elige cómo contactarnos: WhatsApp para respuesta inmediata o email. Te respondemos hoy mismo.",`,
   `es: "La llamada que no coges, el presupuesto que tarda dos días, el WhatsApp que nadie ve hasta la noche. Escríbelo aquí y te decimos si tiene arreglo. Respondemos hoy.",`],
  [`en: "Fill in the form and choose how to reach us: WhatsApp for an instant reply, or email. We respond the same day.",`,
   `en: "The call you miss, the quote that takes two days, the WhatsApp nobody sees until the evening. Write it here and we will tell you if it is fixable. We answer today.",`],

  // ---------- Pie ----------
  [`es: "Hecho con IA, para negocios reales.",`, `es: "Hecho en Jaén, para negocios que ya funcionan.",`],
  [`en: "Built with AI, for real businesses.",`, `en: "Made in Jaen, for businesses that already work.",`],
];

let bad = 0;
for (const [oldStr, newStr] of E) {
  const n = t.split(oldStr).length - 1;
  if (n !== 1) {
    console.log(`  !! aparece ${n} veces: ${oldStr.slice(0, 74)}`);
    bad++;
    continue;
  }
  t = t.replace(oldStr, newStr);
}

writeFileSync(FILE, t);
console.log(`\n${E.length - bad} de ${E.length} textos reescritos${bad ? ` · ${bad} fallaron` : ""}`);
