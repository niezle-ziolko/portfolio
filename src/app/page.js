import About from "components/about";
import Skills from "components/skills";
import Laptop from "components/laptop";
import Pricing from "components/pricing";
import Projects from "components/projects";
import Certificates from "components/certificates";

export default function Home() {
  return (
    <div className="overflow-clip">
      <section className="bg-black">
        <Laptop />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="certificates">
        <Certificates />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="pricing">
        <Pricing />
      </section>
    </div>
  );
};