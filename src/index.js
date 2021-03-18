import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import {AppContext} from './AppContext'
import axios from 'axios'
import LocalStorage from './utils/localStorage'

axios.defaults.baseURL = 'http://virtualgalapagos.colgate.edu:9000'

const app = (
  <BrowserRouter>
    <AppContext.Provider>
      <App />
    </AppContext.Provider>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
