import { useEffect, useRef, useState } from "react";
import styles from "./MediaPlayer.module.css";

type Track = {
  title: string;
  artist: string;
  src: string;
};

const PLAYLIST: Track[] = [
  {
    title: "Abandon Me",
    artist: "Kevin Abstract ft. Quadeca",
    src: "/music/abandon_me.mp3",
  },
  {
    title: "Isn't She Lovely",
    artist: "Stevie Wonder",
    src: "/music/isnt_she_lovely.mp3",
  },
  {
    title: "Many Times",
    artist: "Dijon",
    src: "/music/many_times.mp3",
  },
];

interface Props {
  id: string | number;
}

const MediaPlayer = ({ id }: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [trackIdx, setTrackIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);

  const track = PLAYLIST[trackIdx];

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = track.src;
    audio.volume = volume;
    if (playing) audio.play().catch(() => {});
  }, [trackIdx]);
  /* eslint-enable react-hooks/exhaustive-deps */

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  const handleStop = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setPlaying(false);
    setProgress(0);
  };

  const handlePrev = () => {
    setTrackIdx((i) => (i === 0 ? PLAYLIST.length - 1 : i - 1));
    setPlaying(true);
  };

  const handleNext = () => {
    setTrackIdx((i) => (i + 1) % PLAYLIST.length);
    setPlaying(true);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setProgress(audio.currentTime);
    setDuration(audio.duration || 0);
  };

  const handleEnded = () => {
    handleNext();
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Number(e.target.value);
    setProgress(Number(e.target.value));
  };

  const fmt = (s: number) => {
    if (!isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <div className={styles.player}>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        onLoadedMetadata={handleTimeUpdate}
      />
      <div className={styles.title_bar}>Winamp — {track.title}</div>
      <div className={styles.vis}>
        <div className={styles.vis_bars}>
          {playing &&
            Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className={styles.vis_bar}
                style={{
                  height: `${Math.random() * 80 + 10}%`,
                  animationDelay: `${i * 0.05}s`,
                }}
              />
            ))}
        </div>
      </div>
      <div className={styles.info}>
        <p className={styles.track_title}>{track.title}</p>
        <p className={styles.track_artist}>{track.artist}</p>
      </div>
      <div className={styles.progress_row}>
        <span className={styles.time}>{fmt(progress)}</span>
        <input
          type="range"
          className={styles.seek}
          min={0}
          max={duration || 100}
          step={0.1}
          value={progress}
          onChange={handleSeek}
          aria-label="Seek"
        />
        <span className={styles.time}>{fmt(duration)}</span>
      </div>
      <div className={styles.controls}>
        <button className={styles.ctrl_btn} onClick={handlePrev} title="Previous" aria-label="Previous track">⏮</button>
        <button className={styles.ctrl_btn} onClick={handleStop} title="Stop" aria-label="Stop">⏹</button>
        <button
          className={`${styles.ctrl_btn} ${styles.play_btn}`}
          onClick={togglePlay}
          title={playing ? "Pause" : "Play"}
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? "⏸" : "▶"}
        </button>
        <button className={styles.ctrl_btn} onClick={handleNext} title="Next" aria-label="Next track">⏭</button>
      </div>
      <div className={styles.volume_row}>
        <span className={styles.vol_label}>VOL</span>
        <input
          type="range"
          className={styles.vol_slider}
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          aria-label="Volume"
        />
        <span className={styles.vol_pct}>{Math.round(volume * 100)}%</span>
      </div>
      <div className={styles.playlist}>
        <p className={styles.pl_label}>Playlist</p>
        {PLAYLIST.map((t, i) => (
          <div
            key={i}
            className={i === trackIdx ? styles.pl_item_active : styles.pl_item}
            onClick={() => {
              setTrackIdx(i);
              setPlaying(true);
            }}
          >
            <span>{i + 1}.</span>
            <span>{t.title}</span>
            <span className={styles.pl_artist}>— {t.artist}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaPlayer;
