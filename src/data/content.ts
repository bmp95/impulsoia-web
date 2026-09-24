/**
 * TODO EL TEXTO DE LA WEB, EN UN SOLO SITIO.
 *
 * Cada cadena tiene versión española e inglesa: { es: "...", en: "..." }.
 * Para cambiar un texto de la web, cámbialo aquí y vuelve a compilar
 * (`npm run build`). No hace falta tocar ningún otro archivo.
 */

export type S = { es: string; en: string };

export const BRAND = {
  name: "Impulso IA",
  phone: "34629453168",
  phonePretty: "+34 629 453 168",
  email: "contacto@impulsoia.io",
  site: "https://impulsoia.io/",
  /** Clave de Web3Forms para el envío por email del formulario. */
  formKey: "anqx-gkhh-l48x-7swk",
};

export const meta = {
  title: "Impulso IA — No te enseñamos a usar IA. Te la dejamos funcionando",
  description:
    "Instalamos inteligencia artificial en negocios que ya funcionan: Radiografía Digital gratuita, Recepcionista IA 24/7 por WhatsApp, web y automatizaciones. Desde 1.490 €.",
  ogTitle: "Impulso IA — No te enseñamos a usar IA. Te la dejamos funcionando",
  ogDescription:
    "Radiografía Digital gratuita, Recepcionista IA 24/7 y automatizaciones para tu negocio. Respuesta el mismo día.",
  keywords:
    "inteligencia artificial para negocios, automatización WhatsApp, asistente IA, páginas web comerciales, automatizaciones para pymes, IA para clínicas, IA para restaurantes, captación de clientes con IA, España",
};

export const nav: { href: string; label: S }[] = [
  { href: "#servicios", label: { es: "Servicios", en: "Services" } },
  { href: "#inteligencia", label: { es: "Cómo funciona", en: "How it works" } },
  { href: "#cercania", label: { es: "Por qué nosotros", en: "Why us" } },
  { href: "#casos", label: { es: "Casos", en: "Cases" } },
  { href: "#planes", label: { es: "Planes", en: "Plans" } },
  { href: "#faq", label: { es: "FAQ", en: "FAQ" } },
];

export const hero = {
  eyebrow: {
    es: "IA instalada y funcionando",
    en: "AI installed and running",
  },
  // Frase de posicionamiento oficial (01-ESTRATEGIA). No es un eslogan cualquiera:
  // marca la diferencia entre esto y una consultora que da charlas.
  titleA: { es: "No te enseñamos a usar IA.", en: "We don't teach you to use AI." },
  titleB: {
    es: "Te la dejamos funcionando.",
    en: "We leave it running for you.",
  },
  body: {
    es: "Instalamos inteligencia artificial dentro de negocios que ya funcionan, para que trabajes menos horas y vendas más. Nos vamos, y sigue funcionando sola.",
    en: "We install AI inside businesses that already work, so you put in fewer hours and sell more. We leave, and it keeps running on its own.",
  },
  ctaPrimary: { es: "Quiero mi Radiografía Digital", en: "Get my Digital X-Ray" },
  ctaSecondary: { es: "Ver servicios", en: "See services" },
  waMsg: "Hola, quiero mi Radiografía Digital gratuita",
  trust: [
    { es: "Respuesta el mismo día", en: "Same-day reply" },
    { es: "Sin permanencia", en: "No lock-in" },
    { es: "Hablas con quien lo monta", en: "You talk to who builds it" },
  ] as S[],
  chat: {
    assistant: { es: "Asistente IA", en: "AI Assistant" },
    status: { es: "en línea · WhatsApp", en: "online · WhatsApp" },
    messages: [
      {
        from: "user",
        text: { es: "Hola, ¿tienen turno para hoy?", en: "Hi, any availability today?" },
      },
      {
        from: "bot",
        text: {
          es: "¡Hola! Sí, tenemos 17:30 y 19:00 disponibles hoy. ¿Te agendo una?",
          en: "Hi! Yes, we have 5:30 and 7:00 PM open today. Want me to book one?",
        },
      },
      {
        from: "user",
        text: { es: "La de 19:00, gracias.", en: "The 7 PM one, thanks." },
      },
      {
        from: "bot",
        text: {
          es: "Agendado. Te envío la confirmación por aquí.",
          en: "Booked. I'll send you the confirmation here.",
        },
      },
    ],
  },
  marqueeLabel: { es: "Para negocios como", en: "For businesses like" },
  marquee: [
    { es: "Clínicas", en: "Clinics" },
    { es: "Restaurantes", en: "Restaurants" },
    { es: "Inmobiliarias", en: "Real estate" },
    { es: "Talleres", en: "Workshops" },
    { es: "Peluquerías", en: "Salons" },
    { es: "Asesorías", en: "Consultancies" },
    { es: "Comercios", en: "Retail" },
    { es: "Gimnasios", en: "Gyms" },
  ] as S[],
};

