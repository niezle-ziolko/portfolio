import { useEffect, useState } from 'react';
import CSSIcon from 'public/icons/css';
import SassIcon from 'public/icons/sass';
import HTMLIcon from 'public/icons/html';
import NextIcon from 'public/icons/next';
import ReactIcon from 'public/icons/react';
import JSIcon from 'public/icons/javascript';
import NodeJSIcon from 'public/icons/nodejs';
import DockerIcon from 'public/icons/docker';
import GraphQLIcon from 'public/icons/graphql';
import WordpressIcon from 'public/icons/wordpress';

export default function IconsList() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        };
      },
      { threshold: 0.2 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    };

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      };
    };
  }, []);

  return (
    <ul id={isVisible ? 'icons' : ''}>
      <li>
        <h2>HTML</h2>
        <HTMLIcon />
      </li>
      <li>
        <h2>Wordpress</h2>
        <WordpressIcon />
      </li>
      <li>
        <h2>CSS</h2>
        <CSSIcon />
      </li>
      <li>
        <h2>Sass</h2>
        <SassIcon />
      </li>
      <li>
        <h2>JS</h2>
        <JSIcon />
      </li>
      <li>
        <h2>NodeJS</h2>
        <NodeJSIcon />
      </li>
      <li>
        <h2>React</h2>
        <ReactIcon />
      </li>
      <li>
        <h2>Next</h2>
        <NextIcon />
      </li>
      <li>
        <h2>Docker</h2>
        <DockerIcon />
      </li>
      <li>
        <h2>GraphQL</h2>
        <GraphQLIcon />
      </li>
    </ul>
  );
};