"use client";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: [0.5] }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex relative w-full h-full max-w-x items-center">

      {/* Backlight */}
      <div className="flex h-15 w-full top-0 absolute justify-center">
        <div
          ref={ref}
          className={`
            h-15 w-full blur-sm md:blur-xl relative -top-5 rounded-b-full 
            bg-[linear-gradient(97deg,#0096ff,#bb64ff_42%,#f2416b_74%,#eb7500)] 
            ${isVisible ? "animate-backlight" : ""}
          `}
        />
      </div>

      <div>
        {/* Title */}
        <h2
          ref={ref} 
          className={`
            w-fit text-transparent bg-clip-text 
            bg-[linear-gradient(97deg,#0096ff,#bb64ff_42%,#f2416b_74%,#eb7500)] 
            ${isVisible ? "animate-header" : ""}
          `}
        >
          O mnie.
        </h2>

        {/* Description */}
        <div
          ref={ref}
          className={`flex gap-1 flex-col md:gap-10 md:flex-row ${isVisible ? "animate-header" : ""}`}
        >
          <p className="u14">
            Moja przygoda z programowaniem zaczęła się w czasach pandemii, 
            kiedy wpadłem na pomysł stworzenia sklepu internetowego z produktami CBD i konopnymi. 
            Zaczynałem od <em>WordPressa</em>, ucząc się na bieżąco zarówno tworzenia strony, jak i jej administracji. 
            Po roku eksperymentów i pracy nad pierwszą stroną poczułem, 
            że nadszedł czas, aby przenieść swoje umiejętności na wyższy poziom.
          </p>

          <p className="u14">
            W kolejnym kroku stworzyłem sklep oparty o framework <em>Gatsby</em>, 
            eksplorując możliwości nowoczesnych technologii front-endowych. 
            Jednak w momencie premiery wersji produkcyjnej aplikacji musiałem zmierzyć się z wyzwaniami związanymi z samym frameworkiem, 
            co skłoniło mnie do kolejnej migracji — tym razem do Next.js, 
            który pozwolił mi stworzyć jeszcze bardziej funkcjonalną i skalowalną stronę.
          </p>

          <p className="u14">
            Niestety, zmiany regulacyjne dotyczące produktów konopnych zmusiły mnie do zamknięcia biznesu. 
            To doświadczenie okazało się jednak bezcenne, 
            ponieważ pozwoliło mi odkryć pasję do tworzenia stron internetowych i rozwijać się jako programista, 
            zdobywając praktyczne doświadczenie w pracy z <em>WordPress</em>, <em>Gatsby</em> oraz <em>Next.js</em>. 
            Od tamtej pory koncentruję się na tworzeniu nowoczesnych, 
            wydajnych i przyjaznych użytkownikowi stron internetowych.
          </p>
        </div>
      </div>
    </div>
  );
};