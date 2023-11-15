import React, { useEffect } from "react";
import { getProductsThunk } from "./thunks";
import { Pagination, Product } from "./components";
import { productsPageSelector } from "./selectors";
import { Loader } from "../../components/Loader";
import { usePagination } from "../../hooks/usePagination";
import { useDispatch, useSelector } from "react-redux";

export const Products = () => {
   const dispatch = useDispatch();

   const { isLoading, errors, products } = useSelector(productsPageSelector);

   const [page, setPage, amount] = usePagination(24);

   useEffect(() => {
      dispatch(getProductsThunk({ page, limit: 24 }));
   }, [dispatch, page]);

   if (errors) {
      console.log(errors);
   }

   return (
      <>
         <Pagination page={page} setPage={setPage} amount={amount} />

         <div className="row p-4 h-100">
            {isLoading ? (
               <Loader />
            ) : (
               products.map((product) => {
                  return <Product key={product.id} product={product} />;
               })
            )}
         </div>
      </>
   );
};
