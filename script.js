
const header = document.getElementById('siteHeader');
const menuBtn = document.querySelector('.menu-btn');
const drawer = document.querySelector('.mobile-drawer');

const handleScroll = () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
};
handleScroll();
window.addEventListener('scroll', handleScroll, { passive: true });

menuBtn.addEventListener('click', () => {
  const open = drawer.classList.toggle('open');
  menuBtn.classList.toggle('active', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  drawer.setAttribute('aria-hidden', String(!open));
  document.body.style.overflow = open ? 'hidden' : '';
});

drawer.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    drawer.classList.remove('open');
    menuBtn.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('in-view'), index * 90);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
