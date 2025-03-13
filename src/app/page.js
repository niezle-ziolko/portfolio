import Hello from 'components/section/hello';
import About from 'components/section/about';
import Portfolio from 'components/section/portfolio';
import Contact from 'components/section/contact';

export default function Home() {
  return (
    <>
      <Hello />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
};