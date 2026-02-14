(() => {
  function setCurrentYear() {
    const year = String(new Date().getFullYear());
    document.querySelectorAll('[data-current-year]').forEach((el) => {
      el.textContent = year;
    });
  }

  function initNav() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    if (!menuToggle || !nav) return;

    const setMenuState = (isOpen) => {
      nav.classList.toggle('mobile-open', isOpen);
      menuToggle.innerHTML = isOpen ? '&#10005;' : '&#9776;';
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    };

    setMenuState(false);

    menuToggle.addEventListener('click', () => {
      setMenuState(!nav.classList.contains('mobile-open'));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setMenuState(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setMenuState(false);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 968) setMenuState(false);
    });
  }

  function initReveal() {
    const els = document.querySelectorAll('[data-reveal]');
    if (!els.length) return;

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    els.forEach((el) => observer.observe(el));
  }

  function init() {
    setCurrentYear();
    initNav();
    initReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
