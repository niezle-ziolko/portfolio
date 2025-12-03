import { icons } from "./skills";

const getIcon = alt => icons.find(i => i.alt === alt);

export const projects = [
  {
    name: "EchoVerse",
    link: "https://enigma.wgwcompany.workers.dev/",
    favicon: "/assets/icons/favicons/w6SFhIPYQF.svg",
    repository: "https://github.com/niezle-ziolko/cs50x-final-project",
    performance: "49",
    video: "/assets/videos/projects/9IkiIMqtiF.webm",
    stack: [
      getIcon("HTML"),
      getIcon("CSS"),
      getIcon("Javascript"),
      getIcon("Tailwindcss"),
      getIcon("NextJS"),
      getIcon("GraphQL")
    ]
  },
  {
    name: "EchoVerse",
    link: "https://enigma.wgwcompany.workers.dev/",
    favicon: "/assets/icons/favicons/w6SFhIPYQF.svg",
    repository: "https://github.com/niezle-ziolko/cs50x-final-project",
    performance: "99",
    video: "/assets/videos/projects/9IkiIMqtiF.webm",
    stack: [
      getIcon("HTML"),
      getIcon("CSS"),
      getIcon("Javascript"),
      getIcon("Tailwindcss"),
      getIcon("NextJS"),
      getIcon("GraphQL")
    ]
  },
  {
    name: "EchoVerse",
    link: "https://enigma.wgwcompany.workers.dev/",
    favicon: "/assets/icons/favicons/w6SFhIPYQF.svg",
    repository: "https://github.com/niezle-ziolko/cs50x-final-project",
    performance: "99",
    video: "/assets/videos/projects/9IkiIMqtiF.webm",
    stack: [
      getIcon("HTML"),
      getIcon("CSS"),
      getIcon("Javascript"),
      getIcon("Tailwindcss"),
      getIcon("NextJS"),
      getIcon("GraphQL")
    ]
  }
];