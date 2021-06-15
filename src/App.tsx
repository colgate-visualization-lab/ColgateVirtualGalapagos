

import React, { useEffect, Suspense, lazy, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { AnimationVideo } from "./atomic-design/atoms";
import Loading from "./pages/Loading";

const Chatbot = lazy(() => import("./pages/Chatbot"));
const CharacterSelect = lazy(() => import("./pages/CharacterSelect"));
const Home = lazy(() => import("./pages/Home"));
const Introduction = lazy(() => import("./pages/Introduction"));
const MainMenu = lazy(() => import("./pages/MainMenu"));
const Mysteries = lazy(() => import("./pages/Mysteries"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const Tutorial = lazy(() => import("./pages/Tutorial"));
const TestingGround = lazy(() => import("./test/TestingGround"));
const WelcomeMenu = lazy(() => import("./pages/WelcomeMenu"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const boobyAnimation = "/booby_transition.mp4";

export default function App() {
  const [showAnimation, setShowAnimation] = useState<string>();
  const [nextPath, setNextPath] = useState<string>();
  const history = useHistory();
  const transitionTo = (path: string) => {
    setShowAnimation(path);
  };

  useEffect(() => {
    if (nextPath) {
      history.push(nextPath);
    }
  }, [nextPath]);

  return (
    <Suspense fallback={<Loading />}>
      {showAnimation && (
        <AnimationVideo
          onPlay={() => setNextPath(showAnimation)}
          onEnded={() => {
            setShowAnimation(undefined);
            setNextPath(undefined);
          }}
          className="fixed z-50 left-0 top-0 opacity-90 transform scale-150"
          autoPlay
          muted
          playbackRate={3}
          src={boobyAnimation}
        />
      )}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/menu"
          exact
          render={() => <WelcomeMenu transitionTo={transitionTo} />}
        />
        <Route path="/main_menu" exact component={MainMenu} />
        <Route path="/login" exact component={Login} />
        <Route path="/sign_up" exact component={SignUp} />
        <Route path="/continue_as_guest" exact component={CharacterSelect} />
        <Route path="/test" component={TestingGround} />
        <Route path="/chatbot" component={Chatbot} />
        <Route path="/character_select" component={CharacterSelect} />
        <Route path="/tutorial" component={Tutorial} />
        <Route path="/mysteries" component={Mysteries} />
        <Route path="/introduction" component={Introduction} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
}
