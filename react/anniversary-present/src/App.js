import React, { Component } from "react";
import Auxillary from "./hoc/Auxillary/Auxillary";
import Present from "./containers/Present/Present";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Auxillary>
        <BrowserRouter>
          <Present />
        </BrowserRouter>
      </Auxillary>
    );
  }
}

export default App;
