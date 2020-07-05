import React, { Component } from "react";
import "./App.css";

import Header from "./components/common/structure/Header/Header"
import GameBoard from "./components/App/GameBoard/GameBoard"
import Message from "./components/App/Message/Message"
import TextInputPlayerOne from "./components/App/TextInputPlayerOne/TextInputPlayerOne"
import TextInputPlayerTwo from "./components/App/TextInputPlayerTwo/TextInputPlayerTwo"
import StartGameButton from "./components/App/StartGameButton/StartGameButton"

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

class App extends Component {
  state = {
    gameBoard: [],
    player: -1,
    winner: 0,
    playerOne: "thumb tack",
    playerTwo: "paper clip"
  }

  winner = 0;

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <Header/>
        </div>
        <div className="app-player-names">
          <TextInputPlayerOne />
          <TextInputPlayerTwo />
        </div>
        <GameBoard />
        <Message />
        <StartGameButton />
      </div>
    );
  }
}

export default App;
