import { useEffect, useRef } from 'react';
import './SmoothScroll.css';

/**
 * SmoothScroll
 * ─────────────────────────────────────────────────────────
 * Wraps the entire page content in a fixed-height "fake"
 * body so the native scrollbar stays, but the actual DOM
 * movement is driven by a requestAnimationFrame lerp loop —
 * giving buttery-smooth, momentum-style scrolling.
 *
 * lerp factor (0.08 – 0.14):
 *   Lower  → heavier / more momentum (luxury feel)
 *   Higher → snappier / more responsive
 */

const LERP = 0.10; // smoothness factor

export default function SmoothScroll({ children }) {
  const scrollRef   = useRef(null);  // the translating wrapper
  const requestRef  = useRef(null);  // rAF handle
  const currentY    = useRef(0);     // current translated position
  const targetY     = useRef(0);     // native scroll position

  useEffect(() => {
    // Check if device supports touch (mobile/tablet)
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouch) {
      document.body.style.height = 'auto';
      return;
    }

    // ── Sync the <body> / #root height so native scrollbar appears ──
    const setBodyHeight = () => {
      const h = scrollRef.current?.getBoundingClientRect().height ?? 0;
      document.body.style.height = `${h}px`;
    };

    const ro = new ResizeObserver(setBodyHeight);
    if (scrollRef.current) ro.observe(scrollRef.current);
    setBodyHeight();

    // ── Track native scroll target ──
    const onScroll = () => {
      targetY.current = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // ── rAF loop: lerp current → target ──
    const loop = () => {
      const delta = targetY.current - currentY.current;

      // Only update DOM when movement is perceptible
      if (Math.abs(delta) > 0.05) {
        currentY.current += delta * LERP;
        if (scrollRef.current) {
          scrollRef.current.style.transform = `translate3d(0, -${currentY.current}px, 0)`;
        }
      }

      requestRef.current = requestAnimationFrame(loop);
    };

    requestRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener('scroll', onScroll);
      ro.disconnect();
      document.body.style.height = '';
    };
  }, []);


  return (
    <div className="smooth-scroll-wrapper" ref={scrollRef}>
      {children}
    </div>
  );
}
