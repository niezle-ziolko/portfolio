"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Icon from "lib/icon";
import { useAnimate } from "lib/animate";
import { courses } from "data/courses";
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

  const listRef = useRef(null);

  useEffect(() => {
    const list = listRef.current;
    const activeSlide = list?.children[activeIndex];
    if (list && activeSlide) {
      const offset =
        activeSlide.offsetLeft -
        list.clientWidth / 2 +
        activeSlide.clientWidth / 2;
      list.scrollTo({ left: offset, behavior: "smooth" });
    }
  }, [activeIndex]);

  return (
    <div className="u15 u16 relative max-w-x">
      <h2
        ref={ref}
        className={`pt-11 pb-4 w-full ${slideVertical}`}
      >
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
                href={`${course.certificate}`}
                className="u16 h-full box-border items-center"
              >
                <div className="group u16 p-10 gap-3 w-full">
                  <h3 className={`${slideLevel}`}>{course.title}</h3>

                  <span className={`u12 group text-lg font-bold relative ${slideLevel}`}>
                    <span className="
                      relative

                      after:content-['']
                      after:absolute
                      after:left-0
                      after:bottom-0
                      after:h-[1px]
                      after:bg-current
                      after:w-full
                      after:scale-x-0
                      after:origin-center
                      after:transition-transform

                      group-hover:after:scale-x-100
                      group-focus:after:scale-x-100
                      group-active:after:scale-x-100
                    ">
                      Certyfikat
                    </span>
                    <Icon
                      width={target}
                      height={target}
                      aria-hidden="true"
                      src="/assets/icons/awoMUEKk1D.svg"
                      className="
                        -left-4
                        relative
                        opacity-0
                        transform
                        -scale-x-100
                        transition-all
                        fill-font-link
                        
                        group-hover:left-0
                        group-hover:scale-x-100
                        group-hover:opacity-100
                        group-focus:left-0
                        group-focus:scale-x-100
                        group-focus:opacity-100
                        group-active:left-0
                        group-active:scale-x-100
                        group-active:opacity-100
                      "
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
                    ml-20 rounded-2xl 
                    border-2 border-font-secondary/20 
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
                      onClick={() => {
                        if (!finished) setActiveIndex(index);
                      }}
                      className={`
                        relative h-2 rounded-full overflow-hidden transition-all duration-300
                        ${finished ? "cursor-default" : "cursor-pointer"}
                        ${index === activeIndex  ? "w-12 bg-element-player" : `w-2 bg-element-player ${!finished ? "hover:bg-hover-player" : ""}`}
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
                className={`${slideOpacity}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};