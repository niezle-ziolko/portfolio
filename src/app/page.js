'use client';
import { useEffect } from 'react';
import Paper from 'components/paper';
import Laptop from 'components/laptop';
import Examples from 'components/section/examples';
import Contact from 'components/section/contact';

export default function Home() {
  useEffect(() => {
    let currentSection = 0;
    const sections = document.querySelectorAll('section');

    const scrollToSection = (index) => {
      if (index >= 0 && index < sections.length) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
        currentSection = index;
      };
    };

    const handleWheel = (event) => {
      if (event.deltaY > 0) {
        scrollToSection(currentSection + 1);
      } else {
        scrollToSection(currentSection - 1);
      };

      event.preventDefault();
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <>
      <section>
        <div className='box' id='box'>
          <div style={{ paddingInline: '100px' }}>
            <h1>Siemanko,<br />nazywam się <span>Norman!</span></h1>
            <p>Jestem kreatywnym web deweloperem / Wordpress deweloprem, który chętnie zajmie się realizacją Twojego projektu.</p>
          </div>
        </div>
        <div className='box'>
          <Laptop />
        </div>
      </section>
      <section id='about'>
        <div className='box'>
          <Paper />
        </div>
        <div className='box'>
          
        </div>
      </section>
      <Examples />
      <Contact />
    </>
  );
};