import React, { useState } from "react";

import Cards from "../../../components/Cards/Cards";
import SnakeGame from "./SnakeGame";
import './Games.css';

const Games = () => {
  const obj: { [key: string]: any } = {
    snakeGame: false,
  };

  const [games, setGames] = useState(obj);

  const openGame = (gameName?: string) => {
    const newState = { ...games };
    Object.keys(newState).forEach((game: string) => {
      if (gameName === game && game in newState) {
        newState[game] = true;
      } else {
        newState[game] = false;
      }
    });
    setGames(() => newState);
  };

  const closeGames = (_e: React.MouseEvent) => {
    openGame();
  }

  return (
    <>
      <Cards
        data={[
          {
            url: "https://github.com/sanjaysaravanan/test-drive/blob/master/src/app/components/Sections/Games/Games.tsx",
            imageUrl: "https://ik.imagekit.io/twsok8jou/snake-game-icon.jpg?updatedAt=1706071684192",
            title: "Snake Game",
            type: "game",
            techs: ["ReactJS", "HTML", "Canvas"],
            clickFunc: () => openGame("snakeGame"),
          },
          {
            url: "https://github.com/sanjaysaravanan/HTML-Mini-Task/blob/main/tic-tac-toe.html",
            imageUrl: "https://ik.imagekit.io/twsok8jou/tic_tac_toe.png",
            title: "Tic Tac Toe",
            type: "game",
            techs: ["HTML", "CSS", "JS"],
            sourceUrl: 'https://guileless-pony-1f65d4.netlify.app/tic-tac-toe.html'
          },
        ]}
      />
      {games["snakeGame"] && <div className="body" >
        <i
          className="fa-solid fa-xmark fa-2x closeIcon"
          tabIndex={0}
          onClick={closeGames}
        ></i>
        <SnakeGame />
      </div>}
    </>
  );
};

export default Games;
