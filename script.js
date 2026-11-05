/* ==========================================================
   Amit's Portfolio - script.js
   ========================================================== */


/* ---------- 1. Typing effect in the hero section ---------- */
const typed = new Typed("#typed", {
  strings: ["Web Developer", "Programmer", "Learner"],
  typeSpeed: 65,
  backSpeed: 35,
  backDelay: 1200,
  loop: true
});


/* ---------- 2. Mobile menu toggle ---------- */
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
});

// Close the menu after a link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});


/* ---------- 3. Reveal sections when they scroll into view ---------- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});


/* ---------- 4. Highlight the active nav link while scrolling ---------- */
const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let currentSection = "home";

  sections.forEach((section) => {
    // 180px offset so the link changes a little before the section reaches the top
    if (window.scrollY >= section.offsetTop - 180) {
      currentSection = section.id;
    }
  });

  navItems.forEach((item) => {
    const isActive = item.getAttribute("href") === "#" + currentSection;
    item.classList.toggle("active", isActive);
  });
});