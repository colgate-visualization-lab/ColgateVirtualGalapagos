import React, {Component, Suspense, lazy} from "react"
import {Route, Switch} from "react-router-dom"
import axios from 'axios'

import Layout from "./containers/Layout/Layout"
import SignIn from "./containers/SignIn/SignIn"
import LoadingScreen from "./containers/LoadingScreen/LoadingScreen"
import MapFernandina from "./assets/images/homepage/MapFernandina.png"
import MapIsabela from "./assets/images/homepage/homepage.png"
import MapPinzon from "./assets/images/homepage/MapPinzon.png"
import MapFloreana from "./assets/images/homepage/MapFloreana.png"
import MapEspanola from "./assets/images/homepage/MapEspanola.png"
import Homepage from "./containers/Homepage/Homepage"
import SplashScreen from "./components/SplashScreen/SplashScreen"
import Gallery from "./containers/Gallery/Gallery"
import ModuleNav from "./components/ModuleNav/ModuleNav"
import VolcanoLayout from "./containers/VolcanoLayout/VolcanoLayout"

const VolcanoModule = lazy(() => import("./containers/VolcanoModule/VolcanoModule"))

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
					<Layout>
						<Route path="/home" 
							render={(props) => <Homepage {...props} lockValue={1} MapImg={MapIsabela} />}/>
						<Route path="/home2" 
							render={(props) => <Homepage {...props} lockValue={2} MapImg={MapFernandina} />}/>
						<Route path="/home3" 
							render={(props) => <Homepage {...props} lockValue={3} MapImg={MapFloreana} />}/>
						<Route path="/home4" 
							render={(props) => <Homepage {...props} lockValue={4} MapImg={MapEspanola} />}/>
						<Route path="/home5" 
							render={(props) => <Homepage {...props} lockValue={5} MapImg={MapPinzon} />}/>
						<Route path="/isabella" exact component={ModuleNav}/>
						<Route path="/volcanomod" exact component={VolcanoModule}/>
						<Route path="/gallery" exact component={Gallery}/>
						<Route path="/volcanolayout" exact component={VolcanoLayout}/>
					</Layout>
					</Suspense>
				</Switch>
		)
	}
}

export default App
