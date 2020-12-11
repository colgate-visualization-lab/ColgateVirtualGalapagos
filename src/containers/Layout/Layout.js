import React, { Component, Fragment } from "react";
import NavBar from "../../components/Navigation";
import Modal from "../../components/UI/Modal/Modal";
import Backpack from "../Backpack/Backpack";
//import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo.js"

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <main
          style={{
            width: "100vw",
            height: "100%",
            minHeight: "100%",
            overflow: "hidden",
            position: "relative",
            flex: "1",
          }}
        >
          {this.props.children}
          <Modal>
            <Backpack />
          </Modal>
        </main>
      </Fragment>
    );
  }
}

export default Layout;
