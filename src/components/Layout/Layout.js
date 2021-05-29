import React, { Component, Fragment, useState } from "react";
import { makeStyles } from "@material-ui/styles";

import NavBar from "components/Navigation";
import Modal from "components/UI/Modal";
import Backpack from "pages/Backpack";

//import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo.js"

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  main: {
    width: "100vw",
    height: `calc(100% - 64px)`,
    position: "relative",
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
