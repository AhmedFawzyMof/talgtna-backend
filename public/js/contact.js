document.addEventListener("DOMContentLoaded", (event) => {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const formData = { name, email, phone, message };

    try {
      const response = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const success = await response.json();
      if (success.success) {
        alert("تم الارسال بنجاح");
        contactForm.reset();
      } else {
        alert("فشل في الارسال");
        contactForm.reset();
      }
    } catch (error) {
      console.error("Error:", error);
      alert("فشل في الارسال");
      contactForm.reset();
    }
  });
});
