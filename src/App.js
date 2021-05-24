import React, { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import Layout from "./components/Layout";
import SignIn from "./pages/Authorization/SignIn";
import SignUp from "./pages/Authorization/SignUp";
import LoadingScreen from "./components/LoadingScreen";
import Homepage from "./pages/Homepage";
import Islands from "./pages/Islands";
import SplashScreen from "./pages/SplashScreen";
import Gallery from "./pages/Gallery";
// import ModuleNav from "./components/ModuleNav/ModuleNav";
import ModuleNav from "./pages/ModuleNavAlternate";
import ExtraSelect from "./pages/ExtraSelect";
// import VolcanoSlides from "./pages/Mysteries/Volcano/VolcanoSlides";
import Test from "./pages/Mysteries/Volcano/Test";
import NewNote from "./pages/Backpack/Fieldbook/Note/NewNote";
import Fieldbook from "./pages/Backpack/Fieldbook/Fieldbook";
import Settings from "./pages/Backpack/Settings";
import ModuleContainer from "./components/ModuleContainer";
import volcanodata from "./assets/volcano-data";
import * as maps from "./assets/homepage-assets";
import iguanadata from "./assets/iguana-data";
import theme from "./theme";

// const VolcanoModule = lazy(() =>
//   import("./containers/VolcanoModule/VolcanoModule")
// );

const mapImages = [
  maps.MapIsabela,
  maps.MapFernandina,
  maps.MapFloreana,
  maps.MapEspanola,
  maps.MapPinzon,
];

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Switch>
          <Suspense fallback={<LoadingScreen />}>
            <Route path="/" exact component={SplashScreen} />
            <Layout>
              {/*Layout sets up navbar and the main tag that takes up the rest of the screen */}
              <Route path="/islands" component={Islands} />
              <Route path="/home" exact component={SplashScreen} />
              {/* {mapImages.map((mapImage, index) => (
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
              ))} */}
              {/* Each "home" unlocks new mystery */}
              <Route path="/isabela" exact component={ModuleNav} />
              <Route path="/gallery" exact component={Gallery} />
              <Route path="/extras" exact component={ExtraSelect} />
              {/* route for iguana module slides */}
              <Route
                path="/oldvolcano/:id"
                exact
                render={(props) => <Test {...props} />}
              />
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
