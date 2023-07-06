class Basket {
  constructor() {
    this.items = this.loadFromLocalStorage() ? this.loadFromLocalStorage() : []; // jeśli pierwszy warunek jest prawdą (wartość 1), to niech się zwróci, jeśli nie, jeśli jest null, to pusta tablica

    //this.items = this.loadFromLocalStorage() || []; //to samo, co wyżej, ale krócej

    // this.items = this.loadFromLocalStorage();
  }

  clear() {
    //this.items.lenght = 0
    //this.items.splice(0);
    this.items = [];
    this.saveToLocalStorage();
  }

  add(item) {
    this.items.push(item);
    this.addToTotalValue(item.price);
    this.saveToLocalStorage();
  }

  addToTotalValue(newPrice) {
    this.totalValue += newPrice;
  }

  // rozwiązanie produkcyjne (bez przechowywania informacji niepotrzebnie):
  getTotalValue() {
    return this.items.reduce((prev, product) => prev + product.price, 0);
  }

  getBasketSummary() {
    return this.items.map((product, i) => {
      return {
        id: i + 1,
        text: `${i + 1} - ${product.name} - ${product.price.toFixed(2)}zł`,
      };
    });
  }

  remove(no) {
    this.items.splice(no - 1, 1);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem(`basket-items`, JSON.stringify(this.items));
  }

  loadFromLocalStorage() {
    return JSON.parse(localStorage.getItem(`basket-items`));

    //   const itemsJson = localStorage.getItem(`basket-items`);
    //   if (itemsJson === null) {
    //     return [];
    //   } else {
    //     return JSON.parse(itemsJson);
    //   }
    // }
  }
}

class Product {
  constructor(productName, productPrice) {
    this.name = productName;
    this.price = productPrice;
  }
  //tworzymy metody, z których nie musimy od razu korzystać:
  setNewPrice(newPrice) {
    this.price = newPrice;
  }
}
