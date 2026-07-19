document.documentElement.classList.add('motion-ready');

const video = document.querySelector('.hero__video');

if (video) {
  const playbackPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

  const syncPlayback = () => {
    if (playbackPreference.matches) {
      video.pause();
    } else {
      video.play().catch(() => {
        // Autoplay can be blocked by browser or device settings.
      });
    }
  };

  syncPlayback();
  playbackPreference.addEventListener('change', syncPlayback);

  const visibilityObserver = new IntersectionObserver(([entry]) => {
    if (playbackPreference.matches) return;
    if (entry.isIntersecting) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, { threshold: 0.1 });

  visibilityObserver.observe(video);
}

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');

if (reducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.08,
  });

  revealItems.forEach((item) => revealObserver.observe(item));
}

document.querySelectorAll('a[href]').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (event.defaultPrevented || link.target === '_blank' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const destination = new URL(link.href, window.location.href);
    if (destination.origin !== window.location.origin || destination.hash || destination.pathname === window.location.pathname) return;
    event.preventDefault();
    document.body.classList.add('page-exit');
    window.setTimeout(() => window.location.assign(destination.href), 220);
  });
});
