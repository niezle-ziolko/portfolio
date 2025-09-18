"use client";
import Link from "next/link";
import { useState } from "react";

import Icon from "lib/icon";

import ThemeButton from "./theme-button";

const sections = [
  { id: "about", label: "O mnie" },
  { id: "skills", label: "Umiejętności" },
  { id: "achievements", label: "Osiągnięcia" },
  { id: "projects", label: "Projekty" },
  { id: "activity", label: "Aktywność" },
];

const socialLinks = [
  {
    href: "tel:+48733196208",
    alt: "Phone number",
    icon: "/phone.svg"
  },
  {
    href: "mailto:wgwcompany@duck.com",
    alt: "Email",
    icon: "/email.svg"
  },
  {
    href: "https://github.com/niezle-ziolko",
    alt: "Github",
    icon: "/github.svg"
  }
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
            <li className={`u10 u13 ${isOpen ? "opacity-0" : "opacity-100"}`}>
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
                    className="absolute opacity-0 z-20 peer"
                    onClick={() => setIsOpen((prev) => !prev)}
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
              <p className="u12">{section.label}</p>
            </button>
          </li>
        ))}

        <li className="md:w-2/5">
          <ul className="u12 flex mx-0 py-5 md:py-0 justify-between">
            {socialLinks.map((item) => (
              <li key={item.href} className="u13">
                <Link
                  className="u13"
                  target="_blank"
                  href={item.href}
                  aria-label={item.alt}
                >
                  <Icon
                    width={size}
                    height={size}
                    className="u14"
                    alt={item.alt}
                    src={item.icon}
                  />
                </Link>
              </li>
            ))}

            <li className="u13">
              <ThemeButton />
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};