import { createSlice } from '@reduxjs/toolkit';
import { toast } from "react-toastify";
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.Id === action.payload.Id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });

        toast.success("Product added to cart", {
            position: "top-right",
          });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.Id === action.payload);
      item.quantity++;
      toast.info("Increased product quantity", {
        position: "bottom-left",
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.Id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
      toast.info("Decreased product quantity", {
        position: "bottom-left",
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.Id !== action.payload);
      state.cart = removeItem;
      toast.error("Product removed from cart", {
        position: "bottom-left",
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});
export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;