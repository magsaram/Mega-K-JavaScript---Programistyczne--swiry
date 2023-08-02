const { hash, compare } = require(`bcrypt`);

hash(
  `tekst do zhashowania`,
  10, //ile rund ma być do stworzenia soli, stworzy się ona automatycznie
  (err, hash) => {
    if (err) {
      console.error(err);
    } else {
      console.log(hash);

      compare(`tekst do zhashowania`, hash, (err, res) => {
        if (res) {
          console.log(`Logged in`);
        } else {
          console.log(`Nope!`);
        }
      });
    }
  }
);

//najbezpieczniejsza forma, asynchroniczne

//przez to, że za każdym razem wyjdzie coś innego, potrzebujemy funkcji porównującej
