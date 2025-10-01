import { useRef, useEffect, useState, useCallback } from "react";

export const useCarousel = ({ length, intervalTime = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [finished, setFinished] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const intervalRef = useRef(null);

  const startInterval = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev === length - 1) {
          setFinished(true);
          setIsPlaying(false);
          clearInterval(intervalRef.current);
          return prev;
        }
        return prev + 1;
      });
    }, intervalTime);
  }, [length, intervalTime]);

  useEffect(() => {
    if (isPlaying && !finished) {
      startInterval();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, finished, startInterval]);

  const handleReplay = () => {
    setActiveIndex(0);
    setFinished(false);
    setIsPlaying(true);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(diff) < minSwipeDistance) return;

    if (diff > 0) {
      goToSlide(activeIndex + 1);
    } else {
      goToSlide(activeIndex - 1);
    }
  };

  const goToSlide = (index) => {
    const newIndex = Math.max(0, Math.min(index, length - 1));
    setActiveIndex(newIndex);
    setFinished(newIndex === length - 1);

    if (isPlaying && newIndex < length - 1) {
      startInterval();
    }
  };

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
    length
  };
};
