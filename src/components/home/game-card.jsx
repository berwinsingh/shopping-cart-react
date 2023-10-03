import PropTypes from "prop-types";
import { IoCartOutline } from "react-icons/io5";
import "../../styles/game-card.css";

const GameCard = (props) => {

  // const addToCart = ()=>{
    
  // }

  return (
    <>
      <div
        onClick={props.viewItemHandler}
        className="mt-2 bg-white flex flex-col drop-shadow-md rounded-xl h-84 w-84 cursor-pointer"
        key={props.id}
      >
        <div
          className="game-image rounded-t-xl h-52"
          style={{
            backgroundImage: `url(${props.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>

        <div className="game-content flex flex-col items-center gap-1">
          <h3 className="font-bold mt-2 text-xl">{props.gameName}</h3>
          <h3 className="text-md"><span className="font-bold">Release Date: </span>{props.releaseDate}</h3>
        </div>

        <div className="bottom-content flex justify-between px-4 mt-8">
          <div className="price">
            <h4 className="font-bold text-xl">${props.price}</h4>
          </div>
          <div className="add-to-cart-shortcut">
            <button
              type="button"
              className="flex items-center bg-indigo-500 text-white gap-1 px-2 py-1 rounded-md drop-shadow-lg hover:bg-indigo-600"
              onClick={props.addToCart}
            >
              <IoCartOutline className="text-xl" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

GameCard.propTypes = {
  image: PropTypes.string,
  gameName: PropTypes.string,
  addToCart: PropTypes.func,
  releaseDate: PropTypes.string,
  id: PropTypes.number,
  viewItemHandler: PropTypes.func,
  price: PropTypes.number,
};

export default GameCard;
