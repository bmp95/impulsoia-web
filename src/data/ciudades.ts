/**
 * PÁGINAS SECTOR × CIUDAD.
 *
 * Las páginas de sector compiten a nivel nacional contra agencias con años de
 * autoridad. Estas no: atacan "IA para clínicas dentales en Granada", donde el
 * volumen es menor pero la competencia es casi nula y quien busca ya tiene el
 * problema y la ciudad decididos.
 *
 * Arquitectura de hub y radios: la página de sector es el eje y enlaza a sus
 * ciudades; cada ciudad enlaza de vuelta al eje y a las otras ciudades del mismo
 * sector.
 *
 * REGLA DURA, y es la que hace que esto funcione en vez de que Google lo entierre
 * como contenido pobre: cada cruce sector × ciudad tiene texto propio escrito a
 * mano. Nada de plantillas con la ciudad sustituida. Si en algún momento no hay
 * nada verdadero y distinto que decir de un cruce, ese cruce NO se crea.
 *
 * Y como en el resto del sitio: ninguna cifra de mercado inventada. Lo que se
 * afirma de cada ciudad es carácter conocido (universidad, turismo, temporada),
 * no estadísticas que nadie puede verificar.
 */

import { verticales } from "./verticales";

export type Ciudad = {
  slug: string;
  nombre: string;
  /** Para el schema y las migas */
  provincia: string;
  /** Cómo es el tejido comercial de la ciudad. Propio de cada una. */
  contexto: string;
  /** Cómo se trabaja allí desde Jaén. Propio de cada una. */
  logistica: string;
  /** Dudas que solo tienen sentido en esa ciudad */
  faq: { q: string; a: string }[];
};

