"use client";
import { useRef } from "react";
import Image from "next/image";

import Icon from "lib/icon";
import { useAnimate } from "lib/animate";
import { courses } from "data/courses";
import { useCarousel, useProgressDots } from "lib/carousel";

export default function Skills() {
  const ref = useRef(null);
  const dotsRef = useRef([]);
  const slideClass = useAnimate(ref, "animate-up", "animate-down");

  const size = 56;
  const intervalTime = 5000;

  const {
    activeIndex,
    isPlaying,
    finished,
    setActiveIndex,
    setIsPlaying,
    handleReplay,
    handleTouchStart,
    handleTouchEnd,
  } = useCarousel({ length: courses.length, intervalTime });

  useProgressDots({
    dotsRef,
    activeIndex,
    isPlaying,
    finished,
    intervalTime
  });

  let iconSrc = "/assets/icons/BpXu4PZzKr.svg";
  if (isPlaying) iconSrc = "/assets/icons/fyxToZ1EvX.svg";
  else if (finished) iconSrc = "/assets/icons/phEO9jcTzd.svg";

  return (
    <div className="u15 u16 z-2 relative max-w-x">
      <h2 ref={ref} className={`pt-11 pb-4 w-full ${slideClass}`}>
        Moje osiągnięcia
      </h2>

      <div
        className="h-full relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <ul
          className="flex snap-x snap-mandatory transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {courses.map((course, index) => (
            <li
              key={course.id}
              className={`
                min-h-125 flex flex-col items-center justify-center 
                rounded-2xl snap-start box-border overflow-hidden 
                bg-element-background flex-[0_0_calc(100%-10px)] 
                transition-opacity duration-500
                ${index === activeIndex ? "opacity-100" : "opacity-30"}
              `}
            >
              <h3>{course.title}</h3>

              <Image
                src={course.image}
                alt={course.title}
                width={1134}
                height={675}
                loading="lazy"
                placeholder="blur"
                blurDataURL="/assets/images/NZpLlUrqON.webp"
                className="z-2 w-[100px] h-[100px] absolute rounded-2xl"
              />
            </li>
          ))}
        </ul>

        <div className="u1 u15 absolute gap-4 top-0">
          <div className="u17 px-5 py-6">
            <div className="u1 h-full">
              <ul className="flex gap-4 items-center">
                {courses.map((course, index) => (
                  <li
                    key={course.id}
                    onClick={() => setActiveIndex(index)}
                    className={`
                      relative h-2 rounded-full overflow-hidden cursor-pointer 
                      transition-all duration-300 bg-element-player
                      ${index === activeIndex ? "w-12" : "w-2 hover:bg-hover-player"}
                    `}
                  >
                    <div
                      ref={(el) => (dotsRef.current[index] = el)}
                      className="absolute top-0 left-0 h-full bg-white w-0"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="u1 u17 fill-white cursor-pointer hover:fill-hover-player"
            onClick={() => (finished ? handleReplay() : setIsPlaying((prev) => !prev))}
          >
            <Icon
              width={size}
              height={size}
              alt="Control"
              src={iconSrc}
            />
          </div>
        </div>
      </div>
    </div>
  );
};