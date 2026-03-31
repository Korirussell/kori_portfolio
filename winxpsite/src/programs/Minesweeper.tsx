import { useCallback, useEffect, useState } from "react";
import styles from "./Minesweeper.module.css";

const ROWS = 9;
const COLS = 9;
const MINES = 10;

type CellState = {
  isMine: boolean;
  isRevealed: boolean;
  isFlagged: boolean;
  adjacentMines: number;
};

type GameStatus = "idle" | "playing" | "won" | "lost";

function createEmptyGrid(): CellState[][] {
  return Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => ({
      isMine: false,
      isRevealed: false,
      isFlagged: false,
      adjacentMines: 0,
    }))
  );
}

function placeMines(grid: CellState[][], firstRow: number, firstCol: number): CellState[][] {
  const newGrid = grid.map((row) => row.map((cell) => ({ ...cell })));
  let placed = 0;
  while (placed < MINES) {
    const r = Math.floor(Math.random() * ROWS);
    const c = Math.floor(Math.random() * COLS);
    if (!newGrid[r][c].isMine && !(r === firstRow && c === firstCol)) {
      newGrid[r][c].isMine = true;
      placed++;
    }
  }
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (!newGrid[r][c].isMine) {
        let count = 0;
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && newGrid[nr][nc].isMine) {
              count++;
            }
          }
        }
        newGrid[r][c].adjacentMines = count;
      }
    }
  }
  return newGrid;
}

function floodReveal(grid: CellState[][], row: number, col: number): CellState[][] {
  const newGrid = grid.map((r) => r.map((c) => ({ ...c })));
  const queue: [number, number][] = [[row, col]];
  while (queue.length > 0) {
    const [r, c] = queue.shift()!;
    if (r < 0 || r >= ROWS || c < 0 || c >= COLS) continue;
    if (newGrid[r][c].isRevealed || newGrid[r][c].isFlagged || newGrid[r][c].isMine) continue;
    newGrid[r][c].isRevealed = true;
    if (newGrid[r][c].adjacentMines === 0) {
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr !== 0 || dc !== 0) queue.push([r + dr, c + dc]);
        }
      }
    }
  }
  return newGrid;
}

const NUM_COLORS = ["", "#0000ff", "#007700", "#ff0000", "#000088", "#880000", "#008888", "#000000", "#888888"];

interface Props {
  id: string | number;
}

const Minesweeper = ({ id }: Props) => {
  const [grid, setGrid] = useState<CellState[][]>(createEmptyGrid);
  const [status, setStatus] = useState<GameStatus>("idle");
  const [flags, setFlags] = useState(0);
  const [time, setTime] = useState(0);
  const [face, setFace] = useState("🙂");

  useEffect(() => {
    if (status !== "playing") return;
    const timer = setInterval(() => setTime((t) => Math.min(t + 1, 999)), 1000);
    return () => clearInterval(timer);
  }, [status]);

  useEffect(() => {
    if (status === "won") setFace("😎");
    else if (status === "lost") setFace("😵");
    else setFace("🙂");
  }, [status]);

  const reset = () => {
    setGrid(createEmptyGrid());
    setStatus("idle");
    setFlags(0);
    setTime(0);
  };

  const checkWin = (g: CellState[][]): boolean => {
    return g.every((row) => row.every((cell) => cell.isMine || cell.isRevealed));
  };

  const handleClick = useCallback(
    (row: number, col: number) => {
      if (status === "won" || status === "lost") return;
      const cell = grid[row][col];
      if (cell.isRevealed || cell.isFlagged) return;

      let currentGrid = grid;
      if (status === "idle") {
        currentGrid = placeMines(grid, row, col);
        setStatus("playing");
      }

      if (currentGrid[row][col].isMine) {
        const revealed = currentGrid.map((r) =>
          r.map((c) => ({ ...c, isRevealed: c.isMine ? true : c.isRevealed }))
        );
        setGrid(revealed);
        setStatus("lost");
        return;
      }

      const newGrid = floodReveal(currentGrid, row, col);
      setGrid(newGrid);
      if (checkWin(newGrid)) setStatus("won");
    },
    [grid, status]
  );

  const handleRightClick = useCallback(
    (e: React.MouseEvent, row: number, col: number) => {
      e.preventDefault();
      if (status === "won" || status === "lost") return;
      const cell = grid[row][col];
      if (cell.isRevealed) return;
      const newGrid = grid.map((r) => r.map((c) => ({ ...c })));
      newGrid[row][col].isFlagged = !cell.isFlagged;
      setGrid(newGrid);
      setFlags((f) => f + (cell.isFlagged ? -1 : 1));
    },
    [grid, status]
  );

  const renderCell = (cell: CellState, row: number, col: number) => {
    let content: React.ReactNode = null;
    let className = styles.cell;

    if (cell.isRevealed) {
      className = cell.isMine ? styles.cell_mine : styles.cell_revealed;
      if (cell.isMine) content = "💣";
      else if (cell.adjacentMines > 0) {
        content = (
          <span style={{ color: NUM_COLORS[cell.adjacentMines], fontWeight: 700 }}>
            {cell.adjacentMines}
          </span>
        );
      }
    } else if (cell.isFlagged) {
      content = "🚩";
    }

    return (
      <td
        key={col}
        className={className}
        onClick={() => handleClick(row, col)}
        onContextMenu={(e) => handleRightClick(e, row, col)}
        role="gridcell"
        aria-label={`Cell row ${row + 1} column ${col + 1}`}
      >
        {content}
      </td>
    );
  };

  return (
    <div className={styles.main}>
      <div className={styles.panel}>
        <div className={styles.scoreboard}>
          <div className={styles.counter}>{String(MINES - flags).padStart(3, "0")}</div>
          <button className={styles.face_btn} onClick={reset} aria-label="New game">
            {face}
          </button>
          <div className={styles.counter}>{String(time).padStart(3, "0")}</div>
        </div>
        <table className={styles.grid} role="grid" aria-label="Minesweeper board">
          <tbody>
            {grid.map((row, r) => (
              <tr key={r}>
                {row.map((cell, c) => renderCell(cell, r, c))}
              </tr>
            ))}
          </tbody>
        </table>
        {status === "won" && <p className={styles.msg_win}>You cleared the board! 🎉</p>}
        {status === "lost" && <p className={styles.msg_lose}>Game over! Click 😵 to restart.</p>}
      </div>
    </div>
  );
};

export default Minesweeper;
