"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { projects } from "data/projects";
import { useAnimate } from "lib/animate";
import { useCarousel } from "lib/carousel";

export default function Projects() {
  const ref = useRef(null);
  const slideVertical = useAnimate(ref, "animate-up", "animate-down");
  const slideLevel = useAnimate(ref, "animate-left", "animate-right");
  const playerAnimaton = useAnimate(ref, "animate-fade-up", "animate-fade-down");

  const target = 23;
  const control = 56;
  const intervalTime = 10000;

  const {
    activeIndex,
    isPlaying,
    finished,
    setActiveIndex,
    setIsPlaying,
    handleReplay,
    handleTouchStart,
    handleTouchEnd,
    replayKey,
    remainingTime
  } = useCarousel({ length: projects.length, intervalTime });

  return (
    <div className="u15 u16 relative max-w-x">
      <h2
        ref={ref}
        className={`pt-11 pb-4 w-full ${slideVertical}`}
      >
        Moje projekty
      </h2>

      <div
        className="h-full relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >

        {/* Slides */}
        <ul
          className="flex snap-x snap-mandatory transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <li
              key={project.id}
              className={`
                group 
                min-h-140 max-h-140 md:min-h-170 md:min-h-170
                rounded-2xl snap-start overflow-hidden 
                bg-element-background flex-[0_0_calc(100%-10px)] 
                transition-opacity
                ${index === activeIndex ? "opacity-100 cursor-pointer" : "opacity-30 pointer-events-none cursor-default"}
              `}
            >
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={`${project.link}`}
                className="u16 h-full box-border items-center"
              >
                <div className="group u16 p-10 gap-3 w-full">
                  <h3 className={`${slideLevel}`}>{project.title}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}