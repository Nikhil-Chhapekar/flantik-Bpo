/* ============================================
   Flantik Solution - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 80 });
  }

  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') { lucide.createIcons(); }

  // ===== SCROLL PROGRESS =====
  const scrollProgress = document.getElementById('scroll-progress');
  if (scrollProgress) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.style.width = (scrollTop / docHeight * 100) + '%';
    });
  }

  // ===== BACK TO TOP BUTTON =====
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===== DARK MODE =====
  const darkToggle = document.getElementById('dark-toggle');
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') html.classList.add('dark');

  if (darkToggle) {
    darkToggle.addEventListener('click', () => {
      html.classList.toggle('dark');
      localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
      updateDarkToggleIcon();
    });
  }

  function updateDarkToggleIcon() {
    if (!darkToggle) return;
    const isDark = html.classList.contains('dark');
    darkToggle.innerHTML = isDark
      ? '<i data-lucide="sun" class="w-5 h-5"></i>'
      : '<i data-lucide="moon" class="w-5 h-5"></i>';
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
  updateDarkToggleIcon();

  // ===== MOBILE MENU =====
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('max-h-96');
      mobileMenu.classList.toggle('max-h-0', isOpen);
      mobileMenu.classList.toggle('max-h-96', !isOpen);
      mobileMenu.classList.toggle('opacity-0', isOpen);
      mobileMenu.classList.toggle('opacity-100', !isOpen);
      // Toggle hamburger icon
      const bars = hamburger.querySelectorAll('span');
      bars[0].classList.toggle('rotate-45', !isOpen);
      bars[0].classList.toggle('translate-y-2', !isOpen);
      bars[1].classList.toggle('opacity-0', !isOpen);
      bars[2].classList.toggle('-rotate-45', !isOpen);
      bars[2].classList.toggle('-translate-y-2', !isOpen);
    });
  }

  // ===== STICKY NAVBAR =====
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg', 'backdrop-blur-md');
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-slate-900/95', 'dark:bg-slate-950/95');
      } else {
        navbar.classList.remove('shadow-lg', 'backdrop-blur-md', 'bg-slate-900/95', 'dark:bg-slate-950/95');
        navbar.classList.add('bg-transparent');
      }
    });
  }

  // ===== ACTIVE NAV LINK =====
  const path = window.location.pathname.replace(/\/index\.html$/, '').replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    const linkPath = href.replace(/\/$/, '') || '/';
    if (linkPath === path || (path === '' && linkPath === '/')) {
      link.classList.add('text-[#00C6E0]');
    }
  });

  // ===== NEWSLETTER FORM =====
  const nlForm = document.getElementById('newsletter-form');
  if (nlForm) {
    nlForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = nlForm.querySelector('input');
      if (input && input.value) {
        showToast('Thank you for subscribing!');
        input.value = '';
      }
    });
  }
});

// ===== TOAST NOTIFICATION =====
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  const bg = type === 'success' ? 'bg-emerald-500' : 'bg-red-500';
  toast.className = `fixed top-24 right-6 z-[10000] px-6 py-3 rounded-lg text-white ${bg} shadow-xl transform translate-x-full transition-transform duration-500`;
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => { toast.classList.remove('translate-x-full'); toast.classList.add('translate-x-0'); });
  setTimeout(() => {
    toast.classList.remove('translate-x-0'); toast.classList.add('translate-x-full');
    setTimeout(() => toast.remove(), 500);
  }, 3000);
}

