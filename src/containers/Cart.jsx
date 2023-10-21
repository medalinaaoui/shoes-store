import {
  CartCount,
  CartEmpty,
  CartItem,
  CartSubTotal,
} from "../components/index";
import { selectCartItems } from "../App/cartSlice/cartSlice";
import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector(selectCartItems);

  return (
    <>
      <div
        className={`fixed top-0 right-0 left-0 bottom-0 blur-effect-theme w-full h-screen `}
      >
        <div
          className={`blur-effect-theme overflow-y-scroll scroll-smooth max-w-xl w-full absolute right-0 h-screen flex-col flex justify-between`}
        >
          <CartCount />
          {items.length === 0 && <CartEmpty />}
          <div className="grid gap-4 ">
            {items.map((item) => (
              <CartItem {...item} key={item.id} />
            ))}
          </div>
          {items.length !== 0 && <CartSubTotal items={items} />}
        </div>
      </div>
    </>
  );
};
export default Cart;