export const services = {
  eyebrow: { es: "01 — Servicios", en: "01 — Services" },
  title: {
    es: "Ocho formas de quitarte trabajo de encima.",
    en: "Eight ways to take work off your hands.",
  },
  body: {
    es: "No hace falta contratarlas todas. Empiezas por una, y la Radiografía te dice cuál.",
    en: "You don't need all of them. You start with one, and the X-Ray tells you which.",
  },
  // Nombres COMERCIALES, nunca el nombre interno del kit (regla de marca).
  // Precios de arranque para pyme; son suelos, no techos.
  items: [
    {
      icon: "scan",
      title: { es: "Radiografía Digital", en: "Digital X-Ray" },
      price: { es: "Gratis · desde 0 €", en: "Free · from €0" },
      /** Precio de arranque en euros, para el schema. 0 = gratis. */
      priceFrom: 0,
      body: {
        es: "Analizamos tu negocio y te decimos por dónde se te está escapando el dinero. Sin suavizar nada y sin pedirte nada a cambio.",
        en: "We analyse your business and tell you where the money is leaking. Unvarnished, and with nothing asked in return.",
      },
    },
    {
      icon: "headset",
      title: { es: "Recepcionista IA 24/7", en: "24/7 AI Receptionist" },
      price: { es: "desde 1.200 € + 180 €/mes", en: "from €1,200 + €180/mo" },
      /** Precio de arranque en euros, para el schema. 0 = gratis. */
      priceFrom: 1200,
      body: {
        es: "Contesta en segundos a las once de la noche, distingue al curioso del cliente y te llena la agenda mientras duermes.",
        en: "Answers in seconds at eleven at night, tells browsers from buyers, and fills your calendar while you sleep.",
      },
    },
    {
      icon: "layout",
      title: { es: "Rediseño Cinematográfico", en: "Cinematic Redesign" },
      price: { es: "desde 900 €", en: "from €900" },
      /** Precio de arranque en euros, para el schema. 0 = gratis. */
      priceFrom: 900,
      body: {
        es: "La mayoría de webs son un folleto caro que no hace nada. La tuya pide el teléfono, resuelve dudas y cierra la cita.",
        en: "Most sites are an expensive brochure that does nothing. Yours asks for the phone, answers questions and books the appointment.",
      },
    },
    {
      icon: "play",
      title: { es: "Motor de Canal", en: "Channel Engine" },
      price: { es: "desde 490 € + 400 €/mes", en: "from €490 + €400/mo" },
      /** Precio de arranque en euros, para el schema. 0 = gratis. */
      priceFrom: 490,
      body: {
        es: "Miramos qué vídeos te traen clientes y cuáles solo traen visitas. Después montamos la máquina de repetir los primeros.",
        en: "We look at which videos bring customers and which only bring views. Then we build the machine to repeat the first kind.",
      },
    },
    {
      icon: "clapper",
      title: { es: "Fábrica de Contenido", en: "Content Factory" },
      price: { es: "desde 290 € + 690 €/mes", en: "from €290 + €690/mo" },
      /** Precio de arranque en euros, para el schema. 0 = gratis. */
      priceFrom: 290,
      body: {
        es: "Doce vídeos al mes sin que enciendas la cámara ni abras un editor.",
        en: "Twelve videos a month without you turning on a camera or opening an editor.",
      },
    },
    {
      icon: "fingerprint",
      title: { es: "Diagnóstico de Marca", en: "Brand Diagnosis" },
      price: { es: "desde 390 € + 350 €/mes", en: "from €390 + €350/mo" },
      /** Precio de arranque en euros, para el schema. 0 = gratis. */
      priceFrom: 390,
      body: {
        es: "Te decimos qué parte de tu audiencia compra, qué contenido la aleja y qué sigues haciendo solo por costumbre.",
        en: "We tell you which part of your audience buys, what content pushes them away, and what you keep doing out of habit.",
      },
    },
    {
      icon: "bag",
      title: { es: "Rescate de Ecommerce", en: "Ecommerce Rescue" },
      price: { es: "desde 690 € + 400 €/mes", en: "from €690 + €400/mo" },
      /** Precio de arranque en euros, para el schema. 0 = gratis. */
      priceFrom: 690,
      body: {
        es: "Vendes, pero llevas dos años en la misma cifra. Buscamos por dónde se cae el carrito y lo tapamos.",
        en: "You sell, but you have been stuck at the same number for two years. We find where the cart leaks and plug it.",
      },
    },
    {
      icon: "wrench",
      title: { es: "Herramienta a Medida", en: "Custom Tool" },
      price: { es: "desde 2.500 €", en: "from €2,500" },
      /** Precio de arranque en euros, para el schema. 0 = gratis. */
      priceFrom: 2500,
      body: {
        es: "Si tu problema no está en esta lista, te construimos el software que le falta a tu negocio.",
        en: "If your problem is not on this list, we build the software your business is missing.",
      },
    },
  ],
  ctaTitle: {
    es: "¿No sabes por dónde empezar? Para eso está la Radiografía.",
    en: "Not sure where to start? That is what the X-Ray is for.",
  },
  ctaBody: {
    es: "Analizamos tu negocio y te enseñamos el informe antes de que decidas nada. Si no te sirve, no hay segunda conversación.",
    en: "We analyse your business and show you the report before you decide anything. If it's not useful, there's no second conversation.",
  },
  ctaLink: { es: "Pedir la mía", en: "Request mine" },
  ctaWaMsg: "Hola, quiero mi Radiografía Digital gratuita",
};

