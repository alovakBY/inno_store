import React from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { Login, Products, Product } from "../pages";
import { ROUTE_NAMES } from "../constants";

export const Router = () => {
   return (
      <Routes>
         <Route path={ROUTE_NAMES.HOME} element={<Login />} />
         <Route path={ROUTE_NAMES.LOGIN} element={<Login />} />

         <Route element={<PrivateRoute />}>
            <Route path={ROUTE_NAMES.PRODUCTS} element={<Products />} />
            <Route path={ROUTE_NAMES.PRODUCT} element={<Product />} />
         </Route>
      </Routes>
   );
};
