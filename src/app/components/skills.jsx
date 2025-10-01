"use client";
import { useRef } from "react";
import Image from "next/image";

import Icon from "lib/icon";
import { useAnimate } from "lib/animate";
import { courses } from "data/courses";
import { useCarousel } from "lib/carousel";

export default function Skills() {
  const ref = useRef(null);
  const slideClass = useAnimate(ref, "animate-up", "animate-down");

  const size = 56;
  const intervalTime = 3000;

  const {
    activeIndex,
    isPlaying,
    finished,
    setActiveIndex,
    setIsPlaying,
    handleReplay,
    handleTouchStart,
    handleTouchEnd
  } = useCarousel({ length: courses.length, intervalTime });

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
                className="z-2 w-full h-full absolute rounded-2xl"
              />
            </li>
          ))}
        </ul>

        <div className="u1 u15 absolute gap-4 top-0">
          <div className="u17 px-5 py-6">
            <div className="u1 h-full">
              <ul className="flex">
                {courses.map((course, index) => (
                  <li
                    key={course.id}
                    onClick={() => { setActiveIndex(index); }}
                    className={`
                      h-2 rounded-full transition-all duration-300 cursor-pointer 
                      ${index === activeIndex ? "w-12 bg-hover-player" : "w-2 bg-element-player hover:bg-hover-player"}
                    `}
                  />
                ))}
              </ul>
            </div>
          </div>

          <div
            className="u1 u17 fill-element-player cursor-pointer hover:fill-hover-player"
            onClick={() => finished ? handleReplay() : setIsPlaying((prev) => !prev)}
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