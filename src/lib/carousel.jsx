import { useRef, useEffect, useState, useCallback } from "react";

export const useCarousel = ({ length, intervalTime = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [finished, setFinished] = useState(false);
  const [replayKey, setReplayKey] = useState(0);
  const [userCanReplay, setUserCanReplay] = useState(true);

  const timeoutRef = useRef(null);
  const deadlineRef = useRef(null);
  const remainingRef = useRef(intervalTime);
  const [remainingMs, setRemainingMs] = useState(intervalTime);

  const clearTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    };

    deadlineRef.current = null;
  }, []);

  const handleTimeout = useCallback(() => {
    timeoutRef.current = null;
    deadlineRef.current = null;
    setRemainingMs(0);

    setActiveIndex((prev) => {
      if (prev >= length - 1) {
        setFinished(true);
        setIsPlaying(false);
        setUserCanReplay(false);
        remainingRef.current = 0;
        return prev;
      };

      remainingRef.current = intervalTime;
      setRemainingMs(intervalTime);

      return prev + 1;
    });
  }, [intervalTime, length]);

  const startTimer = useCallback(
    (ms) => {
      clearTimer();

      const time = Math.max(0, Math.round(typeof ms === "number" ? ms : remainingRef.current || intervalTime));

      remainingRef.current = time;
      setRemainingMs(time);
      deadlineRef.current = Date.now() + time;
      timeoutRef.current = setTimeout(handleTimeout, time);
    }, [clearTimer, handleTimeout, intervalTime]
  );

  useEffect(() => {
    remainingRef.current = Math.min(remainingRef.current, intervalTime);
    setRemainingMs(remainingRef.current);
  }, [intervalTime]);

  useEffect(() => {
    if (isPlaying && !finished) {
      startTimer(remainingRef.current);

      return;
    };

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;

      const rem = deadlineRef.current ? Math.max(0, Math.round(deadlineRef.current - Date.now())) : remainingRef.current;

      remainingRef.current = rem;
      setRemainingMs(rem);
      deadlineRef.current = null;
    };
  }, [isPlaying, finished, activeIndex, startTimer]);

  const goToSlide = useCallback(
    (index) => {
      const newIndex = Math.max(0, Math.min(index, length - 1));
      setActiveIndex(newIndex);
      setFinished(newIndex === length - 1);

      remainingRef.current = intervalTime;
      setRemainingMs(intervalTime);

      if (isPlaying) {
        startTimer(intervalTime);
      } else {
        clearTimer();
      };
    }, [intervalTime, isPlaying, length, startTimer, clearTimer]
  );

  const handleReplay = useCallback(() => {
    clearTimer();
    setActiveIndex(0);
    setFinished(false);
    setUserCanReplay(true);
    remainingRef.current = intervalTime;
    setRemainingMs(intervalTime);
    setIsPlaying(true);
    setReplayKey((k) => k + 1);
  }, [intervalTime, clearTimer]);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;
    if (Math.abs(diff) < minSwipeDistance) return;
    if (diff > 0) goToSlide(activeIndex + 1);
    else goToSlide(activeIndex - 1);
  };

  useEffect(() => {
    const skillsSection = document.getElementById("skills");
    if (!skillsSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (
          entry.isIntersecting &&
          entry.intersectionRatio >= 0.25 &&
          !finished &&
          userCanReplay
        ) {
          setIsPlaying(true);
        } else if (entry.intersectionRatio < 0.25) {
          setIsPlaying(false);
        };
      }, { threshold: [0.25] }
    );

    observer.observe(skillsSection);
    return () => observer.disconnect();
  }, [finished, userCanReplay]);

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.target.id !== "skills" &&
            entry.isIntersecting &&
            entry.intersectionRatio >= 0.5
          ) {
            setIsPlaying(false);
            setUserCanReplay(false);
          };
        });
      }, { threshold: [0.5] }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return {
    activeIndex,
    isPlaying,
    finished,
    setActiveIndex,
    setIsPlaying,
    handleReplay,
    handleTouchStart,
    handleTouchEnd,
    goToSlide,
    length,
    remainingTime: remainingMs,
    replayKey,
  };
};

export function useProgressDots({
  dotsRef,
  activeIndex,
  isPlaying,
  finished,
  intervalTime = 3000,
  remainingTime,
  replayKey
}) {
  const animTimeoutRef = useRef(null);
  const currentProgressRef = useRef(0);
  const lastIndexRef = useRef(activeIndex);

  useEffect(() => {
    const dots = dotsRef.current || [];
    dots.forEach((el) => {
      if (!el) return;
      el.style.transition = "none";
      el.style.width = "0%";
    });
    currentProgressRef.current = 0;
    lastIndexRef.current = activeIndex;
  }, [replayKey, dotsRef, activeIndex]);

  useEffect(() => {
    const dots = dotsRef.current || [];

    dots.forEach((el, idx) => {
      if (!el) return;
      if (idx !== activeIndex) {
        el.style.transition = "none";
        el.style.width = "0%";
      };
    });

    const activeEl = dots[activeIndex];
    if (!activeEl) return;

    if (animTimeoutRef.current) {
      clearTimeout(animTimeoutRef.current);
      animTimeoutRef.current = null;
    };

    const computeProgressFromDOM = () => {
      try {
        const computed = getComputedStyle(activeEl);
        const w = parseFloat(computed.width);
        const parentW = activeEl.parentElement ? activeEl.parentElement.clientWidth : 0;
        if (!parentW || isNaN(w)) return currentProgressRef.current || 0;
        return Math.min(Math.max(w / parentW, 0), 1);
      } catch {
        return currentProgressRef.current || 0;
      };
    };

    if (!isPlaying || finished) {
      const p = computeProgressFromDOM();
      currentProgressRef.current = p;
      activeEl.style.transition = "none";
      activeEl.style.width = `${p * 100}%`;

      return;
    };

    const isNewSlide = lastIndexRef.current !== activeIndex;
    lastIndexRef.current = activeIndex;

    const domProgress = computeProgressFromDOM();

    let startProgress;
    if (isNewSlide) {
      startProgress = 0;
      currentProgressRef.current = 0;
    } else {
      startProgress = Math.max(0, Math.min(1, currentProgressRef.current || domProgress || 0));
      currentProgressRef.current = startProgress;
    };

    let remainingMs;
    if (typeof remainingTime === "number" && remainingTime >= 0) {
      remainingMs = Math.max(0, Math.round(remainingTime));
    } else {
      remainingMs = Math.max(0, Math.round((1 - startProgress) * intervalTime));
    };

    if (remainingMs === 0) {
      activeEl.style.transition = "none";
      activeEl.style.width = "100%";
      currentProgressRef.current = 0;
      return;
    };

    activeEl.style.transition = "none";
    activeEl.style.width = `${startProgress * 100}%`;
    void activeEl.offsetWidth;
    activeEl.style.transition = `width ${remainingMs}ms linear`;

    requestAnimationFrame(() => {
      activeEl.style.width = "100%";
      animTimeoutRef.current = setTimeout(() => {
        currentProgressRef.current = 0;
        animTimeoutRef.current = null;
      }, remainingMs);
    });

    return () => {
      if (animTimeoutRef.current) {
        clearTimeout(animTimeoutRef.current);
        animTimeoutRef.current = null;
      };
    };
  }, [
    activeIndex,
    isPlaying,
    finished,
    intervalTime,
    remainingTime,
    dotsRef,
    replayKey
  ]);
};