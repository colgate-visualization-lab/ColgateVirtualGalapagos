import React, { Component, Fragment } from "react"
import NavBar from "../../components/Navigation/NavBar/NavBar"
import Modal from "../../components/UI/Modal/Modal"
import Backpack from "../Backpack/Backpack"
//import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo.js"

class Layout extends Component {

	render(){
		return (
			<Fragment>
				<NavBar />
				<main style={{height: "100vh", overflow: "hidden", position: "relative"}}>
					{/* <BackgroundVideo /> */}
					{this.props.children}
					<Modal>
						<Backpack />
					</Modal>
				</main>
			</Fragment>
		)
	}
}

export default Layout