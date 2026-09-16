/**
 * logo-scroll.js
 * - Scroll-driven logo transition
 * - Particle generation for hero + about sections
 */

// ── PARTICLES ─────────────────────────────────────────────
function createParticles(containerId, count) {
    const container = document.getElementById(containerId);
    if (!container) return;
  
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
  
      const size    = Math.random() * 3 + 1.5;           // 1.5–4.5px
      const x       = Math.random() * 100;                // % across
      const y       = Math.random() * 100;                // % down
      const dur     = (Math.random() * 8 + 5).toFixed(1); // 5–13s
      const delay   = (Math.random() * 6).toFixed(1);     // 0–6s delay
      const dx      = (Math.random() * 40 - 20).toFixed(0) + 'px'; // drift x
      const dy      = (Math.random() * -60 - 20).toFixed(0) + 'px'; // drift up
      const opacity = (Math.random() * 0.3 + 0.1).toFixed(2); // 0.1–0.4
  
      p.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}%;
        top: ${y}%;
        --dur: ${dur}s;
        --delay: ${delay}s;
        --dx: ${dx};
        --dy: ${dy};
        --max-opacity: ${opacity};
      `;
  
      container.appendChild(p);
    }
  }
  
  createParticles('hero-particles', 28);
  createParticles('about-particles', 18);
  
  // ── LOGO SCROLL ───────────────────────────────────────────
  (function () {
    const heroLogo = document.querySelector('.hero-logo');
    const navSlot  = document.querySelector('.nav-logo-slot');
    const hero     = document.querySelector('.hero');
  
    if (!heroLogo || !navSlot || !hero) return;
  
    const SCROLL_THRESHOLD = 300;
  
    const navLogo = heroLogo.cloneNode(true);
    navLogo.classList.remove('hero-logo');
    navLogo.classList.add('nav-logo-clone');
    navSlot.appendChild(navLogo);
  
    function lerp(a, b, t) { return a + (b - a) * t; }
    function clamp(v, lo, hi) { return Math.min(Math.max(v, lo), hi); }
  
    function onScroll() {
      const progress = clamp(window.scrollY / SCROLL_THRESHOLD, 0, 1);
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
  
      heroLogo.style.opacity   = 1 - eased;
      heroLogo.style.transform = `scale(${lerp(1, 0.7, eased)}) translateY(${lerp(0, -20, eased)}px)`;
      navLogo.style.opacity    = eased;
      navSlot.style.opacity    = eased < 0.05 ? '0' : '1';
    }
  
    navLogo.style.opacity    = '0';
    navLogo.style.transition = 'none';
    navSlot.style.opacity    = '0';
    heroLogo.style.transition = 'none';
  
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  })();