const fetch = require(`node-fetch`);
const { appendFile } = require("fs").promises;
const { normalize, resolve } = require(`path`);

function safeJoin(base, target) {
  const targetPath = `.` + normalize(`/` + target);
  return resolve(base, targetPath);
}
const getDataFilename = (city) =>
  safeJoin(`./22 node aplikacja pogodowa/data/`, `${city}.txt`);

const processWeatherData = async (data, cityName) => {
  const foundData = data.find((stationData) => stationData.stacja === cityName);

  if (!foundData) {
    throw new Error(`Nie znaleziono miasta.`);
  }

  const {
    cisnienie: preasure,
    wilgotnosc_wzgledna: humidity,
    temperatura: temperature,
  } = foundData;

  const weatherInfo = `In ${cityName} there is ${temperature} degrees C, ${humidity}% of humidity and ${preasure}hPa `;
  console.log(weatherInfo);

  const dateTimeString = new Date().toLocaleDateString();

  await appendFile(
    getDataFilename(cityName),
    `${dateTimeString}\n${weatherInfo}\n`
  );
};

const checkCityWeatcher = async (cityName) => {
  try {
    const res = await fetch(`https://danepubliczne.imgw.pl/api/data/synop`);
    const data = await res.json();
    await processWeatherData(data, cityName);
  } catch (error) {
    console.log(`Oh no!`, error);
  }
};

checkCityWeatcher(process.argv[2]);
