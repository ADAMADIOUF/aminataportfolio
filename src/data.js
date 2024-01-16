import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaNodeJs } from 'react-icons/fa'
import { BiLogoMongodb, BiLogoRedux } from 'react-icons/bi'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiStrapi, SiContentful } from 'react-icons/si'

export const links = [
  { id: nanoid(), href: 'home', text: 'home' },
  { id: nanoid(), href: 'about', text: 'about' },
  { id: nanoid(), href: 'skills', text: 'skills' },
  { id: nanoid(), href: 'projects', text: 'projects' },
  { id: nanoid(), href: 'contact', text: 'contact' },
  { id: nanoid(), href: 'resume', text: 'resume' },
]


export const skillsData = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Next js',
    icon: <TbBrandNextjs className='h-16 w-16 text-emerald-500' />,
    text: `My advanced proficiency in Next.js, a powerful React framework, allows me to build web applications that are both high-performing and maintainable. I leverage Next.js's server-side rendering (SSR) and static site generation (SSG) capabilities to optimize website loading times and enhance SEO.`,
  },
  {
    id: nanoid(),
    title: 'Strapi',
    icon: <SiStrapi className='h-16 w-16 text-emerald-500' />,
    text: `My advanced proficiency in Strapi, a headless CMS (Content Management System), allows me to build web applications with dynamic and customizable content management features. I leverage Strapi's capabilities to create flexible and scalable back-end systems.`,
  },
  {
    id: nanoid(),
    title: 'Redux js',
    icon: <BiLogoRedux className='h-16 w-16 text-emerald-500' />,
    text: `My expertise extends to Redux.js, a state management library that complements React applications. I harness the power of Redux.js to manage complex application states, ensuring data consistency and synchronization across components.

`,
  },
  {
    id: nanoid(),
    title: 'cms Contentful',
    icon: <SiContentful className='h-16 w-16 text-emerald-500' />,
    text: `My expertise extends to Contentful CMS, a headless content management system that complements React applications. I skillfully integrate Contentful to manage content, ensuring seamless updates and dynamic user experiences.`,
  },
  {
    id: nanoid(),
    title: 'Node js',
    icon: <FaNodeJs className='h-16 w-16 text-emerald-500' />,
    text: `Advanced Proficiency in React and Node.js, Specializing in Developing Efficient and Interactive Front-End Applications with a Strong Emphasis on Component-Based Architecture.`,
  },
  {
    id: nanoid(),
    title: 'Mongo DB',
    icon: <BiLogoMongodb className='h-16 w-16 text-emerald-500' />,
    text: `Advanced Proficiency in React and MongoDB, Specializing in Developing Efficient and Interactive Front-End Applications with a Strong Emphasis on Component-Based Architecture.`,
  },
]

export const projects = [
  {
    id: nanoid(),
    img: 'images/echosphere.png',
    url: 'https://echosphere-wac0.onrender.com',
    github: 'https://github.com/ADAMADIOUF/EchoSphere',
    title:
      'EchoSphere Blog Social Media App for testing use eamil:test@gmail.com password:test123',
  },
  {
    id: nanoid(),
    img: 'images/chad.png',
    url: 'https://chads-auto.com/',
    github: 'https://github.com/ADAMADIOUF/automart',
    title: 'chads auto repair',
  },
  {
    id: nanoid(),
    img: 'images/mimexico.png',
    url: 'https://mimexicominot.netlify.app/',
    github: 'https://github.com/ADAMADIOUF/mimexicominot',
    title: 'Mi Mexico Minot Restaurant',
  },
  {
    id: nanoid(),
    img: 'https://media.discordapp.net/attachments/1168684192784208024/1175066466308063242/adama5863_zana_parfumerie_a0494928-aa84-4cdb-ad29-b59237005bfc.png?ex=6569e0ed&is=65576bed&hm=26ef2d34e8f56a51b23c1762aaf5cec0b8b9150f1c5e06e3b2798cfb1fd0b68b&=&width=1060&height=1060',
    url: 'https://zanaparfumerie.com/',
    github: 'https://github.com/ADAMADIOUF/zanaparfumerie',
    title: `ZANA PARFUMERIE`,
    text: `Discover unique fragrances for personal expression. Explore our diverse collection, from classics to niche scents, with detailed descriptions and reviews. Powered by React.js, CSS, and Context API for secure shopping. Immerse yourself in the world of perfumes with Airtable backend support.`,
  },
  {
    id: nanoid(),
    img: 'images/mshoes.png',
    url: 'https://mshoessenegal.com/',
    github: 'https://github.com/ADAMADIOUF/m-shoes',
    title: 'Shoes Store',
  },
]
