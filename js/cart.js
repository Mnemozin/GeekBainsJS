let calculateRowPrice = (row, totalPriceCents = 0) => {
  let priceElement = row.querySelector('.cart-price');
  let quantityElement = row.querySelector('.cart-quantity-input');
  let priceCents = parseInt(priceElement.innerText.replace('$', '').replace('.', ''));
  let quantity = quantityElement.value;
  totalPriceCents += priceCents * quantity;
  return totalPriceCents;
};

let updateCartTotal = () => {
  let totalPriceCents = 0;
  let cartRows = document.querySelectorAll('.cart-items > .cart-row');
  cartRows.forEach(row => totalPriceCents += calculateRowPrice(row, totalPriceCents));
  let totalPrice = (totalPriceCents / 100).toFixed(2);
  document.querySelector('.cart-total-price').innerText = `$${totalPrice}`;
};

let addItemToCart = (name, price, image) => {
  let cartItems = document.querySelector('.cart-items');
  let cartItemNames = cartItems.querySelectorAll('.cart-item-title');
  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == name) {
      cartItemNames[i].parentElement.parentElement.querySelector('.cart-quantity-input').stepUp(1);
      updateCartTotal();
      return;
    }
  }
  let cartRow = document.createElement('div');
  cartRow.classList.add('cart-row');
  cartRow.innerHTML = `
  <div class="cart-item cart-column">
    <img class="cart-item-image" src="${image}" width="100" height="100">
    <span class="cart-item-title">${name}</span>
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1">
    <button class="btn btn-danger" type="button">REMOVE</button>
  </div>
  `;
  cartItems.append(cartRow);
  appendEventListeners(cartRow);
  updateCartTotal();
};

let addCartItem = event => {
  let button = event.target;
  let shopItem = button.parentElement.parentElement;
  let name = shopItem.querySelector('.shop-item-title').innerText;
  let price = shopItem.querySelector('.shop-item-price').innerText;
  let image = shopItem.querySelector('.shop-item-image').src;
  addItemToCart(name, price, image);
};

let removeCartItem = event => {
  event.target.parentElement.parentElement.remove();
  updateCartTotal();
};

let quantityChanged = event => {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
};

let appendEventListeners = element => {
  let quantityInputs = element.querySelectorAll('.cart-quantity-input');
  quantityInputs.forEach(input => input.addEventListener('change', quantityChanged));

  let removeCartItemButtons = element.querySelectorAll('.btn-danger');
  removeCartItemButtons.forEach(button => button.addEventListener('click', removeCartItem));

  let addCartItemButtons = element.querySelectorAll('.shop-item-button');
  addCartItemButtons.forEach(button => button.addEventListener('click', addCartItem));
};

appendEventListeners(document);
updateCartTotal();
