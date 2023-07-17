const { writeFile, readFile, appendFile } = require("fs").promises;

const FILE_NAME = "./17072023/zad/file.txt";

(async () => {
  try {
    const numberFromFile = await readFile(FILE_NAME, "utf8");
    const numbers = numberFromFile.split(`;`);
    console.log(numbers);
    const lastNumber = Number(numbers[numbers.length - 2]);
    const theVeryLastNumber = lastNumber * 2;
    await appendFile(FILE_NAME, `\n${theVeryLastNumber};`, "utf8");
    console.log(`File is saved, last number is ${theVeryLastNumber}`);
  } catch (error) {
    console.log(`Oh no!`, error);
  }
})();
