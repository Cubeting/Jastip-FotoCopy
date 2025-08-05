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
let lastScrollY = window.scrollY;

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const isScrollingDown = window.scrollY > lastScrollY;
      lastScrollY = window.scrollY;

      if (entry.isIntersecting && isScrollingDown) {
        entry.target.classList.add("active");
      }

      // Reset class jika elemen sudah keluar dari viewport atas
      if (
        !entry.isIntersecting &&
        entry.boundingClientRect.top > window.innerHeight
      ) {
        entry.target.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

reveals.forEach((el) => observer.observe(el));
