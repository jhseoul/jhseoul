// Mobile nav toggle
const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');

navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('is-open');
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('is-open'));
});

// Scroll reveal
const revealTargets = document.querySelectorAll(
  '.philosophy__grid, .lab-strip__item, .timeline__item, .process__visual, .product-card, .voice-card, .voices__photo, .process__title, .products__title, .voices__title'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => observer.observe(el));

// Newsletter form (front-end only demo)
const form = document.getElementById('newsletter-form');
const msg = document.getElementById('form-msg');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  if (email) {
    msg.textContent = '구독해주셔서 감사합니다. 곧 첫 소식을 보내드릴게요.';
    form.reset();
  }
});
