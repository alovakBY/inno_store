import { createSlice } from "@reduxjs/toolkit";
import { getProductThunk } from "../thunks";

const initialState = {
   isLoading: false,
   errors: null,
   product: null,
};

const productSlice = createSlice({
   name: "productPage",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getProductThunk.fulfilled, (state, { payload }) => {
         state.product = payload;
         state.isLoading = false;
         state.errors = null;
      });
      builder.addCase(getProductThunk.pending, (state) => {
         state.isLoading = true;
         state.errors = null;
      });
      builder.addCase(getProductThunk.rejected, (state, action) => {
         state.isLoading = false;
         state.errors = action.payload.message;
      });
   },
});

export default productSlice.reducer;
