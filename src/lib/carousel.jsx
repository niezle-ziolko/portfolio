import { useRef, useEffect, useState, useCallback } from "react";

export const useCarousel = ({ length, intervalTime = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [finished, setFinished] = useState(false);

  const timeoutRef = useRef(null);
  const startTimestampRef = useRef(null);
  const remainingTimeRef = useRef(intervalTime);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // 🕒 Uruchamia licznik czasu do następnego slajdu
  const startTimer = useCallback(
    (time = remainingTimeRef.current) => {
      clearTimer();
      startTimestampRef.current = Date.now();

      timeoutRef.current = setTimeout(() => {
        setActiveIndex((prev) => {
          if (prev === length - 1) {
            setFinished(true);
            setIsPlaying(false);
            clearTimer();
            return prev;
          }

          // ⏭ przejście do następnego slajdu
          remainingTimeRef.current = intervalTime; // reset dla nowego slajdu
          startTimestampRef.current = Date.now();
          return prev + 1;
        });
      }, time);
    },
    [length, intervalTime]
  );

  // ▶️⏸ Reakcja na pauzę / wznowienie
  useEffect(() => {
    if (isPlaying && !finished) {
      startTimer();
    } else {
      // Pauza → zapisz ile zostało
      if (timeoutRef.current) {
        clearTimer();
        const elapsed = Date.now() - startTimestampRef.current;
        remainingTimeRef.current = Math.max(intervalTime - elapsed, 0);
      }
    }

    return clearTimer;
  }, [isPlaying, finished, startTimer, intervalTime]);

  // 🔁 Po każdej zmianie slajdu resetujemy czas do pełnego `intervalTime`
  useEffect(() => {
    remainingTimeRef.current = intervalTime;

    if (isPlaying && !finished) {
      startTimer(intervalTime); // start pełnego odliczania
    }
  }, [activeIndex, isPlaying, finished, intervalTime, startTimer]);

  const handleReplay = () => {
    setActiveIndex(0);
    setFinished(false);
    remainingTimeRef.current = intervalTime;
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

    if (diff > 0) goToSlide(activeIndex + 1);
    else goToSlide(activeIndex - 1);
  };

  const goToSlide = (index) => {
    const newIndex = Math.max(0, Math.min(index, length - 1));
    setActiveIndex(newIndex);
    setFinished(newIndex === length - 1);

    if (isPlaying && newIndex < length - 1) {
      remainingTimeRef.current = intervalTime; // reset pełnego czasu
      startTimer(intervalTime);
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
    length,
    remainingTime: remainingTimeRef.current,
  };
};

export function useProgressDots({
  dotsRef,
  activeIndex,
  isPlaying,
  finished,
  intervalTime = 3000,
  remainingTime, // number in ms (optional)
}) {
  const animTimeoutRef = useRef(null);
  const currentProgressRef = useRef(0); // 0..1 - zachowany progress między pauzami

  useEffect(() => {
    const dots = dotsRef.current || [];

    // Resetuj nieaktywne kropki (bez transition)
    dots.forEach((el, idx) => {
      if (!el) return;
      if (idx !== activeIndex) {
        el.style.transition = "none";
        el.style.width = "0%";
      }
    });

    const activeEl = dots[activeIndex];
    if (!activeEl) return;

    // Wyczyść poprzedni timeout
    if (animTimeoutRef.current) {
      clearTimeout(animTimeoutRef.current);
      animTimeoutRef.current = null;
    }

    // Helper: oblicz aktualny progress z width DOM (bez polegania tylko na refach czasowych)
    const computeProgressFromDOM = () => {
      try {
        const computed = getComputedStyle(activeEl);
        const w = parseFloat(computed.width);
        const parentW = activeEl.parentElement ? activeEl.parentElement.clientWidth : 0;
        if (!parentW || isNaN(w)) return currentProgressRef.current || 0;
        return Math.min(Math.max(w / parentW, 0), 1);
      } catch {
        return currentProgressRef.current || 0;
      }
    };

    // PAUZA LUB FINISHED: zatrzymaj i zapisz progress
    if (!isPlaying || finished) {
      const p = computeProgressFromDOM();
      currentProgressRef.current = p;
      activeEl.style.transition = "none";
      activeEl.style.width = `${p * 100}%`;
      return; // nic więcej
    }

    // GRA (isPlaying === true && !finished): wznowienie / start animacji
    // Ustal skąd bierzemy remaining: preferuj przekazany remainingTime, w przeciwnym razie liczymy z progressRef lub DOM
    const domProgress = computeProgressFromDOM();
    const progress = currentProgressRef.current || domProgress || 0;

    const remainingMs =
      typeof remainingTime === "number"
        ? Math.max(remainingTime, 0)
        : Math.max(Math.round((1 - progress) * intervalTime), 0);

    // Przygotuj element: ustaw width na aktualny bez transition, wymuś reflow,
    // potem ustaw transition z remainingMs i w next frame ustaw width 100%
    activeEl.style.transition = "none";
    activeEl.style.width = `${progress * 100}%`;

    // wymuszenie reflow
    // eslint-disable-next-line no-unused-expressions
    void activeEl.offsetWidth;

    // ustaw transition inline i w następnej animowanej klatce przejdź do 100%
    activeEl.style.transition = `width ${remainingMs}ms linear`;
    requestAnimationFrame(() => {
      // start animacji od bieżącego width -> 100%
      activeEl.style.width = "100%";

      // ustaw timeout aby po zakończeniu wyzerować progressRef
      animTimeoutRef.current = setTimeout(() => {
        currentProgressRef.current = 0;
        animTimeoutRef.current = null;
      }, remainingMs);
    });

    // cleanup
    return () => {
      if (animTimeoutRef.current) {
        clearTimeout(animTimeoutRef.current);
        animTimeoutRef.current = null;
      }
    };
  }, [activeIndex, isPlaying, finished, intervalTime, remainingTime, dotsRef]);
}