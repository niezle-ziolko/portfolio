import CSSIcon from 'public/icons/css';
import HTMLIcon from 'public/icons/html';
import NextIcon from 'public/icons/next';
import ReactIcon from 'public/icons/react';
import JSIcon from 'public/icons/javascript';
import WordpressIcon from 'public/icons/wordpress';

export default function IconsList() {
  return(
    <ul>
      <li>
        <h2>HTML</h2>
        <HTMLIcon />
      </li>
      <li>
        <h2>CSS</h2>
        <CSSIcon />
      </li>
      <li>
        <h2>JS</h2>
        <JSIcon />
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
        <h2>Wordpress</h2>
        <WordpressIcon />
      </li>
    </ul>
  );
};