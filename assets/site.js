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
    if (!menuToggle || !nav) {
      return;
    }

    const setMenuState = (isOpen) => {
      nav.classList.toggle('mobile-open', isOpen);
      menuToggle.textContent = isOpen ? '✕' : '☰';
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    };

    setMenuState(false);

    menuToggle.addEventListener('click', () => {
      setMenuState(!nav.classList.contains('mobile-open'));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        setMenuState(false);
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setMenuState(false);
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 968) {
        setMenuState(false);
      }
    });
  }

  function init() {
    setCurrentYear();
    initNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
