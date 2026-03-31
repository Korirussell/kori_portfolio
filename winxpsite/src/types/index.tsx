import { StaticImageData } from "next/image";

export type Tab = {
  id: string | number;
  title: string;
  message: string;
  Icon: StaticImageData;
  isMinimized: boolean;
  zIndex: number;
  program: App;
  prompt: boolean;
  backBtnActive: boolean;
};

export type RootState = {
  tab: {
    tray: Tab[];
    id: number;
    currentFocusedTab: string | number;
    currentZIndex: number;
  };
  system: {
    backactive: boolean;
    theme: "luna-blue" | "olive-green" | "silver";
  };
};

export enum App {
  MYWORK,
  OUTLOOK,
  MYDOCUMENT,
  MYGALLERY,
  MYBLOG,
  ERROR,
  INFO,
  WARNING,
  HELP,
  WELCOME,
  MINESWEEPER,
  MEDIAPLAYER,
  DISPLAYPROPS,
}

export enum WorkType {
  PERSONAL = "Personal Projects",
  HACKATHON = "Hackathons",
  WORK = "Work Experience",
}

export type WorkFile = {
  id: number;
  type: WorkType;
  icon: StaticImageData;
  title: string;
  content: WorkContent;
};

export type WorkContent = {
  id: number;
  title: string;
  date: string;
  gitURL: string;
  gallery: StaticImageData[];
  techstack: string[];
  overview: string;
  demoUrl?: string;
  videoUrl?: string;
  type?: WorkType;
};

export type GalleryImage = {
  id: number;
  title: string;
  desc: string;
  location: string;
  date: string;
  img: StaticImageData;
};
