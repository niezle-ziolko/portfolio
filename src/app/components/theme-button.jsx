"use client";
import { useTheme } from "context/theme-context";

export default function ThemeButton() {
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <ul className="p-1 flex gap-2 rounded-full bg-theme-button-background shadow-[inset_0_0_1px_rgba(0,0,0,0.11)]">

        {/* Dark Mode */}
        <li className="u1">
          <input
            id="theme-color-dark"
            name="theme"
            type="radio"
            className="peer sr-only"
            checked={isDarkMode}
            onChange={() => setIsDarkMode(true)}
          />
          <label
            htmlFor="theme-color-dark"
            className="u10 w-5 h-5 inline-flex box-border items-center justify-center rounded-full cursor-pointer peer-checked:border-[1.5px] peer-checked:border-theme-button-border peer-focus:outline peer-focus:outline-[rgba(0,125,250,0.6)] peer-focus:outline-[2px] peer-focus:outline-offset-[2px]"
          >
            <span className="sr-only">dark</span>
            <span className="w-4 h-4 block rounded-full bg-[#2e2c2e]" />
          </label>
        </li>

        {/* Light Mode */}
        <li className="u1">
          <input
            id="theme-color-light"
            name="theme"
            type="radio"
            className="peer sr-only"
            checked={!isDarkMode}
            onChange={() => setIsDarkMode(false)}
          />
          <label
            htmlFor="theme-color-light"
            className="u10 w-5 h-5 inline-flex box-border items-center justify-center rounded-full cursor-pointer peer-checked:border-[1.5px] peer-checked:border-theme-button-border peer-focus:outline peer-focus:outline-[rgba(0,125,250,0.6)] peer-focus:outline-[2px] peer-focus:outline-offset-[2px]"
          >
            <span className="sr-only">light</span>
            <span className="w-4 h-4 block rounded-full bg-[#e3e4e5] shadow-[inset_0_0.5px_1px_rgba(0,0,0,0.5)]" />
          </label>
        </li>
      </ul>

      {/* Dynamic Text */}
      <span className="w-10 text-xs text-center text-font-secondary md:text-font-primary font-bold">
        {isDarkMode ? "Ciemny" : "Jasny"}
      </span>
    </div>
  );
};