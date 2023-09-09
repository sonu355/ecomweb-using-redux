import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
   
  },
});

export const { add, remove } = productSlice.actions;
export default productSlice.reducer;
 