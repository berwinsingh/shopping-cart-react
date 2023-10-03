import PropTypes from "prop-types";
import "../../styles/cart.css"

const CartProduct = (props) => {
  return (
    <>
      <div className="cart-item flex justify-evenly items-center mt-10 select-none hover:bg-stone-100 py-5 cursor-pointer">
        <div className="product flex items-center gap-5">
          <div
            className="product-image hover:scale-125 cursor-pointer h-56 w-56 justify-self-start"
            style={{
              backgroundImage: `url("${props.image}")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></div>
          <h3 className="text-3xl font-bold ml-5">{props.productName}</h3>
        </div>
        <p className="font-bold text-xl">${props.price}</p>
        <div className="quantity-edit flex gap-3 font-bold text-xl">
          <button className="text-3xl text-white hover:bg-indigo-700 bg-indigo-500 w-10 h-10 px-2 rounded-full drop-shadow-md">-</button>
          <input
            type="number"
            className="text-2xl w-10 border border-black rounded-xl bg-white px-2 focus:outline-none"
            name="qty"
            value={props.quantity}
            onChange={props.newQuantity}
          />
          <button className="text-3xl text-white bg-indigo-500 hover:bg-indigo-700 w-10 h-10 px-2 rounded-full drop-shadow-md">+</button>
        </div>
        <p className="font-bold text-xl">${props.total}</p>
      </div>
    </>
  );
};

CartProduct.propTypes = {
  delete: PropTypes.func,
  image: PropTypes.string,
  productName: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.any,
  newQuantity: PropTypes.func,
  total: PropTypes.number,
};

export default CartProduct;
