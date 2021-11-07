let acordionBody = document.querySelector("acordion-body");
let accordions = document.querySelectorAll(".acordion");
let downArrow = document.querySelectorAll(".arrow-down");

// console.log(accordions);
for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
