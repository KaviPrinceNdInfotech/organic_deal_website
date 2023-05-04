import { createSlice } from '@reduxjs/toolkit';
import { toast } from "react-toastify";
const WishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        wishlist: localStorage.getItem("wishlist")
            ? JSON.parse(localStorage.getItem("wishlist"))
            : [],
    },
    reducers: {
        
        addTowishList: (state, action) => {
            const itemInCart = state.wishlist.find((item) => item.Id === action.payload.Id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.wishlist.push({ ...action.payload, quantity: 1 });
                toast.success("Product added to wishlist", {
                    position: "top-right",
                });
            }
            localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
        },
        removeItem1: (state, action) => {
            const removeItem1 = state.wishlist.filter((item) => item.Id !== action.payload);
            state.wishlist = removeItem1;
            toast.error("Product removed from wishlist", {
                position: "bottom-left",
            });
            localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
        },
    },
});

export const WishlistReducer = WishlistSlice.reducer;
export const {
    addTowishList,

    removeItem1
} = WishlistSlice.actions;