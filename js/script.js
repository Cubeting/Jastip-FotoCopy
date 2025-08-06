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
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
});

window.addEventListener("scroll", reveal);
reveal();

// Scroll to top button
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Add entrance animation for menu cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = entry.target.dataset.delay || "0s";
      entry.target.classList.add("animate-in");
    }
  });
}, observerOptions);

document.querySelectorAll(".menu-card").forEach((card, index) => {
  card.dataset.delay = `${index * 0.2}s`;
  observer.observe(card);
});

// Interactive cursor effect (for desktop)
if (window.innerWidth > 768) {
  const cursor = document.createElement("div");
  cursor.className = "custom-cursor";
  cursor.style.cssText = `
          position: fixed;
          width: 20px;
          height: 20px;
          background: var(--gradient);
          border-radius: 50%;
          pointer-events: none;
          z-index: 10000;
          mix-blend-mode: difference;
          transition: transform 0.1s ease;
          opacity: 0;
        `};

document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX - 10 + "px";
  cursor.style.top = e.clientY - 10 + "px";
  cursor.style.opacity = "1";
});

document.addEventListener("mouseleave", () => {
  cursor.style.opacity = "0";
});

// Scale cursor on hover
document.querySelectorAll("a, button, .menu-card").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "scale(2)";
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "scale(1)";
  });
});
