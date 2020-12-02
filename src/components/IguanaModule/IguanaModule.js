import React, { Component, Fragment } from 'react'
import MainContent from '../../containers/MainContent/MainContent'

function IguanaModule(props){


    return(
        <Fragment>
            <MainContent {...props} />
        </Fragment>
    )
}

export default IguanaModule