export const intelligence = {
  eyebrow: { es: "02 — IA aplicada", en: "02 — Applied AI" },
  titleA: { es: "Cada día sin IA,", en: "Every day without AI," },
  titleB: { es: "lo gana tu competencia.", en: "your competition wins." },
  body: {
    es: "No es el futuro: es lo que tus rivales ya usan hoy para responder al instante, cerrar más y trabajar menos. Cada semana que esperas, la ventaja es suya.",
    en: "It's not the future — it's what your rivals already use today to reply instantly, close more and work less. Every week you wait, the edge is theirs.",
  },
  scrollHint: { es: "Desliza para encenderla", en: "Scroll to power it on" },
  idle: { es: "En reposo", en: "Idle" },
  steps: [
    { at: 0.12, label: { es: "Conecta datos", en: "Connects data" } },
    { at: 0.4, label: { es: "Aprende", en: "Learns" } },
    { at: 0.65, label: { es: "Automatiza", en: "Automates" } },
    { at: 0.9, label: { es: "Decide", en: "Decides" } },
  ],
};

export const process = {
  eyebrow: { es: "03 — Cómo funciona", en: "03 — How it works" },
  title: {
    es: "De la primera llamada a tenerlo funcionando pasan semanas, no meses.",
    en: "From the first call to having it running takes weeks, not months.",
  },
  steps: [
    {
      n: "01",
      title: { es: "Diagnóstico", en: "Diagnosis" },
      body: {
        es: "Miramos tu negocio por dentro: por dónde entran los clientes, dónde se atascan y qué te está robando las horas.",
        en: "We look inside your business: how customers come in, where they get stuck, and what is eating your hours.",
      },
    },
    {
      n: "02",
      title: { es: "Implementación", en: "Implementation" },
      body: {
        es: "Lo montamos nosotros entero. Tú nos das los accesos una vez, y lo siguiente que haces es aprender a usarlo.",
        en: "We build all of it. You hand over access once, and the next thing you do is learn to use it.",
      },
    },
    {
      n: "03",
      title: { es: "Optimización", en: "Optimization" },
      body: {
        es: "Cada mes ajustamos algo y te enseñamos cuánto ha cambiado. Lo que no mejora, se cambia o se quita.",
        en: "Every month we tune something and show you how much it moved. What does not improve gets changed or removed.",
      },
    },
  ],
};

/**
 * La diferenciación real: cercanía y solución a medida.
 *
 * Deliberadamente NO se escribe con adjetivos ("cercanos", "trato humano"), que los
 * pone cualquiera. Cada punto es una regla operativa que ya está documentada en
 * WIKI/impulso-ia-operativa.md, así que es verificable y se puede cumplir.
 */
export const closeness = {
  eyebrow: { es: "04 — Por qué nosotros", en: "04 — Why us" },
  titleA: { es: "Antes de tocar nada,", en: "Before touching anything," },
  titleB: { es: "nos sentamos en tu silla.", en: "we sit in your chair." },
  body: {
    es: "No vendemos un paquete cerrado y lo encajamos a la fuerza. Primero entendemos cómo entra un cliente en tu negocio, quién contesta el teléfono, qué se te cae los viernes por la tarde. La solución sale de ahí, no de una plantilla.",
    en: "We don't sell a closed package and force it to fit. First we learn how a customer reaches your business, who answers the phone, what falls apart on a Friday afternoon. The solution comes from that, not from a template.",
  },
  pillars: [
    {
      icon: "scan",
      title: { es: "Trabajamos antes de cobrarte", en: "We work before charging you" },
      body: {
        es: "Analizamos tu negocio y te enseñamos el informe sin pedirte nada. Si lo que ves no te sirve, ahí acaba. Un diagnóstico así se cobra desde 900 € en el mercado.",
        en: "We analyse your business and show you the report without asking for anything. If it isn't useful, that's where it ends. A diagnosis like this starts at €900 elsewhere.",
      },
    },
    {
      icon: "users",
      title: { es: "Hablas siempre con la misma persona", en: "Always the same person" },
      body: {
        es: "Sin cuentas gestionadas por becarios ni tickets que nadie lee. La persona que analiza tu negocio es la que lo monta y la que te llama.",
        en: "No junior-run accounts, no tickets nobody reads. The person who analyses your business is the one who builds it and the one who calls you.",
      },
    },
    {
      icon: "wrench",
      title: { es: "Nada sale de plantilla", en: "Nothing comes off a template" },
      body: {
        es: "Tu asistente aprende tus horarios, tus precios y tu forma de hablar. Si tu problema no lo resuelve nada del catálogo, te construimos la herramienta que falta.",
        en: "Your assistant learns your hours, your prices and how you speak. If nothing in the catalogue solves your problem, we build the missing tool.",
      },
    },
  ],
  promisesTitle: {
    es: "Lo que nos comprometemos a hacer, por escrito",
    en: "What we commit to, in writing",
  },
  promises: [
    {
      es: "Un mensaje de avance cada 3 días, aunque no haya novedades.",
      en: "A progress message every 3 days, even when there's no news.",
    },
    {
      es: "Medimos cómo está tu negocio antes de tocar nada. Sin «antes» no hay forma de saber si esto sirve.",
      en: "We measure where your business stands before touching anything. Without a “before”, there's no way to know if this works.",
    },
    {
      es: "Dos rondas de cambios incluidas, dicho en la propuesta y no al final.",
      en: "Two rounds of changes included, stated in the proposal and not at the end.",
    },
    {
      es: "Todos los meses, sin que tengas que pedirlo, un informe con lo que ha pasado y lo que proponemos.",
      en: "Every month, without you having to ask, a report on what happened and what we propose.",
    },
    {
      es: "Formación grabada al entregar, para que la vuelvas a ver cuando la necesites.",
      en: "Recorded training on handover, so you can rewatch it whenever you need.",
    },
    {
      es: "Sin permanencia. Si algo no aporta, se ajusta o se retira.",
      en: "No lock-in. If something isn't adding value, we adjust it or remove it.",
    },
  ],
};

