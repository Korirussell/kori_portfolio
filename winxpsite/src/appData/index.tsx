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
import col1 from "../../assets/gallery/DSC_1349.jpg";
import col2 from "../../assets/gallery/DSC_1544.jpg";
import col3 from "../../assets/gallery/DSC_1560.jpg";
import col4 from "../../assets/gallery/DSC_1573.jpg";
import col5 from "../../assets/gallery/IMG_2166.jpeg";
import hackathon1 from "../../assets/work/ua_hackathon2025/DSC_0687.jpeg";
import hackathon2 from "../../assets/work/ua_hackathon2025/IMG_4611.jpg";
export const TechIcon = {
  PYTHON: "https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white",
  JAVA: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white",
  SWIFT: "https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&logo=swift&logoColor=white",
  GO: "https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white",
  TYPESCRIPT: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
  CPP: "https://img.shields.io/badge/C++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
  SQL: "https://img.shields.io/badge/SQL-336791?style=for-the-badge&logo=postgresql&logoColor=white",
  HTML: "https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
  CSS: "https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
  JAVASCRIPT: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  REACT: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  NEXTJS: "https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white",
  SPRINGBOOT: "https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white",
  FLASK: "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white",
  FASTAPI: "https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi&logoColor=white",
  NODEJS: "https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white",
  POSTGRESQL: "https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white",
  MONGODB: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
  REDIS: "https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white",
  AWS: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
  GCP: "https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white",
  DOCKER: "https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white",
  GIT: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
  LINUX: "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black",
  SUPABASE: "https://img.shields.io/badge/Supabase-1E2E3B?style=for-the-badge&logo=supabase&logoColor=white",
  TAILWIND: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
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
  WorkType.WORK,
  WorkType.HACKATHON,
  WorkType.PERSONAL,
  WorkType.SCHOOL,
];

export const GalleryAccordionTitles = ["Details"];

export const WorkData = [
  {
    id: 1,
    title: "Tether",
    date: "Aug 2025 - Present",
    gitURL: "",
    techstack: [TechIcon.SWIFT, TechIcon.SUPABASE, TechIcon.PYTHON, TechIcon.NEXTJS],
    gallery: [],
    overview: `Founder & Software Engineer. Built location-based social productivity app using SwiftUI and Core Bluetooth, serving 150+ active university users. Engineered Supabase backend and FamilyControls integration to automate app blocking during focused study sessions.`,
  },
  {
    id: 2,
    title: "The University of Alabama",
    date: "Apr 2025 - Aug 2025",
    gitURL: "",
    techstack: [TechIcon.PYTHON],
    gallery: [],
    overview: `Undergraduate Research Assistant. Built async geospatial pipelines with Python, asyncio, and GeoPandas, cutting runtime from days to minutes. Vectorized workflows for 100GB+ datasets using Pandas, eliminating manual processing and reducing memory overhead.`,
  },
  {
    id: 3,
    title: "Ultra Music Festival",
    date: "Jun 2022 - Jan 2023",
    gitURL: "",
    techstack: [TechIcon.REACT, TechIcon.NODEJS, TechIcon.JAVASCRIPT],
    gallery: [],
    overview: `Web Development Intern. Modernized internal logistics dashboard with React, delivering responsive interface for real-time coordination during event. Architected REST APIs with Node.js and Jest test suites to ensure stability during 3-day live event with 200k+ attendees.`,
  },
  {
    id: 4,
    title: "Real-Time Speech Corrector (3x Winner - CUHackit 2026)",
    date: "2026",
    gitURL: "",
    techstack: [TechIcon.PYTHON, TechIcon.REACT, TechIcon.FASTAPI],
    gallery: [],
    overview: `Built a real-time speech disfluency corrector for Zoom meetings that won Best Industry Impact, Hack for Good, and Best Use of ElevenLabs at CUHackit 2026. Architected an asynchronous audio pipeline integrating concurrent ML APIs for transcription, semantic healing, and voice cloning, achieving 1-second end-to-end latency. Engineered a video inpainting microservice to dynamically lip-sync corrected audio to live webcam feeds.`,
  },
  {
    id: 5,
    title: "Carbon-Aware AI Router (2x Winner - UGAHacks 11)",
    date: "2025",
    gitURL: "",
    techstack: [TechIcon.PYTHON, TechIcon.REACT, TechIcon.FASTAPI, TechIcon.GCP, TechIcon.REDIS],
    gallery: [],
    overview: `Won Best Use of AI & Best Sustainability (UGAHacks, 515 participants) building real-time router that shifts AI workloads to the greenest global data centers, cutting carbon emissions by 95%. Built semantic cache with Redis vector similarity search and NLP compression. Designed LangGraph agentic planner with PostgreSQL deferral queue.`,
  },
  {
    id: 6,
    title: "AI Financial Literacy Chatbot (1st Place - UA Innovate Hackathon)",
    date: "2024",
    gitURL: "",
    techstack: [TechIcon.REACT, TechIcon.PYTHON, TechIcon.FLASK],
    gallery: [hackathon1, hackathon2],
    overview: `Won 1st place and $1,000 grant by delivering AI banking MVP in 22 hours using React, OpenAI API, and Flask. Led 4-person agile team as scrum master, building OpenAI-powered financial literacy chatbot with AI budget analysis.`,
  },
  {
    id: 7,
    title: "Real-Time Discord Sentiment Bot",
    date: "2024",
    gitURL: "",
    techstack: [TechIcon.JAVA, TechIcon.SPRINGBOOT, TechIcon.AWS, TechIcon.POSTGRESQL, TechIcon.DOCKER],
    gallery: [],
    overview: `Built AI Discord moderation bot using Spring Boot and BERT models to detect and flag toxic messages across servers. Designed PostgreSQL backend handling 10k+ messages/day; deployed via Docker on AWS EC2.`,
  },
  {
    id: 8,
    title: "AI-Powered Crisis Intervention (HackGT 12)",
    date: "2025",
    gitURL: "",
    techstack: [TechIcon.SWIFT, TechIcon.PYTHON, TechIcon.FASTAPI],
    gallery: [],
    overview: `Engineered sub-4s latency pipeline integrating OpenCV and Gemini LLM for real-time crisis intervention responses. Developed ARKit-powered spatial interface in SwiftUI, rendering 3D breathing anchor for guided user grounding exercises.`,
  },
  {
    id: 9,
    title: "Windows XP Portfolio Website",
    date: "2024",
    gitURL: "https://github.com/Korirussell/portfolio",
    techstack: [TechIcon.TYPESCRIPT, TechIcon.NEXTJS, TechIcon.REACT, TechIcon.CSS, TechIcon.HTML],
    gallery: [lul],
    overview: `Created a unique portfolio website that recreates the nostalgic Windows XP interface using modern web technologies. Built with TypeScript, Next.js, and React to showcase projects and experience in an interactive, memorable format.`,
  },
] as WorkContent[];

