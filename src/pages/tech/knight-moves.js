import React, { useState } from "react";
import Layout from "../../components/layout";

const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"];

const KNIGHT_OFFSETS = [
  [-2, -1], [-2, 1], [-1, -2], [-1, 2],
  [1, -2], [1, 2], [2, -1], [2, 1]
];

function parseSquare(raw) {
  const value = raw.trim().toLowerCase();
  const match = value.match(/^([a-h])([1-8])$/);
  if (!match) return null;
  const [, file, rank] = match;
  return { row: 8 - Number(rank), col: FILES.indexOf(file) };
}

function legalMovesFrom(square) {
  if (!square) return [];
  return KNIGHT_OFFSETS
    .map(([dr, dc]) => ({ row: square.row + dr, col: square.col + dc }))
    .filter(({ row, col }) => row >= 0 && row < 8 && col >= 0 && col < 8);
}

export default function KnightMoves() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [knight, setKnight] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [moveHistory, setMoveHistory] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const legalMoves = legalMovesFrom(knight)
    .filter(m => !moveHistory.some(v => v.row === m.row && v.col === m.col));
  const isVictory = knight && moveHistory.length === 63;
  const isGameOver = knight && legalMoves.length === 0 && !isVictory;

  function handleSubmit(e) {
    e.preventDefault();
    if (isPlaying) return;
    const square = parseSquare(input);
    if (!square) {
      setError(`"${input}" isn't a square — try something like e4.`);
      return;
    }
    setError("");
    setKnight(square);
    setMoveHistory([]);
  }

  function handleSquareClick(row, col) {
    if (!knight || isPlaying) return;
    if (!legalMoves.some(m => m.row === row && m.col === col)) return;
    setMoveHistory(history => [...history, knight]);
    setKnight({ row, col });
  }

  function moveNumberAt(row, col) {
    for (let i = moveHistory.length - 1; i >= 0; i--) {
      if (moveHistory[i].row === row && moveHistory[i].col === col) return i + 1;
    }
    return null;
  }

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

  async function playForMe() {
    if (!knight || isPlaying) return;

    setIsPlaying(true);

    // Track position/history locally — React state set inside this loop
    // won't be visible to `knight`/`moveHistory` until the next render, so
    // the loop can't rely on those to decide its next step.
    let currentKnight = knight;
    let currentHistory = [...moveHistory];

    while (currentHistory.length < 63) {
      const visited = [...currentHistory, currentKnight];
      const candidates = legalMovesFrom(currentKnight)
        .filter(m => !visited.some(v => v.row === m.row && v.col === m.col));

      if (candidates.length === 0) {
        console.log("No legal moves remaining.");
        break;
      }

      // Warnsdorff's rule: move to the square with the fewest onward moves.
      let leastMoves = Infinity;
      let nextMove = null;
      for (const move of candidates) {
        const onwardMoves = legalMovesFrom(move)
          .filter(m => !visited.some(v => v.row === m.row && v.col === m.col)).length;
        if (onwardMoves < leastMoves) {
          leastMoves = onwardMoves;
          nextMove = move;
        }
      }

      currentHistory = visited;
      currentKnight = nextMove;
      setMoveHistory(currentHistory);
      setKnight(currentKnight);

      await delay(500);
    }

    setIsPlaying(false);
  }

  return (
    <Layout
      menuItems={[
        { label: "about", to: "/about", class: "parent" },
        { label: "food", to: "/food", class: "parent" },
        { label: "tech", to: "/tech", class: "parent" },
      ]}
    >
      <h1>Knight Moves</h1>

      <form className="knight-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input knight-input"
          placeholder="e.g. e4"
          maxLength={2}
          aria-label="Starting square for the knight"
          value={input}
          onChange={e => setInput(e.target.value)}
          disabled={isPlaying}
        />
        <button type="submit" className="btn btn-primary" disabled={isPlaying}>
          Place knight
        </button>
      </form>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={playForMe}
        disabled={!knight || isPlaying}
      >
        {isPlaying ? "Playing…" : "Play for me"}
      </button>

      {error && <p className="knight-error">{error}</p>}
      {isVictory && (
        <p className="knight-victory">
          Victory — the knight has covered every square!
        </p>
      )}
      {isGameOver && (
        <p className="knight-game-over">Game Over — no legal moves remain.</p>
      )}

      <div className="knight-board-wrap">
        <div
          className={`knight-board ${isGameOver ? "game-over" : ""} ${isVictory ? "victory" : ""}`}
        >
          {Array.from({ length: 8 }, (_, row) => (
            <div className="knight-row" key={row}>
              {Array.from({ length: 8 }, (_, col) => {
                const isLight = (row + col) % 2 === 0
                const hasKnight =
                  knight && knight.row === row && knight.col === col
                const isHovered =
                  hovered && hovered.row === row && hovered.col === col
                const isLegalMove = legalMoves.some(
                  m => m.row === row && m.col === col,
                )
                const moveNumber = !hasKnight ? moveNumberAt(row, col) : null
                const classes = [
                  "knight-square",
                  isLight ? "light" : "dark",
                  isHovered && isLegalMove ? "legal-move" : "",
                  isLegalMove ? "clickable" : "",
                ]
                  .filter(Boolean)
                  .join(" ")
                return (
                  <div
                    className={classes}
                    key={col}
                    onMouseEnter={() => setHovered({ row, col })}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => handleSquareClick(row, col)}
                  >
                    {col === 0 && (
                      <span className="knight-coord knight-rank">
                        {8 - row}
                      </span>
                    )}
                    {row === 7 && (
                      <span className="knight-coord knight-file">
                        {FILES[col]}
                      </span>
                    )}
                    {hasKnight && <span className="knight-piece">♞</span>}
                    {moveNumber && (
                      <span className="knight-move-number">{moveNumber}</span>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}