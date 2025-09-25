"use client";
import { useRef } from "react";
import Image from "next/image";

import { useAnimate } from "lib/animate";

export default function Skills() {
  const ref = useRef(null);

  const slideClass = useAnimate(ref, "animate-up", "animate-down");

  return (
    <div className="u1 u15 h-screen pl-10 flex-col">
      <div className="u15 relative rounded-xl overflow-hidden z-1">
          
        {/* Title */}
        <h2 ref={ref} className={`pt-0 pb-4 w-full ${slideClass}`}>
          Moje osiągnięcia
        </h2>

        <Image 
          src="/cs50x.webp"
          alt="cs50x"
          width={200}
          height={100}
          className="relative z-10"
        />

        {/* Blur background */}
        <p className="relative z-10 p-4">
          Treść z gradientową ramką
        </p>
      </div>
    </div>
  );
};