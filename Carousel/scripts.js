const carouselButtons = document.querySelectorAll("[data-carousel-button]");
carouselButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex =
      ([...slides.children].indexOf(activeSlide) + offset) %
      slides.children.length;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
