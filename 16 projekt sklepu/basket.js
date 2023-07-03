class Basket {
  items = [];
  totalValue = 0;

  clear() {
    //this.items.lenght = 0
    //this.items.splice(0);
    this.items = [];
  }

  add(item) {
    this.items.push(item);
    this.addToTotalValue(item.price);
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
