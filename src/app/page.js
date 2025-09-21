import Laptop from "components/laptop";
import Stack from "components/stack";

export default function Home() {
  return (
    <div>
      <section className="bg-black">
        <Laptop />
      </section>
      <section id="about">
        <Laptop />
      </section>
      <section id="stack">
        <Stack />
      </section>
      <section id="skills" className="h-screen">

      </section>
      <section id="projects">

      </section>
      <section id="contact">

      </section>
    </div>
  );
};