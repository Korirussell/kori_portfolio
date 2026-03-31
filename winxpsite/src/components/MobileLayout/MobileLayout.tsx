import styles from "./MobileLayout.module.css";
import { WorkAccordionContent } from "@/appData";
import { WorkType } from "@/types";
import { useState } from "react";
import Image from "next/image";

const loaderProp = ({ src }: any) => src;

const TYPE_COLORS: Record<string, string> = {
  [WorkType.WORK]: "#3a7bd5",
  [WorkType.HACKATHON]: "#d43f00",
  [WorkType.PERSONAL]: "#2d8653",
};

const MobileLayout = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<"home" | "work" | "about">("home");

  const toggle = (id: number) => setExpandedId(expandedId === id ? null : id);

  return (
    <div className={styles.container}>
      <div className={styles.titlebar}>
        <span className={styles.titlebar_logo}>⊞</span>
        <span className={styles.titlebar_text}>Kori Russell — Portfolio</span>
      </div>

      <nav className={styles.nav}>
        {(["home", "work", "about"] as const).map((s) => (
          <button
            key={s}
            className={activeSection === s ? styles.nav_btn_active : styles.nav_btn}
            onClick={() => setActiveSection(s)}
            aria-pressed={activeSection === s}
          >
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
      </nav>

      <div className={styles.content}>
        {activeSection === "home" && (
          <section className={styles.section}>
            <h2 className={styles.section_title}>Quick Links</h2>
            <div className={styles.link_list}>
              <a
                href="./Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className={styles.link_card}
              >
                <span className={styles.link_icon}>📄</span>
                <span>My Resume</span>
              </a>
              <a
                href="https://github.com/Korirussell"
                target="_blank"
                rel="noreferrer"
                className={styles.link_card}
              >
                <span className={styles.link_icon}>🐙</span>
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/koriirussell"
                target="_blank"
                rel="noreferrer"
                className={styles.link_card}
              >
                <span className={styles.link_icon}>💼</span>
                <span>LinkedIn</span>
              </a>
            </div>
            <p className={styles.hint}>
              For the full Windows XP experience, open this site on a desktop browser!
            </p>
          </section>
        )}

        {activeSection === "work" && (
          <section className={styles.section}>
            <h2 className={styles.section_title}>My Projects</h2>
            {WorkAccordionContent.map((project) => (
              <div key={project.id} className={styles.project_card}>
                <button
                  className={styles.project_header}
                  onClick={() => toggle(project.id)}
                  aria-expanded={expandedId === project.id}
                >
                  <span
                    className={styles.project_badge}
                    style={{ backgroundColor: TYPE_COLORS[project.type] ?? "#555" }}
                  >
                    {project.type}
                  </span>
                  <span className={styles.project_title}>{project.content.title}</span>
                  <span className={styles.project_chevron}>
                    {expandedId === project.id ? "▲" : "▼"}
                  </span>
                </button>
                {expandedId === project.id && (
                  <div className={styles.project_body}>
                    <p className={styles.project_date}>{project.content.date}</p>
                    <p className={styles.project_overview}>{project.content.overview}</p>
                    <div className={styles.project_tech}>
                      {project.content.techstack.map((tech) => (
                        <Image
                          key={tech}
                          alt="tech"
                          src={tech}
                          width={70}
                          height={22}
                          loader={loaderProp}
                          style={{ borderRadius: "4px" }}
                        />
                      ))}
                    </div>
                    {project.content.gitURL && (
                      <a
                        href={project.content.gitURL}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.github_link}
                      >
                        View on GitHub →
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {activeSection === "about" && (
          <section className={styles.section}>
            <h2 className={styles.section_title}>About Me</h2>
            <p className={styles.about_text}>
              Hi, I&apos;m <strong>Kori Russell</strong>, a Computer Science student at the
              University of Alabama based in Tuscaloosa, AL. I&apos;m passionate about
              distributed systems, web development, and building innovative software
              solutions that solve real-world problems.
            </p>
            <p className={styles.about_text}>
              I have experience in full-stack development, cybersecurity, and geospatial
              analysis. I&apos;ve won multiple hackathons including CUHackit 2026 and
              UGAHacks 11.
            </p>
          </section>
        )}
      </div>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Kori Russell</span>
      </footer>
    </div>
  );
};

export default MobileLayout;
