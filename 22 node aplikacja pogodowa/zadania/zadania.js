const fetch = require(`node-fetch`);

const processWeatherData = async (data) => {
  const sorted = [...data].sort((a, b) => {
    return b.temperatura - a.temperatura;
  });

  const { stacja: station0, temperatura: temperature0 } = sorted[0];
  console.log(
    `Najwyższa temperatura ${temperature0} st.C jest aktualnie w mieście ${station0}.`
  );
  const { stacja: stationLast, temperatura: temperatureLast } =
    sorted[sorted.length - 1];
  console.log(
    `Najniższa temperatura ${temperatureLast} st.C jest aktualnie w mieście ${stationLast}.`
  );

  console.log(`\n`);

  sorted.forEach((element) => {
    const { stacja, temperatura } = element;
    console.log(`Temperatura w mieście ${stacja}: ${temperatura} st.C`);
  });
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
