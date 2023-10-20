import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishlist: wishlistSlice,
  },
  devTools: true,
});
