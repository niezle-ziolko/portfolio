"use client";
import { useEffect, useRef, useState, useMemo } from "react";

import Icon from "lib/icon";

export default function HeaderForm({ size = 420, density = "normal" }) {
  const containerRef = useRef(null);
  const dotsRefs = useRef([]);
  const rafRef = useRef(null);
  const progressRef = useRef(0);
  const [mounted, setMounted] = useState(false);

  const densityMultiplier = density === "low" ? 0.6 : density === "high" ? 1.4 : 1.0;

  const ringsConfig = useMemo(
    () =>
      [
        { id: "r0", baseCount: 20, radius: 0.40 },
        { id: "r1", baseCount: 20, radius: 0.30 },
        { id: "r2", baseCount: 20, radius: 0.20 },
        { id: "r3", baseCount: 20, radius: 0.10 },
      ].map((r) => ({ ...r, count: Math.max(6, Math.round(r.baseCount * densityMultiplier)) })),
    [densityMultiplier]
  );

  const totalDots = useMemo(() => ringsConfig.reduce((s, r) => s + r.count, 0), [ringsConfig]);

  const baseDot = Math.max(3, Math.round(size * 0.02));
  const gradientStops = useMemo(
    () => [
      { t: 0.0, color: { L: 0.6624, C: 0.1867, h: 249.84 } },
      { t: 0.42, color: { L: 0.6720, C: 0.2258, h: 307.22 } },
      { t: 0.74, color: { L: 0.6461, C: 0.2124, h: 11.95 } },
      { t: 1.0, color: { L: 0.6874, C: 0.1749, h: 52.79 } },
    ],
    []
  );

  function interpHue(h1, h2, t) {
    const a = ((h1 % 360) + 360) % 360;
    const b = ((h2 % 360) + 360) % 360;
    let delta = b - a;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    const h = a + delta * t;
    return ((h % 360) + 360) % 360;
  };

  const lerp = (a, b, t) => a + (b - a) * t;

  function sampleGradient(t) {
    const tt = Math.max(0, Math.min(1, t));
    let left = gradientStops[0];
    let right = gradientStops[gradientStops.length - 1];
    for (let i = 0; i < gradientStops.length - 1; i++) {
      const s0 = gradientStops[i];
      const s1 = gradientStops[i + 1];
      
      if (tt >= s0.t && tt <= s1.t) {
        left = s0;
        right = s1;
        break;
      };
    };
    const segT = (tt - left.t) / (right.t - left.t || 1);
    const L = lerp(left.color.L, right.color.L, segT);
    const C = lerp(left.color.C, right.color.C, segT);
    const h = interpHue(left.color.h, right.color.h, segT);

    return `oklch(${L} ${C} ${h})`;
  };

  const precomputed = useMemo(() => {
    const arr = [];

    ringsConfig.forEach((ring, ringIndex) => {
      const items = [];
      for (let i = 0; i < ring.count; i++) {
        const offset = ringIndex % 2 === 0 ? 0 : Math.PI / ring.count;
        const angle = (i / ring.count) * Math.PI * 2 - Math.PI / 2 + offset;
        const dirX = Math.cos(angle);
        const dirY = Math.sin(angle);
        const ringShift = (ringIndex / Math.max(1, ringsConfig.length - 1)) * 0.02;

        let pos = (i / ring.count + ringShift) % 1;

        items.push({
          angle,
          dirX,
          dirY,
          pos
        });
      };

      arr.push(items);
    });

    return arr;
  }, [ringsConfig]);

  useEffect(() => {
    dotsRefs.current = new Array(totalDots);
  }, [totalDots]);

  function setDotRef(el, index) {
    if (!el) return;
    dotsRefs.current[index] = el;

    el.classList.add(
      "absolute",
      "rounded-full",
      "scale-[0.6]",
      "opacity-0"
    );
  };


  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const container = containerRef.current;
    if (!container) return;

    let isVisible = true;
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        isVisible = e.isIntersecting;
        if (!isVisible) {
          if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
          };
        } else {
          if (!rafRef.current) {
            rafRef.current = requestAnimationFrame(loop);
          };
        };
      },
      { root: null, threshold: 0.05 }
    );

    io.observe(container);

    const ringRadiiPx = ringsConfig.map((r, i) => r.radius * size + i * size * 0.05);
    const dispersions = ringsConfig.map((_, i) => size * (0.28 + i * 0.05));

    const ringIndices = [];
    const ringOffsets = [];
    ringsConfig.forEach((ring, ringIndex) => {
      for (let i = 0; i < ring.count; i++) {
        ringIndices.push(ringIndex);
        ringOffsets.push(i);
      };
    });

    function computeTarget() {
      const rect = container.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elCenter = rect.top + rect.height / 2;
      const dist = Math.abs(elCenter - viewportCenter);
      const maxDist = window.innerHeight * 0.9;
      const raw = 1 - Math.min(dist / maxDist, 1);

      return Math.pow(Math.max(0, raw), 1.2);
    };

    function loop(now) {
      rafRef.current = null;
      if (!isVisible) return;

      const target = computeTarget();
      const prev = progressRef.current;
      const next = prev + (target - prev) * 0.12;
      progressRef.current = next;

      for (let di = 0; di < dotsRefs.current.length; di++) {
        const el = dotsRefs.current[di];
        if (!el) continue;
        const ringIndex = ringIndices[di];
        const offsetIndex = ringOffsets[di];
        const pre = precomputed[ringIndex][offsetIndex];

        const r = ringRadiiPx[ringIndex];
        const dispersion = dispersions[ringIndex];

        const dirX = pre.dirX;
        const dirY = pre.dirY;

        const x = Math.cos(pre.angle) * r;
        const y = Math.sin(pre.angle) * r;

        const curX = x + dirX * dispersion * (1 - next);
        const curY = y + dirY * dispersion * (1 - next);

        const approach = Math.max(0, (next - 0.85) / 0.15);
        const wobble =
          Math.sin(offsetIndex * 0.5 + next * 10) *
          (1 - Math.cos(approach * Math.PI)) *
          3 *
          (1 - ringIndex * 0.12);
        const finalX = curX - dirX * approach * 6 + wobble * dirY * 0.3;
        const finalY = curY - dirY * approach * 6 - wobble * dirX * 0.3;

        const opacity = Math.pow(next, 2.2);
        const scale = 0.7 + 0.45 * next;

        const sizePx = Math.max(
          3,
          Math.round(baseDot * (0.75 + 0.75 * ((ringsConfig.length - ringIndex) / ringsConfig.length)))
        );

        const color = sampleGradient(pre.pos);

        el.style.width = `${sizePx}px`;
        el.style.height = `${sizePx}px`;
        el.style.background = color;
        el.style.opacity = `${opacity}`;
        el.style.transform = `translate3d(${finalX - sizePx / 2}px, ${finalY - sizePx / 2}px, 0) scale(${scale})`;
      };

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      io.disconnect();
    };
  }, [mounted, size, ringsConfig, precomputed, baseDot, gradientStops]);

  let dotIndex = 0;

  return (
    <div className="flex w-full justify-center">
      <div
        ref={containerRef}
        aria-hidden={true}
        className={`w-[${size}px] h-[${size}px] relative`}
      >
        {ringsConfig.map((ring, ringIndex) => (
          <div key={ring.id}>
            {Array.from({ length: ring.count }).map((_, i) => {
              const idx = dotIndex++;
              const initialSizePx = Math.max(
                3,
                Math.round(baseDot * (0.5 + 0.5 * (ringIndex + 1) / ringsConfig.length))
              );
              return (
                <div
                  key={`${ring.id}-dot-${i}`}
                  ref={(el) => setDotRef(el, idx)}
                  className={`
                    w-[${initialSizePx}px]
                    h-[${initialSizePx}px]
                  `}
                />
              );
            })}
          </div>
        ))}

        <div className="absolute -translate-x-1/2 -translate-y-1/2">
          <Icon
            width={50}
            height={50}
            alt="contact"
            src="/assets/icons/FXu0cwbLKP.svg"
            className="fill-font-primary pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};