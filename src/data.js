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
    img: 'https://media.discordapp.net/attachments/1168684192784208024/1175063179378823248/adama5863_auto_repair_image_6d692487-27c1-47e7-b5b6-84ab0a088d61.png?ex=6569dddd&is=655768dd&hm=6e56c3d7b90931c1c5ef804f53e35e1c5223440db89fb154e5aae571949a1889&=&width=1060&height=1060',
    url: 'https:chads-auto.com/',
    github: 'https://github.com/ADAMADIOUF/automart',
    title: 'chads auto repair',
    text: `Quality Servicing Auto Repair is your go-to destination for reliable and efficient car maintenance and repair services. Our team of certified mechanics is dedicated to ensuring your vehicle runs smoothly and safely on the road React js, CSS, Airtable for backend,nodemailer,ReduxToolkit`,
  },
  {
    id: nanoid(),
    img: 'https://media.discordapp.net/attachments/1168684192784208024/1175065822222368768/adama5863_auto_rental_ab280399-7a0f-487d-b628-bea870b04ae3.png?ex=6569e053&is=65576b53&hm=af43f051930f56e64401879590b729bda6d66d49eab6ccb9a439b66848353114&=&width=1060&height=1060',
    url: 'https://senegalautomarket.com/',
    github: 'https://github.com/ADAMADIOUF/senegalautomarketfinal',
    title: 'Auto Rental & Sales Hub',
    text: `Whether for business or leisure, we offer a home away from home experience in the world of automobiles. With a stunning selection, top-notch features, and exceptional service, your journey will be unforgettable. Explore our website for vehicle details, options, and special deals. We can't wait to be your automotive destination. React js, CSS, Airtable,ReduxToolkit,Auth0.`,
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
    img: 'https://media.discordapp.net/attachments/1168684192784208024/1175067158426963990/adama5863_phone_store_53288434-80fe-47e0-9234-24f46d710f1e.png?ex=6569e192&is=65576c92&hm=fae249a78b0f54d8748d760e5aa5b5aee7d28886f0e1dbc938d9ce4046618513&=&width=1060&height=1060',
    url: 'https://worldbusinesssenegal.com/',
    github: 'https://github.com/ADAMADIOUF/phonestore',
    title: 'Phone Store',
    text: `World Business simplifies phone shopping. Order via WhatsApp for swift delivery. Explore the latest smartphones, get personalized support, and enjoy speedy delivery. Our platform is powered by React.js, CSS, Redux, and runs on Airtable and Serverless Netlify.`,
  },
  {
    id: nanoid(),
    img: 'https://media.discordapp.net/attachments/1168684192784208024/1175068136857403504/adama5863_clothing_store_bee961a2-5943-4d97-9792-f13a387661af.png?ex=6569e27b&is=65576d7b&hm=4b723a739510e1a0d4024f3fbc8eb7a91bb5cb7ac8bf6000ba32003dcd547c94&=&width=1060&height=1060',
    url: 'https://awagueyecouture.com/',
    github: 'https://github.com/ADAMADIOUF/cheikhmbaye',
    title: 'Clothing Store',
    text: `Explore stylish apparel at our online store with a seamless shopping experience. Find high-quality clothing from casual to formal wear, backed by excellent service. Stay on-trend with us—built with React.js, CSS, Redux, and powered by Airtable and Serverless Netlify.`,
  },
  {
    id: nanoid(),
    img: 'https://media.discordapp.net/attachments/1168684192784208024/1175070376410218656/adama5863_bour_sine_king_of_diakhoa_senegal_54651ec4-22cb-4a04-9625-6ef61be442c7.png?ex=6569e491&is=65576f91&hm=bd6790f1f00b05fc443e9fc18e8100e0042c75e7f43f0e88961f1a96a6ff123d&=&width=1060&height=1060',
    url: 'https://diakhaosine.com/',
    github: 'https://github.com/ADAMADIOUF/boursine',
    title: 'history of Bour Sine',
    text: `Discover the rich history of Bour Sine, the legendary king of Senegal, on our informative website. Dive into the fascinating heritage, stories, and legacy of this iconic monarch who shaped the region. Explore the history of Senegal through the life and times of Bour Sine, a true historical icon. Stay on-trend with us—built with React.js, CSS, Redux, and powered by Airtable and Serverless Netlify.`,
  },
]
