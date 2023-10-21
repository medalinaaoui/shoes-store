import { FaTrash } from "react-icons/fa";
import {
  increaseItem,
  decreaseItem,
  removeItem,
} from "../../App/cartSlice/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({
  id,
  title,
  text,
  img,
  color,
  shadow,
  price,
  itemQuantity,
}) => {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(
      removeItem({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        itemQuantity,
      })
    );
  };

  const handleIncrease = () => {
    dispatch(increaseItem(id));
  };
  const handledecrease = () => {
    dispatch(decreaseItem(id));
  };

  return (
    <div className=" px-4 flex w-full items-start justify-between gap-4 ">
      <div
        className={`relative w-[30%] flex-none rounded-md bg-gradient-to-tr p-4 ${color} ${shadow}`}
      >
        <img src={img} alt="image" className=" object-contain" />
        <span className=" bg-four rounded-md px-1 text-one font-semibold text-sm  absolute top-1 right-1">
          ${price}
        </span>
      </div>
      <div className="h-full flex-none flex flex-col justify-between">
        <h1 className="text-base font-semibold">{title}</h1>
        <h2 className="text-sm">{text}</h2>
        <div className="flex justify-center mt-auto gap-8 ">
          <button
            onClick={handledecrease}
            className="bg-one text-white md:text-sm text-xs px-2 font-bold rounded-sm"
          >
            -
          </button>
          <button className="bg-one text-white md:text-sm text-xs px-2 font-bold rounded-sm">
            {itemQuantity}
          </button>
          <button
            onClick={handleIncrease}
            className="bg-one text-white md:text-sm text-xs px-2 font-bold rounded-sm"
          >
            +
          </button>
        </div>
      </div>
      <div className=" flex-grow text-right h-full flex flex-col justify-between items-end">
        <p className="font-semibold">${price * itemQuantity}</p>
        <button onClick={handleDeleteItem}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};
export default CartItem;
