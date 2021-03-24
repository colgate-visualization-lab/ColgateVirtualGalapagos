import React, { Component, Fragment } from "react";
import MainContent from "../../containers/MainContent/MainContent";
import ModuleContainer from "../../containers/MainContent";

export default function IguanaModule(props) {
  return ( 
    <ModuleContainer {...props} module={"iguana"} />
  )
}

