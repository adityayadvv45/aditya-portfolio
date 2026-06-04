/* ── CUSTOM CURSOR ── */
    const dot = document.getElementById('curDot');
    const ring = document.getElementById('curRing');
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', function (e) {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = 'translate(' + (mx - 4) + 'px,' + (my - 4) + 'px)';
    });

    (function animRing() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.transform = 'translate(' + (rx - 19) + 'px,' + (ry - 19) + 'px)';
      requestAnimationFrame(animRing);
    })();

    document.querySelectorAll('a, button, .prof-card, .cert-card, .c-link, .explore-btn').forEach(function (el) {
      el.addEventListener('mouseenter', function () { dot.classList.add('hover'); ring.classList.add('hover'); });
      el.addEventListener('mouseleave', function () { dot.classList.remove('hover'); ring.classList.remove('hover'); });
    });

    /* ── NAVBAR SCROLL ── */
    window.addEventListener('scroll', function () {
      document.getElementById('navbar').classList.toggle('stuck', window.scrollY > 40);
    }, { passive: true });

    /* ── MOBILE NAV ── */
    document.getElementById('ham').addEventListener('click', function () {
      document.getElementById('mobileNav').classList.add('show');
      document.body.style.overflow = 'hidden';
    });
    document.getElementById('mClose').addEventListener('click', closeMobile);
    function closeMobile() {
      document.getElementById('mobileNav').classList.remove('show');
      document.body.style.overflow = '';
    }

    /* ── SCROLL REVEAL ── */
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add('show');
      });
    }, { threshold: 0.08 });

    document.querySelectorAll('.reveal').forEach(function (el, i) {
      el.style.transitionDelay = (i % 5) * 0.07 + 's';
      revealObs.observe(el);
    });

    /* ── EXPLORE MORE DROPDOWN ── */
    function toggleExplore() {
      var btn = document.getElementById('exploreBtn');
      var drop = document.getElementById('exploreDrop');
      btn.classList.toggle('open');
      drop.classList.toggle('open');
    }

    /* ── CONTACT FORM ── */
    function sendMsg() {
      var n = document.getElementById('fname').value.trim();
      var e = document.getElementById('femail').value.trim();
      var m = document.getElementById('fmsg').value.trim();
      if (!n || !e || !m) {
        alert('Please fill in your name, email, and message.');
        return;
      }
      alert('Thanks ' + n + '! Aditya will get back to you soon. \uD83D\uDE80');
      document.getElementById('fname').value = '';
      document.getElementById('femail').value = '';
      document.getElementById('fsubject').value = '';
      document.getElementById('fmsg').value = '';
    }