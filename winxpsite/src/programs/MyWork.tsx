import { TechIcon, WorkAccordionContent } from "@/appData";
import { RootState, WorkContent, WorkFile, WorkType } from "@/types";
import { useState } from "react";
import styles from "./MyWork.module.css";
import Image from "next/image";
import github from "../../assets/github.png";
import github_w from "../../assets/github_w.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "components/Carousel/Carousel";

const loaderProp = ({ src }: any) => {
  return src;
};

const TYPE_COLORS: Record<string, string> = {
  [WorkType.WORK]: "#3a7bd5",
  [WorkType.HACKATHON]: "#d43f00",
  [WorkType.PERSONAL]: "#2d8653",
};

interface Props {
  id: string | number;
}

const ProjectDetailModal = ({
  project,
  onClose,
}: {
  project: WorkFile;
  onClose: () => void;
}) => {
  const [gitIcon, setGitIcon] = useState(github_w);
  const { content, type } = project;
  return (
    <div className={styles.modal_overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`Project details: ${content.title}`}
      >
        <div className={styles.modal_header}>
          <div className={styles.modal_title_row}>
            <h3>{content.title}</h3>
            <span
              className={styles.type_badge}
              style={{ backgroundColor: TYPE_COLORS[type] ?? "#555" }}
            >
              {type}
            </span>
          </div>
          <button
            className={styles.modal_close}
            onClick={onClose}
            aria-label="Close project details"
          >
            ✕
          </button>
        </div>
        <div className={styles.modal_body}>
          <p className={styles.modal_date}>{content.date}</p>
          {content.gallery.length > 0 && (
            <div className={styles.modal_gallery}>
              <Carousel images={content.gallery} />
            </div>
          )}

          {content.demoUrl && (
            <div className={styles.modal_demo}>
              <h4>Live Demo</h4>
              <iframe
                src={content.demoUrl}
                title={`${content.title} demo`}
                className={styles.demo_iframe}
                loading="lazy"
              />
            </div>
          )}
          <div className={styles.modal_overview}>
            <h4>Overview</h4>
            <p>{content.overview}</p>
          </div>
          {content.gitURL && (
            <div
              onMouseEnter={() => setGitIcon(github)}
              onMouseLeave={() => setGitIcon(github_w)}
              onClick={() => window.open(content.gitURL, "_blank", "noreferrer")}
              className={styles.github_button}
            >
              View Project
              <Image alt="git" src={gitIcon.src} height={24} width={24} />
            </div>
          )}
          <div className={styles.modal_tech}>
            <h4>Tech Stack</h4>
            <div className={styles.content_tech}>
              {content.techstack.map((tech) => (
                <div key={tech} className={styles.tech_badge}>
                  <Image
                    style={{ width: "100%", borderRadius: "20px" }}
                    alt="tech"
                    src={tech}
                    width={50}
                    height={35}
                    loader={loaderProp}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({
  project,
  onOpen,
}: {
  project: WorkFile;
  onOpen: (p: WorkFile) => void;
}) => {
  const { content, type } = project;
  const firstImage = content.gallery[0];
  return (
    <div className={styles.card} tabIndex={0} onKeyDown={(e) => e.key === "Enter" && onOpen(project)}>
      <div className={styles.card_image}>
        {firstImage ? (
          <Image
            alt={content.title}
            src={firstImage.src}
            fill
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div
            className={styles.card_placeholder}
            style={{ backgroundColor: TYPE_COLORS[type] ?? "#555" }}
          >
            <span className={styles.card_placeholder_text}>{type.charAt(0)}</span>
          </div>
        )}
        <span
          className={styles.type_badge_card}
          style={{ backgroundColor: TYPE_COLORS[type] ?? "#555" }}
        >
          {type}
        </span>
      </div>
      <div className={styles.card_body}>
        <h4 className={styles.card_title}>{content.title}</h4>
        <p className={styles.card_date}>{content.date}</p>
        <p className={styles.card_overview}>
          {content.overview.slice(0, 110)}{content.overview.length > 110 ? "…" : ""}
        </p>
        <div className={styles.card_tech}>
          {content.techstack.slice(0, 4).map((tech) => (
            <Image
              key={tech}
              alt="tech"
              src={tech}
              width={60}
              height={20}
              loader={loaderProp}
              style={{ borderRadius: "4px" }}
            />
          ))}
          {content.techstack.length > 4 && (
            <span className={styles.more_tech}>+{content.techstack.length - 4}</span>
          )}
        </div>
        <button
          className={styles.view_details_btn}
          onClick={() => onOpen(project)}
          aria-label={`View details for ${content.title}`}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

const MyWork = ({ id }: Props) => {
  const [selectedProject, setSelectedProject] = useState<WorkFile | null>(null);
  const [filter, setFilter] = useState<WorkType | "all">("all");
  const [showTrophies, setShowTrophies] = useState(true);

  const filtered = filter === "all"
    ? WorkAccordionContent
    : WorkAccordionContent.filter((w) => w.type === filter);

  return (
    <div className={styles.main}>
      {showTrophies && (
        <div className={styles.trophy_banner}>
          <span className={styles.trophy_icon}>🏆</span>
          <span className={styles.trophy_text}>8 Hackathon Awards</span>
          <button
            className={styles.trophy_close}
            onClick={() => setShowTrophies(false)}
            aria-label="Close awards banner"
          >
            ×
          </button>
        </div>
      )}
      <div className={styles.filter_bar}>
        {(["all", WorkType.WORK, WorkType.HACKATHON, WorkType.PERSONAL] as const).map(
          (f) => (
            <button
              key={f}
              className={filter === f ? styles.filter_btn_active : styles.filter_btn}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
            >
              {f === "all" ? "All" : f}
            </button>
          )
        )}
      </div>
      <div className={styles.grid}>
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
        ))}
      </div>
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default MyWork;
