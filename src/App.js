import React, { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./containers/Layout/Layout"
import SignIn from "./containers/SignIn/SignIn"
import LoadingScreen from "./containers/LoadingScreen/LoadingScreen"
import {MapFernadina, MapIsabela, MapPinzon, MapFloreana, MapEspanola} from "./assets/Homepage"
import Homepage from "./containers/Homepage/Homepage"
import SplashScreen from "./components/SplashScreen/SplashScreen"
import Gallery from "./containers/Gallery/Gallery"
import ModuleNav from "./components/ModuleNav/ModuleNav"
import VolcanoLayout from "./containers/VolcanoLayout/VolcanoLayout"
// import IguanaModule from "./components/IguanaModule/IguanaModule"
import ExtraSelect from "./components/ExtraSelect/ExtraSelect"
// New volcano Module
import VolcanoModule from "./components/VolcanoModule/VolcanoModule"

const VolcanoModules = lazy(() => import("./containers/VolcanoModule/VolcanoModule"))

// import all the data for each module and ModuleLayout component
import MainContent from "./containers/MainContent/MainContent"
import iguanaData from "./components/IguanaData/IguanaData.js";
import volcanoData from "./components/VolcanoData/VolcanoData.js";
import Fieldbook from "./containers/Backpack/Fieldbook/Fieldbook";
import NewNote from "./containers/Backpack/Fieldbook/Note/NewNote"
import SignUp from "./containers/Authorization/SignUp"

class App extends Component {
	render(){
		return (
				<Switch>
					<Suspense fallback={<LoadingScreen />}>
					<Route path="/" exact component={SplashScreen}/>
					<Layout> {/*Layout sets up navbar and the main tag that takes up the rest of the screen */}
						<Route path="/home" 
							render={(props) => <Homepage {...props} lockValue={1} MapImg={MapIsabela} />}/>
						<Route path="/home2" 
							render={(props) => <Homepage {...props} lockValue={2} MapImg={MapFernandina} />}/>
						<Route path="/home3" 
							render={(props) => <Homepage {...props} lockValue={3} MapImg={MapFloreana} />}/>
						<Route path="/home4" 
							render={(props) => <Homepage {...props} lockValue={4} MapImg={MapEspanola} />}/>
						<Route path="/home5" 
							render={(props) => <Homepage {...props} lockValue={5} MapImg={MapPinzon} />}/> {/* Each "home" unlocks new mystery */}
						<Route path="/isabella" exact component={ModuleNav}/>
						<Route path="/volcanomod" exact component={VolcanoModule}/>
						<Route path="/gallery" exact component={Gallery}/>
						<Route path="/volcanolayout" exact component={VolcanoLayout}/>
						<Route path="/extras" exact component={ExtraSelect}/>
            			<Route path="/fieldbook" exact component={Fieldbook} />
						{/* routes for modules */}
						<Route path="/volcano/:slide_id" exact component={VolcanoModule} />
						<Route path="/iguana/:slide_id" 
							render={(props) => <MainContent {...props} data={iguanaData} route={"iguana"} />} />

							{/* Old Module */}
						<Route path="/oldvolcano" exact component={VolcanoModules} />
						<Route path="/newnote" component={NewNote}/>
						<Route path="/note/:id" />
					</Layout>
					<Route path="/authorization" component={SignIn}/>
					<Route path="/signup" component={SignUp}/>
					</Suspense>
				</Switch>
		)
	}
}

export default App
