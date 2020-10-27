import React, { Component, Fragment } from 'react'
import MainContent from '../../containers/MainContent/MainContent'
import data from "../../components/VolcanoData/VolcanoData.js";

function VolcanoModule(props){

    return(
        <Fragment>
            <MainContent {...props} moduleData={data} />
        </Fragment>
    )
}
    
export default VolcanoModule