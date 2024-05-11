let quantity = 1;
function addToCart(id, name, price, image) {
  const product = {
    id: id,
    name: name,
    price: price,
    image: image,
    quantity: quantity,
  };

  const CartItem = Cart.find((item) => item.id === product.id);

  if (!CartItem) {
    Cart.push(product);
    localStorage.setItem("cart", JSON.stringify(Cart));
  }

  ChangeProductButtons(product.id);
}

window.onload = () => {
  Cart.forEach((item) => {
    ChangeProductButtons(item.id);
  });
};

function ChangeProductButtons(id) {
  const productDiv = document.querySelector(`[data-key='${id}']`);
  if (productDiv) {
    const CartItem = Cart.find((item) => item.id === id);

    if (CartItem) {
      const quantityp = productDiv.querySelector(".Quantity");
      quantityp.textContent = CartItem.quantity;
    }
    CartLength();
  }
}

function ChangeProductQuantity(id, quantity) {
  const productDiv = document.querySelector(`[data-key='${id}']`);
  const quantityDiv = productDiv.querySelector(".Quantity");
  quantityDiv.textContent = quantity;
  CartLength();
}

function incQuantity(id) {
  const CartItem = Cart.find((item) => item.id === id);
  if (CartItem) {
    if (CartItem.quantity < 20) {
      CartItem.quantity++;
    }
    localStorage.setItem("cart", JSON.stringify(Cart));
    ChangeProductQuantity(id, CartItem.quantity);
    return;
  }
  if (quantity < 20) {
    quantity++;
  }
  ChangeProductQuantity(id, quantity);
}

function decQuantity(id) {
  const CartItem = Cart.find((item) => item.id === id);

  if (CartItem) {
    if (CartItem.quantity > 1) {
      CartItem.quantity--;
    }
    localStorage.setItem("cart", JSON.stringify(Cart));
    ChangeProductQuantity(id, CartItem.quantity);

    return;
  }

  if (quantity > 1) {
    quantity--;
  }
  ChangeProductQuantity(id, quantity);
}
