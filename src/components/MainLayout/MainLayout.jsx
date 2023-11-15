import React from "react";

import "./MainLayout.css";
import { Header, Footer } from "../";
import { Outlet, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../pages/Login/slices";

export const MainLayout = () => {
   const dispatch = useDispatch();

   const handleLogout = () => {
      dispatch(logout());
   };

   return (
      <>
         <Header>
            <div className="nav">
               <Link to="/products">Products</Link>
            </div>

            <button onClick={handleLogout}>Выйти</button>
         </Header>

         <div className="content">
            <Outlet />
         </div>

         <Footer />
      </>
   );
};
