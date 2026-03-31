import WelcomeIcon from "components/WelcomeIcon/WelcomeIcon";
import styles from "./Welcome.module.css";
import linkedin from "../../assets/linkedin.png";
import outlook from "../../assets/outlook_large.png";
import gallery from "../../assets/folder_image.png";
import pdf from "../../assets/pdf.png";
import github from "../../assets/github.png";
import cmd from "../../assets/cmd.png";
import users from "../../assets/users.png";
import butterfly from "../../assets/butterfly.png";
import mediaplayer from "../../assets/mediaplayer.png";
import { AppDirectory } from "@/appData";
import store from "@/redux/store";
import { addTab, setBackBtn } from "@/redux/tabSlice";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { RootState } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import userprofile from "../../assets/userprofile.jpeg";
import userprofile2 from "../../assets/userprofile2.jpg";
import ebc1 from "../../assets/ebc1.jpeg";
import ebc2 from "../../assets/ebc2.jpeg";

const WHYSITE = `I always love challenging myself to create something different and interesting.
The main reason why I chose to create a website that resembles a Windows XP OS is because it represents
the nostalgic era when many of us first fell in love with computing and programming. This retro interface
provides a unique and memorable way to showcase my portfolio while paying homage to the classic computing
experience that inspired many developers. I wanted to create something that stands out and gives visitors
a fun, interactive experience while exploring my work.`;

const INTERESTS = `I love programming. Fueled by a passion for creative problem-solving, I build full-stack solutions for the things I actually care about. I specialize in end-to-end architecture using React, Java, and Spring Boot, and I've picked up 8 hackathon awards along the way.`;

const INTERESTS2 = `I'm a CS major at the University of Alabama, but I was actually born in Germany. When I'm not at the keyboard, I'm usually playing basketball or soccer—fun fact: I was captain of my varsity soccer team and still spend a lot of time on the pitch. I also really love producing music, mostly making R&B, Hip-Hop, and experimenting with new sounds in my spare time.`;

const INTERESTS3 = `Right now, I'm spending most of my time developing JobDog, a gamified tech job board, and my iOS app, Tether.

Feel free to hit me up if you want to chat or if you're looking to build something cool together.`;

interface props {
  id: string | number;
}

const Welcome = ({ id }: props) => {
  const currTabID = useSelector((state: RootState) => state.tab.id);
  const backBtnActive = useSelector(
    (state: RootState) =>
      state.tab.tray[state.tab.tray.findIndex((tab) => tab.id === id)]
        .backBtnActive
  );

  const [aboutmeView, setAboutmeView] = useState(false);

  const handleRunApp = (e: number) => {
    const newTab = { ...AppDirectory.get(e), id: uuidv4(), zIndex: currTabID };
    store.dispatch(addTab(newTab));
  };
  const handleSwitchView = () => {
    setAboutmeView(true);
    store.dispatch(setBackBtn({ id: id, backBtnActive: true }));
  };
  useEffect(() => {
    setAboutmeView(backBtnActive);
  }, [backBtnActive]);
  return (
    <div className={styles.main}>
      {!aboutmeView ? (
        <div>
          <h3 className={styles.welcome_text}>
            Welcome To Kori Russell&apos;s Personal Website
          </h3>
          <p className={styles.subtitle}>
            Learn more about me by clicking any of the icons below to get
            started!
          </p>
          <div className={styles.content}>
            <div className={styles.leftpanel}>
              <WelcomeIcon
                img={butterfly}
                text={"About Me"}
                tooltip="Who am I?"
                onClick={handleSwitchView}
              />
              <WelcomeIcon
                img={github}
                text={"My GitHub Profile"}
                tooltip="Check out my projects"
                onClick={() => {
                  window.open(
                    "https://github.com/Korirussell",
                    "_blank",
                    "noreferrer"
                  );
                }}
              />
              <WelcomeIcon
                img={linkedin}
                text={"My Linkedin"}
                tooltip="Connect with me!"
                onClick={() => {
                  window.open(
                    "https://linkedin.com/in/koriirussell",
                    "_blank",
                    "noreferrer"
                  );
                }}
              />
              <WelcomeIcon
                img={pdf}
                text={"My Resume"}
                tooltip="My Curriculum Vitae"
                onClick={() => {
                  window.open("./Resume.pdf");
                }}
              />
            </div>
            <div className={styles.rightpanel}>
              <WelcomeIcon
                img={cmd}
                text={"My Work"}
                tooltip="Interesting projects I have done"
                onClick={() => handleRunApp(2)}
              />
              <WelcomeIcon
                img={outlook}
                text={"Send Me An Email"}
                tooltip="Reach out to me!"
                onClick={() => handleRunApp(1)}
              />
              <WelcomeIcon
                img={mediaplayer}
                text={"Media Player"}
                tooltip="Listen to some tunes!"
                onClick={() => handleRunApp(11)}
              />
              <WelcomeIcon
                img={gallery}
                text={"My Photography Collection"}
                tooltip="Click to view!"
                onClick={() => handleRunApp(4)}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3 className={styles.welcome_text}>About Me</h3>
          <p className={styles.subtitle}></p>
          <div className={styles.content}>
            <div className={styles.pic_col}>
              <Image
                alt="profile_pic"
                src={userprofile.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
              <Image
                alt="profile_pic"
                src={userprofile2.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
              <Image
                alt="profile_pic"
                src={ebc1.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
              <Image
                alt="profile_pic"
                src={ebc2.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
            </div>
            <div className={styles.text_col}>
              <h3 className={styles.subtitle_header}>
                Why a personal website like this?
              </h3>
              <p className={styles.subtitle}>{WHYSITE}</p>
              <h3 className={styles.subtitle_header}>
                What are your interests?
              </h3>
              <p className={styles.subtitle}>{INTERESTS}</p>
              <br></br>
              <p className={styles.subtitle}>{INTERESTS2}</p>
              <br></br>
              <p className={styles.subtitle}>{INTERESTS3}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
