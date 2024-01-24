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
            url: "https://sanjaysaravanan38.medium.com/containerize-an-application-using-dockerfile-bf35c38d4d95",
            imageUrl: "https://ik.imagekit.io/twsok8jou/snake-game-icon.jpg?updatedAt=1706071684192",
            title: "Containerize an application using Docker",
            type: "game",
            techs: [],
            clickFunc: () => openGame("snakeGame"),
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
