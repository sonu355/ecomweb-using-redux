import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // fetchProducts(state, action) {
    //   state.data = action.payload;
    // },

  },
  extraReducers: (builder) => {
     
  }
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

// export function getProducts() {
//   return async function getProductsThunk(dispatch, getState) {
//     const data = await fetch("https://fakestoreapi.com/products");
//     const result = data.json();
//     dispatch(fetchProducts(result));
//   };
// }
export function getProducts() {
  return async function getProductsThunk(dispatch, getState) {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const result = await response.json();
      dispatch(fetchProducts(result));
    } catch (error) {
      console.error("Error fetching products:", error);
      // Handle the error or dispatch an action to indicate the error.
    }
  };
}
