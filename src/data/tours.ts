export type TourFaq = {
  question: string;
  answer: string;
};

export type TourMode = {
  name: string;
  price: string;
  summary: string;
  includes: string[];
  excludes: string[];
};

export type Tour = {
  slug: string;
  title: string;
  duration: string;
  location: string;
  price: string;
  priceNote?: string;
  experienceType?: string;
  shortDescription: string;
  heroDescription: string;
  description: string;
  includes: string[];
  notIncluded: string[];
  highlights: string[];
  itinerary: string[];
  recommendations: string[];
  bestSeason: string;
  departurePoint: string;
  observations?: string[];
  modes?: TourMode[];
  images: string[];
  whatsappText: string;
  faq: TourFaq[];
};

export const tours: Tour[] = [
  {
    slug: "casa-pitufos-bosque-piedras-pumachaca-chicha-ccasa",
    title:
      "Full Day Casa de los Pitufos, Bosque de Piedras, Catarata Pumachaca y Chicha Ccasa",
    duration: "Full day",
    location: "Abancay y Pampachiri, Apurímac",
    price: "Desde S/ 150 por persona",
    priceNote: "Compartido desde S/ 150 por persona. Privados desde S/ 550 por grupo.",
    experienceType: "Naturaleza, aventura ligera, fotografía y cultura local",
    shortDescription:
      "Vive un full day desde Abancay hacia Pampachiri y descubre la Casa de los Pitufos, el Bosque de Piedras, la Catarata Pumachaca y Chicha Ccasa en una sola experiencia.",
    heroDescription:
      "Una experiencia ideal para fotografía, naturaleza, aventura ligera y cultura local en uno de los paisajes mas singulares de Apurímac.",
    description:
      "Descubre una de las rutas mas sorprendentes de Apurímac en un full day desde Abancay hacia Pampachiri. Durante esta experiencia visitaras la Casa de los Pitufos, el Bosque de Piedras, la Catarata Pumachaca y Chicha Ccasa, combinando naturaleza, aventura ligera, fotografía y cultura local en un solo recorrido. El Bosque de Piedras destaca por sus formaciones rocosas de formas conicas y piramidales, la Casa de los Pitufos aporta un escenario pintoresco para fotos, y la Catarata Pumachaca suma una caminata corta rodeada de paisaje rural. Chicha Ccasa completa la experiencia con un componente cultural que conecta mejor con la identidad local de la zona.",
    includes: [
      "Movilidad ida y vuelta desde Abancay segun la modalidad elegida",
      "Paradas principales del recorrido",
      "Acompanamiento segun la modalidad elegida",
      "Tiempo para fotografía en los atractivos principales",
    ],
    notIncluded: [
      "Alimentacion salvo coordinación previa",
      "Entradas en modalidades basica, privada estandar y privada desde 4 personas",
      "Gastos personales",
    ],
    highlights: [
      "Recorrido full day por una de las rutas mas fotograficas y diferentes de Apurímac",
      "Visita a la Casa de los Pitufos, Bosque de Piedras, Catarata Pumachaca y Chicha Ccasa",
      "Experiencia ideal para fotografía, naturaleza, aventura ligera y cultura local",
      "Opciones flexibles: tour compartido, privado estandar, completo con guia o experiencia personalizada",
      "Ruta recomendada para viajeros que buscan lugares poco masivos y paisajes singulares",
    ],
    itinerary: [
      "Salida desde Abancay entre 5:00 a. m. y 6:00 a. m.",
      "Desayuno en el pueblo de Santa Rosa",
      "Visita a la Casa de los Pitufos",
      "Visita al Bosque de Piedras de Pampachiri",
      "Almuerzo en el pueblo de Pampachiri",
      "Visita a la Catarata Pumachaca con caminata apróximada de 15 minutos de ida y 20 a 25 minutos de retorno",
      "Retorno hacia Abancay con salida apróximada desde Pampachiri a las 3:00 p. m.",
    ],
    recommendations: [
      "Llevar ropa comoda y zapatillas",
      "Llevar casaca ligera, gorra o sombrero y bloqueador solar",
      "Llevar agua durante el recorrido",
      "Tener celular o camara con bateria suficiente",
    ],
    bestSeason:
      "Puede realizarse durante gran parte del ano, pero conviene considerar que en temporada de lluvia algunos tramos pueden presentar barro, humedad o cambios en el acceso.",
    departurePoint:
      "Salida desde Abancay. El horario recomendado es entre 5:00 a. m. y 6:00 a. m., con retorno apróximado entre 6:00 p. m. y 7:00 p. m.",
    observations: [
      "El horario puede variar segun el clima, el estado de la carretera, el ritmo del grupo y el tiempo utilizado en cada atractivo.",
      "La salida temprana es importante para aprovechar mejor el dia y realizar el recorrido completo con calma.",
      "La caminata a la Catarata Pumachaca requiere condicion fisica basica y calzado comodo.",
      "Hay paradas opciónales para compra de agua, snacks o uso de servicios higienicos.",
      "Se pueden coordinar paradas adicionales con el conductor siempre que no afecten el horario general del tour.",
    ],
    modes: [
      {
        name: "Tour basico compartido",
        price: "S/ 150 por persona",
        summary: "Salida confirmada con minimo 6 pasajeros.",
        includes: [
          "Movilidad compartida ida y vuelta desde Abancay",
          "Conductor orientador",
          "Paradas principales del recorrido",
        ],
        excludes: [
          "Entradas",
          "Alimentacion",
          "Gastos personales",
          "Guia especializado",
        ],
      },
      {
        name: "Tour privado estandar",
        price: "S/ 550 por grupo",
        summary: "Para 1 a 3 personas.",
        includes: [
          "Movilidad privada ida y vuelta desde Abancay",
          "Conductor orientador",
          "Acompanamiento basico durante el recorrido",
          "Paradas principales",
        ],
        excludes: [
          "Entradas",
          "Guia especializado dedicado",
          "Alimentacion",
          "Gastos personales",
        ],
      },
      {
        name: "Tour privado desde 4 personas",
        price: "S/ 150 por persona",
        summary: "Total minimo: S/ 600.",
        includes: [
          "Movilidad privada ida y vuelta desde Abancay",
          "Conductor orientador",
          "Acompanamiento basico durante el recorrido",
          "Paradas principales",
        ],
        excludes: [
          "Entradas",
          "Guia especializado dedicado",
          "Alimentacion",
          "Gastos personales",
        ],
      },
      {
        name: "Tour completo con guia",
        price: "Desde S/ 750 por grupo",
        summary:
          "Incluye movilidad privada ida y vuelta desde Abancay, guia dedicado, entradas y acompanamiento completo.",
        includes: [
          "Movilidad privada ida y vuelta desde Abancay",
          "Guia dedicado",
          "Entradas",
          "Acompanamiento completo durante el recorrido",
          "Explicación de los lugares visitados",
          "Asistencia durante todo el tour",
        ],
        excludes: ["Alimentacion", "Gastos personales"],
      },
      {
        name: "Experiencia privada personalizada",
        price: "Desde S/ 850 por grupo",
        summary: "Disponible bajo coordinación previa.",
        includes: [
          "Movilidad privada ida y vuelta desde Abancay",
          "Guia dedicado",
          "Entradas",
          "Asistencia personalizada",
          "Horario mas flexible",
          "Apoyo con fotos y recomendaciones",
          "Mayor organizacion de paradas",
          "Acompanamiento completo durante toda la experiencia",
        ],
        excludes: ["Alimentacion", "Gastos personales"],
      },
    ],
    images: [
      "/tours/casa-pitufos-bosque-piedras-pumachaca-chicha-ccasa/turismo-casa-pitufos-apurimac-peru.jpg",
      "/tours/casa-pitufos-bosque-piedras-pumachaca-chicha-ccasa/bosque-piedras_n.jpg",
      "/tours/casa-pitufos-bosque-piedras-pumachaca-chicha-ccasa/catarata_n.jpg",
      "/tours/casa-pitufos-bosque-piedras-pumachaca-chicha-ccasa/chichaccasa.jpg",
    ],
    whatsappText:
      "Hola. Te comparto las modalidades para el tour Casa de los Pitufos + Bosque de Piedras + Catarata Pumachaca + Chicha Ccasa:%0A%0A- Tour basico compartido: S/ 150 por persona. Salida confirmada con minimo 6 pasajeros. Incluye movilidad compartida ida y vuelta desde Abancay y conductor orientador. Entradas no incluidas.%0A%0A- Tour privado estandar: S/ 550 por grupo. Para 1 a 3 personas. Incluye movilidad privada ida y vuelta desde Abancay, conductor orientador y paradas principales. Entradas no incluidas.%0A%0A- Tour privado desde 4 personas: S/ 150 por persona. Total minimo: S/ 600. Incluye movilidad privada ida y vuelta desde Abancay y conductor orientador. Entradas no incluidas.%0A%0A- Tour completo con guia: desde S/ 750 por grupo. Incluye movilidad privada ida y vuelta desde Abancay, guia dedicado y entradas.%0A%0A- Experiencia privada personalizada: desde S/ 850 por grupo. Disponible bajo coordinación previa. Incluye guia, entradas, asistencia personalizada y horario mas flexible.%0A%0A- Salida desde Abancay%0A- Duración: full day%0A- No incluye alimentacion ni gastos personales.",
    faq: [
      {
        question: "Desde donde inicia el tour?",
        answer:
          "El tour inicia desde Abancay. La movilidad realiza el servicio de ida y vuelta segun la modalidad elegida.",
      },
      {
        question: "Cuanto dura el tour?",
        answer:
          "Es un tour full day. La salida recomendada es entre 5:00 a. m. y 6:00 a. m., y el retorno apróximado a Abancay es entre 6:00 p. m. y 7:00 p. m.",
      },
      {
        question: "Las entradas estan incluidas?",
        answer:
          "En las modalidades basica y privada estandar, las entradas no estan incluidas y se pagan directamente en el destino. En el tour completo con guia y en la experiencia personalizada, las entradas si estan incluidas.",
      },
      {
        question: "Incluye alimentacion?",
        answer:
          "No incluye alimentacion, salvo coordinación previa. Durante el recorrido se realiza una parada para desayunar en Santa Rosa y otra para almorzar en Pampachiri.",
      },
      {
        question: "La caminata a la Catarata Pumachaca es dificil?",
        answer:
          "La caminata es corta, pero requiere condicion fisica basica. El tiempo apróximado es de 15 minutos de ida y entre 20 a 25 minutos de retorno. Se recomienda llevar zapatillas comodas.",
      },
      {
        question: "Que debo llevar?",
        answer:
          "Se recomienda llevar ropa comoda, zapatillas, casaca ligera, gorra o sombrero, bloqueador solar, agua y celular o camara con bateria suficiente.",
      },
    ],
  },
  {
    slug: "saywite-capitan-rumi-cconoc",
    title: "Full Day Saywite, Cañón de Apurímac Capitán Rumi y Baños Termales de Cconoc",
    duration: "Full day",
    location: "Abancay y Curahuasi, Apurímac",
    price: "Desde S/ 120 por persona",
    priceNote: "Compartido desde S/ 120 por persona. Privados desde S/ 500 por grupo.",
    experienceType: "Historia, paisaje y descanso",
    shortDescription:
      "Disfruta un full day desde Abancay hacia Curahuasi que combina historia, paisaje y descanso con visitas a Saywite, Capitán Rumi y Baños Termales de Cconoc.",
    heroDescription:
      "Una experiencia ideal para conocer una ruta cultural, natural y accesible de Apurímac.",
    description:
      "Vive un full day desde Abancay hacia Curahuasi, una ruta que combina historia, paisaje y descanso en una sola experiencia. Durante el recorrido visitaremos el Sitio Arqueológico de Saywite, el sector de Capitán Rumi con vista hacia el Cañón de Apurímac y los Baños Termales de Cconoc. El recorrido inicia con la visita a Saywite, uno de los atractivos arqueológicos mas representativos de Apurímac, y continua hacia Capitán Rumi, un punto paisajistico ideal para apreciar la profundidad del cañón y tomar fotografías del entorno. La experiencia finaliza en los Baños Termales de Cconoc, un espacio de descanso ubicado en Curahuasi, ideal para relajarse despues del recorrido cultural y panoramico.",
    includes: [
      "Movilidad ida y vuelta desde Abancay segun la modalidad elegida",
      "Paradas principales del recorrido",
      "Acompanamiento segun la modalidad elegida",
      "Tiempo para fotografía y descanso en la ruta",
    ],
    notIncluded: [
      "Alimentacion",
      "Gastos personales",
      "Servicios adicionales en los baños termales",
      "Ingreso a baños termales en modalidades basica y estandar si hubiera cobro",
      "Entradas en modalidades basica, privada estandar y privada desde 4 personas",
      "Guia especializado en modalidades basica, privada estandar y privada desde 4 personas",
    ],
    highlights: [
      "Visita al Sitio Arqueológico de Saywite, uno de los atractivos culturales mas importantes de la ruta",
      "Vista panoramica del Cañón de Apurímac desde la zona de Capitán Rumi",
      "Cierre relajante en los Baños Termales de Cconoc",
      "Ruta full day accesible desde Abancay, ideal para familias, parejas y grupos pequenos",
      "Experiencia variada que combina arqueologia, paisaje, fotografía y descanso",
    ],
    itinerary: [
      "Salida desde Abancay por la manana",
      "Visita al Sitio Arqueológico de Saywite",
      "Parada en la zona de Capitán Rumi para apreciar el Cañón de Apurímac y tomar fotografías",
      "Almuerzo en Curahuasi o en una zona cercana, segun coordinación y disponibilidad",
      "Visita a los Baños Termales de Cconoc",
      "Tiempo libre para descanso, bano termal y fotografías",
      "Retorno hacia Abancay",
    ],
    recommendations: [
      "Llevar ropa comoda y zapatillas",
      "Llevar ropa de bano, sandalias y toalla para los baños termales",
      "Llevar muda adicional de ropa",
      "Llevar bloqueador solar, gorra o sombrero",
      "Llevar agua y snacks ligeros",
      "Llevar celular o camara con bateria suficiente",
      "Llevar efectivo para entradas, alimentacion o gastos personales",
      "Confirmar disponibilidad y horario antes del viaje",
      "El horario puede variar segun clima, trafico, estado de la carretera y tiempo utilizado en cada atractivo",
    ],
    bestSeason:
      "Puede disfrutarse durante gran parte del ano, pero conviene verificar condiciones de clima, trafico y acceso antes del viaje para aprovechar mejor cada parada.",
    departurePoint:
      "Salida desde Abancay entre 7:00 a. m. y 8:00 a. m. El retorno apróximado es entre 6:00 p. m. y 7:00 p. m.",
    observations: [
      "El horario puede variar segun el clima, trafico, estado de la carretera, ritmo del grupo y tiempo utilizado en cada atractivo.",
      "Se recomienda llevar ropa comoda, zapatillas, ropa de bano, sandalias, toalla y una muda adicional para los baños termales.",
      "Llevar efectivo para entradas, alimentacion, ingreso a baños termales o gastos personales.",
      "En las modalidades basica y estandar, las entradas no estan incluidas y se pagan directamente en el destino.",
      "El ingreso a los baños termales puede estar sujeto a disponibilidad, horario de atención o cobros locales.",
      "La alimentacion no esta incluida, salvo coordinación previa.",
      "La experiencia en Cconoc requiere llevar articulos personales de bano.",
      "Hay paradas opciónales para fotografías, compra de agua, snacks o uso de servicios higienicos.",
      "Se pueden coordinar paradas adicionales con el conductor siempre que no afecten el horario general del tour.",
    ],
    modes: [
      {
        name: "Tour basico compartido",
        price: "S/ 120 por persona",
        summary: "Salida confirmada con minimo 6 pasajeros.",
        includes: [
          "Movilidad compartida ida y vuelta desde Abancay",
          "Conductor orientador",
          "Paradas principales del recorrido",
        ],
        excludes: [
          "Entradas",
          "Guia especializado",
          "Alimentacion",
          "Gastos personales",
          "Ingreso a baños termales si hubiera cobro",
        ],
      },
      {
        name: "Tour privado estandar",
        price: "S/ 500 por grupo",
        summary: "Para 1 a 3 personas.",
        includes: [
          "Movilidad privada ida y vuelta desde Abancay",
          "Conductor orientador",
          "Acompanamiento basico durante el recorrido",
          "Paradas principales",
        ],
        excludes: [
          "Entradas",
          "Guia especializado dedicado",
          "Alimentacion",
          "Gastos personales",
          "Ingreso a baños termales si hubiera cobro",
        ],
      },
      {
        name: "Tour privado desde 4 personas",
        price: "S/ 140 por persona",
        summary: "Total minimo: S/ 560.",
        includes: [
          "Movilidad privada ida y vuelta desde Abancay",
          "Conductor orientador",
          "Acompanamiento basico durante el recorrido",
          "Paradas principales",
        ],
        excludes: [
          "Entradas",
          "Guia especializado dedicado",
          "Alimentacion",
          "Gastos personales",
          "Ingreso a baños termales si hubiera cobro",
        ],
      },
      {
        name: "Tour completo con guia",
        price: "Desde S/ 680 por grupo",
        summary:
          "Incluye movilidad privada ida y vuelta desde Abancay, guia dedicado, entradas basicas, explicación de los lugares visitados y acompanamiento completo.",
        includes: [
          "Movilidad privada ida y vuelta desde Abancay",
          "Guia dedicado",
          "Entradas basicas",
          "Explicación de los lugares visitados",
          "Acompanamiento completo durante el recorrido",
          "Asistencia durante todo el tour",
        ],
        excludes: ["Alimentacion", "Gastos personales", "Servicios adicionales en baños termales"],
      },
      {
        name: "Experiencia privada personalizada",
        price: "Desde S/ 780 por grupo",
        summary: "Disponible bajo coordinación previa.",
        includes: [
          "Movilidad privada ida y vuelta desde Abancay",
          "Guia dedicado",
          "Entradas basicas",
          "Asistencia personalizada",
          "Horario mas flexible",
          "Apoyo con fotos y recomendaciones",
          "Mayor organizacion de paradas",
          "Acompanamiento completo durante toda la experiencia",
        ],
        excludes: ["Alimentacion", "Gastos personales", "Servicios adicionales en baños termales"],
      },
    ],
    images: [
      "/tours/saywite-capitan-rumi-cconoc/saiwite-1_n.jpg",
      "/tours/saywite-capitan-rumi-cconoc/capitan rumi_n.jpg",
      "/tours/saywite-capitan-rumi-cconoc/cconoc-3.jpg",
    ],
    whatsappText:
      "Hola. Te comparto las modalidades para el tour Full Day Saywite, Cañón de Apurímac Capitán Rumi y Baños Termales de Cconoc:%0A%0A- Tour basico compartido: S/ 120 por persona. Salida confirmada con minimo 6 pasajeros. Incluye movilidad compartida ida y vuelta desde Abancay y conductor orientador. Entradas no incluidas.%0A%0A- Tour privado estandar: S/ 500 por grupo. Para 1 a 3 personas. Incluye movilidad privada ida y vuelta desde Abancay, conductor orientador y paradas principales. Entradas no incluidas.%0A%0A- Tour privado desde 4 personas: S/ 140 por persona. Total minimo: S/ 560. Incluye movilidad privada ida y vuelta desde Abancay y conductor orientador. Entradas no incluidas.%0A%0A- Tour completo con guia: desde S/ 680 por grupo. Incluye movilidad privada ida y vuelta desde Abancay, guia dedicado y entradas basicas.%0A%0A- Experiencia privada personalizada: desde S/ 780 por grupo. Disponible bajo coordinación previa. Incluye guia, entradas basicas, asistencia personalizada y horario mas flexible.%0A%0A- Salida desde Abancay%0A- Duración: full day%0A- No incluye alimentacion ni gastos personales%0A- Llevar ropa de bano, sandalias y toalla para Cconoc.",
    faq: [
      {
        question: "Desde donde inicia el tour?",
        answer:
          "El tour inicia desde Abancay. La movilidad realiza el servicio de ida y vuelta desde la ciudad, segun la modalidad elegida.",
      },
      {
        question: "Cuanto dura el tour?",
        answer:
          "Es un tour full day. La salida recomendada es entre 7:00 a. m. y 8:00 a. m., y el retorno apróximado a Abancay es entre 6:00 p. m. y 7:00 p. m.",
      },
      {
        question: "Las entradas estan incluidas?",
        answer:
          "En las modalidades basica y privada estandar, las entradas no estan incluidas y se pagan directamente en el destino. En el tour completo con guia y en la experiencia personalizada, las entradas basicas si estan incluidas.",
      },
      {
        question: "Incluye ingreso a los Baños Termales de Cconoc?",
        answer:
          "En las modalidades basica y estandar, el ingreso a los baños termales no esta incluido y se paga directamente en el lugar si hubiera cobro. En modalidades completas puede incluirse segun coordinación.",
      },
      {
        question: "Incluye alimentacion?",
        answer:
          "No incluye alimentacion, salvo coordinación previa. Se puede realizar una parada para almorzar en Curahuasi o en una zona cercana, segun disponibilidad.",
      },
      {
        question: "Que debo llevar?",
        answer:
          "Se recomienda llevar ropa comoda, zapatillas, ropa de bano, sandalias, toalla, muda adicional, bloqueador solar, gorra o sombrero, agua, efectivo y celular o camara con bateria suficiente.",
      },
    ],
  },
  {
    slug: "laguna-pacucha-sondor-andahuaylas",
    title: "Full Day Laguna Pacucha, Centro Arqueológico Sóndor y Plazas de Andahuaylas",
    duration: "Full day",
    location: "Abancay y Andahuaylas, Apurímac",
    price: "Desde S/ 150 por persona",
    priceNote: "Compartido desde S/ 150 por persona. Privados desde S/ 600 por grupo.",
    experienceType: "Naturaleza, historia, fotografía y cultura local",
    shortDescription:
      "Disfruta un full day desde Abancay hacia Andahuaylas visitando la Laguna Pacucha, el Centro Arqueológico Sóndor y las principales plazas de la ciudad.",
    heroDescription:
      "Una experiencia ideal para conocer naturaleza, historia, cultura local y paisajes representativos de Apurímac en una ruta completa de dia entero.",
    description:
      "Explora una de las rutas mas completas de Apurímac en un full day desde Abancay hacia Andahuaylas. En esta experiencia conoceras la Laguna Pacucha, el Centro Arqueológico Sóndor y las principales plazas de Andahuaylas, combinando naturaleza, historia, fotografía y cultura local en un solo recorrido. La Laguna Pacucha sera uno de los puntos mas especiales del viaje por sus aguas tranquilas y su paisaje andino. La ruta continua hacia Sóndor, un centro arqueológico cercano a la laguna que permite acercarse al pasado cultural de la region, y finaliza con un pequeno recorrido por las plazas principales de Andahuaylas para cerrar la experiencia con una mirada mas completa de la provincia.",
    includes: [
      "Movilidad ida y vuelta desde Abancay segun la modalidad elegida",
      "Paradas principales del recorrido",
      "Acompanamiento segun la modalidad elegida",
      "Tiempo para fotografía y apreciacion del paisaje",
    ],
    notIncluded: [
      "Alimentacion",
      "Gastos personales",
      "Entrada al Centro Arqueológico Sóndor en modalidades basica, privada estandar y privada desde 4 personas",
      "Guia especializado en modalidades basica, privada estandar y privada desde 4 personas",
      "Servicios adicionales no mencionados en la modalidad elegida",
    ],
    highlights: [
      "Visita a la Laguna Pacucha, uno de los paisajes naturales mas representativos de Andahuaylas",
      "Recorrido por el Centro Arqueológico Sóndor, atractivo historico y cultural cercano a la laguna",
      "Pequeno recorrido por las plazas principales de Andahuaylas",
      "Ruta full day desde Abancay para conocer otra zona importante de Apurímac",
      "Experiencia ideal para fotografía, naturaleza, arqueologia y cultura local",
    ],
    itinerary: [
      "Salida desde Abancay por la manana",
      "Desayuno en ruta o parada breve para compra de alimentos, segun coordinación",
      "Llegada a la Laguna Pacucha",
      "Tiempo para fotografías, caminata ligera y apreciacion del paisaje",
      "Visita al Centro Arqueológico Sóndor",
      "Recorrido por el complejo arqueológico y explicación basica con conductor orientador",
      "Almuerzo en Andahuaylas o zona cercana, segun coordinación y disponibilidad",
      "Pequeno recorrido por las plazas principales de Andahuaylas",
      "Retorno hacia Abancay",
    ],
    recommendations: [
      "Llevar ropa comoda y zapatillas",
      "Llevar casaca ligera o cortaviento",
      "Llevar bloqueador solar, gorra o sombrero",
      "Llevar agua y snacks ligeros para el camino",
      "Llevar efectivo para entrada a Sóndor, alimentacion o gastos personales",
      "Llevar celular o camara con bateria suficiente",
      "Salir temprano para aprovechar mejor el recorrido",
      "Confirmar disponibilidad y horario antes del viaje",
      "El horario puede variar segun clima, trafico, estado de la carretera y tiempo utilizado en cada atractivo",
    ],
    bestSeason:
      "Puede disfrutarse durante gran parte del ano, pero conviene salir temprano y verificar condiciones de clima y carretera por tratarse de una ruta larga de dia completo.",
    departurePoint:
      "Salida desde Abancay a las 6:00 a. m. El retorno apróximado a Abancay es alrededor de las 7:00 p. m.",
    observations: [
      "El horario puede variar segun el clima, trafico, estado de la carretera, ritmo del grupo y tiempo utilizado en cada atractivo.",
      "La salida temprano es importante porque es una ruta larga de dia completo.",
      "La alimentacion no esta incluida, salvo coordinación previa.",
      "La entrada al Centro Arqueológico Sóndor no esta incluida en las modalidades basica, privada estandar y privada desde 4 personas.",
      "La Laguna Pacucha no tiene costo de ingreso segun la información brindada.",
      "El recorrido por las plazas de Andahuaylas es breve y depende del tiempo disponible.",
      "Se recomienda llevar ropa comoda, zapatillas, casaca ligera o cortaviento, bloqueador solar, gorra o sombrero, agua, snacks y efectivo.",
      "Llevar celular o camara con bateria suficiente para fotografías.",
      "La visita a Sóndor puede requerir caminata ligera y subir algunos tramos, por lo que se recomienda condicion fisica basica.",
      "Hay paradas opciónales para fotografías, desayuno, compra de agua, snacks o uso de servicios higienicos.",
      "Se pueden coordinar paradas adicionales con el conductor siempre que no afecten el horario general del tour.",
    ],
    modes: [
      {
        name: "Tour basico compartido",
        price: "S/ 150 por persona",
        summary: "Salida confirmada con minimo 6 pasajeros.",
        includes: [
          "Movilidad compartida ida y vuelta desde Abancay",
          "Conductor orientador",
          "Paradas principales del recorrido",
        ],
        excludes: [
          "Entrada a Sóndor",
          "Guia especializado",
          "Alimentacion",
          "Gastos personales",
        ],
      },
      {
        name: "Tour privado estandar",
        price: "S/ 600 por grupo",
        summary: "Para 1 a 3 personas.",
        includes: [
          "Movilidad privada ida y vuelta desde Abancay",
          "Conductor orientador",
          "Acompanamiento basico durante el recorrido",
          "Paradas principales",
        ],
        excludes: [
          "Entrada a Sóndor",
          "Guia especializado dedicado",
          "Alimentacion",
          "Gastos personales",
        ],
      },
      {
        name: "Tour privado desde 4 personas",
        price: "S/ 160 por persona",
        summary: "Total minimo: S/ 640.",
        includes: [
          "Movilidad privada ida y vuelta desde Abancay",
          "Conductor orientador",
          "Acompanamiento basico durante el recorrido",
          "Paradas principales",
        ],
        excludes: [
          "Entrada a Sóndor",
          "Guia especializado dedicado",
          "Alimentacion",
          "Gastos personales",
        ],
      },
      {
        name: "Tour completo con guia",
        price: "Desde S/ 800 por grupo",
        summary:
          "Incluye movilidad privada ida y vuelta desde Abancay, guia dedicado, entrada a Sóndor, explicación de los lugares visitados y acompanamiento completo.",
        includes: [
          "Movilidad privada ida y vuelta desde Abancay",
          "Guia dedicado",
          "Entrada al Centro Arqueológico Sóndor",
          "Explicación de los lugares visitados",
          "Acompanamiento completo durante el recorrido",
          "Asistencia durante todo el tour",
        ],
        excludes: ["Alimentacion", "Gastos personales"],
      },
      {
        name: "Experiencia privada personalizada",
        price: "Desde S/ 900 por grupo",
        summary: "Disponible bajo coordinación previa.",
        includes: [
          "Movilidad privada ida y vuelta desde Abancay",
          "Guia dedicado",
          "Entrada al Centro Arqueológico Sóndor",
          "Asistencia personalizada",
          "Horario mas flexible",
          "Apoyo con fotos y recomendaciones",
          "Mayor organizacion de paradas",
          "Acompanamiento completo durante toda la experiencia",
        ],
        excludes: ["Alimentacion", "Gastos personales"],
      },
    ],
    images: [
      "/tours/laguna-pacucha-sondor-andahuaylas/laguna pacucha-botes.jpg",
      "/tours/laguna-pacucha-sondor-andahuaylas/sondor_n.jpg",
      "/tours/laguna-pacucha-sondor-andahuaylas/panoramica sondor_n.jpg",
      "/tours/laguna-pacucha-sondor-andahuaylas/plaza de andahuaylas.jpeg",
    ],
    whatsappText:
      "Hola. Te comparto las modalidades para el tour Full Day Laguna Pacucha, Centro Arqueológico Sóndor y Plazas de Andahuaylas:%0A%0A- Tour basico compartido: S/ 150 por persona. Salida confirmada con minimo 6 pasajeros. Incluye movilidad compartida ida y vuelta desde Abancay y conductor orientador. Entrada a Sóndor no incluida.%0A%0A- Tour privado estandar: S/ 600 por grupo. Para 1 a 3 personas. Incluye movilidad privada ida y vuelta desde Abancay, conductor orientador y paradas principales. Entrada a Sóndor no incluida.%0A%0A- Tour privado desde 4 personas: S/ 160 por persona. Total minimo: S/ 640. Incluye movilidad privada ida y vuelta desde Abancay y conductor orientador. Entrada a Sóndor no incluida.%0A%0A- Tour completo con guia: desde S/ 800 por grupo. Incluye movilidad privada ida y vuelta desde Abancay, guia dedicado y entrada a Sóndor.%0A%0A- Experiencia privada personalizada: desde S/ 900 por grupo. Disponible bajo coordinación previa. Incluye guia, entrada a Sóndor, asistencia personalizada y horario mas flexible.%0A%0A- Salida desde Abancay%0A- Duración: full day%0A- No incluye alimentacion ni gastos personales.",
    faq: [
      {
        question: "Desde donde inicia el tour?",
        answer:
          "El tour inicia desde Abancay. La movilidad realiza el servicio de ida y vuelta desde la ciudad, segun la modalidad elegida.",
      },
      {
        question: "Cuanto dura el tour?",
        answer:
          "Es un tour full day. La salida es a las 6:00 a. m. y el retorno apróximado a Abancay es alrededor de las 7:00 p. m.",
      },
      {
        question: "La entrada a Sóndor esta incluida?",
        answer:
          "En las modalidades basica, privada estandar y privada desde 4 personas, la entrada a Sóndor no esta incluida y se paga directamente en el destino. En el tour completo con guia y en la experiencia personalizada, la entrada a Sóndor si esta incluida.",
      },
      {
        question: "La Laguna Pacucha tiene costo de ingreso?",
        answer:
          "Segun la información brindada, la Laguna Pacucha no tiene costo de ingreso.",
      },
      {
        question: "Incluye alimentacion?",
        answer:
          "No incluye alimentacion, salvo coordinación previa. Se puede realizar una parada para almorzar en Andahuaylas o en una zona cercana, segun disponibilidad.",
      },
      {
        question: "El recorrido por las plazas de Andahuaylas es largo?",
        answer:
          "No. Es un recorrido breve y panoramico por las plazas principales, sujeto al tiempo disponible del tour.",
      },
      {
        question: "Que debo llevar?",
        answer:
          "Se recomienda llevar ropa comoda, zapatillas, casaca ligera o cortaviento, bloqueador solar, gorra o sombrero, agua, snacks, efectivo y celular o camara con bateria suficiente.",
      },
    ],
  },
  {
    slug: "santuario-nacional-ampay",
    title: "Full Day Santuario Nacional del Ampay",
    duration: "Full day",
    location: "Abancay y Santuario Nacional del Ampay",
    price: "Precio por confirmar",
    priceNote: "Disponible en modalidad basica o completa con guia. Precio final por confirmar.",
    experienceType: "Trekking, naturaleza y montana",
    shortDescription:
      "Vive una experiencia de trekking desde Abancay hacia el Santuario Nacional del Ampay, ideal para quienes buscan naturaleza, esfuerzo fisico moderado y paisajes de montana.",
    heroDescription:
      "Una experiencia de naturaleza y caminata en una de las areas naturales mas representativas de Abancay y de Apurímac.",
    description:
      "Vive una experiencia de naturaleza y caminata en el Santuario Nacional del Ampay, una de las areas naturales mas representativas de Abancay y de Apurímac. Este tour esta pensado para viajeros que buscan contacto directo con la montana, paisajes naturales, aire puro y una ruta de trekking exigente pero memorable. La experiencia inicia temprano desde Abancay con un traslado corto en movilidad hasta la entrada del santuario. Desde este punto comienza la caminata por senderos naturales, atravesando zonas de vegetacion altoandina, espacios paisajisticos y sectores donde se puede apreciar el ambiente natural caracteristico del Ampay. El recorrido requiere esfuerzo fisico, ya que la caminata puede tomar apróximadamente 3 horas de ida y 3 horas de retorno, dependiendo del ritmo del grupo, el clima y las condiciones del sendero.",
    includes: [
      "Movilidad ida y vuelta desde Abancay hasta la entrada del Santuario Nacional del Ampay",
      "Coordinación general del recorrido",
      "Tiempo para realizar la caminata",
      "Paradas de descanso y fotografía durante la ruta",
    ],
    notIncluded: [
      "Alimentacion",
      "Entradas si hubiera cobro o control de acceso",
      "Gastos personales",
      "Agua o snacks personales",
      "Equipo personal de caminata",
    ],
    highlights: [
      "Experiencia de trekking en una de las areas naturales mas importantes de Abancay",
      "Contacto directo con naturaleza, montana, senderos y paisajes altoandinos",
      "Ruta ideal para fotografía, caminata, aire libre y desconexion",
      "Traslado corto desde Abancay hasta la entrada del santuario",
      "Opcion basica o completa con guia, segun el nivel de acompanamiento que elija el visitante",
    ],
    itinerary: [
      "Salida desde Abancay a las 5:00 a. m.",
      "Traslado en movilidad hasta la entrada del Santuario Nacional del Ampay",
      "Registro o coordinación de ingreso, segun corresponda",
      "Inicio de caminata dentro del santuario",
      "Recorrido por senderos naturales, bosque de intimpas y zonas paisajísticas",
      "Llegada al punto principal del recorrido, segun condicion del grupo y ruta disponible",
      "Tiempo para descanso, fotografías y apreciacion del paisaje",
      "Retorno caminando hacia la entrada del santuario",
      "Retorno en movilidad hacia Abancay",
    ],
    recommendations: [
      "Llevar ropa comoda y deportiva",
      "Llevar zapatillas o calzado adecuado para caminata",
      "Llevar agua suficiente y snacks ligeros",
      "Llevar bloqueador solar, gorra o sombrero",
      "Llevar casaca ligera o cortaviento",
      "Llevar celular o camara con bateria suficiente",
      "Tener condicion fisica basica a intermedia por la caminata de ida y retorno",
    ],
    bestSeason:
      "En temporada seca suele ser mas comodo, pero puede realizarse gran parte del ano considerando que en temporada de lluvias el sendero puede presentar barro, humedad o mayor dificultad.",
    departurePoint:
      "Salida desde Abancay a las 5:00 a. m. El retorno apróximado es entre 4:00 p. m. y 5:00 p. m.",
    observations: [
      "Este tour requiere caminata prolongada: apróximadamente 3 horas de ida y 3 horas de retorno.",
      "Se recomienda tener condicion fisica basica a intermedia.",
      "El horario puede variar segun el ritmo del grupo, clima, estado del sendero y tiempo usado en descansos.",
      "La movilidad llega hasta la entrada del santuario; desde ahi el recorrido continua a pie.",
      "El Santuario Nacional del Ampay es un area natural protegida, por lo que se debe respetar el entorno, no dejar residuos y seguir las indicaciones del personal o guia.",
      "Llevar agua suficiente, snacks ligeros, ropa comoda, zapatillas o calzado de trekking, casaca ligera, bloqueador solar y gorra o sombrero.",
      "En temporada de lluvias, el sendero puede presentar barro, humedad o mayor dificultad.",
      "Las entradas o pagos de ingreso no estan incluidos, salvo coordinación previa.",
      "La alimentacion no esta incluida.",
      "Hay paradas opciónales para descanso, fotografías, miradores naturales y observacion del bosque de intimpas.",
    ],
    modes: [
      {
        name: "Tour basico",
        price: "Precio por confirmar",
        summary: "Incluye solo la logistica principal hasta la entrada del santuario.",
        includes: [
          "Movilidad ida y vuelta desde Abancay hasta la entrada del Santuario Nacional del Ampay",
          "Conductor orientador",
          "Coordinación basica del recorrido",
          "Tiempo libre para realizar la caminata",
        ],
        excludes: [
          "Alimentacion",
          "Entradas si hubiera cobro o control de acceso",
          "Gastos personales",
          "Agua o snacks personales",
          "Equipo personal de caminata",
        ],
      },
      {
        name: "Tour completo con guia",
        price: "Precio por confirmar",
        summary: "Incluye acompanamiento durante la caminata y asistencia general.",
        includes: [
          "Movilidad ida y vuelta desde Abancay hasta la entrada del Santuario Nacional del Ampay",
          "Guia de acompanamiento",
          "Asistencia durante la caminata",
          "Coordinación general durante toda la experiencia",
        ],
        excludes: [
          "Alimentacion",
          "Entradas si hubiera cobro o control de acceso",
          "Gastos personales",
          "Agua o snacks personales",
          "Equipo personal de caminata",
        ],
      },
    ],
    images: [
      "/tours/santuario-nacional-ampay/laguna Ampay_n.jpg",
      "/tours/santuario-nacional-ampay/secundaria ampay_7030315295920782803_n.jpg",
      "/tours/santuario-nacional-ampay/complementaria ampay_4889872122529067354_n.jpg",
    ],
    whatsappText:
      "Hola. Quiero información sobre el tour Full Day Santuario Nacional del Ampay. Me gustaria conocer disponibilidad, modalidad recomendada, nivel de caminata y detalles del recorrido.",
    faq: [
      {
        question: "Desde donde inicia el tour?",
        answer:
          "El tour inicia desde Abancay. La movilidad realiza el traslado ida y vuelta hasta la entrada del Santuario Nacional del Ampay.",
      },
      {
        question: "Cuanto dura el tour?",
        answer:
          "Es una experiencia full day. La salida es a las 5:00 a. m. y el retorno apróximado a Abancay es entre 4:00 p. m. y 5:00 p. m.",
      },
      {
        question: "Cuanto se camina?",
        answer:
          "La caminata puede tomar apróximadamente 3 horas de ida y 3 horas de retorno, dependiendo del ritmo del grupo, el clima y el estado del sendero.",
      },
      {
        question: "Es un tour dificil?",
        answer:
          "Es un tour de exigencia fisica moderada a alta por la duración de la caminata. Se recomienda tener condicion fisica basica a intermedia y estar acostumbrado a caminar.",
      },
      {
        question: "Incluye alimentacion?",
        answer:
          "No incluye alimentacion. Se recomienda llevar agua suficiente y snacks ligeros para la caminata.",
      },
      {
        question: "Que debo llevar?",
        answer:
          "Se recomienda llevar ropa comoda y deportiva, zapatillas o calzado de trekking, casaca ligera o cortaviento, bloqueador solar, gorra o sombrero, agua suficiente, snacks y celular o camara con bateria suficiente.",
      },
      {
        question: "La movilidad llega hasta el atractivo principal?",
        answer:
          "No. La movilidad llega hasta la entrada del Santuario Nacional del Ampay. Desde ahi el recorrido continua caminando por los senderos del area natural.",
      },
    ],
  },
];

export function getTourBySlug(slug: string) {
  return tours.find((tour) => tour.slug === slug);
}

