"use client";
import { useState } from "react";

import Icon from "lib/icon";

import ThemeButton from "./theme-button";

const sections = [
  { id: "about", label: "O mnie" },
  { id: "stack", label: "Umiejętności" },
  { id: "skills", label: "Osiągnięcia" },
  { id: "projects", label: "Projekty" },
  { id: "contact", label: "Kontakt" }
];

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const size = 25;

  const handleScroll = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return(
    <nav className={`px-0 w-full box-border overflow-hidden max-w-x transition-bg duration-200 ${isOpen ? "bg-background" : ""}`}>
      <ul className={`flex flex-col w-auto items-start justify-start transition-height duration-200 md:flex-row md:items-center md:justify-between ${isOpen ? "h-screen" : "h-11"}`}>
        <li>
          <ul className="h-11 flex items-center justify-between">
            <li className={`u10 u12 ${isOpen ? "opacity-0" : "opacity-100"}`}>

              {/* Logo */}
              <Icon
                width={size}
                height={size}
                alt="Avatar"
                src="/avatar.svg"
              />
            </li>

            {/* Toggle */}
            <li className="w-full block md:hidden">
              <div className="flex justify-end items-center">
                <label htmlFor="menu" className="relative cursor-pointer hover:text-white">
                  <span className="sr-only">menu</span>
                  <input
                    id="menu"
                    type="checkbox"
                    checked={isOpen}
                    className="absolute opacity-0 z-20 peer"
                    onChange={() => setIsOpen((prev) => !prev)}
                  />
                  <span className="u11 transition-rotate peer-checked:translate-y-[4.5px] peer-checked:rotate-45" />
                  <span className="u11 transition-rotate peer-checked:translate-y-[-4px] peer-checked:-rotate-45" />
                </label>
              </div>
            </li>
          </ul>
        </li>

        {/* References */}
        {sections.map((section) => (
          <li key={section.id}>
            <button onClick={handleScroll(section.id)}>
              <p className="py-1 px-12 text-3xl text-font-secondary font-bold md:px-0 md:font-normal md:text-base md:text-current">{section.label}</p>
            </button>
          </li>
        ))}

        <li className="u12 ml-12 mt-2 md:m-0">
          <ThemeButton />
        </li>
      </ul>
    </nav>
  );
};