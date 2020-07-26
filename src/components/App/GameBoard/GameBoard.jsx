import React from "react";
import Cell from "../Cell/Cell";

const GameBoard = (props) => (
  <div className="game-board">
    {props.gameBoard.map((cellOwner) => (
      <Cell cellOwner={cellOwner}/>
    ))}
  </div>
);

export default GameBoard;
