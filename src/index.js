let acordionBody = document.querySelector("acordion-body");
let accordions = document.querySelectorAll(".acordion");
let downArrow = document.querySelectorAll(".arrow-down");
let accordionContent = document.querySelectorAll(".accordion-content");

// console.log(accordionContent);

console.log(accordions);
for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

// for (let i = 0; i < accordions.length; i++) {
//   accordions[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     console.log(panel);
//     for (let j = 0; j < accordionContent.length; j++) {
//       if (accordionContent[i].style.maxHeight) {
//         accordionContent[i].style.maxHeight = null;
//       } else {
//         accordionContent[i].style.maxHeight =
//           accordionContent[i].scrollHeight + "px";
//       }
//     }
//   });
// }
