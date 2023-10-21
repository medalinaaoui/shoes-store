import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOpenCart: (state) => {
      state.cartState = !state.cartState;
    },
    setCloseCart: (state) => {
      state.cartState = !state.cartState;
    },
    setCartItems: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].itemQuantity += 1;
        toast.success("Item Increased");
      } else {
        const tempo = { ...action.payload, itemQuantity: 1 };
        state.cartItems.push(tempo);
        toast.success(`${action.payload.title} added to cart`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems.length = 0;
    },
    increaseItem: (state, action) => {
      const target = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (target >= 0) {
        state.cartItems[target].itemQuantity += 1;
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
        toast.success("Item Increased");
      }
    },
    decreaseItem: (state, action) => {
      const target = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (target >= 0) {
        if (state.cartItems[target].itemQuantity > 0) {
          state.cartItems[target].itemQuantity -= 1;
          localStorage.setItem("cart", JSON.stringify(state.cartItems));
          toast.success("Item decreased");
        }
      }
    },
    removeItem: (state, action) => {
      const curr = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = curr;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      toast.success(`${action.payload.title} removed from cart`);
    },
  },
});

export const {
  setOpenCart,
  setCloseCart,
  setCartItems,
  clearCart,
  increaseItem,
  decreaseItem,
  removeItem,
} = cartSlice.actions;
export default cartSlice.reducer;
export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;
