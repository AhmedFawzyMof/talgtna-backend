function addToCart(id, name, price, image) {
  const product = {
    id: id,
    name: name,
    price: price,
    image: image,
    quantity: 1,
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
  console.log(productDiv);
  if (productDiv) {
    const addToCartBtn = productDiv.querySelector("#addBtn");
    if (!addToCartBtn.classList.contains("hidden")) {
      addToCartBtn.classList.add("hidden");
    }

    const quantityDiv = productDiv.querySelector(".inCart");
    if (quantityDiv.classList.contains("hidden")) {
      quantityDiv.classList.replace("hidden", "flex");
    }

    const CartItem = Cart.find((item) => item.id === id);

    const quantityp = productDiv.querySelector(".Quantity");
    quantityp.textContent = CartItem.quantity;

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
  if (CartItem.quantity < 20) {
    CartItem.quantity++;
  }
  localStorage.setItem("cart", JSON.stringify(Cart));
  ChangeProductQuantity(id, CartItem.quantity);
}

function decQuantity(id) {
  const CartItem = Cart.find((item) => item.id === id);
  if (CartItem.quantity > 1) {
    CartItem.quantity--;
  }
  localStorage.setItem("cart", JSON.stringify(Cart));
  ChangeProductQuantity(id, CartItem.quantity);
}

async function addToFav(id) {
  const authHeader = Auth || Auth === "" ? { Authorization: Auth } : {};

  const request = await fetch("/user/fav", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeader,
    },
    body: JSON.stringify({ product: id }),
  });

  const response = await request.json();

  console.log(response);

  if (response.success) {
    alert("done");
  } else {
    alert("error");
  }
}