export const ciudades: Ciudad[] = [
  {
    slug: "jaen",
    nombre: "Jaén",
    provincia: "Jaén",
    contexto:
      "Jaén es una ciudad donde casi todo el mundo se conoce, y eso tiene dos caras. La buena: el boca a boca funciona como en pocos sitios, y un cliente contento te trae tres. La mala: cuando alguien no te encuentra a la primera, se va al de siempre y no vuelve a probar. El negocio local de aquí compite con la costumbre, no con la publicidad, y la costumbre se rompe cuando no coges el teléfono.",
    logistica:
      "Estamos aquí. Nos pasamos por el negocio las veces que haga falta, sin cobrar desplazamiento y sin agendarlo con dos semanas de antelación. Es la ventaja de trabajar con alguien de la ciudad en lugar de con una agencia que te atiende por videollamada desde Madrid.",
    faq: [
      {
        q: "¿Sois de Jaén de verdad o solo lo ponéis en la web?",
        a: "De Jaén. Si quieres, quedamos y lo hablamos en persona antes de que contrates nada: la Radiografía Digital es gratuita y se puede hacer sentados en tu negocio.",
      },
      {
        q: "Mi negocio está en un pueblo de la provincia, ¿también trabajáis ahí?",
        a: "Sí. La provincia entera entra en las mismas condiciones que la capital, desplazamiento incluido. Linares, Úbeda, Andújar, Martos o donde sea.",
      },
    ],
  },
  {
    slug: "granada",
    nombre: "Granada",
    provincia: "Granada",
    contexto:
      "Granada tiene dos poblaciones superpuestas que se comportan de forma distinta: la que vive allí todo el año y la que rota cada curso o cada fin de semana. La universidad renueva miles de personas cada septiembre, y el turismo llena y vacía el centro por temporadas. Para un negocio local eso significa que una parte importante de tus clientes no te conoce de nada: te busca en el móvil, compara tres opciones y escribe al primero que responde.",
    logistica:
      "Granada está a poco más de una hora por autovía desde Jaén. Las visitas presenciales que hagan falta se hacen, sin recargo por desplazamiento. El seguimiento posterior es en remoto, igual que con un cliente de Jaén: una vez instalado el sistema, no hay nada que requiera estar delante.",
    faq: [
      {
        q: "¿Trabajáis presencialmente en Granada o todo en remoto?",
        a: "Presencial cuando aporta: la primera visita y la puesta en marcha. El resto es remoto porque es más ágil para los dos, no por ahorrarnos el viaje. Si prefieres verme en persona más veces, se hace.",
      },
      {
        q: "Mi clientela es medio internacional, ¿el asistente responde en inglés?",
        a: "Sí, y es una de las razones de peso para instalarlo en Granada. Detecta el idioma del mensaje y contesta en él, sin que tengas que tener a nadie de guardia que hable inglés.",
      },
    ],
  },
  {
    slug: "cordoba",
    nombre: "Córdoba",
    provincia: "Córdoba",
    contexto:
      "Córdoba concentra una parte enorme de su actividad en unas pocas semanas del año. Mayo lo cambia todo: patios, cruces, feria. Y el verano hace lo contrario, con un calor que vacía la calle a ciertas horas. Un negocio local cordobés no tiene un problema de volumen medio, tiene un problema de picos: semanas en las que no da abasto para atender lo que entra, y semanas en las que lo poco que entra hay que exprimirlo.",
    logistica:
      "Córdoba está a algo más de una hora desde Jaén. Las visitas presenciales necesarias van incluidas. Y algo que allí importa más que en otros sitios: la puesta en marcha se planifica para que caiga fuera de temporada alta, porque montar un sistema nuevo en plena feria es garantía de que nadie tenga tiempo de usarlo.",
    faq: [
      {
        q: "En mayo no tengo tiempo ni de respirar. ¿Cuándo lo montamos?",
        a: "Precisamente por eso: fuera de esas semanas, para que llegue mayo con el sistema ya rodado. Lo peor que se puede hacer es instalar algo nuevo cuando no tienes ni un minuto para mirarlo.",
      },
      {
        q: "¿Sirve para gestionar los picos de temporada?",
        a: "Es donde más se nota. El asistente no se satura: atiende igual de rápido veinte conversaciones que dos, y a las tres de la mañana igual que a mediodía. El pico deja de ser un problema de personas.",
      },
    ],
  },
  {
    slug: "malaga",
    nombre: "Málaga",
    provincia: "Málaga",
    contexto:
      "Málaga es el mercado más internacional de Andalucía y el que más rápido se ha movido en lo digital. Tiene residentes extranjeros todo el año, no solo turistas de temporada, y un tejido de empresas tecnológicas que ha subido el listón de lo que la gente espera al escribir a un negocio. Allí, contestar un WhatsApp al día siguiente no se percibe como que estabas ocupado: se percibe como que no trabajas.",
    logistica:
      "Málaga está a unas dos horas desde Jaén. La primera visita y la entrega se hacen allí si las quieres presenciales; el resto es remoto. Te lo digo claro para que decidas: si lo que buscas es alguien que se pase por tu negocio cada semana, Málaga no es donde mejor te puedo servir. Si lo que buscas es que el sistema funcione, la distancia da igual.",
    faq: [
      {
        q: "Mis clientes son extranjeros en su mayoría. ¿Esto me vale?",
        a: "Es de los casos donde más rinde. El asistente responde en el idioma en el que le escriben, así que dejas de perder al cliente inglés o alemán que consulta un domingo y no tiene a quién preguntar.",
      },
      {
        q: "¿No me sale mejor una agencia de Málaga, que hay muchas?",
        a: "Depende de qué compares. Allí hay agencias excelentes y bastante más caras, y hay quien te vende formación en vez de dejarte el sistema montado. Pide la Radiografía Digital, que es gratis, y compárala con lo que te ofrezcan ellos. Si te convence más lo suyo, adelante.",
      },
    ],
  },
];

/**
 * El ángulo propio de cada cruce. Es la parte que hace única a cada página, y
 * está escrita una por una a mano, a propósito.
 */
export type Angulo = {
  titulo: string;
  texto: string;
  /**
   * Por donde se empieza en ESTE cruce. Es texto propio de cada combinacion y
   * existe por dos razones: al lector le dice que se instala primero en su
   * caso, y a la pagina le sube la proporcion de contenido no repetido, que es
   * lo que separa una pagina local util de una plantilla con la ciudad
   * sustituida.
   */
  prioridad: string;
  faq: { q: string; a: string };
};

