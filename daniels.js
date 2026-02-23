let toggleBtn = document.querySelector(".navbar-toggle");
let menu = document.querySelector(".navbar-collapse");

toggleBtn.onclick = function () {
  menu.classList.toggle("show");
};

window.addEventListener("resize", function () {
  if (window.innerWidth >= 992) {
    menu.classList.remove("show");
  }
});

let slides = document.querySelectorAll(".carousel-item");
let buttons = document.querySelectorAll(".carousel-indicators button");

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  buttons.forEach((btn) => btn.classList.remove("active"));

  slides[index].classList.add("active");
  buttons[index].classList.add("active");
}
function sayHello() {
  console.log("Hello, World!");
}


//////////////////////////////////////////////////////////////////////////////////////////

// ======= Portfolio Filter =======
let portfolioSection = document.querySelector("#portfolio");
let portfolioBtns = portfolioSection.querySelectorAll(".nav-link");
let portfolioItems = portfolioSection.querySelectorAll(".Portfolio-img");

portfolioBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    portfolioBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    let filter = btn.getAttribute("data-filter");

    portfolioItems.forEach((item) => {
      let categories = item.getAttribute("data-category").split(" ");
      if (filter === "all" || categories.includes(filter)) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });
  });
});
//////////////////////////////////////////////////////////////////////////////////////////