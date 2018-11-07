import React, { Component } from "react";
import GlobalStyle from "./style";
import Header from "./common/header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <GlobalStyle />
        </div>
      </div>
    );
  }
}

export default App;
