import { useState } from "react";

export const usePagination = (limit) => {
   const [page, setPage] = useState(localStorage.getItem("productsPage") || 1);
   const [paginationAmount] = useState(() => Math.ceil(480 / limit));

   const handlePagination = (page) => {
      localStorage.setItem("productsPage", page);
      setPage(page);
   };

   return [page, handlePagination, paginationAmount];
};
