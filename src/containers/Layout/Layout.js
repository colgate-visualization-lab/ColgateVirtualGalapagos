import React, { Component, Fragment } from "react";
import NavBar from "../../components/Navigation/NavBar/NavBar";
import Modal from "../../components/UI/Modal/Modal";
import Backpack from "../Backpack/Backpack";
//import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo.js"

class Layout extends Component {
  render() {
    // prettier-ignore
    return (
			<Fragment>
				<NavBar />
				
				<main style={{height: "100%", overflow: "hidden", position: "relative", flex: "1"}}>
					{this.props.children}
					<Modal>
						<Backpack />
					</Modal>
				</main>
			</Fragment>
		)
  }
}

export default Layout;
