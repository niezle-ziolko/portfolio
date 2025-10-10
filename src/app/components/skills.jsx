"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import Icon from "lib/icon";
import { useAnimate } from "lib/animate";
import { courses } from "data/courses";
import { useCarousel, useProgressDots } from "lib/carousel";

export default function Skills() {
  const ref = useRef(null);
  const dotsRef = useRef([]);
  const slideVertical = useAnimate(ref, "animate-up", "animate-down");
  const slideLevel = useAnimate(ref, "animate-left", "animate-right");

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
    <div className="u15 u16 relative max-w-x">
      <h2 ref={ref} className={`pt-11 pb-4 w-full ${slideVertical}`}>
        Moje osiągnięcia
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
          {courses.map((course, index) => (
            <li
              key={course.id}
              className={`
                group  min-h-125 
                rounded-2xl snap-start overflow-hidden 
                bg-element-background flex-[0_0_calc(100%-10px)] 
                transition-opacity
                ${index === activeIndex ? "opacity-100 cursor-pointer" : "opacity-30 pointer-events-none cursor-default"}
              `}
            >
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={`${course.certificate}`}
                className="u16 h-full box-border items-center justify-between"
              >
                <div className="u16 p-10 gap-3 w-full">
                  <h3 ref={ref} className={`${slideLevel}`}>{course.title}</h3>

                  <span className={`u12 text-lg font-bold ${slideLevel}`}>
                    Certyfikat
                  
                    <Icon
                      width={target}
                      height={target}
                      aria-hidden="true"
                      src="/assets/icons/awoMUEKk1D.svg"
                      className="
                        ml-1 fill-font-link opacity-0 transform -scale-x-100 transition-all
                        group-hover:scale-x-100 group-hover:opacity-100
                      "
                    />
                  </span>
                
                </div>

                <Image
                  src={course.image}
                  alt={course.title}
                  width={1134}
                  height={675}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="/assets/images/NZpLlUrqON.webp"
                  className=""
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="u1 u15 absolute gap-4 top-0 pointer-events-none">
          <div className="u17 px-5 py-6 pointer-events-auto">
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
            className="u1 u17 fill-white cursor-pointer pointer-events-auto hover:fill-element-player"
            onClick={() => (finished ? handleReplay() : setIsPlaying((prev) => !prev))}
          >
            <Icon
              width={control}
              height={control}
              alt="control"
              src={iconSrc}
            />
          </div>
        </div>
      </div>
    </div>
  );
};