import { createSlice } from "@reduxjs/toolkit";
import { fetchAuthThunk } from "../thunks";

const initialState = {
   isLoading: false,
   errors: null,
   token: localStorage.getItem("token") || null,
   isAuth: localStorage.getItem("token") ? true : false,
};

const authSlice = createSlice({
   name: "authPage",
   initialState,
   reducers: {
      logout: (state) => {
         localStorage.removeItem("token");

         state.isLoading = false;
         state.errors = null;
         state.token = null;
         state.isAuth = false;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchAuthThunk.fulfilled, (state, { payload }) => {
         localStorage.setItem("token", payload.accessToken);

         state.token = payload.accessToken;
         state.isLoading = false;
         state.errors = null;
         state.isAuth = true;
      });
      builder.addCase(fetchAuthThunk.pending, (state) => {
         state.isLoading = true;
         state.errors = null;
      });
      builder.addCase(fetchAuthThunk.rejected, (state, action) => {
         state.isLoading = false;
         state.errors = action.payload.message;
      });
   },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
