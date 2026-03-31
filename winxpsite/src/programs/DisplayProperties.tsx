import { useSelector } from "react-redux";
import { RootState } from "@/types";
import store from "@/redux/store";
import { setTheme } from "@/redux/systemSlice";
import styles from "./DisplayProperties.module.css";

const THEMES = [
  {
    id: "luna-blue" as const,
    label: "Windows XP (Blue)",
    preview: "linear-gradient(180deg, #0a246a 0%, #3a6ea5 100%)",
    accent: "#245edb",
  },
  {
    id: "olive-green" as const,
    label: "Windows XP (Olive)",
    preview: "linear-gradient(180deg, #3c4b1e 0%, #6b7c38 100%)",
    accent: "#7b9d3c",
  },
  {
    id: "silver" as const,
    label: "Windows Classic (Silver)",
    preview: "linear-gradient(180deg, #5a5a5a 0%, #909090 100%)",
    accent: "#777",
  },
];

interface Props {
  id: string | number;
}

const DisplayProperties = ({ id }: Props) => {
  const currentTheme = useSelector(
    (state: RootState) => state.system?.theme ?? "luna-blue"
  );

  return (
    <div className={styles.main}>
      <div className={styles.tabs}>
        <div className={styles.tab_active}>Appearance</div>
      </div>
      <div className={styles.body}>
        <h4 className={styles.section_title}>Windows and buttons style:</h4>
        <div className={styles.theme_list}>
          {THEMES.map((theme) => (
            <div
              key={theme.id}
              className={currentTheme === theme.id ? styles.theme_item_active : styles.theme_item}
              onClick={() => store.dispatch(setTheme(theme.id))}
              tabIndex={0}
              role="radio"
              aria-checked={currentTheme === theme.id}
              onKeyDown={(e) => e.key === "Enter" && store.dispatch(setTheme(theme.id))}
            >
              <div
                className={styles.theme_preview}
                style={{ background: theme.preview }}
              >
                <div className={styles.preview_titlebar}>
                  <div
                    className={styles.preview_dot}
                    style={{ background: theme.accent }}
                  />
                  <div
                    className={styles.preview_dot}
                    style={{ background: theme.accent }}
                  />
                  <div
                    className={styles.preview_dot}
                    style={{ background: theme.accent }}
                  />
                </div>
                <div className={styles.preview_desktop}>
                  <div className={styles.preview_icon} />
                  <div className={styles.preview_icon} />
                </div>
              </div>
              <div className={styles.theme_label}>
                <input
                  type="radio"
                  readOnly
                  checked={currentTheme === theme.id}
                  aria-hidden="true"
                />
                <span>{theme.label}</span>
              </div>
            </div>
          ))}
        </div>
        <p className={styles.hint}>
          Select a color scheme and click a theme to apply it. Changes are saved automatically.
        </p>
      </div>
    </div>
  );
};

export default DisplayProperties;
