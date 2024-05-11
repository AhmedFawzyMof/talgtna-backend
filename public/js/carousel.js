const slideContainers = document.querySelectorAll("[data-slide-container]");
const slideDistance = window.screen.availWidth / 1.5;

const slides = document.querySelectorAll("[data-slide]");

var i = 0;

slideContainers.forEach((container) => {
  let containerMotion =
    container.parentElement.attributes["data-slide-motion"].value;

  const dots = document.querySelectorAll("#dots");
  const slidesLength = document.querySelectorAll("#slide").length;
  if (containerMotion == "slide") {
    ActiveDot(dots, i);

    setInterval(function () {
      if (i != slidesLength - 1) {
        container.scrollLeft += slideDistance;
        i++;
        ActiveDot(dots, i);
      } else {
        container.scrollLeft = 0;
        i = 0;
        ActiveDot(dots, i);
      }
    }, 5000);
  }
});

function ActiveDot(dots, i) {
  dots.forEach((dot, index) => {
    if (index != i) {
      dot.classList.remove("active");
    }
  });

  dots[i].classList.add("active");
}
