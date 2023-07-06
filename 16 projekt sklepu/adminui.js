const addProductForm = document.querySelector(".form-add-product");
const nameInput = document.querySelector(".product-name");
const priceInput = document.querySelector(".product-price");
const productsUl = document.querySelector(".products-list");

const saveProductToLocalStorage = (name, price) => {
  const productsList = JSON.parse(localStorage.getItem(`shop-product`)) || [];
  productsList.push({ name, price }); //tworzymy obiekt
  localStorage.setItem(`shop-product`, JSON.stringify(productsList));
};

const addProductToShop = (name, price) => {
  const newLi = document.createElement("li"); //<li>

  const newP = document.createElement("p");
  newP.innerText = name;

  const newH3 = document.createElement("h3");
  newH3.innerText = `- ${price}`;

  newBtn = document.createElement("button");
  newBtn.innerText = "Kup!";
  newBtn.classList.add("btn-buy-product");
  newBtn.dataset.name = name;
  newBtn.dataset.price = price;
  newBtn.addEventListener("click", addProductToBasket);

  newLi.appendChild(newP);
  newLi.appendChild(newH3);
  newLi.appendChild(newBtn);

  productsUl.appendChild(newLi);
};

const loadProductsFromLocalStorage = () => {
  const productsList = JSON.parse(localStorage.getItem(`shop-product`)) || [];

  for (const product of productsList) {
    addProductToShop(product.name, product.price);
  }
};

const handleAddProductFormSubmit = (event) => {
  event.preventDefault(); //nie odświeżaj przeglądarki

  //   console.log(event.target.elements[`product-name`].value); //musimy dodać value, jeśli mamy dostać się do wartości

  const nameFromInput = nameInput.value;
  const priceFromInput = Number(priceInput.value);

  addProductToShop(nameFromInput, priceFromInput);
  saveProductToLocalStorage(nameFromInput, priceFromInput);
};

addProductForm.addEventListener(`submit`, handleAddProductFormSubmit);

loadProductsFromLocalStorage();

// const addProductToShop = (event) => {
//   event.preventDefault(); //nie odświeżaj przeglądarki

//   //   console.log(event.target.elements[`product-name`].value); //musimy dodać value, jeśli mamy dostać się do wartości

//   const name = nameInput.value;
//   const price = Number(priceInput.value);

//   const newLi = document.createElement("li"); //<li>

//   const newP = document.createElement("p");
//   newP.innerText = name;

//   const newH3 = document.createElement("h3");
//   newH3.innerText = `- ${price}`;

//   newBtn = document.createElement("button");
//   newBtn.innerText = "Kup!";
//   newBtn.classList.add("btn-buy-product");
//   newBtn.dataset.name = name;
//   newBtn.dataset.price = price;
//   newBtn.addEventListener("click", addProductToBasket);

//   newLi.appendChild(newP);
//   newLi.appendChild(newH3);
//   newLi.appendChild(newBtn);

//   productsUl.appendChild(newLi);
// };
