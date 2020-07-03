import React, { Component } from "react";
import "./App.css";

import Header from "../components/common/Header/Header"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-header">
          <Header className="app-header" />
        </div>
      </div>
    );
  }
}

export default App;
