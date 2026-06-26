/* ============================================
   Personal Website — Yan Zhong
   Interactions & Animations
   ============================================ */

// --- Nav hide/show on scroll ---
let lastScroll = 0;
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 80) {
    if (currentScroll > lastScroll) {
      nav.classList.add('nav-hidden');
    } else {
      nav.classList.remove('nav-hidden');
    }
  } else {
    nav.classList.remove('nav-hidden');
  }

  lastScroll = currentScroll;
});

// --- Scroll reveal ---
const revealElements = document.querySelectorAll('.section .section-inner > *');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach((el) => {
  // Skip already-animated hero and the section-title
  if (el.closest('.hero')) return;
  el.classList.add('reveal');
  observer.observe(el);
});
