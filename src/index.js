import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

import App from "./App";
import "./index.css";
import {AppContext} from './AppContext'
import axios from 'axios'
import LocalStorage from './utils/localStorage'

axios.defaults.baseURL = 'http://virtualgalapagos.colgate.edu:9000'

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
