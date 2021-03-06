import React, { Component } from "react";
import { Provider } from "react-redux";
import GlobalStyle from "./style";
import Header from "./common/header";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <div>
            <GlobalStyle />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
