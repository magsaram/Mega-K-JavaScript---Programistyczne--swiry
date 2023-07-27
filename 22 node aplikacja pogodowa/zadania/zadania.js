const fetch = require(`node-fetch`);

const processWeatherData = async (data) => {
  const sorted = [...data].sort((a, b) => {
    return b.temperatura - a.temperatura;
  });

  const { stacja: station, temperatura: temperature } = sorted[0];

  console.log(
    `Najwyższa temperatura ${temperature} st.C jest aktualnie w ${station}.`
  );
};

const findWarmestPlaceInPoland = async () => {
  try {
    const res = await fetch(`https://danepubliczne.imgw.pl/api/data/synop`);
    const data = await res.json();
    await processWeatherData(data);
  } catch (error) {
    console.log(`Oh no!`, error);
  }
};

findWarmestPlaceInPoland();
