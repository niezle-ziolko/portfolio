"use client";
import { useRef } from "react";

import { useAnimate } from "lib/animate";

export default function About() {
  const ref = useRef(null);
  const backlightClass = useAnimate(ref, "animate-backlight", "animate-backlight-exit");
  const upClass = useAnimate(ref, "animate-up", "animate-down");

  return (
    <div className="u1 u15 relative max-w-x">

      {/* Backlight */}
      <div className="flex h-15 w-full top-0 absolute justify-center">
        <div
          ref={ref}
          className={`
            w-full blur-sm md:blur-xl relative -top-15 rounded-b-full u15
            bg-[linear-gradient(var(--color-gradient))] 

            after:h-30 after:block after:backdrop-blur-lg after:w-full
            ${backlightClass}
          `}
        />
      </div>

      <div className="w-full">

        {/* Title */}
        <h2
          ref={ref} 
          className={`
            w-fit text-transparent bg-clip-text 
            bg-[linear-gradient(var(--color-gradient))]
            ${upClass}
          `}
        >
          O mnie
        </h2>

        {/* Description */}
        <div
          ref={ref}
          className={`u16 gap-1 md:gap-10 md:flex-row ${upClass}`}
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