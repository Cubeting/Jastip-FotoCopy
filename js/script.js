//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Click outside to hide navbar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//Scroll to top button
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  reveals.forEach((reveal) => {
    const revealTop = reveal.getBoundingClientRect().top;

    if (revealTop < windowHeight - revealPoint && revealTop > 0) {
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }
  });
});
