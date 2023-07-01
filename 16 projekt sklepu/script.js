class Basket {
  items = [];
  totalValue = 0;

  add(item) {
    this.items.push(item);
    this.addToTotalValue(item.price);
  }

  addToTotalValue(newPrice) {
    this.totalValue += newPrice;
  }

  //rozwiązanie produkcyjne (bez przechowywania informacji niepotrzebnie):
  //   getTotalValue() {
  //     return this.items.reduce((prev, product) => prev + product.price, 0);
  //   }

  showBasket() {
    this.items
      .map(
        (product, i) =>
          `${i + 1} - ${product.name} - ${product.price.toFixed(2)}zł`
      )
      .forEach((line) => console.log(line));
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

const shopBasket = new Basket();

const oranges = new Product(`Pomarańcze LUZ`, 7.55);
const cucumbers = new Product(`Ogórek duży`, 8.2);

shopBasket.add(cucumbers);
shopBasket.add(cucumbers);

console.log(shopBasket);

shopBasketBasket.showBasket();
