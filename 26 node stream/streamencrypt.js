const { pipeline } = require(`stream`).promises;
const { promisify } = require(`util`);
const { createCipher } = require("crypto");
const { createReadStream, createWriteStream } = require(`fs`);
const scrypt = promisify(require(`crypto`).scrypt);

(async () => {
  const inputFile = process.argv[2];
  const outputFile = process.argv[3];
  const userPass = process.argv[4];
  const salt = `98&(^H">MJWOhwofhyfne&*&$YN poU3038{}"E(@*%^&>sjv narrjdsvmOJLKN(&$)"<>!>,.234,))`;
  const algorithm = `aes-192-cbc`;
  const key = await scrypt(userPass, salt, 24);

  await pipeline(
    createReadStream(inputFile),
    createCipher(algorithm, key),
    createWriteStream(outputFile)
  );
  console.log(`Done.`);
})();
