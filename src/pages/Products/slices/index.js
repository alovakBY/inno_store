import { createSlice } from "@reduxjs/toolkit";
import { getProductsThunk } from "../thunks";

const initialState = {
   isLoading: false,
   errors: null,
   products: [],
};

const productsSlice = createSlice({
   name: "productsPage",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getProductsThunk.fulfilled, (state, { payload }) => {
         state.products = payload;
         state.isLoading = false;
         state.errors = null;
      });
      builder.addCase(getProductsThunk.pending, (state) => {
         state.isLoading = true;
         state.errors = null;
      });
      builder.addCase(getProductsThunk.rejected, (state, action) => {
         state.isLoading = false;
         state.errors = action.payload.message;
      });
   },
});

export default productsSlice.reducer;
