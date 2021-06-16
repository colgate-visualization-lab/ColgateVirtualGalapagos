import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthContextProvider from "./contexts/AuthContext";
import NotificationContextProvider from "./contexts/NotificationContext";
import TransitionContextProvider from "./contexts/TransitionContext";
import "./index.css";

const app = (
  <BrowserRouter>
    <AuthContextProvider>
      <NotificationContextProvider>
        <TransitionContextProvider>
          <App />
        </TransitionContextProvider>
      </NotificationContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
