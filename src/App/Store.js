import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
