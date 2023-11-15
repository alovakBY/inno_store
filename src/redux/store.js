import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../pages/Login/slices";
import productsReducer from "../pages/Products/slices";
import productReducer from "../pages/Product/slices";

export default configureStore({
   reducer: {
      authPage: authReducer,
      productsPage: productsReducer,
      productPage: productReducer,
   },
});
