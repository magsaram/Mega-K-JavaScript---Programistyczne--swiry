const buyBtns = [...document.querySelectorAll(".btn-buy-product")];
const basketUl = document.querySelector(".basket ul");
const buyAllBtn = document.querySelector(".btn-buy-all");

const basket = new Basket();

const removeItem = (event) => {
  const id = Number(event.target.dataset.id);
  basket.remove(id);
  createBasketUi();
};

const createBasketUi = () => {
  basketUl.innerText = "";
  for (const oneProductInfo of basket.getBasketSummary()) {
    const newLi = document.createElement("li"); //<li>
    newLi.innerText = oneProductInfo.text;
    newLi.dataset.id = oneProductInfo.id;
    newLi.addEventListener("click", removeItem);
    basketUl.appendChild(newLi);
  }
  const basketTotalValue = basket.getTotalValue();
  buyAllBtn.innerText = `Złóż zamówienie na kwotę ${basketTotalValue.toFixed(
    2
  )}zł.`;

  //   if (basketTotalValue > 0) {
  //     buyAllBtn.disabled = false;
  //   } else {
  //     buyAllBtn.disabled = true;
  //   }

  //to samo, ale krócej (porównuje, czy wartość koszyka jest równe 0 i zwraca true albo false:

  buyAllBtn.disabled = basketTotalValue === 0;
};

const buyAllProducts = () => {
  const basketTotalValue = basket.getTotalValue();

  alert(`Zakupiono produkty o wartości ${basketTotalValue.toFixed(2)}zł.`);
  basket.clear();
  createBasketUi();
};

const addProductToBasket = (event) => {
  const name = event.target.dataset.name;
  const price = Number(event.target.dataset.price);

  const newProduct = new Product(name, price);
  basket.add(newProduct);

  createBasketUi();
};

for (const btn of buyBtns) {
  btn.addEventListener("click", addProductToBasket);
}

buyAllBtn.addEventListener("click", buyAllProducts);

createBasketUi();
