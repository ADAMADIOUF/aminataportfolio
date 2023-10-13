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
    img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    url: 'https://landingpagehtmlcssjs.netlify.app/',
    github: 'https://github.com/ADAMADIOUF/landingpage',
    title: 'Welcome To Our Hotel',
    text: `Experience luxury at our picturesque hotel. Whether for business or leisure, it's your home away from home. With breathtaking views, top-tier amenities, and exceptional service, your stay will be unforgettable. Explore our website for room details, facilities, and offers. We can't wait to host you. HTML, CSS, JavaScript.`,
  },
  {
    id: nanoid(),
    img: 'https://media.istockphoto.com/id/1331771661/photo/new-car-owner-sitting-in-car-and-taking-keys-from-seller.webp?b=1&s=170667a&w=0&k=20&c=UNw3tfGPZ45NszqLFCv_ciynEv1pxZZqjfgug0ZNe1A=',
    url: 'https://senegalautomarket.com/',
    github: 'https://github.com/ADAMADIOUF/senegalautomarketfinal',
    title: 'Auto Rental & Sales Hub',
    text: `Whether for business or leisure, we offer a home away from home experience in the world of automobiles. With a stunning selection, top-notch features, and exceptional service, your journey will be unforgettable. Explore our website for vehicle details, options, and special deals. We can't wait to be your automotive destination. React js, CSS, Airtable,ReduxToolkit,Auth0.`,
  },
  {
    id: nanoid(),
    img: 'https://media.istockphoto.com/id/1494935138/photo/organic-cosmetics-with-ingredients.webp?b=1&s=170667a&w=0&k=20&c=093MogHUdEKEgX_d7X6BU9FBG4WoYJr4_3MzKMti008=',
    url: 'https://zanaparfumerie.com/',
    github: 'https://github.com/ADAMADIOUF/zanaparfumerie',
    title: `ZANA PARFUMERIE`,
    text: `Discover unique fragrances for personal expression. Explore our diverse collection, from classics to niche scents, with detailed descriptions and reviews. Powered by React.js, CSS, and Context API for secure shopping. Immerse yourself in the world of perfumes with Airtable backend support.`,
  },
  {
    id: nanoid(),
    img: 'https://images.unsplash.com/photo-1596742578443-7682ef5251cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBob25lJTIwc3RvcmUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    url: 'https://worldbusinesssenegal.com/',
    github: 'https://github.com/ADAMADIOUF/phonestore',
    title: 'Phone Store',
    text: `World Business simplifies phone shopping. Order via WhatsApp for swift delivery. Explore the latest smartphones, get personalized support, and enjoy speedy delivery. Our platform is powered by React.js, CSS, Redux, and runs on Airtable and Serverless Netlify.`,
  },
  {
    id: nanoid(),
    img: 'https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNsb3RoaW5nJTIwc3RvcmUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    url: 'https://awagueyecouture.com/',
    github: 'https://github.com/ADAMADIOUF/cheikhmbaye',
    title: 'Clothing Store',
    text: `Explore stylish apparel at our online store with a seamless shopping experience. Find high-quality clothing from casual to formal wear, backed by excellent service. Stay on-trend with us—built with React.js, CSS, Redux, and powered by Airtable and Serverless Netlify.`,
  },
  {
    id: nanoid(),
    img: 'data:image/jpeg;base64,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',
    url: 'https://diakhaosine.com/',
    github: 'https://github.com/ADAMADIOUF/boursine',
    title: 'history of Bour Sine',
    text: `Discover the rich history of Bour Sine, the legendary king of Senegal, on our informative website. Dive into the fascinating heritage, stories, and legacy of this iconic monarch who shaped the region. Explore the history of Senegal through the life and times of Bour Sine, a true historical icon. Stay on-trend with us—built with React.js, CSS, Redux, and powered by Airtable and Serverless Netlify.`,
  },
]
