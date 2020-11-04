import React, { Component, Fragment } from 'react'
import MainContent from '../../containers/MainContent/MainContent'
import data from "../../components/IguanaData/IguanaData.js";

function IguanaModule(props){

    return(
        <Fragment>
            <MainContent {...props} moduleData={data} route={"iguana"} />
        </Fragment>
    )
}

export default IguanaModule
