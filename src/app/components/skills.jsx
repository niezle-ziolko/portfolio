"use client";
import { useRef } from "react";
import Image from "next/image";

import { useSlideUp } from "lib/animate";

export default function Skills() {
  const ref = useRef(null);

  const slideClass = useSlideUp(ref, "animate-up", "animate-down");

  return (
    <div className="u1 u15 flex-col py-11 max-w-x">
      {/* Title */}
      <h2 ref={ref} className={`pt-0 w-full ${slideClass}`}>
        Moje osiągnięcia
      </h2>

      <div className="u15 p-[3px] rounded-xl bg-[linear-gradient(var(--color-gradient))]">
        <div className="u15 relative rounded-xl overflow-hidden">
          {/* White background */}
          <div className="absolute inset-0 bg-white blur-sm"></div>

          <Image 
            src="/cs50x.webp"
            alt="cs50x"
            width={200}
            height={100}
          />

          {/* Blur background */}
          <p className="relative z-10 p-4">
            Treść z gradientową ramką
          </p>
        </div>
      </div>
    </div>
  );
};