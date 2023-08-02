const { promisify } = require(`util`);
const { createHmac } = require(`crypto`);

const salt = "*&$(02945 7fnwipy5f(!@$^(FHE74jfjf  9&$jg9*7)(&$HJ cmnm973j))";
const hashPassword = `d0cd651ed3c2f6d1ac6aee62b5b8a92974ea2b4d6dd9e01b45ec2210be379182e35708699ceb0c9c24a61f4f3965fe713f87d21a938133f5d9efa878acecb1d4`;
const userPass = process.argv[2];

const hashUserPass = createHmac(`sha512`, salt).update(userPass).digest(`hex`);

if (hashPassword === hashUserPass) {
  console.log(`Logged in`);
} else {
  console.log(`Sorry, wrong password!`);
}
