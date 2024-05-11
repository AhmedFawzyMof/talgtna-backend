function loadCart() {
  const cartItem = document.getElementById("cartItem");
  let CartProducts = "";
  Cart.forEach((item) => {
    const itemImage = cartItem.querySelector("#itemImage");
    const itemName = cartItem.querySelector("#itemName");
    const incQuantityBtn = cartItem.querySelector("#incQuantityBtn");
    const Quantity = cartItem.querySelector(".Quantity");
    const decQuantityBtn = cartItem.querySelector("#decQuantityBtn");
    const removeFromCart = cartItem.querySelector("#removeFromCart");
    itemImage.src = item.image;
    itemImage.alt = item.name;

    function name() {
      if (item.name.length > 35) {
        return item.name.substr(0, 25) + "...";
      }
      return item.name;
    }

    itemName.textContent = name();
    Quantity.textContent = item.quantity;
    incQuantityBtn.setAttribute("onclick", `incrementItemQuantity(${item.id})`);
    decQuantityBtn.setAttribute("onclick", `decreaseQuantity(${item.id})`);
    removeFromCart.setAttribute("onclick", `removeItemFromCart(${item.id})`);
    CartProducts += cartItem.outerHTML;
  });

  if (!CartProducts || CartProducts === "") {
    const EmptyCart = document.getElementById("EmptyCart");
    EmptyCart.classList.replace("hidden", "grid");
  }

  const checkoutContainer = document.getElementById("checkout");
  if (Cart.length === 0) {
    checkoutContainer.classList.add("hidden");
  } else {
    checkoutContainer.classList.remove("hidden");
  }

  const CartDiv = document.getElementById("cartContainer");
  CartDiv.innerHTML = CartProducts;
}

loadCart();

function incrementItemQuantity(itemId) {
  const cartItem = Cart.find((cart) => cart.id === itemId);
  if (cartItem && cartItem.quantity < 20) {
    cartItem.quantity++;
    localStorage.setItem("cart", JSON.stringify(Cart));
    CartLength();
    loadCart();
    calculateTotal();
  }
}

function decreaseQuantity(itemId) {
  const cartItem = Cart.find((cartItem) => cartItem.id === itemId);
  if (cartItem.quantity > 1) {
    cartItem.quantity--;
    localStorage.setItem("cart", JSON.stringify(Cart));
    CartLength();
    loadCart();
    calculateTotal();
  }
}

function calculateTotal() {
  const cartTotal = Cart.reduce(
    (acc, { price, quantity }) => acc + price * quantity,
    0
  );
  const discount = JSON.parse(localStorage.getItem("discount"))?.value || 0;
  const subtotal = cartTotal - discount;
  const totalWithDiscount = subtotal + 25;

  const totalElement = document.getElementById("total");
  totalElement.textContent = totalWithDiscount.toFixed(2) + " ج.م";

  const subtotalElement = document.getElementById("subtotal");
  subtotalElement.textContent = subtotal.toFixed(2) + " ج.م";
}

calculateTotal();

function removeItemFromCart(itemId) {
  Cart = Cart.filter((item) => item.id !== itemId);
  localStorage.setItem("cart", JSON.stringify(Cart));
  CartLength();
  loadCart();
  calculateTotal();
}
