import React from "react";
import BPagination from "react-bootstrap/Pagination";

export const Pagination = ({ page, setPage, amount }) => {
   let items = [];

   for (let number = 1; number <= amount; number++) {
      items.push(
         <BPagination.Item
            key={number}
            active={number === +page}
            onClick={() => setPage(number)}
         >
            {number}
         </BPagination.Item>
      );
   }
   return <BPagination className="justify-content-center">{items}</BPagination>;
};
