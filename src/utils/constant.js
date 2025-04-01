// project images
import Project1 from '../assets/Ecommerce.png';
import Project2 from '../assets/Cyporg.png';
import Project3 from '../assets/FreshCart.png';

// skills images
import Html from '../assets/html5.svg';
import Css from '../assets/css.svg';
import Js from '../assets/javascript.svg';
import React from '../assets/react.svg';
import Node from '../assets/nodejs.svg';
import TypeScript from '../assets/typescript.svg';
import Tailwind from '../assets/tailwindcss.svg';
// import Postgres from '../assets/postgresql.svg';

export const projects = [
  {
    id: 1,
    title: 'Wego',
    description:
      'Wego is a modern Ecommerce website built with React.js, featuring a sleek design powered by CSS Bootstrap. It offers an intuitive user interface to explore products, categories, and make orders seamlessly.',
    image: Project1,
    stack: ['React', 'Next.js', 'CSS Bootstrap'],
    liveUrl: 'https://e-commerce-frontend-backend.vercel.app/',
    sourceUrl: 'https://github.com/walidashraf0/E-commerce-frontend-backend.git',
  },

  {
    id: 2,
    title: 'CYPORG',
    description:
      'Cyporg is a website Gaming clone built with React, featuring a responsive design, carousels, and a navigation system. The website is a perfect example of how to create a modern website with a clean and minimalistic design.',

    image: Project2,
    stack: ['React', 'Tailwind CSS', 'JavaScript'],
    liveUrl: '/',
    sourceUrl: 'https://github.com/walidashraf0/CYBORG.git',
  },

  {
    id: 3,
    title: 'Fresh Cart',
    description:
      'This project is a modern furniture e-commerce website with a clean and minimalistic design. The website is built with React and features a responsive design, a functional shopping cart, and a user-friendly navigation system.',
    image: Project3,
    stack: ['React', 'CSS Bootstrap', 'JavaScript'],
    liveUrl: '/',
    sourceUrl: 'https://github.com/walidashraf0/Second-React-Project.git',
  },
];

export const skills = [
  {
    id: 1,
    name: 'HTML',
    icon: Html,
  },

  {
    id: 2,
    name: 'CSS',
    icon: Css,
  },

  {
    id: 3,
    name: 'JavaScript',
    icon: Js,
  },

  {
    id: 4,
    name: 'React',
    icon: React,
  },

  {
    id: 5,
    name: 'Node',
    icon: Node,
  },

  {
    id: 6,
    name: 'TypeScript',
    icon: TypeScript,
  },

  {
    id: 7,
    name: 'Tailwind',
    icon: Tailwind,
  },

  // {
  //   id: 8,
  //   name: 'Postgres',
  //   icon: Postgres,
  // },
];
