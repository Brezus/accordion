gsap.from(".bg-img-cont", {
  duration: 1,
  opacity: 0,
});
gsap.from(".bg-img-cont", {
  duration: 1.5,
  y: "50%",
  ease: "bounce",
});
gsap.from(".section-cont", {
  duration: 1,
  x: "100%",
});
gsap.from(".acordion-title", {
  duration: 1,
  opacity: 0,
  delay: 1,
});
gsap.to(".arrow-down", {
  duration: 0.5,
  opacity: 1,
  delay: 1.5,
});

let acordionBody = document.querySelector("acordion-body");
let accordions = document.querySelectorAll(".acordion");
let downArrow = document.querySelectorAll(".arrow-down");
let accordionContent = document.querySelectorAll(".accordion-content");

console.log(accordions);
for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
