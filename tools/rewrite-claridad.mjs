/**
 * Segunda pasada de textos: claridad por encima de todo.
 *
 * Tres problemas que arregla:
 *  1. Jerga interna filtrada ("el dia 25" era el dia del informe mensual en el
 *     proceso de entrega; para quien llega a la web no significa nada).
 *  2. Construcciones torpes que obligan a releer.
 *  3. Frases que describian en vez de tocar el dolor concreto del dueno.
 */
import { readFileSync, writeFileSync } from "node:fs";

const FILE = "src/data/content.ts";
let t = readFileSync(FILE, "utf8");

const E = [
  // ---------- JERGA INTERNA ----------
  // "el dia 25" no significa nada para un visitante
  [`es: "Conversaciones, citas y ventas en la misma pantalla. La abres el día 25 y se entiende sola.",`,
   `es: "Conversaciones, citas y ventas en la misma pantalla. Sin dar vueltas por cinco aplicaciones.",`],
  [`en: "Conversations, bookings and sales on one screen. You open it on the 25th and it explains itself.",`,
   `en: "Conversations, bookings and sales on one screen. No hopping between five apps.",`],

  [`es: "El día 25 de cada mes recibes un informe con lo que ha pasado y lo que proponemos.",`,
   `es: "Todos los meses, sin que tengas que pedirlo, un informe con lo que ha pasado y lo que proponemos.",`],
  [`en: "On the 25th of each month you get a report on what happened and what we propose.",`,
   `en: "Every month, without you having to ask, a report on what happened and what we propose.",`],

  // "hasta la formacion": nunca se explica que formacion es
  [`es: "Lo montamos nosotros entero. Tú das los accesos una vez y no vuelves a tocar nada hasta la formación.",`,
   `es: "Lo montamos nosotros entero. Tú nos das los accesos una vez, y lo siguiente que haces es aprender a usarlo.",`],
  [`en: "We build all of it. You hand over access once and touch nothing until the training session.",`,
   `en: "We build all of it. You hand over access once, and the next thing you do is learn to use it.",`],

  // ---------- CONSTRUCCIONES TORPES ----------
  [`es: "De la primera llamada a funcionando, en semanas. No en meses.",`,
   `es: "De la primera llamada a tenerlo funcionando pasan semanas, no meses.",`],
  [`en: "From first call to up and running in weeks. Not months.",`,
   `en: "From the first call to having it running takes weeks, not months.",`],

  [`es: "Lo que cambia cuando deja de contestar nadie y empieza a contestar la IA.",`,
   `es: "Lo que cambia cuando alguien contesta siempre.",`],
  [`en: "What changes when nobody answers and the AI starts answering instead.",`,
   `en: "What changes when someone always answers.",`],

  [`es: "Cada mes tocamos algo y te enseñamos el número. Lo que no mejora, se cambia o se quita.",`,
   `es: "Cada mes ajustamos algo y te enseñamos cuánto ha cambiado. Lo que no mejora, se cambia o se quita.",`],
  [`en: "Every month we adjust something and show you the number. What does not improve gets changed or removed.",`,
   `en: "Every month we tune something and show you how much it moved. What does not improve gets changed or removed.",`],

  [`es: "Menos de 5 € al día. La décima parte de tener a alguien contratado.",`,
   `es: "Menos de 5 € al día: la décima parte de lo que cuesta tener a alguien contratado.",`],
  [`en: "Under €5 a day. A tenth of what one employee costs you.",`,
   `en: "Under €5 a day: a tenth of what having one employee costs you.",`],

  [`es: "Elige por dónde empezar. Se sube de nivel cuando el anterior ya se paga solo.",`,
   `es: "Elige por dónde empezar. Se amplía cuando lo anterior ya se paga solo.",`],
  [`en: "Pick where to start. You move up when the previous step already pays for itself.",`,
   `en: "Pick where to start. You expand once the previous step already pays for itself.",`],

  [`es: "IA instalada, no explicada",`, `es: "IA instalada y funcionando",`],
  [`en: "AI installed, not explained",`, `en: "AI installed and running",`],

  [`es: "¿No sabes cuál te toca? Para eso está la Radiografía.",`,
   `es: "¿No sabes por dónde empezar? Para eso está la Radiografía.",`],
  [`en: "Not sure which one you need? That is what the X-Ray is for.",`,
   `en: "Not sure where to start? That is what the X-Ray is for.",`],

  // "venderte" queda cortado; ademas "cobrarte" es mas concreto
  [`es: "Trabajamos antes de venderte", en: "We work before selling to you"`,
   `es: "Trabajamos antes de cobrarte", en: "We work before charging you"`],

  [`es: "Te decimos qué parte de tu audiencia compra"`, `es: "Te decimos qué parte de tu audiencia compra"`],
  [`es: "Qué parte de tu audiencia compra, qué contenido la aleja y qué sigues haciendo solo por costumbre.",`,
   `es: "Te decimos qué parte de tu audiencia compra, qué contenido la aleja y qué sigues haciendo solo por costumbre.",`],
  [`en: "Which part of your audience buys, what content pushes them away, and what you keep doing out of habit.",`,
   `en: "We tell you which part of your audience buys, what content pushes them away, and what you keep doing out of habit.",`],

  // ---------- DESCRIBIR -> DOLER ----------
  [`es: "Por WhatsApp, tu web o redes, a cualquier hora.",`,
   `es: "Por WhatsApp, tu web o redes. Un martes a las once de la noche, por ejemplo.",`],
  [`en: "Via WhatsApp, your site or social, any time.",`,
   `en: "Via WhatsApp, your site or social. On a Tuesday at eleven at night, say.",`],

  [`es: "Contesta dudas, filtra y entiende qué necesita.",`,
   `es: "Resuelve sus dudas y separa al que va en serio del que solo está mirando.",`],
  [`en: "Answers questions, qualifies and understands the need.",`,
   `en: "Answers their questions and tells the serious ones from the browsers.",`],

  [`es: "Reserva la cita o cierra el pedido automáticamente.",`,
   `es: "Le da hueco en tu agenda o cierra el pedido. Sin preguntarte.",`],
  [`en: "Books the appointment or closes the order automatically.",`,
   `en: "Gives them a slot in your calendar or closes the order. Without asking you.",`],

  [`title: { es: "Recibes el reporte", en: "You get the report" },`,
   `title: { es: "Te enteras por la mañana", en: "You find out in the morning" },`],
  [`es: "Todo queda registrado y medido en tu panel.",`,
   `es: "Abres el móvil y ves lo que pasó mientras dormías.",`],
  [`en: "Everything logged and measured in your dashboard.",`,
   `en: "You open your phone and see what happened while you slept.",`],

  [`es: "El que pregunta y no recibe respuesta no vuelve: escribe al siguiente de la lista.",`,
   `es: "Quien pregunta y no recibe respuesta no espera: escribe al siguiente de la lista.",`],
  [`en: "Whoever asks and gets no answer does not come back. They message the next name on the list.",`,
   `en: "Whoever asks and gets no answer does not wait. They message the next name on the list.",`],

  [`title: { es: "Un solo panel", en: "One dashboard" },`,
   `title: { es: "Un solo sitio", en: "One place" },`],

  // Nota al pie: menos tecnica
  [`es: "Precios de arranque para pyme, sin permanencia. El 50 % se abona al empezar. Las comparaciones usan el coste real para la empresa de un contrato a jornada completa con el salario mínimo de 2026: más de 22.500 € al año.",`,
   `es: "Precios de arranque para pyme, sin permanencia. El 50 % se abona al empezar. Las comparaciones toman como referencia lo que le cuesta a una empresa un empleado a jornada completa con el salario mínimo: más de 22.500 € al año.",`],
  [`en: "Starting prices for small businesses, no lock-in. 50 % is paid upfront. Comparisons use the real employer cost of one full-time minimum-wage contract in 2026: over €22,500 a year.",`,
   `en: "Starting prices for small businesses, no lock-in. 50 % is paid upfront. Comparisons use what one full-time minimum-wage employee costs a company: over €22,500 a year.",`],
];

let bad = 0;
for (const [oldStr, newStr] of E) {
  if (oldStr === newStr) continue;
  const n = t.split(oldStr).length - 1;
  if (n !== 1) {
    console.log(`  !! aparece ${n} veces: ${oldStr.slice(0, 72)}`);
    bad++;
    continue;
  }
  t = t.replace(oldStr, newStr);
}

writeFileSync(FILE, t);
const done = E.filter(([a, b]) => a !== b).length - bad;
console.log(`\n${done} textos reescritos${bad ? ` · ${bad} fallaron` : ""}`);
