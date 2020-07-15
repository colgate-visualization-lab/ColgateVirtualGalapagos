import React from 'react'
import Iframe from "react-iframe"
import classes from "./VolcanoeIframe.css"

function VolcanoeIframe(props) {
    return (
            <Iframe position="absolute" width="100%" height="100%" className={classes.Iframe} src={props.src} />
    )
}
export default VolcanoeIframe