export const flow = {
  eyebrow: {
    es: "05 — Cómo mejora tu negocio",
    en: "05 — How it improves your business",
  },
  title: {
    es: "De un mensaje a una venta, sin que muevas un dedo.",
    en: "From a message to a sale, without lifting a finger.",
  },
  nodes: [
    {
      n: "01",
      title: { es: "Un cliente escribe", en: "A customer messages you" },
      body: {
        es: "Por WhatsApp, tu web o redes. Un martes a las once de la noche, por ejemplo.",
        en: "Via WhatsApp, your site or social. On a Tuesday at eleven at night, say.",
      },
    },
    {
      n: "02",
      title: { es: "La IA responde al instante", en: "AI replies instantly" },
      body: {
        es: "Resuelve sus dudas y separa al que va en serio del que solo está mirando.",
        en: "Answers their questions and tells the serious ones from the browsers.",
      },
    },
    {
      n: "03",
      title: { es: "Agenda o vende por ti", en: "Books or sells for you" },
      body: {
        es: "Le da hueco en tu agenda o cierra el pedido. Sin preguntarte.",
        en: "Gives them a slot in your calendar or closes the order. Without asking you.",
      },
    },
    {
      n: "04",
      title: { es: "Te enteras por la mañana", en: "You find out in the morning" },
      body: {
        es: "Abres el móvil y ves lo que pasó mientras dormías.",
        en: "You open your phone and see what happened while you slept.",
      },
    },
  ],
  stats: [
    {
      big: { es: "24/7", en: "24/7" },
      title: { es: "No cierras nunca", en: "You never close" },
      body: {
        es: "El cliente que escribe un domingo a las once no se queda esperando al lunes.",
        en: "The customer who writes at eleven on a Sunday is not left waiting until Monday.",
      },
    },
    {
      big: { es: "segundos", en: "seconds" },
      italic: true,
      title: { es: "Respuesta inmediata", en: "Instant reply" },
      body: {
        es: "Quien pregunta y no recibe respuesta no espera: escribe al siguiente de la lista.",
        en: "Whoever asks and gets no answer does not wait. They message the next name on the list.",
      },
    },
    {
      big: { es: "1", en: "1" },
      title: { es: "Un solo sitio", en: "One place" },
      body: {
        es: "Conversaciones, citas y ventas en la misma pantalla. Sin dar vueltas por cinco aplicaciones.",
        en: "Conversations, bookings and sales on one screen. No hopping between five apps.",
      },
    },
  ],
};

/**
 * OJO: estos testimonios son ILUSTRATIVOS, no clientes reales.
 * Sustitúyelos por casos reales (con permiso) en cuanto los tengas.
 */
