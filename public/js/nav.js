const menuBtn = document.getElementById("menuBtn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("activeMenu");
});

var Cart = JSON.parse(localStorage.getItem("cart"));
var Auth = localStorage.getItem("token");

function notAuth() {
  if (!Auth) {
    const hearts = document.querySelectorAll("#addToFav");
    hearts.forEach((h) => {
      const parentElement = h.parentElement;
      parentElement.removeChild(h);
    });
  }
}

notAuth();

window.onload = () => {
  if (!Cart) {
    localStorage.setItem("cart", "[]");
  }
};

function CartLength() {
  let Cartlen = 0;

  Cart.forEach((item) => {
    Cartlen += item.quantity;
  });
  const cartQuantity = document.getElementById("cartQuantity");
  if (Cartlen > 0 && cartQuantity.classList.contains("hidden")) {
    cartQuantity.classList.replace("hidden", "block");
  } else if (Cartlen === 0) {
    cartQuantity.classList.replace("block", "hidden");
  }
  cartQuantity.textContent = Cartlen;
}

CartLength();
