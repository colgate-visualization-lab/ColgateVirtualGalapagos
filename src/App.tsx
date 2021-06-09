import React from "react";
import { Route, Switch } from "react-router-dom";
import chatbot from "./MSCBOT/chatbot";
import NotFoundPage from "./pages/NotFoundPage";
import TestingGround from "./test/TestingGround";

export default function App() {
  return (
    <Switch>
      <Route path="/test" component={TestingGround} />
      <Route path="/chatbot" component={chatbot} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
