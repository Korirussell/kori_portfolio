import {
  App,
  GalleryImage,
  Tab,
  WorkContent,
  WorkFile,
  WorkType,
} from "src/types";
import error from "../../assets/dialog/error.png";
import info from "../../assets/dialog/info.png";
import warning from "../../assets/dialog/warning.png";
import help from "../../assets/dialog/help.png";
import cmd from "../../assets/cmd.png";
import mycomputer from "../../assets/mycomputer.png";
import gallery from "../../assets/folder_image.png";
import outlook from "../../assets/outlook.png";
import dsta from "../../assets/workaccordion/dsta.png";
import gdsc from "../../assets/workaccordion/gdsc.png";
import file from "../../assets/workaccordion/file.png";
import emptyfile from "../../assets/workaccordion/emptyfile.png";
import ee2026_1 from "../../assets/work/EE2026/ee2026_1.jpg";
import ee2026_2 from "../../assets/work/EE2026/ee2026_2.jpg";
import ee2026_3 from "../../assets/work/EE2026/ee2026_3.jpg";
import ee2026_4 from "../../assets/work/EE2026/ee2026_4.jpg";
import ee2026_5 from "../../assets/work/EE2026/ee2026_5.jpg";
import ee2026_6 from "../../assets/work/EE2026/ee2026_6.jpg";
import ee2026_7 from "../../assets/work/EE2026/ee2026_7.jpg";
import dsta_1 from "../../assets/work/dsta/1.png";
import dsta_2 from "../../assets/work/dsta/2.png";
import dsta_3 from "../../assets/work/dsta/3.png";
import dsta_4 from "../../assets/work/dsta/4.png";
import dsta_5 from "../../assets/work/dsta/5.png";
import dsta_6 from "../../assets/work/dsta/6.png";
import dsta_7 from "../../assets/work/dsta/7.png";
import dsta_8 from "../../assets/work/dsta/8.png";
import hfg_1 from "../../assets/work/hfg/1.png";
import hfg_2 from "../../assets/work/hfg/2.png";
import hfg_3 from "../../assets/work/hfg/3.png";
import hfg_5 from "../../assets/work/hfg/5.png";
import hfg_6 from "../../assets/work/hfg/6.png";
import hfg_7 from "../../assets/work/hfg/7.png";
import eg_1 from "../../assets/work/eg1311/1.jpg";
import eg_2 from "../../assets/work/eg1311/2.jpg";
import eg_3 from "../../assets/work/eg1311/3.jpg";
import eg_4 from "../../assets/work/eg1311/4.jpg";
import eg_5 from "../../assets/work/eg1311/5.jpg";
import eg_6 from "../../assets/work/eg1311/6.jpg";
import cg1 from "../../assets/work/cg1111/1.jpg";
import cg2 from "../../assets/work/cg1111/2.jpg";
import cg3 from "../../assets/work/cg1111/3.jpg";
import cg4 from "../../assets/work/cg1111/4.jpg";
import cg5 from "../../assets/work/cg1111/5.jpg";
import cg6 from "../../assets/work/cg1111/6.jpg";
import cg1_2 from "../../assets/work/cg2111/1.jpg";
import cg2_2 from "../../assets/work/cg2111/2.jpg";
import cg3_2 from "../../assets/work/cg2111/3.jpg";
import cg4_2 from "../../assets/work/cg2111/4.jpg";
import cg5_2 from "../../assets/work/cg2111/5.jpg";
import cg6_2 from "../../assets/work/cg2111/6.jpg";
import cs2113_1 from "../../assets/work/cs2113/1.png";
import cs2113_2 from "../../assets/work/cs2113/2.png";
import sc_1 from "../../assets/work/supercanvas/1.png";
import sc_2 from "../../assets/work/supercanvas/2.png";
import sc_3 from "../../assets/work/supercanvas/3.png";
import lul from "../../assets/work/lul.png";
import butterfly from "../../assets/butterfly.png";
import mr1 from "../../assets/mr1.jpg";
import mr2 from "../../assets/mr2.jpg";
import mrIcon from "../../assets/mr_icon.png";
import MS from "../../assets/work/MS.png";
import MS2 from "../../assets/work/MS2.png";
import col1 from "../../assets/gallery/0.jpg";
import col2 from "../../assets/gallery/1.jpg";
import col3 from "../../assets/gallery/2.jpg";
import col4 from "../../assets/gallery/3.jpg";
import col5 from "../../assets/gallery/4.jpg";
import col6 from "../../assets/gallery/5.jpg";
export const TechIcon = {
  REACT:
    "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  NEXTJS:
    "https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white",
  FIREBASE:
    "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase",
  TYPESCRIPT:
    "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
  FIGMA:
    "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
  NODEJS:
    "https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white",
  GOOGLECLOUDFUNCTIONS:
    "https://img.shields.io/badge/gCloud_Functions-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white",
  JAVA: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white",
  FLUTTER:
    "https://img.shields.io/badge/flutter-%2302569B.svg?style=for-the-badge&logo=flutter&logoColor=white",
  VERILOG:
    "https://img.shields.io/badge/Verilog-%23F7DF1E.svg?style=for-the-badge&logo=verilog&logoColor=rgb(142%2C0%2C39)",
  PYTHON:
    "https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white",
  C: "https://img.shields.io/badge/C-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white",
  CPP: "https://img.shields.io/badge/C++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&ogoColor=white",
  ROS: "https://img.shields.io/badge/ROS-%23000000.svg?style=for-the-badge&logo=ros&logoColor=white",
  ARDUINO:
    "https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=arduino&logoColor=white",
  HTML: "https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
  CSS: "https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
  JAVASCRIPT:
    "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  RASPBERRYPI:
    "https://img.shields.io/badge/Raspberry%20Pi-C51A4A?style=for-the-badge&logo=Raspberry-Pi",
  REDUX:
    "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white",
  MATERIALUI:
    "https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white",
  AUTOCAD:
    "https://img.shields.io/badge/AutoCAD-0696D7?style=for-the-badge&logo=autodesk&logoColor=white",
  MBOT: "https://img.shields.io/badge/Makeblock-FF7F00?style=for-the-badge&logo=makeblock&logoColor=white",
  GOOGLECLOUD:
    "https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white",
  MONGODB:
    "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
  TELEGRAM:
    "https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white",
  VUEJS:
    "https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D",
  WEBPACK:
    "https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=white",
  SUPABASE:
    "https://img.shields.io/badge/Supabase-1E2E3B?style=for-the-badge&logo=supabase&logoColor=white",
  CHATGPT:
    "https://img.shields.io/badge/chatGPT-74aa9c?logo=openai&logoColor=white",
  R: "https://img.shields.io/badge/R-276DC3?style=for-the-badge&logo=r&logoColor=white",
  SQL: "https://img.shields.io/badge/SQL-336791?style=for-the-badge&logo=postgresql&logoColor=white",
  SPRINGBOOT: "https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white",
  EXPRESS: "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white",
  FLASK: "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white",
  DJANGO: "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white",
  WEBSOCKETS: "https://img.shields.io/badge/WebSockets-010101?style=for-the-badge&logo=socket.io&logoColor=white",
  MAVEN: "https://img.shields.io/badge/Apache_Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white",
  OPENLAYERS: "https://img.shields.io/badge/OpenLayers-1F6B75?style=for-the-badge&logo=openlayers&logoColor=white",
  TAILWIND: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
  GOOGLEMAPS: "https://img.shields.io/badge/Google_Maps-4285F4?style=for-the-badge&logo=google-maps&logoColor=white",
  GEOPANDAS: "https://img.shields.io/badge/GeoPandas-139C5A?style=for-the-badge&logo=pandas&logoColor=white",
  JSON: "https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white",
  DOCKER: "https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white",
};

