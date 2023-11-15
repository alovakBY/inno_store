import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { MainLayout } from "../components";
import { ROUTE_NAMES } from "../constants";
import { authPageSelector } from "../pages/Login/selectors";
import { useSelector } from "react-redux";

export const PrivateRoute = () => {
   const { isAuth } = useSelector(authPageSelector);

   return isAuth ? (
      <MainLayout>
         <Outlet />
      </MainLayout>
   ) : (
      <Navigate to={ROUTE_NAMES.LOGIN} />
   );
};
