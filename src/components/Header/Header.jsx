import React from "react";

import styles from "./Header.module.css";

export const Header = ({ children }) => {
   return (
      <div className={styles.header}>
         <div className={styles.logo}>LOGO</div>

         {children}
      </div>
   );
};
