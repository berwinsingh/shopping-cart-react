import "../../styles/cart.css";
// import PropTypes from "prop-types";
import CartProduct from "./cart-product";
import CartData from "./cart-data";
import { useState } from "react";

const Cart = () => {
    const [myCart, setMyCart] = useState(CartData);

  return (
    <>
      <h2 className="p-5 font-staatliches text-4xl">My Cart</h2>
      <div id="cart" className="flex flex-col">
        <div className="cart-product flex flex-col mt-10 select-none">
          <div id="header" className="flex justify-evenly font-staatliches px-10 text-3xl">
            <p className="">Game Name</p>
            <p className="">Price (USD)</p>
            <p className="">Quantity</p>
            <p className="">Total (USD)</p>
          </div>

          {/* <CartProduct
            image={"/ghost.png"}
            productName={"Grand Theft Auto"}
            price={69.99}
            quantity={1}
            total={(69.99)}
          /> */}
        </div>
      </div>
    </>
  );
};

// Cart.propTypes = {};

export default Cart;
