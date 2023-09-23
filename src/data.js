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
    img: 'https://adamadioufportfolio.com/static/media/f1.b435b9d8f6abb889f89b.png',
    url: 'https://landingpagehtmlcssjs.netlify.app/',
    github: 'https://github.com/ADAMADIOUF/landingpage',
    title: 'Welcome To Our Hotel',
    text: `Experience luxury at our picturesque hotel. Whether for business or leisure, it's your home away from home. With breathtaking views, top-tier amenities, and exceptional service, your stay will be unforgettable. Explore our website for room details, facilities, and offers. We can't wait to host you. HTML, CSS, JavaScript.`,
  },
  {
    id: nanoid(),
    img: 'https://adamadioufportfolio.com/static/media/f3.0ea64472bb236a84fdb2.png',
    url: 'https://worldbusinesssenegal.com/',
    github: 'https://github.com/ADAMADIOUF/zanaparfumerie',
    title: `zanaparfumerie.com
ZANA PARFUMERIE`,
    text: `Discover unique fragrances for personal expression. Explore our diverse collection, from classics to niche scents, with detailed descriptions and reviews. Powered by React.js, CSS, and Context API for secure shopping. Immerse yourself in the world of perfumes with Airtable backend support.`,
  },
  {
    id: nanoid(),
    img: 'https://adamadioufportfolio.com/static/media/f4.26706b32ec860a20e453.png',
    url: 'https://worldbusinesssenegal.com/',
    github: 'https://github.com/ADAMADIOUF/phonestore',
    title: 'Phone Store',
    text: `World Business simplifies phone shopping. Order via WhatsApp for swift delivery. Explore the latest smartphones, get personalized support, and enjoy speedy delivery. Our platform is powered by React.js, CSS, Redux, and runs on Airtable and Serverless Netlify.`,
  },
  {
    id: nanoid(),
    img: 'https://adamadioufportfolio.com/static/media/f5.1dd230da8ee717e8c89e.png',
    url: 'https://awagueyecouture.com/',
    github: 'https://github.com/ADAMADIOUF/cheikhmbaye',
    title: 'Clothing Store',
    text: `Explore stylish apparel at our online store with a seamless shopping experience. Find high-quality clothing from casual to formal wear, backed by excellent service. Stay on-trend with us—built with React.js, CSS, Redux, and powered by Airtable and Serverless Netlify.`,
  },
]
