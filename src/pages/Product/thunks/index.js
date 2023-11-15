import { createAsyncThunk } from "@reduxjs/toolkit";

import ProductsService from "../../../services/ProductsService";

export const getProductThunk = createAsyncThunk(
   "product/getProduct",
   async (getProduct, { rejectWithValue }) => {
      try {
         const response = await ProductsService.getProduct(getProduct);

         return response.data;
      } catch (e) {
         return rejectWithValue(e.response.data);
      }
   }
);
