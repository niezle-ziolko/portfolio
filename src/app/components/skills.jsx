"use client";
import { useRef } from "react";
import Image from "next/image";

import { useAnimate } from "lib/animate";
import { courses } from "data/courses";

export default function Skills() {
  const ref = useRef(null);

  const slideClass = useAnimate(ref, "animate-up", "animate-down");

  return (
    <div className="u15 z-2 relative max-w-x">
      {/* Title */}
      <h2 ref={ref} className={`pt-11 pb-4 w-full ${slideClass}`}>
        Moje osiągnięcia
      </h2>

      <div className="relative">
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

        <div className="u1 w-full h-full absolute top-0">
          <div className="h-20 w-20 absolute bg-white" />
        </div>
      </div>
    </div>
  );
}
