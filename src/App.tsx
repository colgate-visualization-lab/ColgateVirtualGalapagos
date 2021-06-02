import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import TestingGround from "./pages/TestingGround";

export default function App() {
  return (
    <Switch>
      <Route path="/test" component={TestingGround} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