export const cases = {
  eyebrow: { es: "06 — Casos de éxito", en: "06 — Success stories" },
  title: {
    es: "Lo que cambia cuando alguien contesta siempre.",
    en: "What changes when someone always answers.",
  },
  items: [
    {
      metric: "+40%",
      metricLabel: { es: "citas agendadas", en: "appointments booked" },
      quote: {
        es: "«El asistente responde y agenda aunque la clínica esté cerrada. Cada mañana llegamos con la agenda llena.»",
        en: "“The assistant replies and books even when the clinic is closed. Every morning we arrive to a full calendar.”",
      },
      who: "Marta G.",
      role: { es: "Clínica dental · Valencia", en: "Dental clinic · Valencia" },
      initials: "MG",
    },
    {
      metric: "0",
      metricLabel: { es: "llamadas perdidas", en: "missed calls" },
      quote: {
        es: "«Las reservas entran solas por WhatsApp, incluso en pleno servicio. Ya no perdemos mesas por no llegar al teléfono.»",
        en: "“Bookings come in on their own via WhatsApp, even mid-service. We no longer lose tables because no one could pick up.”",
      },
      who: "Jordi R.",
      role: { es: "Restaurante · Barcelona", en: "Restaurant · Barcelona" },
      initials: "JR",
    },
    {
      metric: "×3",
      metricLabel: { es: "visitas cualificadas", en: "qualified viewings" },
      quote: {
        es: "«La IA filtra a los curiosos y solo nos pasa compradores reales. Vamos a cada visita sabiendo qué busca el cliente.»",
        en: "“The AI filters out window-shoppers and only passes us real buyers. We walk into every viewing knowing what the client wants.”",
      },
      who: "Lucía M.",
      role: { es: "Inmobiliaria · Madrid", en: "Real estate · Madrid" },
      initials: "LM",
    },
    {
      metric: "−6h",
      metricLabel: { es: "al día en teléfono", en: "a day on the phone" },
      quote: {
        es: "«La IA da presupuestos y cita para revisión sola. He recuperado casi la jornada entera para estar en el taller.»",
        en: "“The AI quotes and books services on its own. I've won back almost a full day to be in the workshop.”",
      },
      who: "Carlos D.",
      role: { es: "Taller mecánico · Sevilla", en: "Auto workshop · Seville" },
      initials: "CD",
    },
    {
      metric: "−70%",
      metricLabel: { es: "ausencias a la cita", en: "no-shows" },
      quote: {
        es: "«Los recordatorios automáticos por WhatsApp cambiaron el salón. Casi nadie falta ya a su cita.»",
        en: "“Automatic WhatsApp reminders changed the salon. Almost no one misses their appointment now.”",
      },
      who: "Paula V.",
      role: { es: "Peluquería · Bilbao", en: "Hair salon · Bilbao" },
      initials: "PV",
    },
    {
      metric: "2×",
      metricLabel: { es: "clientes nuevos", en: "new clients" },
      quote: {
        es: "«Ahora respondemos consultas al momento y hacemos seguimiento solos. El doble de altas sin ampliar el equipo.»",
        en: "“We reply to queries instantly and follow up on our own. Twice the sign-ups without growing the team.”",
      },
      who: "Óscar T.",
      role: { es: "Asesoría · Zaragoza", en: "Consultancy · Zaragoza" },
      initials: "OT",
    },
    {
      metric: "+55%",
      metricLabel: { es: "reservas online", en: "online bookings" },
      quote: {
        es: "«Antes reservaban solo por teléfono y en horario de tienda. Ahora entran reservas a las once de la noche.»",
        en: "“Before, people booked only by phone during shop hours. Now bookings come in at eleven at night.”",
      },
      who: "Nuria B.",
      role: { es: "Centro de estética · Málaga", en: "Beauty clinic · Málaga" },
      initials: "NB",
    },
    {
      metric: "−80%",
      metricLabel: { es: "tiempo en presupuestos", en: "time on quotes" },
      quote: {
        es: "«Los presupuestos salían en dos días y ahora en dos minutos. Cerramos obras que antes se nos escapaban.»",
        en: "“Quotes used to take two days, now they take two minutes. We close jobs that used to slip away.”",
      },
      who: "Iván S.",
      role: { es: "Reformas · Murcia", en: "Home renovations · Murcia" },
      initials: "IS",
    },
    {
      metric: "4,9★",
      metricLabel: { es: "valoración media", en: "average rating" },
      quote: {
        es: "«La IA pide la reseña justo después de la clase, cuando el cliente está contento. Subimos de 4,2 a 4,9.»",
        en: "“The AI asks for the review right after class, while the client is happy. We went from 4.2 to 4.9.”",
      },
      who: "Elena P.",
      role: { es: "Gimnasio · Valladolid", en: "Gym · Valladolid" },
      initials: "EP",
    },
  ],
};

