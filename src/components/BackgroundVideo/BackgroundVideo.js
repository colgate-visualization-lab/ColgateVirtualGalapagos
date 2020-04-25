import React from 'react'
import video from '/Users/giancarloarcese/ColgateVirtualGalapagos/src/assets/tropicalbeachloopextended.mp4'
import classes from '/Users/giancarloarcese/ColgateVirtualGalapagos/src/components/BackgroundVideo/BackgroundVideo.css'

function BackgroundVideo() {
    return (               
        <video autoPlay loop muted className={classes.bgvid}>
        <source src={video} />
    </video>
    )
}

export default BackgroundVideo