export const WorkAccordionContent = [
  {
    id: 1,
    type: WorkType.WORK,
    icon: file,
    title: "Tether",
    content: WorkData[WorkData.findIndex((x) => x.id === 1)],
  },
  {
    id: 2,
    type: WorkType.WORK,
    icon: file,
    title: "Research Assistant",
    content: WorkData[WorkData.findIndex((x) => x.id === 2)],
  },
  {
    id: 3,
    type: WorkType.WORK,
    icon: file,
    title: "Web Dev Intern",
    content: WorkData[WorkData.findIndex((x) => x.id === 3)],
  },
  {
    id: 4,
    type: WorkType.HACKATHON,
    icon: emptyfile,
    title: "Speech Corrector",
    content: WorkData[WorkData.findIndex((x) => x.id === 4)],
  },
  {
    id: 5,
    type: WorkType.HACKATHON,
    icon: emptyfile,
    title: "Carbon-Aware Router",
    content: WorkData[WorkData.findIndex((x) => x.id === 5)],
  },
  {
    id: 6,
    type: WorkType.HACKATHON,
    icon: emptyfile,
    title: "AI Chatbot",
    content: WorkData[WorkData.findIndex((x) => x.id === 6)],
  },
  {
    id: 7,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "Discord Sentiment Bot",
    content: WorkData[WorkData.findIndex((x) => x.id === 7)],
  },
  {
    id: 8,
    type: WorkType.HACKATHON,
    icon: emptyfile,
    title: "Crisis Intervention",
    content: WorkData[WorkData.findIndex((x) => x.id === 8)],
  },
  {
    id: 9,
    type: WorkType.PERSONAL,
    icon: butterfly,
    title: "Windows XP Portfolio",
    content: WorkData[WorkData.findIndex((x) => x.id === 9)],
  },
] as WorkFile[];

// For My Photography Collection
export const PhotoCollection = [
  {
    id: 0,
    title: "My Village",
    location: "Valkenberg, Netherlands",
    desc: "Picture of Valkenberg, where I live with my family.",
    date: "2025",
    img: col1,
  },
  {
    id: 1,
    title: "Woof",
    location: "Valkenberg, Netherlands",
    desc: "Awesome dog I spotted while hiking.",
    date: "2024",
    img: col2,
  },
  {
    id: 2,
    title: "Tree Tunnel",
    location: "Valkenberg, Netherlands",
    desc: "I love tree tunnels. I see tree tunnel I take picture.",
    date: "2025",
    img: col3,
  },
  {
    id: 3,
    title: "Downtown Maastricht",
    location: "Maastricht, Netherlands",
    desc: "I spend alot of time in Maastricht over the weekends.",
    date: "2025",
    img: col4,
  },
  {
    id: 4,
    title: "River Thames",
    location: "London, United Kingdom",
    desc: "At the end of my study abroad at UCL, we had a boat party on the River Thames.",
    date: "2024",
    img: col5,
  },
] as GalleryImage[];
