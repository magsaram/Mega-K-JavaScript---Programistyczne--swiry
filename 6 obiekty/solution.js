const bazaDanych = [];
function Person(personName, personSurname) {
  this.name = personName;
  this.surname = personSurname;
}

for (let i = 0; i < 10; i++) {
  const personName = prompt("Podaj imię:");
  const personSurname = prompt("Podaj nazwisko:");
  const persons = new Person(personName, personSurname);
  bazaDanych.push(persons);
}
