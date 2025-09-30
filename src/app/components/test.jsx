"use client";
import { useRef } from "react";
import Image from "next/image";

import Icon from "lib/icon";
import { useAnimate } from "lib/animate";
import { courses } from "data/courses";

export default function Skills() {
  const ref = useRef(null);

  const slideClass = useAnimate(ref, "animate-up", "animate-down");
  
  const size = 56;

  return (
    <div className="u15 u16 z-2 relative max-w-x">
      {/* Title */}
      <h2 ref={ref} className={`pt-11 pb-4 w-full ${slideClass}`}>
        Moje osiągnięcia
      </h2>

      <div className="h-full relative">
        <ul className="flex overflow-clip">
          {courses.map((course) => (
            <li
              key={course.id}
              className="min-w-245 min-h-125 rounded-2xl bg-element-background"
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
                {courses.map((course) => (
                  <li className="w-2 h-2 bg-white rounded-full" key={course.id} />
                ))}
              </ul>
            </div>
          </div>

          <div className="u1 u17 fill-white">
            <Icon
              width={size}
              height={size}
              alt="Avatar"
              src="/assets/icons/play.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};