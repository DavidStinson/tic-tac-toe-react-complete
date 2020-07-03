import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <header className="header">
      {" "}
      <p>
        tic-
        <span role="img" aria-label="emoji of a thumb tac">
          📌
        </span>
        -toe
      </p>
    </header>
  );
};

export default Header;
