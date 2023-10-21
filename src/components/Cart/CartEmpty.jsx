import emptybag from "../../assets/emptybag.png";
import { useDispatch } from "react-redux";
import { setCloseCart } from "../../App/cartSlice/cartSlice";

const CartEmpty = () => {
  const dispatch = useDispatch();
  const handleBackToStore = () => {
    dispatch(setCloseCart());
  };

  return (
    <div className="grid items-center justify-center justify-items-center">
      <div className="w-[70%] ">
        <img src={emptybag} alt="empty bag" />
      </div>
      <div>
        <p className="text-center font-bold md:text-2xl text-lg text-green-600 -mt-8 mb-4">
          Your Card Is Empty
        </p>
      </div>
      <div className="px-12">
        <button
          type="button"
          onClick={handleBackToStore}
          className="button-theme bg-green-600 w-full "
        >
          back to store
        </button>
      </div>
    </div>
  );
};
export default CartEmpty;
