"use client";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import { courses } from "data/courses";
import { useAnimate } from "lib/animate";
import { useCarousel, carouselControls } from "lib/carousel";

const Icon = dynamic(() => import("lib/icon"), { ssr: true });

export default function Certificates() {
  const ref = useRef(null);
  const slideVertical = useAnimate(ref, "animate-up", "animate-down");

  const arrow = 20;
  const control = 45;
  const intervalTime = 10000;

  const {
    activeIndex,
    setIsPlaying,
    handleTouchStart,
    handleTouchEnd,
    goToSlide
  } = useCarousel({ length: courses.length, intervalTime });

  const prev = activeIndex > 0;
  const next = activeIndex < courses.length - 1;
  const getActiveIndex = () => activeIndex;

  const { handlePrev, handleNext } = carouselControls({
    getActiveIndex,
    setIsPlaying,
    goToSlide,
    length: courses.length
  });

  return (
    <div className="u22 h-auto">
      <h2 ref={ref} className={`u23 ${slideVertical}`}>
        Moje osiągnięcia
      </h2>

      <div
        className="h-full relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides */}
        <ul className="u24">
          {courses.map((course, index) => {
            const isBeforeActive = index < activeIndex;

            return (
              <li
                key={index}
                className={`
                  group

                  max-w-100
                  duration-500
                  max-h-[464px]
                  transition-all
                  flex-[0_0_100%]
                  [transform:var(--tx)]

                  ${!isBeforeActive ? 
                    "hover:[transform:var(--tx)_scale(1.03)] focus:[transform:var(--tx)_scale(1.03)] active:[transform:var(--tx)_scale(1.03)]"
                    : "pointer-events-none opacity-50"
                  }
                `}
                style={{
                  ["--tx"]: `translateX(calc(-${activeIndex * 100}% - ${activeIndex * 1}rem))`
                }}
              >
                <div className={`u25 [animation-delay:${index * 200}ms] ${slideVertical}`}>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`${course.certificate}`}
                    className="u16 pb-17 h-full box-border items-center justify-between"
                  >
                    <div className="u26">
                      <h3>{course.title}</h3>

                      <span className={`u12 text-lg font-bold relative`}>
                        <span className="u20 text-link">Certyfikat</span>

                        <Icon
                          width={arrow}
                          height={arrow}
                          className="u21"
                          aria-hidden="true"
                          src="/assets/icons/awoMUEKk1D.svg"
                        />
                      </span>
                    </div>

                    <Image
                      width={660}
                      height={393}
                      loading="lazy"
                      placeholder="blur"
                      src={course.image}
                      alt={course.title}
                      blurDataURL="/assets/images/NZpLlUrqON.webp"
                      className={`
                        ml-20
                        border-2
                        -rotate-2
                        rounded-2xl
                        transition-all
                        bg-font-secondary/30

                        group-hover:rotate-0 
                        group-focus:rotate-0
                        group-active:rotate-0
                      `}
                    />
                  </Link>
                </div>
              </li>
            );
          })}
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