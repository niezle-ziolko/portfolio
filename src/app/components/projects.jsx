"use client";
import { useRef } from "react";
import Link from "next/link";
import Icon from "lib/icon";

import { projects } from "data/projects";
import { useCarousel } from "lib/carousel";
import { useAnimate, usePerformance } from "lib/animate";

export default function Projects() {
  const ref = useRef(null);
  const slideVertical = useAnimate(ref, "animate-up", "animate-down");

  const icon = 30;
  const control = 45;
  const intervalTime = 10000;
  const animatedPerf = usePerformance(projects, 1000);

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

  const getPerformanceColor = (perf) => {
    if (perf >= 90 && perf <= 99) return "#0c6";
    if (perf >= 65 && perf <= 89) return "#fa3";
    if (perf < 65) return "#f33";
    return "inherit";
  };

  return (
    <div className="u22 h-auto">
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
          style={{ transform: `translateX(calc(-${activeIndex * 100}% - ${activeIndex * 1}rem))` }}
        >
          {projects.map((project, index) => (
            <li
              key={project.id}
              className="u25 max-w-100"
            >
              <div className="u26 px-7">
                <Icon
                  width={60}
                  height={90}
                  aria-hidden="true"
                  src={project.favicon}
                />

                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${project.link}`}
                  className="u16 w-max h-full box-border items-left"
                >
                  <span className={"u12 group text-lg font-bold relative"}>
                    <span className="u20 text-4xl">
                      {project.name}
                    </span>

                    <Icon
                      width={icon}
                      height={icon}
                      aria-hidden="true"
                      src="/assets/icons/awoMUEKk1D.svg"
                      className="u21"
                    />
                  </span>
                </Link>

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
                      />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col">
                  <span>Wydajność strony:</span>

                  <div className="py-2">
                    <div className="relative w-25 h-25">
                      <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 36 36">
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
                        style={{ color: getPerformanceColor(project.performance) }}
                      >
                        {Math.round(animatedPerf[index])}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex mt-16 gap-6 justify-end">
          <button className="u27 rotate-180">
            <Icon
              width={control}
              height={control}
              alt="control"
              src="assets/icons/rb38LYfmmJ.svg"
            />
          </button>

          <button className="u27">
            <Icon
              width={control}
              height={control}
              alt="control"
              src="assets/icons/rb38LYfmmJ.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};