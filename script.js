/* =============================================
   ADITYA YADAV — PORTFOLIO JAVASCRIPT
   Interactions, Smooth Scrolling & Scrollspy
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {
  /* ── CUSTOM CURSOR ── */
  const dot = document.getElementById('curDot');
  const ring = document.getElementById('curRing');
  let mx = 0, my = 0, rx = 0, ry = 0;

  if (dot && ring) {
    document.addEventListener('mousemove', function (e) {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = 'translate(' + (mx - 3.5) + 'px,' + (my - 3.5) + 'px)';
    });

    (function animRing() {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      ring.style.transform = 'translate(' + (rx - 17) + 'px,' + (ry - 17) + 'px)';
      requestAnimationFrame(animRing);
    })();

    const interactiveElements = document.querySelectorAll(
      'a, button, .project-card, .exp-card, .cert-card, .profile-card, .skill-category, .c-link, .tag, .skill-tag, input, textarea'
    );
    
    interactiveElements.forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        dot.classList.add('hover');
        ring.classList.add('hover');
      });
      el.addEventListener('mouseleave', function () {
        dot.classList.remove('hover');
        ring.classList.remove('hover');
      });
    });
  }

  /* ── NAVBAR SCROLL & ACTIVE STATE ── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    if (navbar) {
      navbar.classList.toggle('stuck', window.scrollY > 30);
    }
  }, { passive: true });

  /* ── MOBILE NAV TOGGLE ── */
  const ham = document.getElementById('ham');
  const mobileNav = document.getElementById('mobileNav');
  const mClose = document.getElementById('mClose');

  if (ham && mobileNav) {
    ham.addEventListener('click', function () {
      mobileNav.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
  }

  if (mClose && mobileNav) {
    mClose.addEventListener('click', closeMobile);
  }

  /* ── SCROLLSPY (ACTIVE NAV LINK) ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a[href^="#"], .mobile-nav a[href^="#"]');

  function updateActiveNav() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(function (current) {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(function (link) {
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  /* ── SCROLL REVEAL ── */
  const revealObs = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(function (el, i) {
    el.style.transitionDelay = (i % 4) * 0.08 + 's';
    revealObs.observe(el);
  });
});

/* ── GLOBAL MOBILE NAV CLOSE ── */
function closeMobile() {
  const mobileNav = document.getElementById('mobileNav');
  if (mobileNav) {
    mobileNav.classList.remove('show');
    document.body.style.overflow = '';
  }
}

/* ── EXPLORE MORE PROJECTS DROPDOWN ── */
function toggleExplore() {
  const btn = document.getElementById('exploreBtn');
  const drop = document.getElementById('exploreDrop');
  if (btn && drop) {
    btn.classList.toggle('open');
    drop.classList.toggle('open');
  }
}

/* ── CONTACT FORM SUBMISSION ── */
function sendMsg() {
  const n = document.getElementById('fname') ? document.getElementById('fname').value.trim() : '';
  const e = document.getElementById('femail') ? document.getElementById('femail').value.trim() : '';
  const s = document.getElementById('fsubject') ? document.getElementById('fsubject').value.trim() : '';
  const m = document.getElementById('fmsg') ? document.getElementById('fmsg').value.trim() : '';

  if (!n || !e || !m) {
    alert('Please provide your name, email address, and message.');
    return;
  }

  alert('Thank you, ' + n + '! Your message has been received. Aditya will get back to you shortly. 🚀');
  
  if (document.getElementById('fname')) document.getElementById('fname').value = '';
  if (document.getElementById('femail')) document.getElementById('femail').value = '';
  if (document.getElementById('fsubject')) document.getElementById('fsubject').value = '';
  if (document.getElementById('fmsg')) document.getElementById('fmsg').value = '';
}