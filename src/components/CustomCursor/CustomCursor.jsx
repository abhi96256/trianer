import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './CustomCursor.css';

/**
 * CustomCursor — FontAwesome dumbbell icon
 * Rotated 90° (vertical), neon green, with rAF lerp trailing.
 */

const LERP = 0.18;

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const mouse     = useRef({ x: 0, y: 0 });
  const pos       = useRef({ x: 0, y: 0 });
  const rafRef    = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener('mousemove', onMove);

    // ── Lerp loop ──────────────────────────────────────
    const loop = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * LERP;
      pos.current.y += (mouse.current.y - pos.current.y) * LERP;
      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    // ── Hover scale on clickable elements ─────────────
    const onEnter = () => cursorRef.current?.classList.add('cursor--hover');
    const onLeave = () => cursorRef.current?.classList.remove('cursor--hover');

    const clickables = document.querySelectorAll(
      'a, button, [role="button"], input, label, select'
    );
    clickables.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      clickables.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <div className="custom-cursor" ref={cursorRef} aria-hidden="true">
      <FontAwesomeIcon
        icon={faDumbbell}
        rotation={90}
        size="sm"
        style={{ color: 'rgb(195, 244, 0)' }}
        className="cursor-dumbbell-icon"
      />
    </div>
  );
}

