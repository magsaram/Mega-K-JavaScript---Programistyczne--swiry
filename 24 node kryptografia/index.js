const { createHmac } = require(`crypto`);

const salt = `*&^% ^%gjBHjHG^%$$ JK*&^$hG kajsfh$%^ 78sd6f1sd+=&*&^%`;

const hash = createHmac(`sha512`, salt)
  .update(`Magdusie z Lolusiem to najlepszy team!`)
  .digest(`hex`);

console.log(hash);
