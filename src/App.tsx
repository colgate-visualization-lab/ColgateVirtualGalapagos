import React from "react";
import { Route, Switch } from "react-router-dom";
import chatbot from "./MSCBOT/chatbot";
import CharacterSelect from "./pages/CharacterSelect";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import MainMenu from "./pages/MainMenu";
import Mysteries from "./pages/Mysteries";
import NotFoundPage from "./pages/NotFoundPage";
import Tutorial from "./pages/Tutorial";
import TestingGround from "./test/TestingGround";
import WelcomeMenu from "./pages/WelcomeMenu";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/menu" exact component={WelcomeMenu} />
      <Route path="/main_menu" exact component={MainMenu} />
      <Route path="/login" exact component={Login} />
      <Route path="/sign_up" exact component={SignUp} />
      <Route path="/continue_as_guest" exact component={CharacterSelect} />
      <Route path="/test" component={TestingGround} />
      <Route path="/chatbot" component={chatbot} />
      <Route path="/character_select" component={CharacterSelect} />
      <Route path="/tutorial" component={Tutorial} />
      <Route path="/mysteries" component={Mysteries} />
      <Route path="/introduction" component={Introduction} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
