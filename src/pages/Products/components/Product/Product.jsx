import React from "react";
import { Button, Card } from "react-bootstrap";

import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { STATS } from "../../../../constants";

export const Product = ({ product }) => {
   return (
      <Link to={`${product.id}`} className={"col-md-6 col-xl-2 mb-4"}>
         <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
               <Card.Title>{product.name}</Card.Title>

               <Card.Text>Price: ${product.price}</Card.Text>

               <Card.Text className={classes.stats}>
                  {product.stats.map((stat) => {
                     return (
                        <span key={stat.title}>
                           {STATS[stat.title]}
                           {stat.value}
                        </span>
                     );
                  })}
               </Card.Text>

               <Button
                  onClick={(e) => {
                     e.preventDefault();
                     console.log("click");
                  }}
                  variant="primary"
               >
                  Добавить в корзину
               </Button>
            </Card.Body>
         </Card>
      </Link>
   );
};
