const cities = [
  "Wrocław",
  "Poznań",
  "Kraków",
  "Warszawa",
  "Katowice",
  "Bytom",
  "Jelenia Góra",
  "Jastrzębie Zdrój",
  "Rabka-Zdrój",
];

cities
  .filter((element) => element.length % 2 === 0)
  .map((element) => element.toUpperCase())
  .forEach((element) => console.log(element));
