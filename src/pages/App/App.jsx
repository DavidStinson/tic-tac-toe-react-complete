import React, { Component } from "react";
import "./App.css";

import Header from "../../components/common/structure/Header/Header"
import GameBoard from "../../components/App/GameBoard/GameBoard"
import Message from "../../components/App/Message/Message"

class App extends Component {
  state = {
    board: new Array(9).fill(0),
    player: -1,
    winner: 0,
  }
  render() {
    return (
      <div className="App">
        <div className="app-header">
          <Header/>
        </div>
        <div className="app-player-names"></div>
        <GameBoard board={this.state.board}/>
        <Message />
      </div>
    );
  }
}

export default App;
