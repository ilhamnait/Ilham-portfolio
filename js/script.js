// ----------------------------------
// Langue EN/FR + petite rotation btn
// ----------------------------------
let currentLang = 'fr';
function switchLang() {
  const btn = document.querySelector(".lang-btn");
  if (btn) {
    btn.classList.add("rotate");
    setTimeout(() => btn.classList.remove("rotate"), 500);
  }

  currentLang = currentLang === 'fr' ? 'en' : 'fr';

  // Ne change QUE les éléments bilingues, et seulement si la valeur existe.
  document.querySelectorAll('[data-fr]').forEach(el => {
    const next = el.getAttribute('data-' + currentLang);
    if (next !== null && next !== undefined) {
      el.textContent = next;
    }
  });
}

// ------------------------------
// Effet machine à écrire sur H1
// ------------------------------
function typeWriter(element, speed = 100) {
  if (!element) return;
  const text = element.textContent;
  element.textContent = "";
  let i = 0;
  (function typing(){
    if (i < text.length) {
      element.textContent += text.charAt(i++);
      setTimeout(typing, speed);
    }
  })();
}

// ------------------------------------
// Auto-ajoute les classes à animer
// ------------------------------------
function addAutoAnimateClasses() {
  const selectors = [
    '#about', '#projects', '#education', '#skills', '#contact',
    '.timeline-item', '.card'
  ];
  selectors.forEach(sel =>
    document.querySelectorAll(sel).forEach(el => el.classList.add('animate-on-scroll'))
  );
}

// ------------------------------------
// IntersectionObserver => .visible
// ------------------------------------
function animateOnScroll() {
  const elements = document.querySelectorAll(".animate-on-scroll, .skills span");
  if (!('IntersectionObserver' in window)) {
    // Fallback vieux navigateurs
    elements.forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
}

// ------------------------------------
// Init
// ------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // 1) Ajoute automatiquement les classes aux sections clés
  addAutoAnimateClasses();

  // 2) Lance les animations au scroll
  animateOnScroll();

  // 3) Effet machine à écrire sur le titre
  typeWriter(document.querySelector("header h1"), 120);

  // 4) Petit log de vérif dans la console
  console.log("script.js chargé ✅");
});
