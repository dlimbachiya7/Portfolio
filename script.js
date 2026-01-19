// Theme toggle
(function() {
  const root = document.documentElement;
  const key = "theme-preference";
  const saved = localStorage.getItem(key);
  if (saved === "light") root.classList.add("light");
  const btn = document.getElementById("themeToggle");
  btn?.addEventListener("click", () => {
    root.classList.toggle("light");
    localStorage.setItem(key, root.classList.contains("light") ? "light" : "dark");
  });
  document.getElementById("year").textContent = new Date().getFullYear();
})();

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(section => observer.observe(section));
