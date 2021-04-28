import React, { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import Layout from "./containers/Layout/Layout";
import SignIn from "./pages/Authorization/SignIn";
import SignUp from "./pages/Authorization/SignUp";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import {
  MapFernandina,
  MapIsabela,
  MapPinzon,
  MapFloreana,
  MapEspanola,
} from "./assets/Homepage";
import Homepage from "./pages/Homepage";
import SplashScreen from "./pages/SplashScreen/SplashScreen";
import Gallery from "./pages/Gallery/Gallery";
// import ModuleNav from "./components/ModuleNav/ModuleNav";
import ModuleNav from "./pages/ModuleNavAlternate";
import ExtraSelect from "./pages/ExtraSelect/ExtraSelect";
import VolcanoSlides from "./components/VolcanoSlides/VolcanoSlides";
import theme from "./theme/Theme";
import Test from "./containers/Test/Test";
import NewNote from "./pages/Backpack/Fieldbook/Note/NewNote";
import Fieldbook from "./pages/Backpack/Fieldbook/Fieldbook";
import Settings from "./pages/Backpack/Settings";
import ModuleContainer from "./components/ModuleContainer";
import iguanadata from "./assets/IguanaData/";
import volcanodata from "./components/VolcanoData/VolcanoData.js";

const VolcanoModule = lazy(() =>
  import("./containers/VolcanoModule/VolcanoModule")
);

const mapImages = [
  MapIsabela,
  MapFernandina,
  MapFloreana,
  MapEspanola,
  MapPinzon,
];

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Switch>
          <Suspense fallback={<LoadingScreen />}>
            <Route path="/" exact component={SplashScreen} />
            <Route path="/authorization" component={SignIn} />
            <Layout>
              {/*Layout sets up navbar and the main tag that takes up the rest of the screen */}
              {mapImages.map((mapImage, index) => (
                <Route
                  key={index}
                  path={`/home${index > 0 ? index + 1 : ""}`}
                  render={(props) => (
                    <Homepage
                      {...props}
                      lockValue={index + 1}
                      mapImage={mapImage}
                    />
                  )}
                />
              ))}
              {/* Each "home" unlocks new mystery */}
              <Route path="/isabella" exact component={ModuleNav} />
              <Route path="/volcanomod" exact component={VolcanoModule} />
              <Route path="/gallery" exact component={Gallery} />

              {/* <Route path="/iguana" exact component={IguanaModule} /> */}
              <Route path="/extras" exact component={ExtraSelect} />
              {/* route for iguana module slides */}
              <Route
                path="/oldvolcano/:id"
                exact
                render={(props) => <Test {...props} />}
              />
              {/* <Route
                path="/:moduleName/:slideId"
                exact
                render={(props) => <ModuleContainer {...props} />}
              /> */}
              <Route
                path="/iguana/:slide_id"
                exact
                render={(props) => (
                  <ModuleContainer
                    {...props}
                    module={"iguana"}
                    data={iguanadata}
                  />
                )}
              />
              {/* <Route
                path="/iguana/:slide_id"
                exact
                render={(props) => (
                  <ModuleContainer
                    {...props}
                    module={"iguana"}
                    data={volcanodata}
                  />
                )}
              /> */}
              <Route
                path="/volcano/:slide_id"
                exact
                render={(props) => (
                  <ModuleContainer
                    {...props}
                    module={"volcano"}
                    data={volcanodata}
                  />
                )}
              />
              {/* path="/iguana/:slide_id" component={ModuleContainer} /> */}
              <Route path="/fieldbook" component={Fieldbook} />
              <Route path="/settings" component={Settings} />
              <Route path="/authorization" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/newnote" component={NewNote} />
              <Route path="/note/:id" />
            </Layout>
          </Suspense>
        </Switch>
      </ThemeProvider>
    );
  }
}

export default App;
