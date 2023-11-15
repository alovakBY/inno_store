import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductThunk } from "./thunks";
import { productPageSelector } from "./selectors";
import { Loader } from "../../components/Loader";
import { Accordion, Col, Row } from "react-bootstrap";

import styles from "./Product.module.css";
import { STATS } from "../../constants";
import { AbilityItem } from "./components";

export const Product = () => {
   const { productId } = useParams();
   const { isLoading, errors, product } = useSelector(productPageSelector);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getProductThunk(productId));
   }, [dispatch, productId]);

   if (isLoading) {
      return <Loader />;
   }

   if (!product) {
      return null;
   }

   if (errors) {
      console.log(errors);
   }

   return (
      <div>
         <Row className="mb-5">
            <Col className="d-flex align-items-center justify-content-center">
               <div className={styles.imgContainer}>
                  <img src={product.image} alt="product" />
               </div>
            </Col>

            <Col className={styles.statsContainer}>
               {product.stats.map((stat) => {
                  return (
                     <div className={styles.stat} key={stat.title}>
                        {STATS[stat.title]}
                        {stat.value}
                     </div>
                  );
               })}
            </Col>
         </Row>

         <Row>
            <div className="col-3"></div>
            <Col>
               <Accordion>
                  {product.abilities.map((ability) => (
                     <AbilityItem key={ability.title} ability={ability} />
                  ))}
               </Accordion>
            </Col>
            <div className="col-3"></div>
         </Row>
      </div>
   );
};
