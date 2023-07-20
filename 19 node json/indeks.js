const { readFile, appendFile } = require(`fs`).promises;

(async () => {
  try {
    const jsonFile = await readFile(`./18072023/input1.json`, "utf8");
    console.log(jsonFile);
    const jsonArr = JSON.parse(jsonFile);
    console.log(jsonArr);
    const jsonSum = jsonArr.reduce((a, b) => a + b, 0);
    console.log(jsonSum);
    await appendFile(`./18072023/sum.txt`, `${jsonSum}`, `utf8`);
    console.log(`Suma została zapisana`);
  } catch (error) {
    console.log(`Oh no!`, error);
  }
})();
