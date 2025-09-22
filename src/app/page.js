import About from "components/about";
import Stack from "components/stack";
import Laptop from "components/laptop";

export default function Home() {
  return (
    <div>
      <section className="bg-black">
        <Laptop />
      </section>
      <section id="about" className="overflow-hidden">
        <About />
      </section>
      <section id="stack">
        <Stack />
      </section>
      <section id="skills">

      </section>
      <section id="projects">

      </section>
      <section id="contact">

      </section>
    </div>
  );
};