/**
 * PÁGINAS POR SECTOR.
 *
 * Cada una compite por búsquedas que la home no puede tocar: quien busca
 * "automatizar citas clínica dental" no quiere una agencia genérica, quiere a
 * alguien que hable de su problema. Hasta ahora la única parte de la web que
 * mencionaba "clínica dental" era un testimonio inventado.
 *
 * Para añadir un sector nuevo: copia un bloque, cambia el `slug` y el contenido.
 * La página, su schema y su enlace desde la home se generan solos.
 *
 * Regla: nada de cifras de resultado inventadas. Los números que aparecen aquí
 * son precios propios (reales) o costes de mercado verificables.
 */

export type Vertical = {
  slug: string;
  /** Aparece en el índice de la home */
  nombre: string;
  titulo: string;
  metaTitulo: string;
  metaDescripcion: string;
  /** Frase de entrada: el dolor, en su lenguaje */
  entradilla: string;
  /** Lo que se está cayendo hoy en ese negocio */
  fugas: { titulo: string; texto: string }[];
  /** Qué se instala, con el nombre comercial del servicio */
  solucion: { servicio: string; precio: string; texto: string }[];
  /** El flujo concreto en ese sector */
  flujo: { paso: string; texto: string }[];
  /** Preguntas reales del sector, para FAQ + schema */
  faq: { q: string; a: string }[];
};