export const plans = {
  eyebrow: { es: "07 — Planes", en: "07 — Plans" },
  title: {
    es: "Elige por dónde empezar. Se amplía cuando lo anterior ya se paga solo.",
    en: "Pick where to start. You expand once the previous step already pays for itself.",
  },
  body: {
    es: "Sin permanencia y sin letra pequeña: la mitad al empezar y el resto cuando esté funcionando.",
    en: "No lock-in and no fine print: half upfront and the rest once it is running.",
  },
  featuredLabel: { es: "El que más se vende", en: "Most chosen" },
  cta: { es: "Empezar por aquí", en: "Start here" },
  note: {
    es: "Precios de arranque para pyme, sin permanencia. El 50 % se abona al empezar. Las comparaciones toman como referencia lo que le cuesta a una empresa un empleado a jornada completa con el salario mínimo: más de 22.500 € al año.",
    en: "Starting prices for small businesses, no lock-in. 50 % is paid upfront. Comparisons use what one full-time minimum-wage employee costs a company: over €22,500 a year.",
  },
  items: [
    {
      name: { es: "Despegue", en: "Take-off" },
      setup: "1.490 €",
      /** Valores numericos para el schema (Offer). */
      setupNum: 1490,
      monthlyNum: 149,
      monthly: { es: "+ 149 €/mes", en: "+ €149/mo" },
      anchor: {
        es: "Menos de 5 € al día: la décima parte de lo que cuesta tener a alguien contratado.",
        en: "Under €5 a day: a tenth of what having one employee costs you.",
      },
      tagline: {
        es: "Para el negocio local que arranca de cero en digital.",
        en: "For the local business starting digital from scratch.",
      },
      featured: false,
      waMsg: "Hola, me interesa el paquete Despegue",
      features: [
        { es: "Radiografía Digital completa", en: "Full Digital X-Ray" },
        { es: "Landing publicada y funcionando", en: "Landing page live and working" },
        { es: "Ficha de Google Business optimizada", en: "Optimised Google Business profile" },
        { es: "Mantenimiento e informe mensual", en: "Maintenance and monthly report" },
      ],
    },
    {
      name: { es: "Motor", en: "Engine" },
      setup: "3.900 €",
      /** Valores numericos para el schema (Offer). */
      setupNum: 3900,
      monthlyNum: 390,
      monthly: { es: "+ 390 €/mes", en: "+ €390/mo" },
      anchor: {
        es: "Una quinta parte de lo que cuesta contratar a una persona a jornada completa.",
        en: "A fifth of what hiring one full-time person costs you.",
      },
      tagline: {
        es: "El sistema completo: web, asistente y medición.",
        en: "The complete system: site, assistant and measurement.",
      },
      featured: true,
      waMsg: "Hola, me interesa el paquete Motor",
      features: [
        { es: "Todo lo del paquete Despegue", en: "Everything in Take-off" },
        { es: "Web completa, no solo una landing", en: "Full website, not just a landing page" },
        { es: "Recepcionista IA 24/7 afinada a tu negocio", en: "24/7 AI Receptionist tuned to your business" },
        { es: "Medición y panel de resultados", en: "Measurement and results dashboard" },
      ],
    },
    {
      name: { es: "Socio IA", en: "AI Partner" },
      setup: "8.900 €",
      /** Valores numericos para el schema (Offer). */
      setupNum: 8900,
      monthlyNum: 1200,
      monthly: { es: "+ 1.200 €/mes", en: "+ €1,200/mo" },
      anchor: {
        es: "Una sola persona a salario mínimo le cuesta a tu empresa cerca de 1.900 € al mes.",
        en: "A single minimum-wage hire costs your company close to €1,900 a month.",
      },
      tagline: {
        es: "Tu departamento de IA, sin contratar a nadie.",
        en: "Your AI department, without hiring anyone.",
      },
      featured: false,
      waMsg: "Hola, me interesa el paquete Socio IA",
      features: [
        { es: "Todo lo del paquete Motor", en: "Everything in Engine" },
        { es: "Fábrica de Contenido: 12 vídeos al mes", en: "Content Factory: 12 videos a month" },
        { es: "Una Herramienta a Medida cada trimestre", en: "One Custom Tool every quarter" },
        { es: "Reunión estratégica mensual", en: "Monthly strategy meeting" },
      ],
    },
  ],
};

export const faq = {
  eyebrow: { es: "08 — Preguntas frecuentes", en: "08 — FAQ" },
  title: { es: "Lo que suelen preguntarnos.", en: "What people usually ask us." },
  items: [
    {
      q: { es: "¿Necesito conocimientos técnicos?", en: "Do I need technical skills?" },
      a: {
        es: "Ninguno. Nos encargamos de todo: diseño, configuración, integraciones y mantenimiento. Tú solo recibes los resultados.",
        en: "None at all. We handle everything: design, setup, integrations and maintenance. You just receive the results.",
      },
    },
    {
      q: { es: "¿Cuánto tarda en estar listo?", en: "How long does it take?" },
      a: {
        es: "Depende del alcance, pero la mayoría de proyectos están en marcha entre 2 y 4 semanas.",
        en: "It depends on the scope, but most projects are up and running within 2 to 4 weeks.",
      },
    },
    {
      q: { es: "¿Funciona con WhatsApp?", en: "Does it work with WhatsApp?" },
      a: {
        es: "Sí, es el canal principal. Tu asistente atiende, responde y agenda directamente por WhatsApp, además de tu web.",
        en: "Yes, it's the main channel. Your assistant serves, replies and books directly on WhatsApp, as well as on your site.",
      },
    },
    {
      q: { es: "¿Hay permanencia?", en: "Is there a lock-in?" },
      a: {
        es: "No. Trabajamos por resultados; si algo no aporta, se ajusta o se retira.",
        en: "No. We work for results; if something isn't adding value, we adjust or remove it.",
      },
    },
    {
      q: { es: "¿Y si ya tengo una web?", en: "What if I already have a website?" },
      a: {
        es: "Perfecto. La integramos con la IA y las automatizaciones, o la renovamos si hace falta.",
        en: "Perfect. We integrate it with AI and automations, or refresh it if needed.",
      },
    },
    {
      q: {
        es: "¿El precio lo incluye todo?",
        en: "Does the price cover everything?",
      },
      a: {
        es: "El trabajo sí. Aparte quedan los servicios externos que consume tu asistente —servidor y saldo de IA, del orden de 10 a 25 € al mes— que van a tu nombre y a tu factura. Lo dejamos por escrito antes de empezar, nunca como sorpresa.",
        en: "The work, yes. Separate from that are the external services your assistant consumes — server and AI credit, roughly €10-25 a month — billed in your name. We put it in writing before starting, never as a surprise.",
      },
    },
    {
      q: { es: "¿Qué pasa con mis datos?", en: "What about my data?" },
      a: {
        es: "Se quedan en tus herramientas y en tu cuenta. Nosotros solo conectamos las piezas y firmamos lo que necesites por escrito.",
        en: "They stay in your tools and your account. We only connect the pieces, and we'll sign whatever you need in writing.",
      },
    },
  ],
};