export const angulos: Record<string, Record<string, Angulo>> = {
  "ia-para-clinicas-dentales": {
    jaen: {
      titulo: "En Jaén, el paciente que no te coge el teléfono se va al de la esquina",
      texto:
        "Las clínicas de Jaén están concentradas en muy pocas calles, y el paciente que llama y no obtiene respuesta tiene la siguiente a dos minutos andando. No hay fidelidad que aguante eso cuando a alguien le duele una muela un viernes por la tarde. A la vez, es una ciudad donde el paciente satisfecho recomienda de verdad, así que cada primera visita que se pierde por un teléfono sin coger no es una visita: es la familia entera que esa persona habría traído.",
      prioridad:
        "Aquí se empieza por el Recepcionista IA, no por los recordatorios. El motivo es que en Jaén la fuga gorda es la llamada perdida en horario de gabinete: hasta que eso no se tapa, afinar la agenda es ordenar una habitación con la ventana abierta. Los recordatorios entran después, cuando ya no se cae ninguna primera visita.",
      faq: {
        q: "Tengo la clínica llena, ¿para qué quiero esto?",
        a: "Entonces no lo necesitas para captar, lo necesitas para no perder. Una agenda llena con un 10 % de ausencias tiene el mismo hueco que una agenda al 90 %, solo que el sillón y el personal ya están pagados. Ahí es donde se recupera el gasto.",
      },
    },
    granada: {
      titulo: "Miles de pacientes que no son de Granada y te buscan en el móvil",
      texto:
        "El estudiante que llega en septiembre no tiene dentista en Granada, y cuando le duele una muela busca en el móvil y escribe al primero que le contesta. Lo mismo pasa con quien viene por trabajo o de paso. Esa demanda no llega por recomendación de nadie: llega por búsqueda y se decide por velocidad de respuesta. Una clínica que contesta en segundos a cualquier hora se lleva a un paciente que, además, se queda los años que dure la carrera.",
      prioridad:
        "En Granada el orden se invierte respecto a lo habitual: primero la captación por escrito, porque el paciente nuevo llega buscando y decide en minutos. El Recepcionista IA con respuesta inmediata y agenda conectada es lo que convierte esa búsqueda en cita. El seguimiento de revisiones se monta después, cuando ya hay una base de pacientes que retener.",
      faq: {
        q: "¿Sirve para pacientes que solo van a estar unos años en la ciudad?",
        a: "Sirve especialmente. Son pacientes que entran por búsqueda y no por recomendación, así que se ganan o se pierden en los primeros minutos de contacto. Y suelen traer a compañeros de piso.",
      },
    },
    cordoba: {
      titulo: "La agenda que se descuadra cuando la ciudad se llena",
      texto:
        "En las semanas de mayo, una clínica dental de Córdoba tiene el mismo problema que un restaurante: el personal está desbordado y el teléfono suena igual. Las ausencias también se disparan, porque el paciente que tenía revisión a las once ese día tiene otras cosas en la cabeza. Un recordatorio automático por WhatsApp la tarde antes evita la mayoría de esos huecos sin que nadie de la clínica tenga que acordarse de nada.",
      prioridad:
        "En Córdoba lo primero son los recordatorios, porque el problema no es que no entren pacientes sino que faltan a la cita en las semanas de más jaleo. Un aviso automático la tarde anterior recupera huecos desde el primer mes. El Recepcionista IA se instala a la vez, pero es el recordatorio lo que da el resultado visible antes.",
      faq: {
        q: "¿Los recordatorios se pueden ajustar por temporada?",
        a: "Sí. Se configura cuándo y por qué canal se avisa, y se puede reforzar en las fechas donde sabes que la gente se despista más.",
      },
    },
    malaga: {
      titulo: "El paciente internacional que consulta en inglés y en domingo",
      texto:
        "Málaga tiene residentes extranjeros que necesitan dentista igual que cualquiera, y pacientes que comparan precios antes de venir. Los dos comparten algo: escriben en su idioma y fuera del horario español. Una clínica que solo atiende en castellano y de nueve a dos está renunciando a esa demanda sin enterarse, porque esas consultas no llegan a registrarse en ningún sitio: se van a la clínica que sí respondió.",
      prioridad:
        "En Málaga el punto de partida es el Recepcionista IA configurado en varios idiomas desde el primer día. No es un extra: si atiende solo en castellano, buena parte de las consultas que llegan de noche o en fin de semana se pierden igual. Con eso resuelto, el resto de piezas se añaden sin prisa.",
      faq: {
        q: "¿El asistente puede dar precios a un paciente extranjero?",
        a: "Da la información que tú decidas que dé, en el idioma en el que le escriban. Lo habitual es que informe de rangos y derive la valoración concreta a la primera visita, que es como se hace bien.",
      },
    },
  },

  "ia-para-restaurantes": {
    jaen: {
      titulo: "Las comidas de grupo se cierran por teléfono, y el teléfono está en la barra",
      texto:
        "En Jaén una parte grande de la facturación de un restaurante son grupos: comidas de empresa, familias, celebraciones. Y esas reservas se gestionan por llamada, justo en las horas en las que la sala está a tope y nadie puede atender bien. El que llama para reservar una mesa de veinte y le contestan con prisa, o no le contestan, prueba en el siguiente. Es el tipo de cliente que más deja y el que peor se atiende.",
      prioridad:
        "En Jaén se empieza por la gestión de grupos dentro del Recepcionista IA, porque es donde está el dinero que hoy se escapa: la reserva de veinte personas que llama en plena comida. Configurar bien esas preguntas (número, franja, menú, alergias) da más retorno que cualquier otra pieza. Los recordatorios de reserva vienen justo después.",
      faq: {
        q: "¿Puede gestionar reservas de grupo, no solo mesas de dos?",
        a: "Sí, y es lo que más rentabiliza. Recoge número de personas, fecha, franja y lo que necesites preguntar de menús o alergias, y te lo deja ordenado para que confirmes tú.",
      },
    },
    granada: {
      titulo: "Alta rotación, turismo y consultas que llegan en varios idiomas",
      texto:
        "Un restaurante de Granada recibe consultas de gente que está a doscientos metros mirando el móvil y decidiendo dónde entrar. Ahí no hay margen: o contestas en el momento o comen en otro sitio. Y buena parte de esas consultas llegan en inglés. Sumado a la rotación del centro, tienes un flujo constante de decisiones que se ganan o se pierden en menos de un minuto.",
      prioridad:
        "Aquí lo primero es la respuesta instantánea y en varios idiomas, porque compites contra el local de al lado con alguien mirando el móvil en la puerta. Cada minuto de retraso es una mesa perdida. Una vez que ninguna consulta se queda sin contestar, se trabajan los recordatorios para bajar las reservas que no aparecen.",
      faq: {
        q: "¿Contesta en inglés a un turista que pregunta si hay mesa ahora?",
        a: "Sí, en el idioma en el que escriba, y al instante. Para un local de centro esa inmediatez es literalmente la diferencia entre que entren o pasen de largo.",
      },
    },
    cordoba: {
      titulo: "Mayo lo llena todo y el resto del año hay que trabajárselo",
      texto:
        "Pocos negocios tienen una estacionalidad tan marcada como la hostelería cordobesa. En patios y feria no das abasto y pierdes reservas por no poder atender el teléfono; en pleno agosto, con la ciudad a cuarenta grados, cada reserva cuenta el doble. Es un negocio de dos velocidades, y la mayoría de sistemas de reserva están pensados para una sola.",
      prioridad:
        "En Córdoba conviene montarlo en temporada baja y empezar por los recordatorios de reserva, que es lo que sostiene los meses flojos y evita huecos en los llenos. Cuando llega mayo, el sistema ya está rodado y lo que aporta es que el teléfono deje de ser un cuello de botella justo cuando más suena.",
      faq: {
        q: "¿Y fuera de temporada, cuando hay menos movimiento?",
        a: "Ahí el trabajo es otro: recuperar al cliente que ya vino. El sistema guarda quién comió contigo y permite escribirle cuando lanzas algo, en vez de esperar a que se acuerde solo.",
      },
    },
    malaga: {
      titulo: "Clientes que reservan a horas que aquí son de madrugada",
      texto:
        "Málaga recibe reservas de gente que todavía no ha llegado a España, planificando desde su país y a su hora. Esa consulta entra de madrugada y, si nadie responde hasta las once de la mañana siguiente, ya han reservado en otro sitio. No es solo un problema de idioma: es un problema de huso horario que ninguna plantilla puede cubrir sin que salga carísimo.",
      prioridad:
        "En Málaga la prioridad es cubrir la franja que hoy no cubre nadie: las reservas que entran de madrugada desde otros países. Eso es Recepcionista IA con idiomas y agenda conectada, y se nota en la primera semana. Los recordatorios se añaden luego, sobre todo para reservas hechas con mucha antelación, que son las que más se caen.",
      faq: {
        q: "¿Puede tomar reservas de madrugada sin que haya nadie?",
        a: "Es exactamente para lo que está. Responde, recoge los datos y te lo deja registrado para cuando abras. El cliente recibe respuesta al momento y tú te enteras por la mañana.",
      },
    },
  },

  "ia-para-talleres-mecanicos": {
    jaen: {
      titulo: "Campaña de aceituna: el vehículo parado cuesta más que la reparación",
      texto:
        "En la provincia de Jaén, buena parte de los vehículos que entran en un taller son herramienta de trabajo, y durante la campaña un día parado no es una molestia, es dinero. Ese cliente llama con urgencia y necesita saber ya si puedes cogerlo y para cuándo. Si le sale el buzón porque estáis los dos debajo de un coche, llama al siguiente taller. En temporada, ese cliente perdido no vuelve hasta el año que viene.",
      prioridad:
        "En campaña lo primero es que nadie se quede sin respuesta, así que se arranca con el Recepcionista IA recogiendo el recado completo: vehículo, avería y urgencia. Con eso decides tú el orden de entrada en vez de perder a quien no pudo esperar. Los avisos de revisión e ITV se montan después, fuera de temporada.",
      faq: {
        q: "En campaña no tengo tiempo ni de coger el teléfono. ¿Esto lo arregla?",
        a: "Contesta él y te deja el recado ordenado: quién es, qué vehículo, qué le pasa y qué urgencia tiene. Tú decides a quién llamas primero, en vez de perder a quien no pudo esperar.",
      },
    },
    granada: {
      titulo: "El cliente urbano que quiere saber el precio antes de acercarse",
      texto:
        "En una ciudad como Granada, mover el coche hasta el taller ya es un engorro: aparcar, dejarlo, volver. Por eso el cliente pregunta antes por WhatsApp cuánto le va a costar y cuánto va a tardar, y compara dos o tres talleres sin moverse del sofá. El que responde con un rango claro y una cita concreta se lleva el trabajo, aunque no sea el más barato.",
      prioridad:
        "Aquí la pieza que más cambia las cosas es la orientación de precios, porque el cliente urbano compara antes de mover el coche. Dar un rango claro al momento gana el trabajo. Se configura con tus horquillas y tus condiciones, sin comprometer presupuesto cerrado, y el Recepcionista IA se encarga de que la conversación acabe en cita.",
      faq: {
        q: "No quiero dar precios cerrados sin ver el coche.",
        a: "Ni debes. El asistente da rangos orientativos si tú se lo indicas, o directamente agenda una revisión sin comprometer precio. Lo que no hace es dejar el mensaje sin contestar, que es lo que hoy te cuesta el cliente.",
      },
    },
    cordoba: {
      titulo: "Flotas y polígono: clientes que necesitan respuesta, no charla",
      texto:
        "Córdoba tiene un tejido de empresas con vehículos de trabajo cuyo responsable de flota no quiere conversación: quiere saber cuándo puedes meterlo y cuándo lo tiene fuera. Ese interlocutor gestiona varios talleres a la vez y se queda con el que le da información concreta rápido. Es un cliente recurrente y de ticket alto, y se gana en la velocidad de la primera respuesta.",
      prioridad:
        "Con clientes de flota, lo primero es el registro por matrícula y el historial de entradas: que cuando escriba el responsable ya sepas de qué vehículo te habla. Esa memoria es lo que te diferencia del taller que le pide los datos cada vez. Los avisos de revisión periódica encajan justo encima y fidelizan al cliente de empresa.",
      faq: {
        q: "¿Sirve para gestionar varios vehículos de una misma empresa?",
        a: "Sí. Registra cada vehículo con su matrícula y su historial de entradas, así que cuando el responsable escribe, ya sabes de qué coche te habla sin buscarlo en una libreta.",
      },
    },
    malaga: {
      titulo: "Extranjeros, coches de alquiler y averías lejos de casa",
      texto:
        "Un taller de Málaga atiende a mucha gente que no domina el castellano y que además tiene prisa porque está de paso o de vacaciones. Explicar una avería en un idioma que no es el tuyo, por teléfono y con ruido de taller de fondo, es una fuente de malentendidos y de trabajos que salen mal presupuestados. Por escrito y en su idioma, el problema desaparece.",
      prioridad:
        "En Málaga se arranca por la atención escrita en varios idiomas, y no por comodidad: es lo que evita presupuestos mal entendidos con un cliente que no domina el castellano. Además queda registro de lo acordado. Con eso resuelto, la orientación de precios y los avisos de revisión se añaden sobre una base que ya no genera malentendidos.",
      faq: {
        q: "¿Cómo me entiendo con un cliente que no habla español?",
        a: "Él escribe en el suyo y a ti te llega en castellano, y al revés. Además queda por escrito lo que se dijo, que para presupuestos y reclamaciones vale más que una llamada.",
      },
    },
  },

  "ia-para-peluquerias-y-estetica": {
    jaen: {
      titulo: "Ya lo llevas por WhatsApp, pero a mano y a deshora",
      texto:
        "Casi todas las peluquerías de Jaén gestionan ya sus citas por WhatsApp. El problema no es el canal, es que lo llevas tú: contestando entre clienta y clienta, con las manos ocupadas, y por la noche en el sofá poniendo al día la agenda. Eso no es un sistema, es trabajo invisible que haces gratis todos los días. Automatizarlo no te cambia la forma de trabajar: te devuelve las horas.",
      prioridad:
        "Aquí no hay que cambiar el canal, hay que quitarte a ti de en medio. Se empieza conectando el WhatsApp que ya usas a una agenda real, para que la cita se cierre sola mientras trabajas. Es la pieza que devuelve horas desde la primera semana. Las reseñas y la recuperación de clientas se activan después.",
      faq: {
        q: "Ya contesto yo por WhatsApp, ¿qué gano?",
        a: "Dejar de hacerlo. La clienta sigue escribiendo al mismo número y recibe respuesta antes que ahora; la diferencia es que tú no tienes que parar lo que estás haciendo ni recuperarlo por la noche.",
      },
    },
    granada: {
      titulo: "Picos de eventos y una clientela que se renueva cada curso",
      texto:
        "En Granada se juntan dos cosas: temporadas de eventos que disparan la demanda en semanas concretas, y una población que cambia con el calendario académico. Eso obliga a captar clientela nueva constantemente, y la clienta nueva no llama: escribe por Instagram o WhatsApp, mira si tienes hueco esta semana y, si no le contestas rápido, prueba en otro salón.",
      prioridad:
        "En Granada lo primero es cubrir Instagram además de WhatsApp, porque la clienta nueva entra por ahí y no espera. Respuesta inmediata y hueco confirmado en el momento. Cuando la captación deja de perderse, se trabaja la recuperación de la clienta que dejó de venir, que en una ciudad de tanta rotación es donde está el margen.",
      faq: {
        q: "Me escriben más por Instagram que por WhatsApp.",
        a: "Se puede conectar también. Lo importante es que la respuesta salga al momento esté donde esté el mensaje, y que la cita acabe en la misma agenda.",
      },
    },
    cordoba: {
      titulo: "Feria, patios y bodas: unas semanas que sostienen el año",
      texto:
        "Un salón de Córdoba se juega una parte desproporcionada de su facturación en las semanas de eventos. Son fechas en las que las clientas reservan con antelación, preguntan por precios de peinados y recogidos, y en las que un hueco perdido no se recupera porque no hay más horas ese día. Gestionar esa demanda a mano, entre clienta y clienta, es donde se pierde el dinero.",
      prioridad:
        "Con la temporada de eventos por delante, se empieza por reservas y lista de espera. Es lo que permite llenar la agenda con antelación y, sobre todo, cubrir las cancelaciones de última hora avisando a quien se quedó fuera. Un hueco recuperado en feria paga varios meses del sistema. El resto se monta después.",
      faq: {
        q: "En feria tengo la agenda cerrada, ¿esto me sirve de algo?",
        a: "Para llenarla antes y para gestionar la lista de espera. Cuando alguien cancela, avisar a quien se quedó fuera es la diferencia entre un hueco vacío y una clienta más ese día.",
      },
    },
    malaga: {
      titulo: "Rotación alta y clientas que no siempre escriben en castellano",
      texto:
        "En Málaga entra mucha clienta de paso o residente extranjera, y suele decidir por disponibilidad inmediata más que por recomendación. Pregunta si hay hueco hoy o mañana, a menudo en inglés, y reserva en el primer sitio que le confirma. Es un flujo constante de oportunidades que solo aprovecha quien responde en el momento.",
      prioridad:
        "En Málaga se arranca por disponibilidad en tiempo real y en varios idiomas, porque la clienta decide por quien le confirma antes. La agenda conectada evita el descuadre de ofrecer huecos que no existen. Las reseñas en el momento justo se activan a continuación, que en un mercado con tanta competencia es lo que inclina la elección.",
      faq: {
        q: "¿Puedo mostrar disponibilidad real sin descuadrar la agenda?",
        a: "Sí, se conecta a tu agenda y solo ofrece huecos que existen. Y puedes reservar franjas que no quieras que se ocupen automáticamente.",
      },
    },
  },

  "ia-para-gimnasios": {
    jaen: {
      titulo: "El socio que deja de venir en junio y no vuelve en septiembre",
      texto:
        "En Jaén el verano vacía los gimnasios, y el problema no es que la gente se dé de baja: es que deja de venir y luego le da apuro volver. Nadie le escribe, así que la baja se formaliza en octubre sin que nadie haya intentado nada. Detectar al socio que lleva tres semanas sin pasar y escribirle antes de que se enfríe es el trabajo que ningún gimnasio pequeño tiene tiempo de hacer a mano.",
      prioridad:
        "Aquí se empieza por la recuperación de socios inactivos, y en primavera, no en septiembre. El objetivo es escribir a quien lleva tres semanas sin venir antes de que llegue junio y desaparezca. Engancharlo al control de accesos es la primera tarea. La atención de consultas de alta se monta a la vez, pero rinde más en otoño.",
      faq: {
        q: "¿Cómo sabe quién ha dejado de venir?",
        a: "Se conecta al control de accesos o a tu sistema de socios. A partir de ahí, el que lleva X días sin aparecer entra en un aviso automático, con el mensaje y el tono que tú decidas.",
      },
    },
    granada: {
      titulo: "El curso marca las altas, y también las bajas de golpe",
      texto:
        "Un gimnasio de Granada vive un ciclo muy marcado: avalancha de altas en septiembre y octubre, y una sangría en cuanto llegan los exámenes y el fin de curso. Son socios que se dan de alta con mucha ilusión y desaparecen sin avisar. Trabajar esa retención en las semanas críticas, y captar bien en la avalancha de septiembre sin que se pierda ninguna consulta, define el año entero.",
      prioridad:
        "En Granada el calendario manda: se instala en verano para llegar a septiembre con la captación resuelta, porque en la avalancha de altas no se puede perder ni una consulta. Primero el Recepcionista IA con tarifas y horarios. La recuperación de inactivos se activa después, calibrada para las semanas de exámenes, que es cuando se cae la asistencia.",
      faq: {
        q: "En septiembre no doy abasto con las consultas de altas.",
        a: "Es el mes donde más se nota: el asistente atiende todas las consultas a la vez, informa de tarifas y horarios y deja agendada la visita. Ninguna se queda sin contestar por saturación.",
      },
    },
    cordoba: {
      titulo: "El verano cordobés se lleva por delante la asistencia",
      texto:
        "Con el calor que hace en Córdoba en verano, la asistencia cae en picado y el gimnasio se queda pagando el mismo local con la mitad de gente entrando. La cuota se sigue cobrando un tiempo, pero el socio que no viene es el socio que se da de baja en octubre. Esos meses son precisamente cuando más falta hace un sistema que mantenga el contacto sin que nadie tenga que ponerse a escribir uno a uno.",
      prioridad:
        "Con el verano cordobés por delante, la prioridad es el contacto con el socio que deja de venir por el calor. Se configura para que el aviso salga a las pocas semanas de ausencia, no en octubre cuando ya viene a darse de baja. Reservas y lista de espera de clases se añaden luego, para las actividades de horario bueno.",
      faq: {
        q: "¿Qué se le puede decir a alguien que no viene por el calor?",
        a: "Lo que tenga sentido en tu caso: horarios de menos afluencia, actividades más suaves, o simplemente interés genuino. Lo decides tú; lo que aporta el sistema es que salga solo y a tiempo.",
      },
    },
    malaga: {
      titulo: "Socios de temporada, visitantes y una competencia muy despierta",
      texto:
        "Málaga tiene demanda de pases cortos, de residentes extranjeros y de gente que se apunta por temporadas. Es un mercado con mucha oportunidad y con competencia que responde rápido, porque el listón digital allí está alto. Quien pregunta por un bono de un mes o por tarifas en inglés y no recibe respuesta en minutos, se apunta en el gimnasio de al lado sin pensarlo dos veces.",
      prioridad:
        "En Málaga se empieza por informar de tarifas y pases cortos en varios idiomas, que es la consulta que más entra y casi siempre fuera del horario de recepción. Convertir eso en alta es el retorno rápido. La recuperación de inactivos llega después y se calibra distinto, porque una parte de tus socios son de temporada por definición.",
      faq: {
        q: "¿Puede informar de tarifas de pases cortos en inglés?",
        a: "Sí, con las tarifas que tú cargues y en el idioma del mensaje. Es de lo que más rinde en Málaga, porque esa consulta llega constantemente y casi siempre fuera del horario de recepción.",
      },
    },
  },
};

export type Combo = {
  slug: string;
  vertical: (typeof verticales)[number];
  ciudad: Ciudad;
  angulo: Angulo;
  titulo: string;
  metaTitulo: string;
  metaDescripcion: string;
};

/** Solo se genera el cruce si tiene ángulo propio escrito. */
export const combos: Combo[] = verticales.flatMap((v) =>
  ciudades
    .filter((c) => angulos[v.slug]?.[c.slug])
    .map((c) => {
      const angulo = angulos[v.slug][c.slug];
      const titulo = `${v.titulo} en ${c.nombre}`;
      return {
        slug: `${v.slug}-en-${c.slug}`,
        vertical: v,
        ciudad: c,
        angulo,
        titulo,
        metaTitulo: `${titulo} | Impulso IA`,
        metaDescripcion: `${angulo.titulo}. Asistente que atiende, agenda y da seguimiento, instalado en tu negocio de ${c.nombre}. Desde 1.200 €, con diagnóstico gratuito.`,
      };
    }),
);

/** Las ciudades donde existe página para un sector dado. */
export const ciudadesDe = (slugVertical: string) =>
  combos.filter((c) => c.vertical.slug === slugVertical);
