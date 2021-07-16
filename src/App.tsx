import React, { useEffect, Suspense, lazy, useState } from "react";
import ReactHowler from "react-howler";
import { Route, Switch, useHistory } from "react-router-dom";
import { AnimationVideo } from "./atomic-design/atoms";
import { useSettingsContext } from "./contexts/SettingsContext";
import { useTransitionContext } from "./contexts/TransitionContext";
import Loading from "./pages/Loading";
import Settings from "./pages/Settings";
import DrawingPanel from "./test/DrawingPanel";

const Chatbot = lazy(() => import("./pages/Chatbot"));
const CharacterSelect = lazy(() => import("./pages/CharacterSelect"));
const Home = lazy(() => import("./pages/Home"));
const Introduction = lazy(() => import("./pages/Introduction"));
const MainMenu = lazy(() => import("./pages/MainMenu"));
const Mysteries = lazy(() => import("./pages/Mysteries"));

const IsabelaIntro = lazy(() => import("./pages/isabela/IsabelaIntro"));
const IsabelaVolcano = lazy(() => import("./pages/isabela/Volcano"));

const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const Tutorial = lazy(() => import("./pages/Tutorial"));
const TestingGround = lazy(() => import("./test/TestingGround"));
const WelcomeMenu = lazy(() => import("./pages/WelcomeMenu"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const BackpackTesting = lazy(() => import("./pages/BackpackTesting"));

export default function App() {
  const { isTransitioning, to, stopTransition, src } = useTransitionContext();
  const [transitionClasses, setTransitionClasses] = useState([
    "fixed",
    "z-50",
    "left-0",
    "top-0",
  ]);
  const [nextPath, setNextPath] = useState<string>();
  const history = useHistory();

  useEffect(() => {
    if (nextPath) {
      history.push(nextPath);
    }
  }, [nextPath]);

  return (
    <Suspense fallback={<Loading />}>
      {isTransitioning && (
        <AnimationVideo
          onPlay={() => setNextPath(to)}
          onEnded={() => {
            setTransitionClasses((c) => [...c, "animate-fade-out"]);
          }}
          onAnimationEnd={() => {
            stopTransition();
            setNextPath(undefined);
            setTransitionClasses((c) => c.slice(0, c.length - 1));
          }}
          className={transitionClasses.join(" ")}
          autoPlay
          muted
          playbackRate={4}
          src={src}
        />
      )}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" component={WelcomeMenu} />
        <Route path="/main_menu" exact component={MainMenu} />
        <Route path="/login" exact component={Login} />
        <Route path="/sign_up" exact component={SignUp} />
        <Route path="/continue_as_guest" exact component={CharacterSelect} />
        <Route path="/test" component={TestingGround} />
        <Route path="/chatbot" component={Chatbot} />
        <Route path="/character_select" component={CharacterSelect} />
        <Route path="/tutorial" component={Tutorial} />

        <Route
          exact
          path="/mysteries/isabela/volcano"
          component={IsabelaVolcano}
        />
        <Route exact path="/mysteries/isabela" component={IsabelaIntro} />
        <Route exact path="/mysteries" component={Mysteries} />

        <Route path="/introduction" component={Introduction} />
        <Route path="/backpacktesting" component={BackpackTesting} />
        <Route path="/drawing" component={DrawingPanel} />
        <Route path="/settings" component={Settings} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
}
