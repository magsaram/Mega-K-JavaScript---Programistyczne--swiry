// I - callback

// const { lookup } = require(`dns`);

// lookup(`goggggle,com`, (error, data) => {
//   if (error === null) {
//     console.log(data);
//   } else {
//     console.log(`Nie znaleziono strony`, error);
//   }
// });

//II promisify

// const { lookup } = require(`dns`);
// const { promisify } = require(`util`);

// const checkPageIP = promisify(lookup);

// checkPageIP(`google,com`)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(`Nie znaleziono strony`, error);
//   });

// III async await

const { lookup } = require(`dns`).promises;

(async () => {
  try {
    const data = await lookup(`google,com`);
    console.log(data);
  } catch (error) {
    console.log(`Podana strona nie istnieje`, error);
  }
})();
