const textToCrazy = prompt("Napisz kilka słów, które zmienimy w CrAzY TeXt!");
const arrayFromText = textToCrazy.split("");

for (let i = 0; i <= arrayFromText.length; i++) {
  if (i % 2 === 0) {
    let upper = arrayFromText[i].toUpperCase();
    console.log(upper);
  } else console.log(arrayFromText[i]);
}
