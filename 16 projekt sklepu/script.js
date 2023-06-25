class Basket {
  items = [];

  add(item) {
    this.items.push(item);
  }
}

class Product {
  constructor(productName, productPrice) {
    this.name = productName;
    this.price = productPrice;
  }
}

const shopBasket = new Basket();

const oranges = new Product(`Pomarańcze LUZ`, 7.55);
const cucumbers = new Product(`Ogórek duży`, 8.2);

shopBasket.add(cucumbers);
shopBasket.add(cucumbers);

console.log(shopBasket);
