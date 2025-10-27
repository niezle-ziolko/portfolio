import About from "components/about";
import Stack from "components/stack";
import Laptop from "components/laptop";
import Skills from "components/skills";
import Projects from "components/projects";

export default function Home() {
  return (
    <div className="overflow-clip">
      <section className="bg-black">
        <Laptop />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="stack">
        <Stack />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>
    </div>
  );
};