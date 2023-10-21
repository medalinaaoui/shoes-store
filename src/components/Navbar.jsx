import { useEffect, useState } from "react";
import { FaSearch, FaHeart, FaShoppingBag } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setOpenCart } from "../App/cartSlice/cartSlice";

const Navbar = ({ logo }) => {
  const [navState, setNavState] = useState(false);
  const [items, setItems] = useState(0);
  const dispatch = useDispatch();

  const handleCartClick = () => {
    dispatch(setOpenCart());
  };

  const onNavScroll = () => {
    window.scrollY > 50 ? setNavState(true) : setNavState(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <div
      className={
        navState ? "z-[999]  bg-white fixed top-0 left-0 right-0 " : "z-[999]"
      }
    >
      <nav className="flex justify-between items-center px-12">
        <div>
          <img
            src={logo}
            alt="logo"
            className="w-16 h-auto hover:-translate-y-1 transition-transform duration-500 cursor-pointer"
          />
        </div>
        <ul className="flex justify-between gap-2">
          <li className="text-2xl hover:text-two cursor-pointer  hover:-translate-y-1 transition-transform duration-500 ">
            <FaSearch />{" "}
          </li>
          <li className="text-2xl hover:text-two cursor-pointer  hover:-translate-y-1 transition-transform duration-500 ">
            <FaHeart />
          </li>
          <li className="relative text-2xl hover:text-two cursor-pointer  hover:-translate-y-1 transition-transform duration-500 ">
            <FaShoppingBag onClick={handleCartClick} />
            <span className="text-xs font-semibold text-one bg-three px-1 absolute top-0 -right-2 rounded-full">
              {items}
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
