import cartSlice from "./cartSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  devTools: true,
});
