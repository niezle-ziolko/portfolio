'use client';
import { useEffect } from 'react';
import Code from 'components/code';
import About from 'components/about';
import Files from 'components/files';
import Laptop from 'components/laptop';
import IconsList from 'components/list';
import Projects from 'components/projects';

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
      <section id='hello'>
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
        <div className='box' id='box'>
          <About />
        </div>
        <div className='box'>
          <IconsList />
        </div>
      </section>
      <section id='certyficates'>
        <div className='box'>
          <Files />
        </div>
        <div className='box' id='box'>
          
        </div>
      </section>
      <section className='examples' id='examples'>
        <div style={{ width: '50%' }}>
          <Code />
        </div>
        <div className='box' id='box'>
          <Projects />
        </div>
      </section>
      <Contact />
    </>
  );
};