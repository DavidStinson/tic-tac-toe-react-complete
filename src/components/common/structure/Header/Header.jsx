import React from "react";

import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>
        tic-
        <span role="img" aria-label="thumb tac emoji">
          📌
        </span>
        -toe
      </h1>
      <h2 className={styles.subhead}>tic-tac-toe with emoji office supplies</h2>
    </header>
  );
};

export default Header;
