import {
  mobile,
  backend,
  web,
  logo,
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
  battle,
  mits,
  iit,
  swiftui,
  cicd,
  kotlin,
  amazon,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Full-stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "IOS Developer",
    icon: mobile,
  },
  {
    title: "DevOps & Cloud",
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
    name: "React",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Express.js",
    icon: nodejs,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "AWS",
    icon: amazon,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Swift UI",
    icon: swiftui,
  },
  {
    name: "REST APIs",
    icon: nodejs,
  },
  {
    name: "CI/CD",
    icon: cicd,
  },
  
];

const experiences = [
  {
    title: "Android and IOS Developer",
    company_name: "Indian Army (Contract)",
    icon: battle,
    iconBg: "#383E56",
    date: "August 2025 - November 2026",
    points: [
      "Architected and deployed an end-to-end guest booking Android and IOS app using Swift UI,Kotlin and Firebase Realtime Database.",
      "Engineered a deterministic time-slot scheduling engine with minute precision and 1-hour buffer windows.",
      "Managed 46 concurrent users with zero booking mismatches, achieving 100% scheduling accuracy.",
    ],
  },
  {
    title: "M.Tech, Computer Science & Engineering",
    company_name: "Indian Institute of Technology, Roorkee",
    icon: iit,
    iconBg: "#383E56",
    date: "July 2022 - May 2024",
    points: [
      "Thesis on deep reinforcement learning for autonomous robot exploration and obstacle avoidance in continuous action spaces (Python, PyTorch, TD3).",
      "Built a modular training framework with unit tests, logging, and model checkpointing. Collision-free navigation in 3,487 exploration steps, ahead of the heuristic baselines.",
    ],
  },
  {
    title: "Assistant System Engineer Trainee",
    company_name: "Tata Consultancy Services",
    icon: tcs,
    iconBg: "#E6DEDD",
    date: "June 2021 - June 2022",
    points: [
      "Built and maintained React interfaces for a fiber-to-the-premises connection system used across rural England.",
      "Shipped reusable, accessible UI components with cross-browser support, working with UK stakeholders, QA, and product in Agile sprints.",
      "Applied CORS, Content Security Policy, and client-side sanitization, and wired REST APIs into frontend state so screens rendered with less delay.",
    ],
  },
  {
    title: "B.Tech, Information Technology",
    company_name: "MITS, Gwalior",
    icon: mits,
    iconBg: "#383E56",
    date: "July 2017 - May 2021",
    points: [
      "Coursework in data structures, algorithms, databases, and web development. CGPA 7.0 / 10.",
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
    name: "Indian Army Booking App",
    description:
      "Contract Android app for guest booking using Kotlin, Firebase RTDB, and deterministic scheduling algorithm. Supports 46 concurrent users with 100% scheduling accuracy and 1-hour buffer windows.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "red-text-gradient",
      },
      {
        name: "android",
        color: "violet-text-gradient",
      },
      {
        name: "ios",
        color: "green-text-gradient",
      },

    ],
    image: battle,
  },
  {
    name: "3D Developer Portfolio",
    description:
      "This site. A responsive portfolio with interactive Three.js scenes, lighting, and a modular React component layout, built with Vite.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: web,
    source_code_link: "https://github.com/roh8t/Portfolio",
  },
  {
    name: "Corona Virus Tracker",
    description:
      "Full-stack tracker for COVID-19 cases by region. React and Redux on the client, Express for the API, with error fallbacks and request retries around third-party health data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: corona,
    source_code_link: "https://github.com/roh8t/corona_reactSampleApp",
  },
  {
    name: "News Parody",
    description:
      "News reader that pulls worldwide and domestic headlines, plus topic feeds, from a public news API.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "rest api",
        color: "green-text-gradient",
      },
    ],
    image: news,
    source_code_link: "https://github.com/roh8t/News-Parody",
  },
  {
    name: "Chat Box",
    description:
      "Real-time chat over WebSockets, with Express and MongoDB storing rooms and messages.",
    tags: [
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: chat,
    source_code_link: "https://github.com/roh8t/Chatting",
  },
];

export { services, technologies, experiences, testimonials, projects };
