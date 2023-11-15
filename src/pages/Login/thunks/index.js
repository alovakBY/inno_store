import { createAsyncThunk } from "@reduxjs/toolkit";

import AuthService from "../../../services/AuthService";

export const fetchAuthThunk = createAsyncThunk(
   "auth/fetchAuth",
   async (values, { rejectWithValue }) => {
      try {
         const response = await AuthService.login(values);

         return response.data;
      } catch (e) {
         return rejectWithValue(e.response.data);
      }
   }
);
