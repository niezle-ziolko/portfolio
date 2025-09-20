"use client";
import { useEffect, useRef, useState } from "react";

import Icon from "lib/icon";

const icons = [
  { alt: "NextJS", src: "/nextjs.svg", top: "10%", left: "20%", scale: 2 },
  { alt: "NodeJS", src: "/nodejs.svg", top: "25%", left: "70%", scale: 0.9 },
  { alt: "GraphQL", src: "/graphql.svg", top: "50%", left: "40%", scale: 1.4 },
  { alt: "Docker", src: "/docker.svg", top: "65%", left: "20%", scale: 1.1 },
  { alt: "Tailwindcss", src: "/tailwind-css.svg", top: "75%", left: "60%", scale: 0.8 },
  { alt: "React", src: "/react.svg", top: "40%", left: "85%", scale: 1.3 },
  { alt: "npm", src: "/npm.svg", top: "15%", left: "50%", scale: 0.7 },
  { alt: "Wordpress", src: "/wordpress.svg", top: "80%", left: "35%", scale: 1.0 }
];

export default function Stack() {
  const size = 64;
  const headerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    const currentHeader = headerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (currentHeader) {
      observer.observe(currentHeader);
    };

    return () => {
      if (currentHeader) {
        observer.unobserve(currentHeader);
      };
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let visibleRatio = (windowHeight - rect.top) / (rect.height + windowHeight);
      visibleRatio = Math.min(Math.max(visibleRatio, 0), 1);

      const newScale = 0.5 + visibleRatio * 0.5;
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="w-x max-w-x">
      {/* Title */}
      <h2 ref={headerRef} className={isVisible ? "animate-header" : ""}>Moje umiejętności.</h2>

      {/* Icons */}
      <div className="flex relative h-[450px] justify-center items-center">
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
    </div>
  );
};