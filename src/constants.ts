import reactIcon from "./assets/icons/react.svg"
import astroIcon from "./assets/icons/astro.svg"
import astroIconDark from "./assets/icons/astro-dark.svg"
import tsIcon from "./assets/icons/ts.svg"
import jsIcon from "./assets/icons/js.svg"
import htmlIcon from "./assets/icons/html.svg"
import cssIcon from "./assets/icons/css.svg"
import tailwindIcon from "./assets/icons/tailwindcss.svg"
import tailwindIconWhite from "./assets/icons/tailwindcss-white.svg"

import goIcon from "./assets/icons/go.svg"
import postgreIcon from "./assets/icons/postgresql.svg"
import nextjsIcon from "./assets/icons/nextjs.svg"

import gitIcon from "./assets/icons/git.svg"
import dockerIcon from "./assets/icons/docker.svg"

export const techCategories = [
  { key: "frontend", title: "Frontend", title_cs: "Frontend" },
  { key: "backend", title: "Backend", title_cs: "Backend" },
  { key: "tools", title: "Tools & Deployment", title_cs: "Jiné nástroje" },
];

export const technologies = [
  // Frontend
  { name: "React", url: "https://react.dev/" ,category: "frontend", icon: reactIcon },
  { name: "Astro", url: "https://astro.build/", category: "frontend", icon: astroIcon, lightModeIcon: astroIconDark },
  { name: "TypeScript", url: "https://www.typescriptlang.org/", category: "frontend", icon: tsIcon },
  { name: "JavaScript", category: "frontend", icon: jsIcon },
  { name: "HTML", category: "frontend", icon: htmlIcon },
  { name: "CSS", category: "frontend", icon: cssIcon },
  { name: "Tailwind CSS", url: "https://tailwindcss.com/", category: "frontend", icon: tailwindIconWhite, lightModeIcon: tailwindIcon },

  // Backend
  { name: "Go", url: "https://go.dev/", category: "backend", icon: goIcon },
  { name: "PostgreSQL", url: "https://www.postgresql.org/", category: "backend", icon: postgreIcon },
  { name: "Next.js", url: "https://nextjs.org/", category: "backend", icon: nextjsIcon },

  // Tools
  { name: "Git", url: "https://git-scm.com/", category: "tools", icon: gitIcon },
  { name: "Docker", url: "https://www.docker.com/", category: "tools", icon: dockerIcon },
];
