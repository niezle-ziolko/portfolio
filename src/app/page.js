import Laptop from "components/laptop";
import Stack from "components/stack";

export default function Home() {
  return (
    <div>
      <section id="about" className="bg-black">
        <Laptop />
      </section>
      <section id="skills">
        <Stack />
      </section>
    </div>
  );
};