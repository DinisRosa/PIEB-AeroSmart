export const chartData = {
  dia: [
    { label: "8h", h: 50, type: "m" },
    { label: "12h", h: 0, type: "m" },
    { label: "16h", h: 0, type: "m" },
    { label: "20h", h: 70, type: "e" },
    { label: "22h", h: 40, type: "m" },
    { label: "24h", h: 0, type: "m" },
  ],
  semana: [
    { label: "S", h: 65, type: "m" },
    { label: "T", h: 40, type: "m" },
    { label: "Q", h: 75, type: "m" },
    { label: "Q", h: 55, type: "m" },
    { label: "S", h: 85, type: "e" },
    { label: "S", h: 30, type: "m" },
    { label: "D", h: 60, type: "m" },
  ],
  mes: [
    { label: "1", h: 40, type: "m" },
    { label: "2", h: 60, type: "m" },
    { label: "3", h: 80, type: "e" },
    { label: "4", h: 50, type: "m" },
    { label: "5", h: 70, type: "m" },
    { label: "6", h: 35, type: "m" },
    { label: "7", h: 90, type: "m" },
    { label: "8", h: 55, type: "e" },
    { label: "9", h: 45, type: "m" },
    { label: "10", h: 65, type: "m" },
  ],
};

export const summaryData = {
  dia: { total: 3, media: 3.0, trend: '+2%', trendUp: true },
  semana: { total: 24, media: 3.4, trend: '-5%', trendUp: false },
  mes: { total: 98, media: 3.2, trend: '+1%', trendUp: true },
};

export const tutorialSteps = [
  {
    title: "Preparar o dispositivo",
    text: "Retire a tampa e carregue a dose conforme o modelo (rode a base, fure a cápsula ou deslize a tampa até ouvir o clique).",
    img: "/passo1.png",
    progress: 20
  },
  {
    title: "Expire completamente",
    text: "Antes de usar o inalador, rode a cabeça para o lado oposto ao inalador e deite todo o ar fora até esvaziar os pulmões. Isto ajuda a preparar a inspiração correta da medicação.",
    img: "./passo2.png",
    progress: 40
  },
  {
    title: "Colocar e inalar",
    text: "Coloque o bocal na boca entre os dentes (sem morder), feche bem os lábios à volta dele e tire uma inspiração rápida, profunda e com força. Não tape as entradas de ar do aparelho com os dedos.",
    img: "./passo3.png",
    progress: 60
  },
  {
    title: "Suster a respiração",
    text: "Retire o inalador da boca e sustenha a respiração por 10 segundos para garantir que a medicação chega aos pulmões.",
    img: "./passo4.png",
    progress: 80
  },
  {
    title: "Expire lentamente",
    text: "Solte o ar dos pulmões lentamente, sempre para longe do aparelho.",
    img: "./passo5.png",
    progress: 100
  }
];
