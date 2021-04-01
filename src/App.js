import React, { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import Layout from "./containers/Layout/Layout";
import SignIn from "./containers/Authorization/SignIn";
import SignUp from "./containers/Authorization/SignUp"
import LoadingScreen from "./containers/LoadingScreen/LoadingScreen";
import {
  MapFernadina,
  MapIsabela,
  MapPinzon,
  MapFloreana,
  MapEspanola,
} from "./assets/Homepage";
// import MapFernandina from "https://virtualgalapagos.colgate.edu/assets/homepage/MapFernandina.png"
// import MapIsabela from "https://virtualgalapagos.colgate.edu/assets/homepage/homepage.png"
// import MapPinzon from "https://virtualgalapagos.colgate.edu/assets/homepage/MapPinzon.png"
// import MapFloreana from "https://virtualgalapagos.colgate.edu/assets/homepage/MapFloreana.png"
// import MapEspanola from "https://virtualgalapagos.colgate.edu/assets/homepage/MapEspanola.png"
import Homepage from "./containers/Homepage/Homepage";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import Gallery from "./containers/Gallery/Gallery";
import ModuleNav from "./components/ModuleNav/ModuleNav";
import VolcanoLayout from "./containers/VolcanoLayout/VolcanoLayout";
// import IguanaModule from "./components/IguanaModule/IguanaModule";
import ExtraSelect from "./components/ExtraSelect/ExtraSelect";
// New volcano Module
import VolcanoSlides from "./components/VolcanoSlides/VolcanoSlides";
import theme from "./theme/Theme";
import Test from "./containers/Test/Test"
import NewNote from "./containers/Backpack/Fieldbook/Note/NewNote"
import Fieldbook from "./containers/Backpack/Fieldbook/Fieldbook"
import Settings from "./components/Settings/Settings"
import ModuleContainer from "./containers/MainContent";
import data from "./components/IguanaData/IguanaData.js";
import volcanodata from "./components/VolcanoData/VolcanoData.js"

const VolcanoModule = lazy(() =>
  import("./containers/VolcanoModule/VolcanoModule")
);

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Switch>
          <Suspense fallback={<LoadingScreen />}>
            <Route path="/" exact component={SplashScreen} />
            <Route path="/authorization" component={SignIn} />
            <Layout>
              {" "}
              {/*Layout sets up navbar and the main tag that takes up the rest of the screen */}
              <Route
                path="/home"
                render={(props) => (
                  <Homepage {...props} lockValue={1} MapImg={MapIsabela} />
                )}
              />
              <Route
                path="/home2"
                render={(props) => (
                  <Homepage {...props} lockValue={2} MapImg={MapFernandina} />
                )}
              />
              <Route
                path="/home3"
                render={(props) => (
                  <Homepage {...props} lockValue={3} MapImg={MapFloreana} />
                )}
              />
              <Route
                path="/home4"
                render={(props) => (
                  <Homepage {...props} lockValue={4} MapImg={MapEspanola} />
                )}
              />
              <Route
                path="/home5"
                render={(props) => (
                  <Homepage {...props} lockValue={5} MapImg={MapPinzon} />
                )}
              />{" "}
              {/* Each "home" unlocks new mystery */}
              <Route path="/isabella" exact component={ModuleNav} />
              <Route path="/volcanomod" exact component={VolcanoModule} />
              <Route path="/gallery" exact component={Gallery} />
              <Route path="/volcanolayout" exact component={VolcanoLayout} />
              {/* <Route path="/iguana" exact component={IguanaModule} /> */}
              <Route path="/extras" exact component={ExtraSelect} />
              {/* route for iguana module slides */}
			        <Route path="/oldvolcano/:id" exact 
                render={(props) => <Test {...props}  />}
              />

              <Route path="/iguana/:slide_id"  exact 
                render={(props) => <ModuleContainer {...props} module={"iguana"} data={data} />}
              />
              <Route path="/volcano/:slide_id"  exact 
                render={(props) => <ModuleContainer {...props} module={"volcano"} data={volcanodata} />}
              />
              
              {/* path="/iguana/:slide_id" component={ModuleContainer} /> */}
   
			  <Route path="/fieldbook" component={Fieldbook} />
			  <Route path="/settings" component={Settings}/>
			  <Route path="/authorization" component={SignIn}/>
			  <Route path="/signup" component={SignUp}/>
			  <Route path="/newnote" component={NewNote}/>
			  <Route path="/note/:id" />
            </Layout>
          </Suspense>
        </Switch>
      </ThemeProvider>
    );
  }
}

export default App;