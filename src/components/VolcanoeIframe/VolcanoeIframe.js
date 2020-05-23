import React from 'react'
import Iframe from 'react-iframe'

function VolcanoeIframe() {
    return (
        <Iframe 
        url="http://localhost:8000/index.htm?disable-background-preload=true&force_audio=html5"
        height="100%"
        width="100%"
        />
    )
}

export default VolcanoeIframe