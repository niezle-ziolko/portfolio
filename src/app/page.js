import About from "components/about";
import Stack from "components/stack";
import Laptop from "components/laptop";
import Skills from "components/skills";
import Projects from "components/projects";

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
      <section className="h-[200vh]">
        <div className="pt-25 w-full h-full max-w-x">
          <div className="u15 p-[3px] relative rounded-xl bg-[linear-gradient(var(--color-gradient))]">
            
            {/* White background */}
            <div className="absolute inset-0 bg-background blur-sm z-1" />
          
            <div className="pt-50" id="skills">
              <Skills />
            </div>
            <div id="projects">

            </div>
          </div>
        </div>
      </section>
      <section id="contact">

      </section>
    </div>
  );
};