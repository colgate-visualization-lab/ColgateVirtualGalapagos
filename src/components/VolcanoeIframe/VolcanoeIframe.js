import React from 'react'
import Iframe from "react-iframe"

function VolcanoeIframe(props) {
    return (
                <Iframe position="absolute" width="100%" height="100%" src={props.threeD} />
    )
}
export default VolcanoeIframe
