import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import PokedexApp from "./container/PokedexApp";


ReactDOM.render(
  <Provider store={store}>
    <PokedexApp />
  </Provider>,
  document.getElementById("root")
);
