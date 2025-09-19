import Icon from "lib/icon";

const icons = [
  { alt: "NextJS", src: "/nextjs.svg", top: "10%", left: "20%", scale: 2 },
  { alt: "NodeJS", src: "/nodejs.svg", top: "25%", left: "70%", scale: 0.9 },
  { alt: "GraphQL", src: "/graphql.svg", top: "50%", left: "40%", scale: 1.4 },
  { alt: "Docker", src: "/docker.svg", top: "65%", left: "20%", scale: 1.1 },
  { alt: "Tailwindcss", src: "/tailwind-css.svg", top: "75%", left: "60%", scale: 0.8 },
  { alt: "React", src: "/react.svg", top: "40%", left: "85%", scale: 1.3 },
  { alt: "npm", src: "/npm.svg", top: "15%", left: "50%", scale: 0.7 },
  { alt: "Wordpress", src: "/wordpress.svg", top: "80%", left: "35%", scale: 1.0 }
];

export default function Stack() {
  const size = 64;

  return (
    <div className="w-x max-w-x">
      <h2>Moje umiejętności</h2>
      <div className="flex relative h-[450px] justify-center items-center">
        <div className="absolute w-full h-full transition-all duration-300 scroll-resize">
          {icons.map((icon, i) => (
            <Icon
              key={i}
              width={size}
              height={size}
              alt={icon.alt}
              src={icon.src}
              className="
                p-2 border absolute
                bg-element-background
                rounded-2xl border-element-border
                shadow-[2px_2px_4px_rgba(0,0,0,0.1),_inset_0_1px_1px_rgba(0,0,0,0.05)]
              "
              style={{
                top: icon.top,
                left: icon.left,
                transform: `translate(-50%, -50%) scale(${icon.scale})`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
