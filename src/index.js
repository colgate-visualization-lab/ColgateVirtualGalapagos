import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import {AppContext} from './AppContext'
import axios from 'axios'
import LocalStorage from './utils/localStorage'

const authToken = LocalStorage.getToken()
axios.defaults.baseURL = 'http://virtualgalapagos.colgate.edu:9000'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + authToken

const app = (
  <BrowserRouter>
    <AppContext.Provider>
      <App />
    </AppContext.Provider>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
