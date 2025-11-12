"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import Icon from "lib/icon";
import { courses } from "data/courses";
import { useAnimate } from "lib/animate";
import { useCarousel, useProgressDots } from "lib/carousel";

export default function Certificates() {
  const ref = useRef(null);
  const dotsRef = useRef([]);

  const slideVertical = useAnimate(ref, "animate-up", "animate-down");
  const slideLevel = useAnimate(ref, "animate-left", "animate-right");
  const circleOpacity = useAnimate(ref, "animate-circle-show", "animate-circle-hidden");
  const slideOpacity = useAnimate(ref, "animate-slide-show", "animate-slide-hidden");
  const buttonOpacity = useAnimate(ref, "animate-button-show", "animate-button-hidden");

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
  } = useCarousel({ length: courses.length, intervalTime });

  useProgressDots({
    dotsRef,
    activeIndex,
    isPlaying,
    finished,
    intervalTime,
    remainingTime,
    replayKey
  });

  let iconSrc = "/assets/icons/BpXu4PZzKr.svg";
  if (isPlaying) iconSrc = "/assets/icons/fyxToZ1EvX.svg";
  else if (finished) iconSrc = "/assets/icons/phEO9jcTzd.svg";

  return (
    <div className="u22">
      <h2 ref={ref} className={`u23 ${slideVertical}`}>
        Moje osiągnięcia
      </h2>

      <div
        className="h-full relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides */}
        <ul
          className="u24 mx-4 md:mx-0 gap-4"
          style={{ transform: `translateX(calc(-${activeIndex * 100}% - ${activeIndex * 1}rem))` }}
        >
          {courses.map((course, index) => (
            <li
              key={course.id}
              className={`
                group u25
                min-h-135 max-h-135 md:min-h-150 md:max-h-150 
                ${index === activeIndex ? "opacity-100 cursor-pointer" : "opacity-30 pointer-events-none cursor-default"}
              `}
            >
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={`${course.certificate}`}
                className="u16 pb-17 h-full box-border items-center justify-between"
              >
                <div className="u26">
                  <h3 className={`${slideLevel}`}>{course.title}</h3>

                  <span className={`u12 text-lg font-bold relative ${slideLevel}`}>
                    <span className="u20">
                      Certyfikat
                    </span>

                    <Icon
                      width={target}
                      height={target}
                      aria-hidden="true"
                      src="/assets/icons/awoMUEKk1D.svg"
                      className="u21"
                    />
                  </span>
                </div>

                <Image
                  width={1135}
                  height={675}
                  loading="lazy"
                  placeholder="blur"
                  src={course.image}
                  alt={course.title}
                  blurDataURL="/assets/images/NZpLlUrqON.webp"
                  className="
                    w-[1135px]
                    h-[270px] md:h-[675px]
                    ml-20 rounded-2xl 
                    border-2 bg-font-secondary/30
                    -rotate-2 transition-all

                    group-hover:rotate-0 
                    group-focus:rotate-0
                    group-active:rotate-0
                  "
                />
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
                  {courses.map((course, index) => (
                    <li
                      key={course.id}
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