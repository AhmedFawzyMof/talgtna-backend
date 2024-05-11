if (Cart.length === 0) {
  window.location.href = "/";
}

function calculateTotal() {
  const cartTotal = Cart.reduce(
    (acc, { price, quantity }) => acc + price * quantity,
    0
  );
  const discount = JSON.parse(localStorage.getItem("discount"))?.value || 0;
  const subtotal = cartTotal - discount;
  const totalWithDiscount = subtotal + 25;

  if (discount > 0) {
    const discountElement = document.getElementById("discount");
    discountElement.classList.replace("hidden", "flex");
    discountElement.textContent = discount.toFixed(2) + " ج.م";
  }

  const totalElement = document.getElementById("total");
  totalElement.textContent = totalWithDiscount.toFixed(2) + " ج.م";

  const subtotalElement = document.getElementById("subtotal");
  subtotalElement.textContent = subtotal.toFixed(2) + " ج.م";
}

calculateTotal();

if (!Auth || Auth === "") {
  const coupon = document.getElementById("couponForm");
  const parentElement = coupon.parentElement;

  parentElement.removeChild(coupon);
} else {
  const name = document.getElementById("name");
  const parentElement = name.parentElement;
  parentElement.removeChild(name);
}

const orderForm = document.getElementById("orderForm");
orderForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  let name;
  if (!Auth) {
    name = document.getElementById("name").value;
  }
  const phone = document.getElementById("phone").value;
  const spare_phone = document.getElementById("spare_phone").value;
  const street = document.getElementById("street").value;
  const building = document.getElementById("building").value;
  const floor = document.getElementById("floor").value;
  const city = document.getElementById("cities").value;
  const method = document.getElementById("payment").value;
  const discount = localStorage.getItem("discount")?.value || {
    code: "",
    value: 0,
  };

  const formData = {
    name,
    phone,
    spare_phone,
    street,
    building,
    floor,
    city,
    method,
    discount,
    cart: Cart,
  };

  const authHeader = Auth || Auth === "" ? { Authorization: Auth } : {};
  try {
    const request = await fetch("/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...authHeader,
      },
      body: JSON.stringify(formData),
    });

    const response = await request.json();

    if (response.success) {
      localStorage.setItem("token", response.token);
      localStorage.setItem("cart", "[]");
      location.href = `/order/success?order=${response.order}`;
    }
  } catch (error) {
    console.error("There was an error!", error);
    alert("فشل في إرسال الطلب");
  }
});
