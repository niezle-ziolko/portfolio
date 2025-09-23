"use client";
import { useRef } from "react";

import Icon from "lib/icon";
import { icons } from "data/stack";
import { useScale } from "lib/animate";
import { useSlideUp } from "lib/animate";

export default function Stack() {
  const size = 64;
  const ref = useRef(null);

  const slideClass = useSlideUp(ref, "animate-up", "animate-down");
  const { containerRef, scale } = useScale(0.5);

  return (
    <div className="grid relative max-w-x justify-center items-center">

      {/* Icons */}
      <div className="flex w-full absolute h-screen overflow-hidden">
        <div
          ref={containerRef}
          className="absolute w-full h-full"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "center center",
          }}
        >
          {icons.map((icon, i) => (
            <Icon
              key={i}
              width={size}
              height={size}
              alt={icon.alt}
              src={icon.src}
              className="
                p-2 border absolute
                bg-element-background
                rounded-2xl border-element-border
                shadow-[2px_2px_4px_rgba(0,0,0,0.1),_inset_0_1px_1px_rgba(0,0,0,0.05)]
                scale-70 md:scale-100
              "
              style={{
                top: icon.top,
                left: icon.left,
                transform: `translate(-50%, -50%) scale(${icon.scale})`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Title */}
      <h2 ref={ref} className={slideClass}>Moje umiejętności</h2>

      {/* Description */}
      <p ref={ref} className={`opacity-0 ${slideClass}`}>
        Na co dzień tworzę nowoczesne aplikacje i strony internetowe, 
        łącząc <em>Next.js</em>, <em>React</em> i <em>GraphQL</em> z solidnym zapleczem w <em>Node.js</em>. 
        Potrafię efektywnie zarządzać środowiskiem pracy dzięki <em>Dockerowi</em> i <em>npm</em>, 
        a w warstwie wizualnej stawiam na szybkość i estetykę z pomocą TailwindCSS. 
        Mam również doświadczenie z <em>WordPressem</em>, 
        dzięki czemu mogę sprawnie realizować projekty zarówno w pełni customowe, 
        jak i oparte na gotowych rozwiązaniach.
      </p>
    </div>
  );
};