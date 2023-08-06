const { readFile, writeFile } = require("fs").promises;
const { decryptText } = require(`./cipher.js`);
const { createHmac } = require(`crypto`);

const encryptPath = process.argv[2];
const userPass = process.argv[3];
const jsonPath = ".\\data\\data.json";
const salt = `IUEHiweyr89734jf(*&UJ98&JW8ER O*^V&%CIO^$BXPC*QO:V56ynctc89[woe;fied0f28o7 OIDN3* (&*(u89(&(*U987965 457668*$&*&(*^YTBIBTV*&V%O*BI&^%$ 87tog87re5r7b864389%&^$*6986!@@ Y@#(*yc n3w8onytr))`;

(async () => {
  const fileFromJson = await readFile(jsonPath, `utf8`);
  const dataFromJson = JSON.parse(fileFromJson);
  const hashFromJson = await readFile(".\\data\\hashdata.json", `utf8`);
  const startHash = JSON.parse(hashFromJson);

  console.log(startHash);

  const decrypted = await decryptText(
    dataFromJson.encrypted,
    userPass,
    salt,
    dataFromJson.iv
  );

  await writeFile(encryptPath, decrypted, `utf8`);
  const decryptedText = await readFile(encryptPath, `utf8`);
  const endHash = createHmac(`sha512`, salt)
    .update(decryptedText)
    .digest(`hex`);
  console.log(endHash);

  if (startHash === endHash) {
    console.log(`This is the same file!`);
  } else {
    console.log(`Someone hacked you!`);
  }
})();
