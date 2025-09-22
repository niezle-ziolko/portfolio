"use client";
import { useEffect, useRef, useState } from "react";

import Icon from "lib/icon";

const icons = [
  { alt: "NextJS", src: "/nextjs.svg", top: "5%", left: "0%", scale: 3 },
  { alt: "NodeJS", src: "/nodejs.svg", top: "40%", left: "55%", scale: 2 },
  { alt: "GraphQL", src: "/graphql.svg", top: "15%", left: "90%", scale: 3.5 },
  { alt: "Docker", src: "/docker.svg", top: "30%", left: "10%", scale: 1.1 },
  { alt: "Tailwindcss", src: "/tailwind-css.svg", top: "75%", left: "50%", scale: 1.6 },
  { alt: "React", src: "/react.svg", top: "90%", left: "80%", scale: 2.5 },
  { alt: "npm", src: "/npm.svg", top: "80%", left: "20%", scale: 0.8 },
  { alt: "Wordpress", src: "/wordpress.svg", top: "95%", left: "5%", scale: 1.5 }
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

      const newScale = Math.min(1, 0.5 + visibleRatio * 0.5);
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
      <h2 ref={headerRef} className={isVisible ? "animate-header" : ""}>Moje umiejętności.</h2>

      {/* Description */}
      <p ref={headerRef} className={`opacity-0 ${isVisible ? "animate-header" : ""}`}>
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