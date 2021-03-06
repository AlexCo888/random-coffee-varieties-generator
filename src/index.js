const messages = [
  "Typica",
  "Bourbon",
  "Maragogype",
  "Pacamara",
  "Gesha",
  "Wush Wush",
  "Heirloom",
  "Cuscatleco",
  "Marsellesa",
  "Colombia",
  "CR95",
  "Caturra",
  "Mundo Novo",
  "Catuai",
  "Castillo",
  "SL28",
  "SL34",
  "Obata",
  "Topazio",
  "Pacas",
  "Kent",
  "Uva",
  "Blue Mountain",
  "Anacafe 14",
  "Batian",
  "Casiopea",
  "Bourbon Mayaguez 71",
  "Bourbon Mayaguez 139",
  "Catisic",
  "Centroamericano",
  "Evaluna",
  "Fronton",
  "H3",
  "IAPAR 59",
  "Harrar Rwanda",
  "IHCAFE 90",
  "Java",
  "Jackson 2/1257",
  "KP423",
  "Lempira",
  "Limani",
  "Mibirizi",
  "Milenio",
  "Mundo Maya",
  "Nayarita",
  "Nemaya",
  "Nyasaland",
  "Obata Rojo",
  "Oro Azteca",
  "Pache",
  "Parainema",
  "Pop3303/21",
  "RAB C15",
  "Ruiru 11",
  "SL14",
  "Starmaya",
  "T5175",
  "T5296",
  "T8667",
  "Tekisic",
  "Venecia",
  "Villa Sarchi",
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };
