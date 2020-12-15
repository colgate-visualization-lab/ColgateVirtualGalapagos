import React, { Component, Fragment, useState } from "react";
import { makeStyles } from "@material-ui/styles";

import NavBar from "../../components/Navigation";
import Modal from "../../components/UI/Modal/Modal";
import Backpack from "../Backpack/Backpack";

//import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo.js"

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  main: {
    width: "100vw",
    height: `calc(100% - 64px)`,
    overflow: "hidden",
    position: "relative",
    // flex: "1",
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <Fragment>
      <NavBar />
      <main className={classes.main}>
        {children}
        <Modal>
          <Backpack />
        </Modal>
      </main>
    </Fragment>
  );
}
