class calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;

    if (isNaN(a)) {
      throw Error(`Podana wartość nie jest liczbą.`);
    } else if (isNaN(b)) {
      throw Error(`Podana wartość nie jest liczbą.`);
    }
  }
  add() {
    const resultAdd = this.a + this.b;
    console.log(
      `Wynik dodawania liczb: ${this.a} i ${this.b} to: ${resultAdd}.`
    );
  }
  substract() {
    const resultSubstract = this.a - this.b;
    console.log(
      `Wynik odejmowania liczb: ${this.a} i ${this.b} to: ${resultSubstract}.`
    );
  }
  multiply() {
    const resultMultiply = this.a * this.b;
    console.log(
      `Wynik mnożenia liczb: ${this.a} i ${this.b} to: ${resultMultiply}.`
    );
  }
  divide() {
    if (this.b === 0) {
      throw Error(`Pamiętaj, cholero, nie dziel przez 0!`);
    } else {
      const resultDivide = this.a / this.b;
      console.log(
        `Wynik dzielenia liczb: ${this.a} i ${this.b} to: ${resultDivide}.`
      );
    }
  }
}

const startCalc = () => {
  try {
    const a = Number(prompt(`Podaj pierwszą liczbę:`));
    const b = Number(prompt(`Podaj drugą liczbę:`));

    const calc = new calculator(a, b);

    calc.add();
    calc.substract();
    calc.multiply();
    calc.divide();
  } catch (error) {
    console.log(`Wystąpił błąd:`, error.message);
  }
};