export const contact = {
  title: {
    es: "Cuéntanos qué se te está cayendo.",
    en: "Tell us what is falling through the cracks.",
  },
  body: {
    es: "La llamada que no coges, el presupuesto que tarda dos días, el WhatsApp que nadie ve hasta la noche. Escríbelo aquí y te decimos si tiene arreglo. Respondemos hoy.",
    en: "The call you miss, the quote that takes two days, the WhatsApp nobody sees until the evening. Write it here and we will tell you if it is fixable. We answer today.",
  },
  waMsg: "Hola, quiero información",
  perks: [
    { es: "Respuesta el mismo día", en: "Same-day reply" },
    { es: "Consulta gratuita", en: "Free consultation" },
  ] as S[],
  form: {
    name: { es: "Nombre", en: "Name" },
    namePlaceholder: { es: "Marta García", en: "Marta García" },
    business: { es: "Negocio", en: "Business" },
    businessPlaceholder: {
      es: "Clínica dental · Valencia",
      en: "Dental clinic · Valencia",
    },
    phone: { es: "Teléfono", en: "Phone" },
    need: { es: "¿Qué necesitas?", en: "What do you need?" },
    needPlaceholder: {
      es: "Quiero automatizar las reservas por WhatsApp…",
      en: "I want to automate WhatsApp bookings…",
    },
    submitWa: { es: "Enviar por WhatsApp", en: "Send via WhatsApp" },
    submitMail: { es: "Enviar por email", en: "Send by email" },
    hint: {
      es: "Elige WhatsApp o email. No compartimos tus datos.",
      en: "Choose WhatsApp or email. We never share your data.",
    },
    sending: { es: "Enviando…", en: "Sending…" },
    sent: {
      es: "¡Recibido! Te respondemos hoy mismo.",
      en: "Got it! We'll reply today.",
    },
    error: {
      es: "No se pudo enviar. Escríbenos por WhatsApp y lo vemos.",
      en: "Couldn't send. Message us on WhatsApp instead.",
    },
    needName: {
      es: "Dinos al menos tu nombre para poder responderte.",
      en: "Tell us your name at least, so we can reply.",
    },
  },
};

export const privacy = {
  title: { es: "Política de privacidad", en: "Privacy policy" },
  updated: { es: "Última actualización: agosto de 2026.", en: "Last updated: August 2026." },
  blocks: [
    {
      h: { es: "Responsable del tratamiento.", en: "Data controller." },
      p: {
        es: `${BRAND.name} (impulsoia.io). Contacto: ${BRAND.email} · ${BRAND.phonePretty}.`,
        en: `${BRAND.name} (impulsoia.io). Contact: ${BRAND.email} · ${BRAND.phonePretty}.`,
      },
    },
    {
      h: { es: "Datos que recogemos.", en: "Data we collect." },
      p: {
        es: "Únicamente los que nos facilitas a través del formulario de contacto o al escribirnos: nombre, negocio, teléfono y tu mensaje. Esta web no usa cookies de rastreo ni herramientas de analítica publicitaria.",
        en: "Only what you provide via the contact form or when you write to us: name, business, phone and your message. This site uses no tracking cookies or advertising analytics.",
      },
    },
    {
      h: { es: "Finalidad y base legal.", en: "Purpose and legal basis." },
      p: {
        es: "Usamos tus datos exclusivamente para responder a tu consulta y, si lo solicitas, preparar una propuesta. La base legal es tu consentimiento al enviar el formulario (art. 6.1.a RGPD).",
        en: "We use your data solely to answer your enquiry and, if you request it, prepare a proposal. The legal basis is your consent when submitting the form (Art. 6.1.a GDPR).",
      },
    },
    {
      h: { es: "Destinatarios.", en: "Recipients." },
      p: {
        es: "Si eliges «Enviar por email», el mensaje se transmite mediante Web3Forms (proveedor de envío de formularios) hasta nuestro buzón. Si eliges WhatsApp, la conversación se rige además por la política de privacidad de WhatsApp. No vendemos ni cedemos tus datos a terceros con fines comerciales.",
        en: "If you choose “Send by email”, the message is delivered via Web3Forms (a form-delivery provider) to our inbox. If you choose WhatsApp, the conversation is also governed by WhatsApp's privacy policy. We never sell or share your data with third parties for commercial purposes.",
      },
    },
    {
      h: { es: "Conservación.", en: "Retention." },
      p: {
        es: "Conservamos tus datos solo el tiempo necesario para gestionar tu consulta o la relación comercial que derive de ella, y después se eliminan.",
        en: "We keep your data only as long as needed to handle your enquiry or the business relationship arising from it, after which it is deleted.",
      },
    },
    {
      h: { es: "Tus derechos.", en: "Your rights." },
      p: {
        es: `Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a ${BRAND.email}. También puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).`,
        en: `You may exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to ${BRAND.email}. You may also lodge a complaint with the Spanish Data Protection Agency (aepd.es).`,
      },
    },
  ],
};

export const footer = {
  tagline: {
    es: "Instalamos IA en negocios que ya funcionan.",
    en: "We install AI in businesses that already work.",
  },
  closing: {
    es: "Hecho en Jaén, para negocios que ya funcionan.",
    en: "Made in Jaen, for businesses that already work.",
  },
};