export const verticales: Vertical[] = [
  {
    slug: "ia-para-clinicas-dentales",
    nombre: "Clínicas dentales",
    titulo: "IA para clínicas dentales",
    metaTitulo: "IA para clínicas dentales: agenda llena y menos ausencias | Impulso IA",
    metaDescripcion:
      "Asistente que atiende WhatsApp, agenda citas y recuerda las revisiones aunque la clínica esté cerrada. Desde 1.200 €. Diagnóstico gratuito.",
    entradilla:
      "El teléfono de una clínica dental suena cuando nadie puede cogerlo: a las tres de la tarde, en mitad de una endodoncia, o un sábado. Cada una de esas llamadas es un paciente que llama a la siguiente clínica de la lista.",
    fugas: [
      {
        titulo: "Las llamadas que entran mientras estáis en gabinete",
        texto:
          "La persona de recepción no puede estar en dos sitios. Cuando atiende en mostrador, el teléfono queda sin coger, y quien llama para pedir cita rara vez vuelve a intentarlo: busca otra clínica. Es la fuga más silenciosa que tiene una clínica, porque no deja rastro en ningún sitio.",
      },
      {
        titulo: "Las ausencias a la cita",
        texto:
          "Un hueco que se queda vacío no se recupera: esa hora de sillón ya está pagada en personal y en local. La mayoría de ausencias no son plantones, son olvidos — y un recordatorio a tiempo por el canal que la gente sí lee las evita.",
      },
      {
        titulo: "Las revisiones que nadie reclama",
        texto:
          "El paciente que vino hace seis meses y no ha vuelto no está enfadado, está ocupado. Sin un sistema que le escriba, esa revisión no se agenda nunca y el paciente se enfría hasta que aparece con una urgencia.",
      },
      {
        titulo: "Los presupuestos que se quedan pensando",
        texto:
          "Los tratamientos de importe alto casi nunca se aceptan en la primera visita. Si nadie hace seguimiento, la decisión se pospone indefinidamente y acaba tomándose en otra clínica.",
      },
    ],
    solucion: [
      {
        servicio: "Recepcionista IA 24/7",
        precio: "desde 1.200 € + 180 €/mes",
        texto:
          "Atiende WhatsApp y la web a cualquier hora. Responde las dudas habituales (precios orientativos, si tratáis a niños, si trabajáis con su seguro), distingue una urgencia de una consulta rutinaria, y agenda directamente en vuestro hueco libre. Lo que no sabe, lo deja anotado para vosotros en vez de inventárselo.",
      },
      {
        servicio: "Recordatorios y seguimiento",
        precio: "incluido en el paquete Motor",
        texto:
          "Confirmación al agendar, recordatorio la víspera y aviso de revisión a los seis meses. Todo por WhatsApp, que es donde la gente sí lee. El paciente puede reprogramar contestando al mensaje, sin llamar.",
      },
      {
        servicio: "Rediseño Cinematográfico",
        precio: "desde 900 €",
        texto:
          "Si vuestra web es un folleto con un teléfono, cambia. La nueva pide el contacto, resuelve las dudas frecuentes y conecta con el asistente, de forma que una visita a las once de la noche acabe siendo una cita.",
      },
    ],
    flujo: [
      {
        paso: "Un paciente escribe a las 22:40",
        texto: "«Hola, se me ha roto un empaste, ¿tenéis hueco esta semana?»",
      },
      {
        paso: "El asistente responde en segundos",
        texto:
          "Pregunta si hay dolor para saber si es urgencia, comprueba la agenda y ofrece los huecos reales que quedan libres.",
      },
      {
        paso: "Agenda y confirma",
        texto:
          "Reserva la cita, manda la confirmación y programa el recordatorio de la víspera. Sin que nadie de la clínica haga nada.",
      },
      {
        paso: "Por la mañana lo veis hecho",
        texto:
          "La cita está en la agenda y el resumen de la conversación en el panel. Si el asistente no supo algo, os lo ha dejado marcado.",
      },
    ],
    faq: [
      {
        q: "¿Se integra con el software de gestión de la clínica?",
        a: "Depende de cuál uséis. Con los que permiten conexión externa, el asistente lee huecos libres y escribe la cita directamente. Con los que no, trabaja sobre un calendario sincronizado y la cita se vuelca al software en un paso. En la Radiografía Digital gratuita miramos vuestro caso concreto y os decimos cuál de los dos es antes de que contratéis nada.",
      },
      {
        q: "¿La IA puede dar un diagnóstico o decir un precio cerrado?",
        a: "No, y está configurada para no hacerlo. Un asistente que improvise sobre salud es un riesgo para la clínica. Da rangos orientativos si vosotros se lo autorizáis, resuelve dudas administrativas y agenda. Todo lo clínico lo deriva a la consulta.",
      },
      {
        q: "¿Y si el paciente prefiere hablar con una persona?",
        a: "Lo pasa a vosotros en cuanto lo pide, sin dar vueltas. El objetivo no es evitar que habléis con los pacientes: es que no perdáis a los que escriben cuando no podéis contestar.",
      },
      {
        q: "¿Cuánto tarda en estar funcionando?",
        a: "La mayoría de clínicas lo tienen en marcha entre dos y cuatro semanas desde que nos dais los accesos. La parte que más tarda no es la técnica, es afinar las respuestas con vuestros precios, horarios y forma de hablar.",
      },
    ],
  },

  {
    slug: "ia-para-restaurantes",
    nombre: "Restaurantes",
    titulo: "IA para restaurantes",
    metaTitulo: "IA para restaurantes: reservas por WhatsApp sin coger el teléfono | Impulso IA",
    metaDescripcion:
      "Asistente que gestiona reservas por WhatsApp en pleno servicio, responde dudas de carta y alérgenos, y reduce las mesas vacías. Desde 1.200 €.",
    entradilla:
      "El teléfono de un restaurante suena justo cuando peor viene: a las dos y media, con la sala llena. Quien llama para reservar y no obtiene respuesta no insiste — reserva en otro sitio.",
    fugas: [
      {
        titulo: "Las reservas que entran en pleno servicio",
        texto:
          "En las horas punta nadie puede coger el teléfono, y son precisamente las horas en las que más gente llama para reservar. Cada llamada perdida a las dos y media es una mesa vacía dos días después.",
      },
      {
        titulo: "Las preguntas de siempre",
        texto:
          "Si tenéis menú del día, si hay opciones sin gluten, si se puede ir con perro, si hay terraza, dónde aparcar. Son las mismas cinco preguntas todos los días, y cada una interrumpe a alguien que está trabajando.",
      },
      {
        titulo: "Las mesas que no se presentan",
        texto:
          "Una reserva de cuatro que no aparece un sábado por la noche es servicio perdido que ya no se recupera. Un recordatorio el mismo día, con opción de cancelar en un toque, libera la mesa a tiempo para darla a otro.",
      },
      {
        titulo: "Los grupos y eventos que se enfrían",
        texto:
          "Las consultas de comidas de empresa o celebraciones llegan por mensaje y necesitan respuesta rápida con condiciones claras. Si tardáis dos días en contestar, ya han cerrado con otro.",
      },
    ],
    solucion: [
      {
        servicio: "Recepcionista IA 24/7",
        precio: "desde 1.200 € + 180 €/mes",
        texto:
          "Coge las reservas por WhatsApp mientras vosotros estáis en sala. Sabe vuestros horarios, cuántas mesas quedan y qué días cerráis. Responde alérgenos y carta con la información que le deis, y avisa cuando entra una consulta de grupo que queréis llevar vosotros.",
      },
      {
        servicio: "Recordatorios de reserva",
        precio: "incluido en el paquete Motor",
        texto:
          "Confirmación al reservar y recordatorio el mismo día con opción de cancelar contestando. La mesa que se libera con horas de antelación todavía se puede vender.",
      },
      {
        servicio: "Rediseño Cinematográfico",
        precio: "desde 900 €",
        texto:
          "Carta actualizable sin depender de nadie, reserva en dos toques desde el móvil y conexión directa con el asistente. La mayoría de webs de restaurante son un PDF de la carta de hace dos años.",
      },
    ],
    flujo: [
      {
        paso: "Alguien escribe un viernes a las 14:20",
        texto: "«¿Tenéis mesa para 4 esta noche a las 21:30?»",
      },
      {
        paso: "El asistente contesta al momento",
        texto:
          "Comprueba disponibilidad real, ofrece esa hora o la más cercana, y pregunta si hay alergias o si vienen con niños.",
      },
      {
        paso: "Cierra la reserva",
        texto:
          "La anota, confirma por WhatsApp y programa el recordatorio de por la tarde con opción de cancelar en un toque.",
      },
      {
        paso: "Vosotros seguís en sala",
        texto:
          "No habéis cogido el teléfono ni una vez. Al cerrar veis las reservas del día siguiente y cuáles se cancelaron a tiempo.",
      },
    ],
    faq: [
      {
        q: "¿Funciona con el sistema de reservas que ya uso?",
        a: "Con los más comunes sí, leyendo disponibilidad y escribiendo la reserva. Si usáis libreta o una hoja de cálculo, trabajamos sobre un calendario compartido, que para un restaurante de una sala suele ser suficiente. Lo miramos en la Radiografía gratuita antes de que contratéis.",
      },
      {
        q: "¿Puede recomendar platos o dar información de alérgenos?",
        a: "Da exactamente la información que vosotros le carguéis, y nada más. Con alérgenos somos conservadores a propósito: responde lo que consta en vuestra carta y, ante cualquier duda, deriva al restaurante. Un asistente que improvise con alergias es un problema serio.",
      },
      {
        q: "¿Y si prefiero llevar yo las reservas de grupos grandes?",
        a: "Se configura para que a partir del número de comensales que digáis te avise y no cierre nada. Los grupos suelen tener condiciones particulares y tiene sentido llevarlos a mano.",
      },
      {
        q: "¿Sirve si tengo varios locales?",
        a: "Sí, y es donde más se nota. El asistente distingue el local por el número o por la conversación, y cada uno tiene su agenda y sus horarios. Para varios locales, el paquete que suele encajar es Motor o superior.",
      },
    ],
  },

  {
    slug: "ia-para-talleres-mecanicos",
    nombre: "Talleres mecánicos",
    titulo: "IA para talleres mecánicos",
    metaTitulo: "IA para talleres: presupuestos y citas sin salir del foso | Impulso IA",
    metaDescripcion:
      "Asistente que atiende WhatsApp, agenda revisiones y recoge los datos del vehículo mientras tú estás trabajando. Desde 1.200 €. Diagnóstico gratuito.",
    entradilla:
      "En un taller, cada llamada que coges es un rato que dejas el coche a medias. Y cada llamada que no coges es un cliente que se va a probar con el taller de al lado.",
    fugas: [
      {
        titulo: "El teléfono contra las manos ocupadas",
        texto:
          "Nadie puede estar bajo un coche y atendiendo el teléfono a la vez. Cada llamada obliga a parar, limpiarse y perder el hilo — y las que no coges no vuelven a llamar.",
      },
      {
        titulo: "Los presupuestos que tardan días",
        texto:
          "El cliente que pregunta cuánto le cuesta cambiar el embrague quiere una orientación hoy, no el jueves. Cuando el presupuesto tarda dos días, muchos ya han decidido en otro sitio.",
      },
      {
        titulo: "Las revisiones y la ITV que nadie recuerda",
        texto:
          "Sabes cuándo le toca a cada cliente porque tienes el historial. Pero si nadie le escribe, no se acuerda, y esa revisión se hace en la primera cadena que le pilla de paso.",
      },
      {
        titulo: "Los datos del coche que hay que preguntar tres veces",
        texto:
          "Matrícula, marca, modelo, año, qué le pasa. Recopilar eso por teléfono lleva más tiempo que arreglarlo, y muchas veces falta algo cuando el coche ya está en el taller.",
      },
    ],
    solucion: [
      {
        servicio: "Recepcionista IA 24/7",
        precio: "desde 1.200 € + 180 €/mes",
        texto:
          "Atiende por WhatsApp mientras tú trabajas. Pregunta matrícula, modelo y avería, ofrece hueco para traer el coche, y te lo deja todo anotado. Cuando llegas al móvil, tienes la cita hecha y los datos completos.",
      },
      {
        servicio: "Orientación de precios",
        precio: "incluido en el paquete Motor",
        texto:
          "Para las intervenciones frecuentes que tú definas —aceite, frenos, distribución— da un rango orientativo al momento, dejando claro que el presupuesto en firme va tras ver el coche. Eso basta para que el cliente no siga llamando a otros.",
      },
      {
        servicio: "Avisos de revisión e ITV",
        precio: "incluido en el paquete Motor",
        texto:
          "Recordatorio automático cuando toca la revisión o caduca la ITV, con opción de reservar contestando al mensaje. Es la vía más barata que existe de que un cliente vuelva.",
      },
    ],
    flujo: [
      {
        paso: "Un cliente escribe un domingo",
        texto: "«Me hace un ruido raro al frenar, ¿cuánto me puede costar?»",
      },
      {
        paso: "El asistente recoge lo necesario",
        texto:
          "Pregunta matrícula, modelo y desde cuándo pasa. Da el rango orientativo de frenos que tú tienes definido y aclara que el precio cerrado sale tras verlo.",
      },
      {
        paso: "Le da hueco",
        texto: "Ofrece los días que tienes libres y cierra la cita para dejar el coche.",
      },
      {
        paso: "El lunes lo tienes preparado",
        texto:
          "Cita en agenda, datos del coche completos y el problema descrito. Puedes ir pidiendo la pieza antes de que llegue.",
      },
    ],
    faq: [
      {
        q: "¿Puede dar precios cerrados?",
        a: "No, y no conviene. Da rangos orientativos solo de las intervenciones que tú definas, y siempre deja claro que el presupuesto en firme sale después de ver el vehículo. Lo que se busca es que el cliente no cuelgue sin una referencia y se vaya a preguntar a otro sitio.",
      },
      {
        q: "¿Se lleva bien con el programa de taller que uso?",
        a: "Con los que permiten conexión, el asistente escribe la cita y los datos del vehículo directamente. Con los que no, te lo deja en un panel y en el calendario, listo para volcar. En la Radiografía gratuita revisamos cuál usas.",
      },
      {
        q: "Tengo pocos clientes al día, ¿me compensa?",
        a: "Depende de tu ticket medio. Si una intervención media te deja 300 €, recuperar dos clientes al mes que hoy se pierden ya cubre la cuota. Eso te lo decimos con tus números en la Radiografía, no de oído.",
      },
      {
        q: "¿Necesito saber de informática?",
        a: "No. Lo montamos entero nosotros, tú das los accesos una vez y luego usas WhatsApp como siempre. La diferencia es que ahora contesta aunque tú estés bajo un coche.",
      },
    ],
  },

  {
    slug: "ia-para-peluquerias-y-estetica",
    nombre: "Peluquerías y estética",
    titulo: "IA para peluquerías y centros de estética",
    metaTitulo: "IA para peluquerías: citas por WhatsApp y menos ausencias | Impulso IA",
    metaDescripcion:
      "Asistente que agenda citas por WhatsApp mientras estás con un cliente y manda recordatorios que reducen las ausencias. Desde 1.200 €.",
    entradilla:
      "Estás con las manos en un tinte y suena el teléfono. O lo coges y dejas al cliente esperando, o lo dejas sonar y pierdes una cita. Las dos opciones cuestan dinero.",
    fugas: [
      {
        titulo: "Las citas que se piden mientras trabajas",
        texto:
          "Las horas en las que más gente escribe para pedir cita son justo las que tienes el salón lleno. No hay forma de atender bien las dos cosas a la vez.",
      },
      {
        titulo: "Los huecos que deja quien no aparece",
        texto:
          "Una ausencia sin avisar no es solo esa hora perdida: es una hora que podrías haber dado a otro si te hubieras enterado a tiempo. Un recordatorio la víspera, con opción de cambiar la cita contestando, convierte muchas ausencias en reprogramaciones.",
      },
      {
        titulo: "Los clientes que espacian sin querer",
        texto:
          "Quien venía cada cinco semanas y lleva tres meses sin aparecer no se ha ido a otro sitio: se le ha pasado. Un mensaje en el momento adecuado lo devuelve.",
      },
      {
        titulo: "Las preguntas de precio y duración",
        texto:
          "Cuánto cuesta unas mechas, cuánto se tarda, si hace falta reservar con antelación. Contestar eso al momento es la diferencia entre una cita y un «ya te diré».",
      },
    ],
    solucion: [
      {
        servicio: "Recepcionista IA 24/7",
        precio: "desde 1.200 € + 180 €/mes",
        texto:
          "Da cita por WhatsApp mientras tú estás trabajando. Conoce tus servicios, lo que dura cada uno y tus horarios, así que no te llena la agenda de forma imposible. Responde precios y dudas con la información que le des.",
      },
      {
        servicio: "Recordatorios y recuperación",
        precio: "incluido en el paquete Motor",
        texto:
          "Recordatorio la víspera con opción de reprogramar en un toque, y mensaje a quien lleva más tiempo del habitual sin venir. Son las dos automatizaciones que más rápido se pagan solas en un salón.",
      },
      {
        servicio: "Reseñas en el momento justo",
        precio: "incluido en el paquete Motor",
        texto:
          "Pide la reseña justo después de la cita, que es cuando el cliente está contento y con el móvil en la mano. Es lo que más mueve tu posición en Google Maps cuando alguien busca peluquería en tu zona.",
      },
    ],
    flujo: [
      {
        paso: "Una clienta escribe mientras estás con un tinte",
        texto: "«Hola, ¿tienes hueco para mechas esta semana?»",
      },
      {
        paso: "El asistente responde solo",
        texto:
          "Sabe que unas mechas te ocupan dos horas y media, mira tu agenda y ofrece los huecos donde de verdad cabe.",
      },
      {
        paso: "Cierra la cita",
        texto: "La agenda, confirma y programa el recordatorio de la víspera.",
      },
      {
        paso: "Después, pide la reseña",
        texto:
          "Al terminar el servicio le llega el mensaje para valorar en Google. Sin que tengas que pedirlo tú en persona.",
      },
    ],
    faq: [
      {
        q: "¿Sabe cuánto dura cada servicio?",
        a: "Sí, es lo primero que configuramos. Cada servicio tiene su duración y el asistente solo ofrece huecos donde cabe de verdad, así que no te encuentras con unas mechas encajadas en cuarenta minutos.",
      },
      {
        q: "Trabajo con varias personas en el salón, ¿lo distingue?",
        a: "Sí. Cada profesional tiene su agenda y sus servicios, y la clienta puede pedir a alguien concreto. Si le da igual, el asistente ofrece el primer hueco disponible de quien pueda hacerlo.",
      },
      {
        q: "¿Lo de las reseñas no resulta pesado?",
        a: "Se manda una vez, después de la cita, y no se insiste. Pedirla en ese momento es lo que la hace efectiva: quince días después ya no la escribe nadie.",
      },
      {
        q: "¿Puedo seguir dando citas yo por teléfono?",
        a: "Claro. El asistente cubre lo que hoy se te escapa, no sustituye lo que ya funciona. Todo va a la misma agenda, así que no hay riesgo de dar dos veces la misma hora.",
      },
    ],
  },
  {
    slug: "ia-para-gimnasios",
    nombre: "Gimnasios",
    titulo: "IA para gimnasios y centros deportivos",
    metaTitulo: "IA para gimnasios: menos bajas y más altas sin recepción | Impulso IA",
    metaDescripcion:
      "Asistente que informa de tarifas y clases a cualquier hora, gestiona reservas y detecta al socio que ha dejado de venir antes de que se dé de baja. Desde 1.200 €.",
    entradilla:
      "En un gimnasio el problema no es captar: es que la gente deje de venir. Un socio no se da de baja el día que decide irse — se da de baja tres meses después de la última vez que pisó la sala. Ese hueco entre una cosa y otra es donde se pierde el dinero.",
    fugas: [
      {
        titulo: "El socio que se apaga sin avisar",
        texto:
          "Nadie llama para decir que va a dejar de venir. Simplemente deja de aparecer, sigue pagando un par de meses por inercia y luego cancela. Para cuando ves la baja en el sistema, llevaba semanas fuera y ya es tarde para recuperarlo. El momento de escribirle era la tercera semana sin venir, no el día de la baja.",
      },
      {
        titulo: "Las consultas de tarifas fuera de horario",
        texto:
          "Quien está pensando en apuntarse lo mira por la noche o el domingo, que es cuando toma ese tipo de decisiones. Si escribe y no le contestas hasta el lunes, ya ha mirado los otros dos gimnasios de la zona y probablemente se ha apuntado en uno.",
      },
      {
        titulo: "Las clases con lista de espera y plazas vacías a la vez",
        texto:
          "Alguien reserva y no aparece, y la plaza se queda vacía mientras hay gente en espera que habría ido encantada. Sin un aviso que libere la plaza a tiempo, pierdes las dos cosas: ocupación y la satisfacción del que se quedó fuera.",
      },
      {
        titulo: "Los picos de enero y septiembre",
        texto:
          "Son las dos semanas del año en las que entra más gente preguntando, y justo cuando recepción no da abasto. Cada consulta que se queda sin respuesta en esos días vale mucho más que en marzo.",
      },
    ],
    solucion: [
      {
        servicio: "Recepcionista IA 24/7",
        precio: "desde 1.200 € + 180 €/mes",
        texto:
          "Responde tarifas, horarios de clases, si hay matrícula, si se puede congelar la cuota y qué incluye cada bono. A las once de la noche de un domingo, que es cuando la gente decide apuntarse. Lo que requiera papeleo o firma, te lo deja anotado con los datos ya recogidos.",
      },
      {
        servicio: "Recuperación de socios inactivos",
        precio: "incluido en el paquete Motor",
        texto:
          "Detecta a quien lleva más días de lo habitual sin venir y le escribe antes de que la baja sea una decisión tomada. No es un mensaje de oferta: es preguntar qué ha pasado, que es lo que de verdad devuelve gente. Requiere que tu software de gestión permita leer los accesos.",
      },
      {
        servicio: "Reservas y lista de espera de clases",
        precio: "incluido en el paquete Motor",
        texto:
          "Reserva por WhatsApp, recordatorio el día antes y liberación automática de la plaza cuando alguien cancela, avisando al primero de la lista de espera. La plaza que se libera con horas de margen todavía se ocupa.",
      },
    ],
    flujo: [
      {
        paso: "Un socio lleva tres semanas sin venir",
        texto:
          "Nadie en el gimnasio se ha dado cuenta todavía: no hay ninguna alarma que salte por eso.",
      },
      {
        paso: "El asistente lo detecta y escribe",
        texto:
          "«Hola Marta, hace unas semanas que no te vemos por aquí. ¿Va todo bien? Si necesitas cambiar de horario o retomar poco a poco, te echo una mano.»",
      },
      {
        paso: "Ella contesta",
        texto:
          "Dice que cambió de turno en el trabajo y ya no le encaja su clase. El asistente le enseña las que sí encajan con su horario nuevo y le reserva una.",
      },
      {
        paso: "Vuelve, en vez de darse de baja",
        texto:
          "Y tú te enteras de algo que no sabías: tienes socios perdiendo el hábito por un cambio de horario, no por falta de ganas.",
      },
    ],
    faq: [
      {
        q: "¿Funciona con mi software de gestión de socios?",
        a: "Para responder consultas y dar información, no hace falta ninguna integración: funciona desde el primer día. Para detectar socios inactivos sí necesita leer los accesos, y eso depende de si tu programa lo permite. En la Radiografía Digital gratuita miramos cuál usas y te decimos qué parte funcionaría en tu caso antes de que contrates nada.",
      },
      {
        q: "¿Puede dar de alta a un socio o cobrar la cuota?",
        a: "No cobra ni firma nada, a propósito. Recoge los datos, resuelve las dudas y deja al interesado listo para formalizar contigo. El alta implica contrato, datos bancarios y protección de datos: eso se hace en recepción o con tu pasarela, no por chat.",
      },
      {
        q: "Lo de escribir a los que no vienen, ¿no molesta?",
        a: "Depende mucho de cómo esté escrito. Un mensaje que pregunta qué ha pasado se recibe bien; uno que ofrece un descuento a los tres días se recibe como acoso comercial. Se manda una vez, con margen suficiente, y quien pide que no le escribamos más deja de recibirlo. El tono lo afinamos contigo.",
      },
      {
        q: "Tengo un centro pequeño de entrenamiento personal, ¿me sirve?",
        a: "Sí, y a veces más que a un gimnasio grande: cuando entrenas tú mismo a la gente no hay recepción que atienda el móvil mientras estás en una sesión. Con pocos clientes y ticket alto, recuperar a uno o dos al mes ya cubre la cuota de sobra.",
      },
    ],
  },
];
