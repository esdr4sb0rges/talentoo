// ========================================
// UX enhancements: Scroll reveal and minor helpers
// ========================================

(function() {
  document.addEventListener('DOMContentLoaded', function() {
    // Respect reduced motion
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    // Elements to reveal on scroll
    const selectors = [
      '.hero-title',
      '.hero-subtitle',
      '.hero-illustration',
      '.section-title',
      '.feature-icon',
      '.feature-card',
      '.step',
      '.stat-item',
      '.differential-card',
      '.faq-item',
      '.faq-question',
      '.card',
      '.professionals-grid > *',
      '.professional-card',
      '.solicitation-card',
      '.links-grid > *',
      '.categories-list > *',
      '.cta-final-container > *'
    ];

    const elements = Array.from(document.querySelectorAll(selectors.join(',')));
    if (!elements.length) return;

    // Mark elements to reveal and add staggered delays
    elements.forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = `${(i % 12) * 60}ms`;
    });

    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

    elements.forEach(el => io.observe(el));

    // Scroll progress bar
    const progress = document.createElement('div');
    progress.id = 'scrollProgress';
    document.body.appendChild(progress);
    const updateProgress = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight);
      progress.style.transform = `scaleX(${Math.max(0, Math.min(1, scrolled))})`;
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });

    // Scroll to top button
    const topBtn = document.createElement('button');
    topBtn.className = 'scroll-top';
    topBtn.setAttribute('aria-label', 'Voltar ao topo');
    topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(topBtn);

    const toggleTopBtn = () => {
      if (window.scrollY > 300) topBtn.classList.add('show');
      else topBtn.classList.remove('show');
    };
    toggleTopBtn();
    window.addEventListener('scroll', toggleTopBtn, { passive: true });
    topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  });
})();
