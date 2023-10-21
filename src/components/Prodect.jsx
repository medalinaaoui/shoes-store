import { FaDollarSign, FaStar, FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setCartItems } from "../App/cartSlice/cartSlice";

const Prodect = ({
  ifExits,
  id,
  title,
  text,
  rating,
  btn,
  img,
  price,
  color,
  shadow,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const item = { id, title, text, img, price, color, shadow };
    dispatch(setCartItems(item));
  };

  return (
    <article
      className={` h-auto relative ${
        ifExits
          ? "grid grid-cols-2 py-4"
          : "grid justify-center items-center py-6"
      } rounded-xl  bg-gradient-to-tl ${color} ${shadow}`}
    >
      <div
        className={`grid items-start ${
          ifExits ? "ml-6" : ""
        }  text-white whitespace-nowrap gap-2`}
      >
        <div className=" leading-3">
          <h1 className="md:text-2xl sm:text-xl text-base font-bold ">
            {title}
          </h1>
          <h2 className="md:text-xl sm:text-base text-sm font-semibold ">
            {text}
          </h2>
        </div>
        <div
          className={`flex ${
            ifExits ? " justify-start" : "justify-center"
          } gap-2 text-one font-bold`}
        >
          <h3 className="flex justify-start items-center bg-three py-0 px-1 rounded-md cursor-pointer  group">
            <span className=" group-hover:text-four">
              <FaStar />
            </span>
            {rating}
          </h3>
          <h4 className="flex justify-center items-center  bg-three py-0 px-1 rounded-md cursor-pointer hover:text-four  group ">
            <span className="group-hover:text-four">
              <FaDollarSign />
            </span>
            {price}
          </h4>
        </div>
        <div
          className={`flex ${
            ifExits ? " justify-start" : "justify-center"
          } items-center font-bold gap-2`}
        >
          <button
            type="button"
            className="px-1 bg-three text-one rounded-md cursor-pointer p-1 hover:text-four"
          >
            <FaCartPlus onClick={() => handleAddToCart()} />
          </button>
          <button className="px-1 bg-three text-one hover:bg-one hover:text-three transition-colors rounded-md cursor-pointer">
            {btn}
          </button>
        </div>
      </div>
      <div
        className={` ${
          ifExits ? " absolute top-5 right-0 -rotate-[40deg]" : ""
        } `}
      >
        <img
          src={img}
          alt="product"
          className={` ${
            ifExits
              ? " h-24 sm:h-[7.2rem] xl:h-32"
              : "h-32 sm:h-[7.2rem] xl:h-32"
          }  transitions-theme hover:scale-110 hover:rotate-12 w-full`}
        />
      </div>
    </article>
  );
};
export default Prodect;
