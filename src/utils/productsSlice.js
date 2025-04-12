import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    // Set the full product list (from API or reset)
    setProducts: (state, action) => {
      return action.payload;
    },

    // Add or edit a single product
    updateProducts: (state, action) => {
      const updatedProduct = action.payload;
      const index = state.findIndex((p) => p.id === updatedProduct.id);

      if (index !== -1) {
        // Product exists, update it
        state[index] = updatedProduct;
      } else {
        // Product doesn't exist, add it
        state.push(updatedProduct);
      }
    },

    // Remove a product by ID
    removeProducts: (state, action) => {
      const idToRemove = action.payload;
      return state.filter((p) => p.id !== idToRemove);
    },
  },
});

export const { setProducts, updateProducts, removeProducts } =
  productsSlice.actions;
export default productsSlice.reducer;
