import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

import App from "./App";
import "./index.css";
// import { saveState, loadState } from "./slices/localStorage";

// store.subscribe(() => {
//   saveState(store.getState())
// })

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
