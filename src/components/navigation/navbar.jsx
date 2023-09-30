import PropTypes from "prop-types";
import { IoCartOutline } from "react-icons/io5";

const Navbar = (props) => {
  return (
    <div className="w-screen h-16 bg-white flex drop-shadow-sm items-center px-5 justify-between">
      <div id="game-logo" className="flex items-center">
        <img src="/ghost.png" alt="ghost-logo" className="w-10 h-10 mr-2" />
        <h2 className="font-staatliches text-3xl">Game Store</h2>
      </div>
      <div id="menu-items" className="">
        <ul className="flex gap-4 items-center">
          <a href="#" className="font-bold text-lg hover:text-indigo-600">
            Home
          </a>
          <a href="#" className="font-bold text-lg hover:text-indigo-600">
            Shop
          </a>
          <button
            type="button"
            className="flex items-center gap-1 font-bold text-lg bg-indigo-500 px-3 text-white rounded-full py-2 drop-shadow-md hover:bg-indigo-600"
            onClick={props.cart}
          >
            <IoCartOutline className="text-2xl" />
            Cart
          </button>
        </ul>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  cart: PropTypes.func,
};

export default Navbar;
