import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle"
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
    builder
    .addCase(getProducts.pending, (state, action) => {
       state.status = "loading";
    })
    .addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "idle";
   })
    .addCase(getProducts.rejected, (state, action) => {
      state.status = "error"
    });
  },
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
// export function getProducts() {
//   return async function getProductsThunk(dispatch, getState) {
//     try {
//       const response = await fetch("https://fakestoreapi.com/products");
//       if (!response.ok) {
//         throw new Error("Failed to fetch products");
//       }

//       const result = await response.json();
//       dispatch(fetchProducts(result));
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       // Handle the error or dispatch an action to indicate the error.
//     }
//   };
// }
export const getProducts = createAsyncThunk("products/get", async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const result = data.json();
  return result;
});
