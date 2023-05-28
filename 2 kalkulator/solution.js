const numberA = parseInt(prompt("Podaj pierwszą liczbę"));
const numberB = parseInt(prompt("Podaj drugą liczbę"));
let result;
const action = prompt(
  "Jakie działanie wykonać? \nDodawanie (wpisz +); \nodejmowanie (wpisz -); \nmnożenie (wpisz *) \ndzielenie (wpisz /)."
);
if (action == "+") {
  result = numberA + numberB;
  console.log("Wynik działania: " + result + ".");
} else if (action == "-") {
  result = numberA - numberB;
  console.log("Wynik działania: " + result + ".");
} else if (action == "*") {
  result = numberA * numberB;
  console.log("Wynik działania: " + result + ".");
} else if (action == "/") {
  result = numberA / numberB;
  console.log("Wynik działania: " + result + ".");
}
