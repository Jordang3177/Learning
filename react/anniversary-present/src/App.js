import React, { Component } from "react";
import Aux from "./hoc/Aux/Aux";
import Present from "./containers/Present/Present";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Aux>
        <BrowserRouter>
          <Present />
        </BrowserRouter>
      </Aux>
    );
  }
}

export default App;
