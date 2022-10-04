let accordians = document.querySelectorAll(".accordian");

accordians.forEach(function (accordian) {
  accordian.addEventListener("click", accordianClicked);
});
function accordianClicked(event) {
  console.log({ event });
  if (event.target.dataset.target) {
    document
      .getElementById(event.target.dataset.target)
      .classList.toggle("show");
    event.target.classList.toggle("collapsed");
  }
}
