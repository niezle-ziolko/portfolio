"use client";
import { useRef, useState, useEffect } from "react";

export function useAnimate(ref, enterClass, exitClass) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [ref]);

  return isVisible ? enterClass : exitClass;
};

export function useScale(initialScale = 0.5) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(initialScale);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let visibleRatio = (windowHeight - rect.top) / (rect.height + windowHeight);
      visibleRatio = Math.min(Math.max(visibleRatio, 0), 1);

      const newScale = Math.min(1, 0.5 + visibleRatio * 0.5);
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return { containerRef, scale };
};
