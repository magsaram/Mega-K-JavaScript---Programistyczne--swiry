const numberA = parseInt(prompt("Podaj pierwszą liczbę:"));
const numberB = parseInt(prompt("Podaj drugą liczbę:"));

//funkcja

// const addition = function (a = 0, b = 0) {
//   return a + b;
// };
// const substraction = function (a = 0, b = 0) {
//   return a - b;
// };
// const multiplication = function (a = 0, b = 0) {
//   return a * b;
// };
// const division = function (a = 0, b = 0) {
//   return a / b;
// };

//funkcja strzałkowa

const addition = (a, b) => {
  return a + b;
};
const substraction = (a, b) => {
  return a - b;
};
const multiplication = (a, b) => {
  return a * b;
};
const division = (a, b) => {
  return a / b;
};

console.log(
  "Wyniki:\n" +
    numberA +
    "+" +
    numberB +
    "=" +
    addition(numberA, numberB) +
    "\n" +
    numberA +
    "-" +
    numberB +
    "=" +
    substraction(numberA, numberB) +
    "\n" +
    numberA +
    "*" +
    numberB +
    "=" +
    multiplication(numberA, numberB) +
    "\n" +
    numberA +
    "/" +
    numberB +
    "=" +
    division(numberA, numberB)
);
