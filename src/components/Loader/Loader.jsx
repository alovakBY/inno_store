import React from "react";

import classes from "./Loader.module.css";
import { Spinner } from "react-bootstrap";

export const Loader = () => {
   return (
      <div className={classes.loader}>
         <Spinner animation="border" role="status" />
      </div>
   );
};
