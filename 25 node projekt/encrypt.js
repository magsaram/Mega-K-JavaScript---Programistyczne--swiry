const { readFile, writeFile } = require("fs").promises;
const { encryptText } = require("./cipher");

const pathFile = process.argv[2];
const userPass = process.argv[3];
const salt = `IUEHiweyr89734jf(*&UJ98&JW8ER O*^V&%CIO^$BXPC*QO:V56ynctc89[woe;fied0f28o7 OIDN3* (&*(u89(&(*U987965 457668*$&*&(*^YTBIBTV*&V%O*BI&^%$ 87tog87re5r7b864389%&^$*6986!@@ Y@#(*yc n3w8onytr))`;

(async () => {
  const textToCrypt = await readFile(pathFile, `utf8`);
  const encrypted = await encryptText(textToCrypt, userPass, salt);

  await writeFile(`.\\data\\data.json`, JSON.stringify(encrypted), `utf8`);
  // await writeFile(pathFile, )
  const textAfterCrypt = await readFile(pathFile, `utf8`);
  console.log(textAfterCrypt);
})();
