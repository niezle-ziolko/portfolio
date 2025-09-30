"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

import Icon from "lib/icon";
import { useAnimate } from "lib/animate";
import { courses } from "data/courses";

export default function Skills() {
  const ref = useRef(null);
  const slideClass = useAnimate(ref, "animate-up", "animate-down");

  const size = 56;
  const intervalTime = 3000;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!isPlaying || finished) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev === courses.length - 1) {
          setFinished(true);
          setIsPlaying(false);
          return prev;
        };

        return prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isPlaying, finished]);

  const handleReplay = () => {
    setActiveIndex(0);
    setFinished(false);
    setIsPlaying(true);
  };

  let iconSrc = "/assets/icons/play.svg";
  if (isPlaying) {
    iconSrc = "/assets/icons/pause.svg";
  } else if (finished) {
    iconSrc = "/assets/icons/replay.svg";
  };

  return (
    <div className="u15 u16 z-2 relative max-w-x">
      {/* Title */}
      <h2 ref={ref} className={`pt-11 pb-4 w-full ${slideClass}`}>
        Moje osiągnięcia
      </h2>

      <div className="h-full relative overflow-clip">
        <ul
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 97}%)` }}
        >
          {courses.map((course) => (
            <li
              key={course.id}
              className="min-w-245 min-h-125 flex flex-col items-center justify-center rounded-2xl bg-element-background"
            >
              <h3>{course.title}</h3>
              <Image
                src={course.image}
                alt={course.title}
                width={100}
                height={100}
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
                    onClick={() => {
                      setActiveIndex(index);
                      setIsPlaying(false);
                      setFinished(index === courses.length - 1);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer 
    ${index === activeIndex 
                    ? "w-12 bg-hover-player" // aktywny – stały kolor
                    : "w-2 bg-element-player hover:bg-hover-player"}`
                    }
                  />
                ))}
              </ul>
            </div>
          </div>

          <div
            className="u1 u17 fill-element-player cursor-pointer hover:fill-hover-player"
            onClick={() =>
              finished
                ? handleReplay()
                : setIsPlaying((prev) => !prev)
            }
          >
            <Icon width={size} height={size} alt="Control" src={iconSrc} />
          </div>
        </div>
      </div>
    </div>
  );
};