/* ─── FOOTER YEAR ─── */
const footerCopy = document.getElementById('footer-copy');
if (footerCopy) {
  footerCopy.textContent = `© ${new Date().getFullYear()} Mahdi Najjar. Built with HTML, CSS & JS.`;
}

/* ─── CUSTOM CURSOR ─── */
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');

let mouseX = 0, mouseY = 0;
let curX = 0, curY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top = mouseY + 'px';
});

function animateCursor() {
  curX += (mouseX - curX) * 0.12;
  curY += (mouseY - curY) * 0.12;
  cursor.style.left = curX + 'px';
  cursor.style.top = curY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Scale cursor on hover
const hoverables = document.querySelectorAll('a, button, .project-card');
hoverables.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1.8)';
    cursor.style.borderColor = 'var(--accent)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    cursor.style.borderColor = 'var(--accent)';
  });
});

/* ─── HEADER SCROLL STATE ─── */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}, { passive: true });

/* ─── SCROLL REVEAL ─── */
const revealEls = document.querySelectorAll('[data-reveal]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${i * 80}ms`;
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

/* ─── HERO ENTRANCE ANIMATION ─── */
window.addEventListener('DOMContentLoaded', () => {
  const heroTitle = document.querySelector('.hero-title');
  const heroEyebrow = document.querySelector('.hero-eyebrow');
  const heroDescRow = document.querySelector('.hero-desc-row');
  const heroLinks = document.querySelector('.hero-links');
  const heroBadge = document.querySelector('.hero-badge');

  const els = [heroEyebrow, heroTitle, heroDescRow, heroLinks, heroBadge].filter(Boolean);
  els.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${i * 120 + 100}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${i * 120 + 100}ms`;

    requestAnimationFrame(() => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 50);
    });
  });
});