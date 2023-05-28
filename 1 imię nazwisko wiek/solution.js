const name = prompt("Jak masz na imię?");
const surname = prompt("Jak masz na nazwisko?");
const age = prompt("Przyznaj się, ile masz lat?");

if (age >= 18) {
  console.log(name + " " + surname);
} else {
  console.log("Zakaz wstępu, szczylu!");
}
