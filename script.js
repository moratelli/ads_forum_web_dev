const zodiacSigns = [
  {
    nome: "Aries",
    caracteristica:
      "Impulsivo, o ariano nao pensa muito sobre seus atos. E aquele que primeiro age, depois reflete.Agitado, precisa de muita atividade para gastar a energia, senao pode ficar agressivo e explosivo.",
    periodo: {
      inicio: "21/03",
      termino: "20/04",
    },
  },
  {
    nome: "Touro",
    caracteristica:
      "Teimoso, o taurino e determinado e protetor. Precisa de seguranca e estabilidade para ser feliz,e conquista isso com muito trabalho e concentracao. Carinhoso, o taurino pode ser ciumento com quem ama.",
    periodo: {
      inicio: "21/04",
      termino: "21/05",
    },
  },
  {
    nome: "Gemeos",
    caracteristica:
      "Espontaneo e um pouco instavel, o geminiano e uma verdadeira caixinha de surpresas. Como e volatil,muitas vezes nem mesmo o geminiano se entende, mas o importante e que ele esta sempre de bom humor e em busca de aventuras.",
    periodo: {
      inicio: "22/05",
      termino: "21/06",
    },
  },
  {
    nome: "Cancer",
    caracteristica:
      "Familia e a palavra-chave para o canceriano. Tranquilo e emotivo, gosta de ficar em casa, fazerprogramas com quem ama e curtir momentos com os parentes. Curioso, faz amizade com facilidade, mas pode ser um pouco sensivel.",
    periodo: {
      inicio: "21/06",
      termino: "23/07",
    },
  },
  {
    nome: "Leao",
    caracteristica:
      "Este e signo que veio para brilhar. O leonino gosta de chamar a atencao e ser o centro do mundo,mas tambem e muito amavel e leal. Simpatico e comunicativo, o nativo de leao pode ser um pouco ciumento e inseguro.",
    periodo: {
      inicio: "24/07",
      termino: "23/08",
    },
  },
  {
    nome: "Virgem",
    caracteristica:
      "Perspicaz e inteligente, o virginiano esta acostumado com o sucesso, por isso se cobra muito assim como aos demais. Por isso, pode ser um pouco rigido e magoar quem ama. Timido, prefere programastranquilos a grandes eventos.",
    periodo: {
      inicio: "24/08",
      termino: "23/09",
    },
  },
  {
    nome: "Libra",
    caracteristica:
      "O libriano gosta do que e belo e harmonioso. Nao gosta de conflitos e por isso tentaser imparcial em debates e brigas. Indeciso, pode demorar muito para escolher coisas simples, como oque comer ou vestir. Bom gosto define este signo.",
    periodo: {
      inicio: "24/09",
      termino: "23/10",
    },
  },
  {
    nome: "Escorpiao",
    caracteristica:
      "Determinado, o escorpiano vai ate o fim para conquistar os seus objetivos. Sensual e romantico,gosta de estar em relacionamentos, mas pode ser desconfiado enquanto nao se sentir seguro com a pessoa.",
    periodo: {
      inicio: "24/10",
      termino: "22/11",
    },
  },
  {
    nome: "Sagitario",
    caracteristica:
      "Um signo de bem com a vida, que esta sempre em busca de acao e que vive rodeado de amigos. Este e o signo de sagitario, que e sonhador e adora conhecer pessoas e lugares novos.",
    periodo: {
      inicio: "23/11",
      termino: "21/12",
    },
  },
  {
    nome: "Capricornio",
    caracteristica:
      "Trabalhador, timido e educado, o capricornio pode passar uma imagem de fechado e ate mesmoantipatico, mas e que ele e precisa confiar em quem esta ao seu lado para se abrir totalmente. Com paciencia,ele se mostra um amigo leal e um companheiro fiel.",
    periodo: {
      inicio: "22/12",
      termino: "20/01",
    },
  },
  {
    nome: "Aquario",
    caracteristica:
      "Independente, o aquariano preza muito por sua liberdade. Gosta de viajar, sair econhecer pessoas novas. Tem uma mente aberta e gosta de tudo o que e inovador e moderno, desde roupas etecnologia, ate mesmo atitudes comportamentais.",
    periodo: {
      inicio: "21/01",
      termino: "19/02",
    },
  },
  {
    nome: "Peixes",
    caracteristica:
      "Este e o signo mais romantico do zodiaco. Sonhador e carinhoso, ele esta semprepreocupado com o bem estar dos outros. Sensivel e carinhoso, acredita em contos de fadas e acha quetodos merecem um final feliz.",
    periodo: {
      inicio: "20/02",
      termino: "20/03",
    },
  },
];

const createDateFromDayAndMonth = (str) => {
  const day = str.split("/")[0];
  const month = str.split("/")[1];

  return new Date(2022, month - 1, day);
};

const getZodiacSignByDayAndMonth = (day, month) => {
  return zodiacSigns.find((zodiacSign) => {
    const pickedDate = createDateFromDayAndMonth(`${day}/${month + 1}`);
    const startDate = createDateFromDayAndMonth(zodiacSign.periodo.inicio);
    const endDate = createDateFromDayAndMonth(zodiacSign.periodo.termino);

    console.log(zodiacSign.nome, pickedDate, startDate, endDate);
    console.log(pickedDate > startDate && pickedDate < endDate);

    if (pickedDate > startDate && pickedDate < endDate) return zodiacSign;
    else if (
      (pickedDate > startDate && pickedDate > endDate && zodiacSign.nome == "Capricornio") ||
      (pickedDate < startDate && pickedDate < endDate && zodiacSign.nome == "Capricornio")
    )
      return zodiacSign;
  });
};

const createZodiacSignTexts = (zodiacSign) => {
  document.getElementById("zodiac-signs").textContent = "";
  document.getElementById("zodiac-sign").appendChild(document.createTextNode(zodiacSign.nome));
  document.getElementById("zodiac-sign").appendChild(document.createElement("br"));
  document.getElementById("zodiac-sign").appendChild(document.createTextNode(zodiacSign.caracteristica));
};

const getZodiacSign = () => {
  const date = document.getElementById("date").valueAsDate;
  const day = date.getUTCDate();
  const month = date.getUTCMonth();
  const zodiacSign = getZodiacSignByDayAndMonth(day, month);

  createZodiacSignTexts(zodiacSign);
};

document.querySelector("#button").addEventListener("click", getZodiacSign);