export const AppDirectory: Map<number, Tab> = new Map([
  [
    0,
    {
      id: 0,
      title: "Welcome To My Website - Quick Start Guide",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.WELCOME,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    1,
    {
      id: 0,
      title: "Outlook Express",
      message: "",
      Icon: outlook,
      isMinimized: false,
      zIndex: 0,
      program: App.OUTLOOK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    2,
    {
      id: 0,
      title: "My Work",
      message: "",
      Icon: cmd,
      isMinimized: false,
      zIndex: 0,
      program: App.MYWORK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    4,
    {
      id: 0,
      title: "My Photography Collection",
      message: "",
      Icon: gallery,
      isMinimized: false,
      zIndex: 0,
      program: App.MYGALLERY,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    5,
    {
      id: 0,
      title: "Error",
      message: "",
      Icon: error,
      isMinimized: false,
      zIndex: 0,
      program: App.ERROR,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    6,
    {
      id: 0,
      title: "Warning",
      message: "",
      Icon: warning,
      isMinimized: false,
      zIndex: 0,
      program: App.WARNING,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    7,
    {
      id: 0,
      title: "Info",
      message: "",
      Icon: info,
      isMinimized: false,
      zIndex: 0,
      program: App.INFO,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    8,
    {
      id: 0,
      title: "Help",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.HELP,
      prompt: true,
      backBtnActive: false,
    },
  ],
]);

export const WorkAccordionTitles = [
  WorkType.HACKATHON,
  WorkType.PERSONAL,
  WorkType.SCHOOL,
];

export const GalleryAccordionTitles = ["Details"];

export const WorkData = [
  {
    id: 1,
    title: "Distributed Real-Time Chat System",
    date: "2024",
    gitURL: "",
    techstack: [
      TechIcon.JAVA,
      TechIcon.WEBSOCKETS,
      TechIcon.MAVEN,
      TechIcon.HTML,
      TechIcon.CSS,
      TechIcon.JAVASCRIPT,
      TechIcon.JSON,
    ],
    gallery: [],
    overview: `Engineered scalable distributed messaging architecture supporting multiple concurrent server nodes
    with intelligent peer-to-peer message routing and loop prevention algorithms. Implemented concurrent WebSocket 
    server handling 50+ simultaneous client connections using Java threading pools and ConcurrentHashMap for 
    thread-safe operations. Designed custom JSON message protocol with origin tracking and built responsive web 
    client interface with real-time message display and fault-tolerant networking across distributed nodes.`,
  },
  {
    id: 2,
    title: "Money Trees - AI-Powered Banking App (1st Place Winner)",
    date: "2024",
    gitURL: "",
    techstack: [
      TechIcon.NEXTJS,
      TechIcon.JAVASCRIPT,
      TechIcon.TAILWIND,
      TechIcon.FLASK,
      TechIcon.PYTHON,
      TechIcon.CHATGPT,
    ],
    gallery: [],
    overview: `Won 1st Place in Fintech Category at UA Innovate Hackathon by delivering a complete AI-powered
    banking MVP within 22 hours, competing against 50+ teams. Led full-stack development of gamified savings 
    tracker using React/Next.js frontend integrated with Python/Flask backend and OpenAI API for personalized 
    financial coaching. Coordinated 4-person development team through agile methodologies, delivering 5 core 
    features and achieving 95% positive user feedback during demonstrations.`,
  },
  {
    id: 3,
    title: "Web GIS Development - Geospatial Analysis Platform",
    date: "April 2025 - Present",
    gitURL: "",
    techstack: [
      TechIcon.PYTHON,
      TechIcon.GEOPANDAS,
      TechIcon.GOOGLEMAPS,
      TechIcon.OPENLAYERS,
      TechIcon.HTML,
      TechIcon.CSS,
      TechIcon.JAVASCRIPT,
    ],
    gallery: [],
    overview: `Architected automated geospatial analysis pipelines processing 3,143 U.S. counties using Python and
    GeoPandas, reducing manual analysis time by 99% through Google Maps & OpenStreetMap API integration. 
    Developed scalable data extraction workflows processing 100GB+ of geospatial datasets, improving research 
    methodology efficiency by 75% for urban landscape analysis and contributing to peer-reviewed GIS publication.`,
  },
  {
    id: 4,
    title: "Ultra Music Festival - Artist Logistics Platform",
    date: "June 2022 - January 2023",
    gitURL: "",
    techstack: [
      TechIcon.REACT,
      TechIcon.JAVASCRIPT,
      TechIcon.HTML,
      TechIcon.CSS,
      TechIcon.NODEJS,
    ],
    gallery: [],
    overview: `Redesigned artist logistics platform UI/UX using React, improving mobile responsiveness by 60% and
    reducing navigation time by 40% while supporting 10+ performing artists with 99.5% uptime during critical
    performance windows. Collaborated with international teams in Seoul, South Korea to deliver mission-critical
    event technology solutions for one of the world's largest electronic music festivals.`,
  },
  {
    id: 5,
    title: "Windows XP Portfolio Website",
    date: "2024",
    gitURL: "https://github.com/Korirussell/portfolio",
    techstack: [
      TechIcon.TYPESCRIPT,
      TechIcon.NEXTJS,
      TechIcon.REACT,
      TechIcon.REDUX,
      TechIcon.CSS,
      TechIcon.HTML,
    ],
    gallery: [lul],
    overview: `Created a unique portfolio website that recreates the nostalgic Windows XP interface using modern
    web technologies. Built with TypeScript, Next.js, and React to showcase projects and experience in an 
    interactive, memorable format. Features responsive design, smooth animations, and authentic XP-style 
    components while maintaining accessibility and modern performance standards.`,
  },
  {
    id: 6,
    title: "DoD Cybersecurity & Network Operations",
    date: "January 2022 - June 2022",
    gitURL: "",
    techstack: [
      TechIcon.PYTHON,
      TechIcon.JAVASCRIPT,
      TechIcon.SQL,
    ],
    gallery: [],
    overview: `Monitored secure network operations covering 3,000+ military personnel, maintaining 99.9% network
    uptime through proactive incident response and real-time threat detection. Configured enterprise Cisco router 
    infrastructure and managed encrypted communications, supporting base-wide wireless deployment serving 1,500+ 
    concurrent users. Gained hands-on experience in cybersecurity, network administration, and mission-critical 
    system maintenance in a high-security environment.`,
  },
] as WorkContent[];

export const WorkAccordionContent = [
  {
    id: 1,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "Distributed Real-Time Chat System",
    content: WorkData[WorkData.findIndex((x) => x.id === 1)],
  },
  {
    id: 2,
    type: WorkType.HACKATHON,
    icon: emptyfile,
    title: "Money Trees - AI Banking App (1st Place)",
    content: WorkData[WorkData.findIndex((x) => x.id === 2)],
  },
  {
    id: 3,
    type: WorkType.SCHOOL,
    icon: file,
    title: "Web GIS Development - Research",
    content: WorkData[WorkData.findIndex((x) => x.id === 3)],
  },
  {
    id: 4,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "Ultra Music Festival - Event Tech",
    content: WorkData[WorkData.findIndex((x) => x.id === 4)],
  },
  {
    id: 5,
    type: WorkType.PERSONAL,
    icon: butterfly,
    title: "Windows XP Portfolio Website",
    content: WorkData[WorkData.findIndex((x) => x.id === 5)],
  },
  {
    id: 6,
    type: WorkType.SCHOOL,
    icon: file,
    title: "DoD Cybersecurity & Network Ops",
    content: WorkData[WorkData.findIndex((x) => x.id === 6)],
  },
] as WorkFile[];

// For My Photography Collection
export const PhotoCollection = [
  {
    id: 0,
    title: "Portfolio Showcase",
    location: "University of Alabama, Tuscaloosa",
    desc: "Computer Science projects and development work",
    date: "2024",
    img: col1,
  },
  {
    id: 1,
    title: "Hackathon Victory",
    location: "UA Innovate, Alabama",
    desc: "1st Place winner in Fintech category",
    date: "2024",
    img: col2,
  },
  {
    id: 2,
    title: "Development Environment",
    location: "Tuscaloosa, AL",
    desc: "Coding and software development setup",
    date: "2024",
    img: col3,
  },
  {
    id: 3,
    title: "Campus Tech",
    location: "University of Alabama",
    desc: "Technology and computer science at UA",
    date: "2024",
    img: col4,
  },
  {
    id: 4,
    title: "Project Work",
    location: "Tuscaloosa, AL",
    desc: "Software engineering and development projects",
    date: "2024",
    img: col5,
  },
  {
    id: 5,
    title: "Tech Innovation",
    location: "Alabama",
    desc: "Innovation in technology and software solutions",
    date: "2024",
    img: col6,
  },
] as GalleryImage[];
