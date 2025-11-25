"use client";
import { useRef } from "react";
import Link from "next/link";
import Icon from "lib/icon";

import { projects } from "data/projects";
import { useAnimate, usePerformance } from "lib/animate";
import { useCarousel, carouselControls } from "lib/carousel";

export default function Projects() {
  const ref = useRef(null);
  const slideVertical = useAnimate(ref, "animate-up", "animate-down");

  const icon = 30;
  const control = 45;
  const intervalTime = 10000;
  const animatedPerf = usePerformance(projects, 1000);

  const {
    activeIndex,
    setIsPlaying,
    handleTouchStart,
    handleTouchEnd,
    goToSlide,
  } = useCarousel({ length: projects.length, intervalTime });

  const getPerformanceColor = (perf) => {
    if (perf >= 90 && perf <= 99) return "#0c6";
    if (perf >= 65 && perf <= 89) return "#fa3";
    if (perf < 65) return "#f33";
    return "inherit";
  };

  const prev = activeIndex > 0;
  const next = activeIndex < projects.length - 1;
  const getActiveIndex = () => activeIndex;

  const { handlePrev, handleNext } = carouselControls({
    getActiveIndex,
    setIsPlaying,
    goToSlide,
    length: projects.length,
  });

  return (
    <div className="u22 h-auto">
      <h2 ref={ref} className={`u23 ${slideVertical}`}>
        Moje projekty
      </h2>

      <div
        className="h-full relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides */}
        <ul className="u24">
          {projects.map((project, index) => (
            <li
              key={index}
              className="
                u25
                max-h-[464px]
                group
                max-w-100
                cursor-pointer
                transition-transform
                duration-500

                [transform:var(--tx)]
                hover:[transform:var(--tx)_scale(1.03)]
                focus:[transform:var(--tx)_scale(1.03)]
                active:[transform:var(--tx)_scale(1.03)]
              "
              style={{
                ['--tx']: `translateX(calc(-${activeIndex * 100}% - ${activeIndex * 1}rem))`
              }}
            >
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={`${project.link}`}
                className="u16 w-max h-full box-border items-left"
              >
                <div className="u26 px-7">
                  <Icon
                    width={60}
                    height={90}
                    aria-hidden="true"
                    src={project.favicon}
                    className="cursor-default"
                  />

                  <span className="u12 group text-lg font-bold relative">
                    <h3
                      className="
                        u20
                        
                        group-hover:text-link
                        group-focus:text-link
                        group-active:text-link
                      ">
                        {project.name}
                      </h3>

                    <Icon
                      width={icon}
                      height={icon}
                      aria-hidden="true"
                      src="/assets/icons/awoMUEKk1D.svg"
                      className="u21"
                    />
                  </span>

                  <div className="pb-4">
                    <span>Użyte technologie:</span>

                    <div className="flex items-center gap-3 mt-2">
                      {project.stack.map((tech) => (
                        <Icon
                          key={tech.alt}
                          src={tech.src}
                          alt={tech.alt}
                          width={icon}
                          height={icon}
                          className="cursor-default"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <span>Wydajność strony:</span>

                    <div className="py-2">
                      <div className="w-31 w-25 h-25 flex justify-center relative">
                        <svg
                          className="absolute top-0 left-0 w-full h-full"
                          viewBox="0 0 36 36"
                        >
                          <circle
                            cx="18"
                            cy="18"
                            r="15"
                            fill={getPerformanceColor(project.performance)}
                            opacity="0.2"
                          />

                          <path
                            stroke={getPerformanceColor(project.performance)}
                            opacity="0.2"
                            strokeWidth="2"
                            fill="none"
                            d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
                          />

                          <path
                            stroke={getPerformanceColor(project.performance)}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            strokeDasharray={`${animatedPerf[index]}, 100`}
                            d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
                          />
                        </svg>

                        <span
                          className="absolute inset-0 flex items-center justify-center text-2xl font-mono"
                          style={{
                            color: getPerformanceColor(project.performance)
                          }}
                        >
                          {Math.round(animatedPerf[index])}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex mt-10 mx-4 md:mx-0 gap-6 justify-end">
          <button
            className={`u27 rotate-180 ${prev ? "u28" : "u29"}`}
            onClick={handlePrev}
            aria-label="poprzedni slajd"
            type="button"
            disabled={!prev}
          >
            <Icon
              width={control}
              height={control}
              alt="left"
              src="/assets/icons/rb38LYfmmJ.svg"
            />
          </button>

          <button
            className={`u27 ${next ? "u28" : "u29"}`}
            onClick={handleNext}
            aria-label="następny slajd"
            type="button"
            disabled={!next}
          >
            <Icon
              width={control}
              height={control}
              alt="right"
              src="/assets/icons/rb38LYfmmJ.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};