"use client";
import { useRef } from "react";
import Image from "next/image";

import { useAnimate } from "lib/animate";
import { courses } from "data/courses";

export default function Skills() {
  const ref = useRef(null);

  const slideClass = useAnimate(ref, "animate-up", "animate-down");

  return (
    <div className="u1 u15 h-screen pl-10 flex-col">
      <div className="u15 relative rounded-xl overflow-hidden z-1">
          
        {/* Title */}
        <h2 ref={ref} className={`pt-0 pb-4 w-full ${slideClass}`}>
          Moje osiągnięcia
        </h2>

        {courses.map((course) => (
          <div key={course.id}>
            <h3>{course.title}</h3>
          
            <Image 
              src={course.image}
              alt={course.title}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};