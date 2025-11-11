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
    <div className="u22">
      <h2
        ref={ref}
        className={`u23 ${slideVertical}`}
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
          className="u24"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {projects.map((project) => (
            <li
              key={project.id}
              className={`
                u25
                min-h-140 max-h-140 md:min-h-170 md:min-h-170
              `}
            >
              
                <div className="u26">
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
                    className="u16 w-min h-full box-border items-left"
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