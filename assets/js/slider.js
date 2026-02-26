/* ============================================
   Flantik Solution - Testimonials Slider
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('testimonial-track');
  const dotsContainer = document.getElementById('testimonial-dots');
  if (!track || !dotsContainer) return;

  const slides = track.children;
  const total = slides.length;
  let current = 0;
  let autoPlayInterval;

  // Create dots
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('button');
    dot.className = `w-3 h-3 rounded-full transition-all duration-300 ${i === 0 ? 'bg-cyan-400 w-8' : 'bg-slate-500'}`;
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  }

  function goTo(index) {
    current = index;
    track.style.transform = `translateX(-${current * 100}%)`;
    updateDots();
  }

  function updateDots() {
    const dots = dotsContainer.children;
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = `h-3 rounded-full transition-all duration-300 ${i === current ? 'bg-cyan-400 w-8' : 'bg-slate-500 w-3'}`;
    }
  }

  function next() { goTo((current + 1) % total); }

  function startAutoPlay() {
    autoPlayInterval = setInterval(next, 5000);
  }

  function stopAutoPlay() { clearInterval(autoPlayInterval); }

  track.parentElement.addEventListener('mouseenter', stopAutoPlay);
  track.parentElement.addEventListener('mouseleave', startAutoPlay);

  // Touch/Swipe support
  let touchStartX = 0;
  track.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; stopAutoPlay(); }, { passive: true });
  track.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goTo(Math.min(current + 1, total - 1)) : goTo(Math.max(current - 1, 0));
    }
    startAutoPlay();
  }, { passive: true });

  // Prev/Next buttons
  const prevBtn = document.getElementById('testimonial-prev');
  const nextBtn = document.getElementById('testimonial-next');
  if (prevBtn) prevBtn.addEventListener('click', () => goTo((current - 1 + total) % total));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo((current + 1) % total));

  startAutoPlay();
});

