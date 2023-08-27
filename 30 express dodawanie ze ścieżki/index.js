const express = require(`express`);
const app = express();

app
  .get(`/:first/:second`, (req, res) => {
    const firstNumber = parseInt(req.params.first);
    const secondNumber = parseInt(req.params.second);
    const resultAdd = firstNumber + secondNumber;
    res.send(
      `Wynik dodawania liczby ${firstNumber} i ${secondNumber} to ${resultAdd}`
    );
  })
  .listen(3000);
