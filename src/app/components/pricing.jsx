"use client";
import { useState, useEffect } from "react";

import { prices } from "data/pricing";
import { useCarousel } from "lib/carousel";

export default function Pricing() {
  const intervalTime = 10000;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handleResize = () => setIsMobile(mq.matches);
    handleResize();
    mq.addEventListener("change", handleResize);
    return () => mq.removeEventListener("change", handleResize);
  }, []);

  const {
    activeIndex,
    handleTouchStart,
    handleTouchEnd
  } = useCarousel({ length: prices.length, intervalTime });

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600 via-indigo-900 to-green-600" />

      {/* Waves */}
      <svg
        className="absolute inset-0 u15"
        viewBox="0 0 1440 1024"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="url(#grad1)"
          d="M0,100 C360,180 1080,0 1440,120 L1440,0 L0,0 Z"
          opacity="0.8"
        />

        <path
          fill="url(#grad2)"
          d="M0,220 C480,340 960,160 1440,260 L1440,0 L0,0 Z"
          opacity="0.75"
        />

        <path
          fill="url(#grad3)"
          d="M0,900 C480,760 960,1040 1440,860 L1440,1024 L0,1024 Z"
          opacity="0.9"
        />

        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
          <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#312e81" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
          <linearGradient id="grad3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#14532d" />
          </linearGradient>
        </defs>
      </svg>

      {/* Pricing Cards */}
      <div className="u1 h-full relative">
        <ul
          className={`flex w-full px-4 justify-left duration-500 transition-transform md:justify-center ${
            isMobile ? "" : "flex-wrap"
          }`}
          onTouchStart={isMobile ? handleTouchStart : undefined}
          onTouchEnd={isMobile ? handleTouchEnd : undefined}
        >
          {prices.map((price, index) => {
            const translateX = isMobile
              ? `translateX(calc(-${activeIndex * 100}% - ${activeIndex * 1}rem))`
              : "none";

            return (
              <li
                key={index}
                className={`
                  u25
                  group
                  duration-500
                  bg-header/90
                  min-h-[530px]
                  backdrop-blur-md
                  transition-transform

                  md:max-w-82

                  ${isMobile ? "[transform:var(--tx)] hover:[transform:var(--tx)_scale(1.03)] focus:[transform:var(--tx)_scale(1.03)] active:[transform:var(--tx)_scale(1.03)]"
                    : "hover:[transform:scale(1.03)] focus:[transform:scale(1.03)] active:[transform:scale(1.03)]"
                  }
                `}
                style={{ ["--tx"]: translateX }}
              >
                <div className="u26 px-7">
                  <h4>Pakiet {price.name}</h4>
                  <span>{price.price}</span>
                  <button
                    className="py-2 mx-18 rounded-full"
                    onClick={() => {
                      const element = document.getElementById("contact");

                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Kontakt
                  </button>
                  <span>{price.description}</span>
                  <hr />
                  <ul className="u16 gap-1 list-disc">
                    {price.benefits.map((benefit, index) => (
                      <li key={index}>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};