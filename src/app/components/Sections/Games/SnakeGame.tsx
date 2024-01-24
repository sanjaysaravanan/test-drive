import React, { useCallback, useEffect, useRef, useState } from "react";
import "./SnakeGame.css";
import AppleLogo from "./applePixels.png";
import Monitor from "./oldMonitor.png";
import useInterval from "./useInterval";
import Image from "next/image";

const canvasX = 1000;
const canvasY = 1000;
const initialSnake = [
  [4, 10],
  [4, 10],
];
const initialApple = [14, 10];
const Scale = 50;
const timeDelay = 100;

function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [inGame, setInGame] = useState(false);
  const [snake, setSnake] = useState(initialSnake);
  const [apple, setApple] = useState(initialApple);
  const [direaction, setDireaction] = useState([0, -1]);
  const [delay, setDelay] = useState<number | null>(null);
  const [gameover, SetGameover] = useState(false);
  const [score, setScore] = useState(0);

  useInterval(() => runGame(), delay);

  function handleSetScore() {
    if (score > Number(localStorage.getItem("snakeScore"))) {
      localStorage.setItem("snakeScore", JSON.stringify(score));
    }
  }

  function checkCollision(head: number[]) {
    for (let i = 0; i < head.length; i++) {
      if (head[i] < 0 || head[i] * Scale >= canvasX) return true;
    }
    for (const s of snake) {
      if (head[0] === s[0] && head[1] === s[1]) return true;
    }
    return false;
  }

  function appleAte(newSnake: number[][]) {
    let coord = apple.map(() => Math.floor((Math.random() * canvasX) / Scale));
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      let newApple = coord;
      setScore(score + 1);
      setApple(newApple);
      return true;
    }
    return false;
  }

  const runGame = () => {
    const newSnake = [...snake];
    const newSnakeHead = [
      newSnake[0][0] + direaction[0],
      newSnake[0][1] + direaction[1],
    ];
    newSnake.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) {
      setInGame(false);
      setDelay(null);
      SetGameover(true);
      handleSetScore();
    }
    if (!appleAte(newSnake)) {
      newSnake.pop();
    }
    setSnake(newSnake);
  };

  const setDirection = (key: string) => {
    switch (key) {
      case "ArrowLeft":
        setDireaction((direction) => {
          if (direction[0] !== 1) return [-1, 0];
          return direction;
        });
        break;
      case "ArrowRight":
        setDireaction((direction) => {
          if (direction[0] !== -1) return [1, 0];
          return direction;
        });
        break;
      case "ArrowUp":
        setDireaction((direction) => {
          if (direction[1] !== 1) return [0, -1];
          return direction;
        });
        break;
      case "ArrowDown":
        setDireaction((direction) => {
          if (direction[1] !== -1) return [0, 1];
          return direction;
        });
        break;
    }
  };

  const changeDireaction = useCallback((e: KeyboardEvent) => {
    e.stopPropagation();
    setDirection(e.key);
  }, []);

  function Play() {
    setInGame(true);
    setSnake(initialSnake);
    setApple(initialApple);
    setDireaction([1, 0]);
    setDelay(timeDelay);
    setScore(0);
    SetGameover(false);
    window.addEventListener("keydown", changeDireaction);
  }

  useEffect(() => {
    window.addEventListener("keydown", changeDireaction);
    return () => {
      window.removeEventListener("keydown", changeDireaction);
    };
  }, []);

  useEffect(() => {
    let fruit = document.getElementById("fruit") as HTMLCanvasElement;
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.setTransform(Scale, 0, 0, Scale, 0, 0);
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.fillStyle = "#a3d001";
        snake.forEach(([x, y]) => ctx.fillRect(x, y, 1, 1));
        ctx.drawImage(fruit, apple[0], apple[1], 1, 1);
      }
    }

    if (gameover) {
      window.removeEventListener("keydown", changeDireaction);
    }
  }, [snake, apple, gameover]);

  return (
    <>
      <div className="scoreBox">
        <h2>Score: {score}</h2>
        <h2>High Score: {localStorage.getItem("snackScore")}</h2>
      </div>
      <img
        id="fruit"
        src={
          "https://static.vecteezy.com/system/resources/previews/015/100/030/original/apple-transparent-background-free-png.png"
        }
        height={"30"}
        alt="Fruit"
        width="30"
      />
      <div className="playContainer" tabIndex={0}>
        <canvas
          className="playArea"
          ref={canvasRef}
          width={`${canvasX}px`}
          height={`${canvasY}px`}
        />
        {gameover && <div className="gameOver">Game Over</div>}
        <button
          onClick={Play}
          className="playButton"
          style={{
            visibility: inGame ? "hidden" : "visible",
          }}
        >
          Play
        </button>
      </div>
      <div className="arrow-keys">
        <div
          className="arrow arrow-up"
          onClick={() => setDirection("ArrowUp")}
          tabIndex={0}
        >
          <i className="fas fa-arrow-up"></i>
        </div>
        <div
          className="arrow arrow-left"
          onClick={() => setDirection("ArrowLeft")}
          tabIndex={0}
        >
          <i className="fas fa-arrow-left"></i>
        </div>
        <div
          className="arrow arrow-down"
          onClick={() => setDirection("ArrowDown")}
          tabIndex={0}
        >
          <i className="fas fa-arrow-down"></i>
        </div>
        <div
          className="arrow arrow-right"
          onClick={() => setDirection("ArrowRight")}
          tabIndex={0}
        >
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>
    </>
  );
}

export default SnakeGame;
