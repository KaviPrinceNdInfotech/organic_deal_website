
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { WishlistReducer } from "./WishListSlice";
export const store = configureStore({
  reducer: cartReducer,
  reducer1: WishlistReducer
})

