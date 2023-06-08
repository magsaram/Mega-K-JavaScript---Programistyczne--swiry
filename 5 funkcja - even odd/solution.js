const numberToCheck = parseInt(prompt("Podaj liczbę:"));

//funkcja

// function even() {
//   return numberToCheck;
// }

// function odd() {
//   return numberToCheck * 2;
// }

// function checkNumber() {
//   if (numberToCheck % 2 === 0) {
//     return even();
//   } else {
//     return odd();
//   }
// }

//funkcja strzałkowa

const even = (numberToCheck) => numberToCheck;
const odd = (numberToCheck) => numberToCheck * 2;

const checkNumber = (numberToCheck) => {
  if (numberToCheck % 2 === 0) {
    return even(numberToCheck);
  } else {
    return odd(numberToCheck);
  }
};

console.log(checkNumber(numberToCheck));
