import styles from "./TrophyCabinet.module.css";

const TrophyCabinet = () => {
  const awards = [
    { event: "VandyHacks 12", count: 2, year: "2025" },
    { event: "CUHackit 2026", count: 3, year: "2026" },
    { event: "UGAHacks 11", count: 2, year: "2025" },
    { event: "UA Innovate", count: 1, year: "2024" },
  ];

  return (
    <div className={styles.cabinet}>
      <div className={styles.header}>
        <span className={styles.trophy_icon}>🏆</span>
        <span className={styles.count}>8 Awards</span>
      </div>
      <div className={styles.awards_list}>
        {awards.map((award, idx) => (
          <div key={idx} className={styles.award_item}>
            <span className={styles.medal}>
              {award.count > 1 ? `${award.count}×` : ""}
            </span>
            <span className={styles.event_name}>{award.event}</span>
            <span className={styles.year}>{award.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrophyCabinet;
