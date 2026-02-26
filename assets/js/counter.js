/* ============================================
   Flantik Solution - Counter Animation
   ============================================ */

function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 2000;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(target * eased);
          el.textContent = current.toLocaleString() + suffix;
          if (progress < 1) requestAnimationFrame(updateCounter);
        }
        requestAnimationFrame(updateCounter);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

document.addEventListener('DOMContentLoaded', animateCounters);

