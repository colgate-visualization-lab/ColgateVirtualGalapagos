import React, { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

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

class App extends Component {
	componentDidMount(){
		axios.post('localhost:3000/users/login', {
			"username":"joe", 
			"password": "joe123e"
		}).then(response => console.log(response))
		.catch(error => console.log(error))
	}
	
	render(){
		return (
				<Switch>
					<Suspense fallback={<LoadingScreen />}>
					<Route path="/" exact component={SplashScreen}/>
					<Route path="/authorization" component={SignIn}/>
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

						{/* routes for modules */}
						<Route path="/volcano/:slide_id" exact component={VolcanoModule} />
						<Route path="/iguana/:slide_id" 
							render={(props) => <MainContent {...props} data={iguanaData} route={"iguana"} />} />

							{/* Old Module */}
						<Route path="/oldvolcano" exact component={VolcanoModules} />
					</Layout>
					</Suspense>
				</Switch>
		)
	}
}

export default App
