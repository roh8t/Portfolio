import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  tcs,
  news,
  chat,
  corona,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Assistant System Engineer Trainee",
    company_name: "TATA Consultancy Services Limited",
    icon: tcs,
    iconBg: "#383E56",
    date: "June 2021 - June 2022",
    points: [
      "Provided FTTP (fiber-to-the-premises) connections to homes and businesses in rural areas of England. Managed the entire installation process, from identifying potential customers to closing the connection.",

    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Corona Virus Tracker",
    description:
      "This React App is used to track Positive ,Active and Death Cases by using React Components and Express Js deployed with the help of Heroku ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Express Js",
        color: "green-text-gradient",
      },
    ],
    image: corona,
    source_code_link: "https://github.com/roh8t/corona_reactSampleApp",
  },
  {
    name: "News Parody",
    description:
      "An Angular App which fetches worldwide as well as domestic news and other sub-categories with the help of API.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
    ],
    image: news,
    source_code_link: "https://github.com/roh8t/News-Parody",
  },
  {
    name: "Chat Box",
    description:
      "This is a website used to chat in real time works with local host",
    tags: [
      {
        name: "Node Js",
        color: "blue-text-gradient",
      },
      {
        name: "Express Js",
        color: "green-text-gradient",
      },
      {
        name: "Mongo Db",
        color: "pink-text-gradient",
      },
      {
        name: "Socket.io",
        color: "violet-text-gradient",
      },
    ],
    image: chat,
    source_code_link: "https://github.com/roh8t/Chatting",
  },
];

export { services, technologies, experiences, testimonials, projects };
