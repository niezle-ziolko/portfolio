import { useEffect, useRef, useState } from 'react';
import 'public/css/paper.css';

export default function Paper() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        };
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    };

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className='page' ref={ref}>
      <div className='margin' />
      <p>
        <span className={isVisible ? 'animate' : ''}>
          Moja przygoda z programowaniem rozpoczęła się w nietypowych okolicznościach – w czasie pandemii
        </span>
        <span className={isVisible ? 'animate' : ''}>
          Covid-19. W obliczu trudności, które dotknęły wiele osób, postanowiłem zrealizować swój pomysł na
        </span>
      </p>
    </div>
  );
};