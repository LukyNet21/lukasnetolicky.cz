import reactIcon from "./assets/icons/react.svg"
import astroIcon from "./assets/icons/astro.svg"
import astroIconDark from "./assets/icons/astro-dark.svg"
import tsIcon from "./assets/icons/ts.svg"
import jsIcon from "./assets/icons/js.svg"
import htmlIcon from "./assets/icons/html.svg"
import cssIcon from "./assets/icons/css.svg"
import tailwindIcon from "./assets/icons/tailwindcss.svg"

import goIcon from "./assets/icons/go.svg"
import postgreIcon from "./assets/icons/postgresql.svg"
import honoIcon from "./assets/icons/hono.svg"

import gitIcon from "./assets/icons/git.svg"
import dockerIcon from "./assets/icons/docker.svg"
import cloudflareIcon from "./assets/icons/cloudflare.svg"

export const techCategories = [
  { key: "frontend", title: "Frontend", title_cs: "Frontend" },
  { key: "backend", title: "Backend", title_cs: "Backend" },
  { key: "tools", title: "Tools & Deployment", title_cs: "Jiné nástroje" },
];

export const technologies = [
  // Frontend
  { name: "React", url: "https://react.dev/", category: "frontend", icon: reactIcon, homePage: true, featured: true },
  { name: "Astro", url: "https://astro.build/", category: "frontend", icon: astroIcon, lightModeIcon: astroIconDark, homePage: true },
  { name: "TypeScript", url: "https://www.typescriptlang.org/", category: "frontend", icon: tsIcon },
  { name: "JavaScript", category: "frontend", icon: jsIcon },
  { name: "HTML", category: "frontend", icon: htmlIcon },
  { name: "CSS", category: "frontend", icon: cssIcon },
  { name: "Tailwind CSS", url: "https://tailwindcss.com/", category: "frontend", icon: tailwindIcon, homePage: true },

  // Backend
  { name: "Golang", url: "https://go.dev/", category: "backend", icon: goIcon, homePage: true, featured: true },
  { name: "PostgreSQL", url: "https://www.postgresql.org/", category: "backend", icon: postgreIcon, homePage: true },
  { name: "Hono", url: "https://hono.dev/", category: "backend", icon: honoIcon },

  // Tools
  { name: "Git", url: "https://git-scm.com/", category: "tools", icon: gitIcon, homePage: true, featured: true },
  { name: "Docker", url: "https://www.docker.com/", category: "tools", icon: dockerIcon, homePage: true, featured: true },
  { name: "Cloudflare", url: "https://www.cloudflare.com/", category: "tools", icon: cloudflareIcon, homePage: true },
];

import mail from "./assets/icons/mail.svg"
import github from "./assets/icons/github.svg"
import youtube from "./assets/icons/youtube.svg"

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/LukyNet21",
    icon: github,
    iconName: "github"
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@lnetolicky",
    icon: youtube,
    iconName: "youtube"
  },
  {
    name: "Mail",
    url: "mailto:mail@lukasnetolicky.cz",
    icon: mail,
    iconName: "mail",
    noSocialLink: true
  },
];

import CCNAINT_1 from "./assets/images/about/CCNAITN_1.png";
import ITE from "./assets/images/about/ITE.png";
import I2CS from "./assets/images/about/I2CS.png";


export const certificates = [
  {
    image: CCNAINT_1,
    href: "https://www.credly.com/badges/573bb33a-7307-4a1f-b5b5-b21b0027e461",
    alt: "CCNA: Introduction to Networks Credly badge",
  },
  {
    image: ITE,
    href: "https://www.credly.com/badges/9b46baef-0bc1-4397-8a4d-c4ea53082e1a",
    alt: "IT Essentials Credly badge",
  },
  {
    image: I2CS,
    href: "https://www.credly.com/badges/de0a64f0-8122-4b9a-8bc6-9f1f5a04d480",
    alt: "Introduction to Cybersecurity Credly badge",
  }
]