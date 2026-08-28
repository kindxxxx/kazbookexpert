"use client";

import { useEffect, useRef } from "react";

export function BookStage() {
  const stage = useRef<HTMLDivElement>(null);
  const book = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const el = stage.current;
    const target = book.current;
    if (!el || !target) return;

    let raf = 0;
    let rx = 0;
    let ry = 0;
    let tx = 0;
    let ty = 0;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      tx = y * -8;
      ty = x * 12;
    };

    const onLeave = () => {
      tx = 0;
      ty = 0;
    };

    const tick = () => {
      rx += (tx - rx) * 0.08;
      ry += (ty - ry) * 0.08;
      const float = Math.sin(performance.now() / 1400) * 6;
      target.style.transform = `translate3d(0, ${rx * 0.3 + float}px, 0) rotateX(${rx}deg) rotateY(${ry}deg)`;
      raf = requestAnimationFrame(tick);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={stage}
      className="relative mx-auto h-[300px] w-full max-w-[420px] touch-pan-y sm:h-[380px] md:h-[620px] md:max-w-none"
      style={{ perspective: "1200px" }}
    >
      <div
        ref={book}
        className="absolute inset-0 flex items-center justify-center will-change-transform"
      >
        <img
          src="/images/opt/studio-hero.webp"
          alt="Стопка книг"
          className="relative z-10 h-auto max-h-full w-[min(100%,480px)] select-none object-contain md:w-[110%] md:max-w-none"
          draggable={false}
        />
      </div>
    </div>
  );
}
