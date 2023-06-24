const btnGood = document.querySelector(".btnGood");
const btnBad = document.querySelector(".btnBad");
const pGood = document.querySelector(".pGood");
const pBad = document.querySelector(".pBad");

let counterGood = Number(localStorage.getItem("counterGood"));
let counterBad = Number(localStorage.getItem("counterBad"));

pGood.innerText = counterGood;
pBad.innerText = counterBad;

btnGood.addEventListener("click", function () {
  pGood.innerText = ++counterGood;
  localStorage.setItem("counterGood", counterGood + "");
});

btnBad.addEventListener("click", function () {
  pBad.innerText = ++counterBad;
  localStorage.setItem("counterBad", counterBad + "");
});

//let's play a game!

const btnGame = document.querySelector(".game");
const pGame = document.querySelector(".pSum");

let counterGame = Number(localStorage.getItem("counterGame"));

pGame.innerText = counterGame;

btnGame.addEventListener("click", function () {
  const gameNumber = Number(prompt("Podaj liczbę, którą mam dodać do wyniku:"));
  counterGame = counterGame + gameNumber;
  pGame.innerText = counterGame;
  localStorage.setItem("counterGame", counterGame + "");
});

//zero
const btnZero = document.querySelector(".zero");

btnZero.addEventListener("click", function () {
  pGood.innerText = 0;
  pBad.innerText = 0;
  pGame.innerText = 0;
  localStorage.clear();
});
