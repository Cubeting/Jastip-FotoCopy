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
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const reveals = document.querySelectorAll(".reveal");
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollingDown = scrollTop > lastScrollTop;

  reveals.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (scrollingDown) {
      // Jika elemen masuk viewport saat scroll ke bawah
      if (rect.top < windowHeight - 100) {
        el.classList.add("active");
      }
    } else {
      // Scroll ke atas: hapus class, tapi hanya jika elemen sudah di luar atas layar
      if (rect.bottom < 0) {
        el.classList.remove("active");
      }
    }
  });

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
