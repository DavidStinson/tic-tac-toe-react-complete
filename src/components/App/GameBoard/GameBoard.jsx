import React from "react";
import Cell from "../Cell/Cell";

import "./GameBoard.module.css";

const GameBoard = ({ board }) => (
  <div className="game-board">
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
  </div>
);

export default GameBoard;
