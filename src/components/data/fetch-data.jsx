import { useEffect, useState, React } from "react";
import GameCard from "../home/game-card";
import PropTypes from "prop-types";

const GameData = (props) => {
  const [game, setGame] = useState([]);
  const [cart, setCart] = useState([]);

  const apiKey = "2d20f776def34acc801a1c96f4a09dc7";
  const url = `https://api.rawg.io/api/games?key=${apiKey}`;

  const addToCart = (game) => {
    setCart(prev => [...prev, game]);
  }

  useEffect(()=>{
    console.log(cart);
  },[cart])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${url}`, {
        mode: "cors",
        method: "GET",
      });
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
              addToCart={()=>addToCart(game)}
              releaseDate={game.released}
              viewItemHandler={props.productPage}
              price={69.99}
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