"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "lib/icon";

import { projects } from "data/projects";
import { useAnimate } from "lib/animate";
import { useCarousel } from "lib/carousel";

export default function Projects() {
  const ref = useRef(null);
  const slideVertical = useAnimate(ref, "animate-up", "animate-down");

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
          {projects.map((project) => (
            <li
              key={project.id}
              className={` 
                min-h-140 max-h-140 md:min-h-170 md:min-h-170
                rounded-2xl snap-start overflow-hidden 
                bg-element-background flex-[0_0_calc(100%-10px)] 
                transition-opacity
              `}
            >
              
                <div className="u16 p-10 gap-3 w-full">
                  <Icon
                    width={100}
                    height={100}
                    aria-hidden="true"
                    src={project.favicon}
                  />

                  <h3>{project.name}</h3>

                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`${project.link}`}
                    className="u16 h-full box-border items-left"
                  >
                    <span className={`u12 group text-lg font-bold relative`}>
                      <span className="u20">
                        Link
                      </span>

                      <Icon
                        width={target}
                        height={target}
                        aria-hidden="true"
                        src="/assets/icons/awoMUEKk1D.svg"
                        className="u21"
                      />
                    </span>
                  </Link>
                </div>

                <Icon
                  width={32}
                  height={32}
                  aria-hidden="true"
                  src="/assets/icons/github.svg"
                  className="fill-font-secondary"
                />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}