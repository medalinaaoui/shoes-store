import { AiOutlineCloseCircle, AiOutlineDoubleLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setCloseCart, clearCart } from "../../App/cartSlice/cartSlice";

const CartCount = () => {
  const dispatch = useDispatch();

  const handleCloseCart = () => {
    dispatch(setCloseCart());
  };
  const handleClearTheCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="bg-white z-50 text-green-800 h-11 sticky top-0 left-0 right-0 flex justify-between items-center px-3">
      <div className="flex justify-around items-center gap-4 h-12">
        <div className="font-extabold fon text-xl cursor-pointer active:scale-[1.3] transition-all duration-75">
          <AiOutlineDoubleLeft onClick={handleCloseCart} />
        </div>
        <div>
          <p className="font-semibold">
            Your Cart has:{" "}
            <span className="bg-green-800 text-white px-1 font-semibold pb-1 rounded-lg">
              (items)
            </span>
          </p>
        </div>
      </div>
      <div
        onClick={handleClearTheCart}
        className="bg-green-800 text-white py-0 px-2 rounded-xl flex items-center gap-2 cursor-pointer active:scale-[1.1] hover:bg-green-700 transition-all duration-75"
      >
        <AiOutlineCloseCircle className="font-extabold fon text-xl" />{" "}
        <span className=" capitalize text-base font-semibold">
          clear the cart
        </span>
      </div>
    </div>
  );
};
export default CartCount;
