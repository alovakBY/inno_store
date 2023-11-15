import { createAsyncThunk } from "@reduxjs/toolkit";

import ProductsService from "../../../services/ProductsService";

export const getProductsThunk = createAsyncThunk(
   "products/getProducts",
   async ({ page, limit }, { rejectWithValue }) => {
      try {
         const response = await ProductsService.getProducts({ page, limit });

         return response.data;
      } catch (e) {
         return rejectWithValue(e.response.data);
      }
   }
);
