const typed = new Typed("#typed", {
  strings: ["Web Developer", "Programmer", "Learner"],
  typeSpeed: 65,
  backSpeed: 35,
  backDelay: 1200,
  loop: true
});

const menu = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  menu.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => links.classList.remove("open"));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold: 0.12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "home";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 180) current = section.id;
  });
  navItems.forEach(item => item.classList.toggle("active", item.getAttribute("href") === "#" + current));
});
