import { createSlice } from "@reduxjs/toolkit";

const whisData = JSON.parse(localStorage.getItem("wishlist"));
const initialState = {
  items: Array.isArray(whisData) ? whisData : [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItemToWishlist: (state, action) => {
      state.items.push(action.payload);
    },
    removeItemFromWishlist: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItemToWishlist, removeItemFromWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
