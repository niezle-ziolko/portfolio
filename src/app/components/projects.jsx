"use client";
import Link from "next/link";
import { useRef } from "react";
import dynamic from "next/dynamic";

import Video from "lib/video";
import { projects } from "data/projects";
import { useAnimate, usePerformance } from "lib/animate";
import { useCarousel, useProgressDots } from "lib/carousel";

const Icon = dynamic(() => import("lib/icon"), { ssr: true });

export default function Certificates() {
  const ref = useRef(null);
  const dotsRef = useRef([]);

  const slideVertical = useAnimate(ref, "animate-up", "animate-down");
  const slideOpacity = useAnimate(ref, "animate-slide-show", "animate-slide-hidden");
  const circleOpacity = useAnimate(ref, "animate-circle-show", "animate-circle-hidden");
  const buttonOpacity = useAnimate(ref, "animate-button-show", "animate-button-hidden");

  const icon = 30;
  const control = 56;
  const intervalTime = 10000;
  const animatedPerf = usePerformance(projects, 1000);

  const {
    finished,
    isPlaying,
    replayKey,
    activeIndex,
    remainingTime,
    setIsPlaying,
    handleReplay,
    handleTouchEnd,
    setActiveIndex,
    handleTouchStart
  } = useCarousel({ length: projects.length, intervalTime });

  useProgressDots({
    dotsRef,
    finished,
    isPlaying,
    replayKey,
    activeIndex,
    intervalTime,
    remainingTime
  });

  const getPerformanceColor = (perf) => {
    if (perf >= 90 && perf <= 99) return "#0c6";
    if (perf >= 65 && perf <= 89) return "#fa3";
    if (perf < 65) return "#f33";
    return "inherit";
  };

  let iconSrc = "/assets/icons/BpXu4PZzKr.svg";
  if (isPlaying) iconSrc = "/assets/icons/fyxToZ1EvX.svg";
  else if (finished) iconSrc = "/assets/icons/phEO9jcTzd.svg";

  return (
    <div className="u22 h-full max-h-[652px]">
      <h2 ref={ref} className={`u23 ${slideVertical}`}>
        Moje projekty
      </h2>

      <div
        className="h-full relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides */}
        <ul
          className="u24 gap-4"
          style={{ transform: `translateX(calc(-${activeIndex * 100}% - ${activeIndex * 1}rem))` }}
        >
          {projects.map((project, index) => (
            <li
              key={index}
              className={`
                u25
                group
                max-h-[464px]
                ${index === activeIndex ? "opacity-100 cursor-pointer" : "opacity-50 pointer-events-none cursor-default"}
              `}
            >
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={`${project.link}`}
                className="u16 w-full h-full box-border items-left relative"
              >
                {/* video in webm format */}
                <Video
                  src={project.video}
                  preload="none"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute w-full h-full object-fill md:object-cover"
                />

                <div className="
                  u10
                  u26
                  z-2
                  px-7
                  opacity-0
                  rounded-2xl
                  bg-header/90
                  backdrop-blur-md
                  
                  group-hover:opacity-100
                  group-focus:opacity-100
                  group-active:opacity-100
                ">
                  <Icon
                    width={control}
                    height={control}
                    aria-hidden="true"
                    src={project.favicon}
                    className="page-favicon"
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
                            opacity="0.1"
                          />

                          <path
                            stroke={getPerformanceColor(project.performance)}
                            opacity="0.1"
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
        <div className="u1 u15 absolute top-0 pointer-events-none">
          <div className="u1 h-full gap-2">
            <div className={`u17 z-10 px-5 py-6 pointer-events-auto ${circleOpacity}`}>
              <div className={`u1 h-full delay-1000 ${slideOpacity} max-w-`}>
                <ul className="flex gap-4 items-center">
                  {projects.map((project, index) => (
                    <li
                      key={index}
                      onClick={() => { if (!finished) setActiveIndex(index); }}
                      className={`
                        relative h-2 rounded-full overflow-hidden transition-all duration-300
                        ${finished ? "cursor-default" : "cursor-pointer"}
                        ${index === activeIndex  ? "w-12 bg-element-player" : `w-2 bg-element-player ${!finished ? "hover:bg-hover-player" : ""}
                        `}
                      `}
                    >
                      <div
                        ref={(el) => (dotsRef.current[index] = el)}
                        className="w-0 top-0 left-0 h-full bg-white absolute rounded-full"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className={`u1 u17 z-1 fill-white cursor-pointer pointer-events-auto hover:fill-element-player ${buttonOpacity}`}
              onClick={() => (finished ? handleReplay() : setIsPlaying((prev) => !prev))}
            >
              <Icon
                width={control}
                height={control}
                alt="control"
                src={iconSrc}
                className="animate-slide-show"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};