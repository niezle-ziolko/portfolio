"use client";
import { useRef } from "react";

import { useSlideUp } from "lib/animate";

export default function About() {
  const ref = useRef(null);
  const backlightClass = useSlideUp(ref, "animate-backlight");
  const upClass = useSlideUp(ref, "animate-up");

  return (
    <div className="flex relative w-full h-full max-w-x items-center">

      {/* Backlight */}
      <div className="flex h-15 w-full top-0 absolute justify-center">
        <div
          ref={ref}
          className={`
            h-15 w-full blur-sm md:blur-xl relative -top-5 rounded-b-full opacity-0
            bg-[linear-gradient(97deg,#0096ff,#bb64ff_42%,#f2416b_74%,#eb7500)] 
            ${backlightClass}
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
            ${upClass}
          `}
        >
          O mnie.
        </h2>

        {/* Description */}
        <div
          ref={ref}
          className={`flex gap-1 flex-col md:gap-10 md:flex-row ${upClass}`}
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