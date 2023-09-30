import { useEffect, useState } from "react";
import GameCard from "../home/game-card";
import PropTypes from "prop-types";

const GameData = (props) => {
  const [game, setGame] = useState([]);

  const apiKey = "cc4bf61aa0b149e29040c304202d1a55";
  const url = `https://api.rawg.io/api/games?key=${apiKey}`;

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setGame(data.results);
    };

    getData();
  });

  return (
    <>
      <h1 className="p-5 font-staatliches text-4xl">All Games</h1>
      <div id="game-data" className="flex flex-wrap p-5 pt-0 gap-2">
        {game.map((game) => (
          <>
            <GameCard
              id={game.id}
              gameName={game.name}
              image={game.background_image}
              releaseDate={game.released}
              addToCart={props.addToCart}
              viewItemHandler={props.productPage}
            />
          </>
        ))}
      </div>
    </>
  );
};

GameData.propTypes = {
  addToCart: PropTypes.func,
  productPage: PropTypes.func,
};

export default GameData;
