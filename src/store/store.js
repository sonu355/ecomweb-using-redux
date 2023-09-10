import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cartSlice";
import productSlice from "./productSlice";

const store = configureStore({
   reducer: {
    cart: CartSlice,
    products: productSlice
   } 
})

export default store; 