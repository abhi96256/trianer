import { useEffect } from 'react';

/**
 * useScrollReveal
 * ──────────────────────────────────────────────────────────
 * Automatically finds every <section> on the page and adds
 * alternating data-reveal="left" / data-reveal="right".
 *
 * Any element with data-reveal or data-reveal-stagger already
 * set is also observed — so you can manually tag individual
 * elements inside components too.
 *
 * When the element crosses the viewport threshold the hook
 * adds the CSS class "is-visible" which triggers the animation
 * defined in index.css.
 */

export function useScrollReveal(dep) {
  useEffect(() => {
    // Small delay so the new page's DOM is fully painted
    const timer = setTimeout(() => {

      // ── 1. Auto-tag <section> elements with alternating directions ──
      const sections = document.querySelectorAll('section:not([data-reveal])');
      sections.forEach((el, i) => {
        el.setAttribute('data-reveal', i % 2 === 0 ? 'left' : 'right');
      });

      // ── 2. Reset previously-visible elements on new page ──
      document.querySelectorAll('.is-visible').forEach((el) => {
        el.classList.remove('is-visible');
      });

      // ── 3. Collect ALL reveal targets ──
      const targets = document.querySelectorAll('[data-reveal], [data-reveal-stagger]');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      targets.forEach((el) => observer.observe(el));

      // Cleanup
      return () => observer.disconnect();
    }, 80); // wait 80ms for DOM paint

    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dep]);
}
