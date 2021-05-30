import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Switch>
      <Route component={NotFoundPage} />
    </Switch>
  );
}