/**
 * Boton flotante. Aparece al pasar el hero y se esconde al llegar al formulario,
 * para no tapar los campos justo cuando se van a rellenar.
 */
export const floatingCta = {
  label: { es: "Pedir mi Radiografía", en: "Get my X-Ray" },
  short: { es: "Radiografía", en: "X-Ray" },
  aria: {
    es: "Ir al formulario y pedir la Radiografía Digital",
    en: "Go to the form and request the Digital X-Ray",
  },
  prefill: "Hola, quiero mi Radiografía Digital gratuita",
};

/**
 * AVISO LEGAL — exigido por el art. 10 de la LSSI-CE a todo sitio que ofrezca
 * servicios por internet en España.
 *
 * OJO antes de publicar: esto declara públicamente actividad económica. Conviene
 * tener hecha el alta en Hacienda (modelo 036/037) antes de subirlo. El alta es
 * gratuita; publicar esto sin ella deja constancia indexada de la actividad.
 *
 * PENDIENTE al darse de alta: añadir el NIF y el domicilio completo. La ley pide
 * ambos. Se quitaron a proposito hasta tener el alta hecha y el dato correcto.
 */
export const legal = {
  title: { es: "Aviso legal", en: "Legal notice" },
  updated: {
    es: "Última actualización: agosto de 2026.",
    en: "Last updated: August 2026.",
  },
  blocks: [
    {
      h: { es: "Titular del sitio web.", en: "Site owner." },
      p: {
        es: "Bernabé Muñoz, con domicilio en Jaén (España), es el titular de este sitio web y el prestador del servicio, conforme al artículo 10 de la Ley 34/2002 de Servicios de la Sociedad de la Información y de Comercio Electrónico.",
        en: "Bernabé Muñoz, based in Jaén (Spain), owns this website and provides the service, under article 10 of Spanish Law 34/2002 on information society services.",
      },
    },
    {
      h: { es: "Contacto.", en: "Contact." },
      p: {
        es: "Correo electrónico: contacto@impulsoia.io · Teléfono y WhatsApp: +34 629 453 168. Puedes escribir por cualquiera de los dos canales y respondemos el mismo día.",
        en: "Email: contacto@impulsoia.io · Phone and WhatsApp: +34 629 453 168. Write through either channel and we reply the same day.",
      },
    },
    {
      h: { es: "Actividad.", en: "Activity." },
      p: {
        es: "Implantación de soluciones de inteligencia artificial y automatización en pequeños negocios: asistentes de atención por WhatsApp y web, páginas web comerciales, automatización de procesos, producción de contenido y desarrollo de herramientas a medida.",
        en: "Implementation of artificial intelligence and automation in small businesses: WhatsApp and web assistants, commercial websites, process automation, content production and custom tool development.",
      },
    },
    {
      h: { es: "Precios y presupuestos.", en: "Prices and quotes." },
      p: {
        es: "Los precios publicados son precios de arranque orientativos para pequeña empresa, expresados en euros y sin IVA salvo indicación contraria. No constituyen una oferta contractual vinculante: el presupuesto definitivo se acuerda por escrito según el alcance de cada proyecto.",
        en: "Published prices are indicative starting prices for small businesses, in euros and excluding VAT unless stated otherwise. They are not a binding contractual offer: the final quote is agreed in writing according to the scope of each project.",
      },
    },
    {
      h: { es: "Sobre los ejemplos por sector.", en: "About the sector examples." },
      p: {
        es: "Los casos que aparecen en este sitio son ejemplos ilustrativos de lo que estos servicios pueden resolver en cada tipo de negocio. No corresponden a clientes concretos ni a resultados auditados, y no deben interpretarse como una garantía de resultado.",
        en: "The cases shown on this site are illustrative examples of what these services can solve for each type of business. They do not correspond to specific clients or audited results, and should not be read as a guarantee of outcome.",
      },
    },
    {
      h: { es: "Propiedad intelectual.", en: "Intellectual property." },
      p: {
        es: "Los textos, el diseño, el código y los elementos gráficos de este sitio son titularidad de Bernabé Muñoz, salvo los recursos de terceros usados bajo su propia licencia. Queda prohibida su reproducción con fines comerciales sin autorización previa por escrito.",
        en: "The texts, design, code and graphic elements of this site belong to Bernabé Muñoz, except third-party resources used under their own licence. Reproduction for commercial purposes without prior written permission is prohibited.",
      },
    },
    {
      h: { es: "Responsabilidad.", en: "Liability." },
      p: {
        es: "Se procura que la información publicada esté actualizada y sea correcta, pero puede contener errores u omisiones. El titular no se responsabiliza del uso que se haga de esta información ni del contenido de sitios de terceros enlazados desde aquí.",
        en: "We aim to keep the published information current and accurate, but it may contain errors or omissions. The owner is not liable for how this information is used, nor for the content of third-party sites linked from here.",
      },
    },
    {
      h: { es: "Legislación aplicable.", en: "Applicable law." },
      p: {
        es: "Esta relación se rige por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales del domicilio del usuario cuando sea consumidor, conforme a la normativa de consumo vigente.",
        en: "This relationship is governed by Spanish law. For any dispute, the parties submit to the courts of the user's domicile where the user is a consumer, under applicable consumer regulations.",
      },
    },
  ],
};
