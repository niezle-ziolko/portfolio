import Hello from 'components/section/hello';
import About from 'components/section/about';
import Examples from 'components/section/examples';
import Contact from 'components/section/contact';

export default function Home() {
  return (
    <>
      <Hello />
      <About />
      <Examples />
      <Contact />
    </>
  );
};