/**
 * CRIPSPICE STUDIOS — shared nav + scroll reveal
 * nav.js  (replaces Waypoints entirely)
 */

// ── NAV: scroll-aware background ─────────────────────────
const nav = document.querySelector('.site-nav');
const toggle = document.querySelector('.nav-toggle');
const mobileMenu = document.querySelector('.nav-mobile');

if (nav) {
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

if (toggle && mobileMenu) {
  toggle.addEventListener('click', () => {
    const open = toggle.classList.toggle('open');
    mobileMenu.classList.toggle('open', open);
  });

  // close on link click
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}

// ── SCROLL REVEAL (Intersection Observer) ────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // fire once
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal, .stagger-children').forEach(el => {
  revealObserver.observe(el);
});

// ── PROGRESS BARS (Win % section) ────────────────────────
const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        barObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll('.progress-bar').forEach(bar => {
  barObserver.observe(bar);
});