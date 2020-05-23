import React from "react"
import video from "../../../dist/videos/tropicalbeachloopextended.mp4"
import classes from "../BackgroundVideo/BackgroundVideo.css"

function BackgroundVideo() {
	return (               
		<video autoPlay loop muted className={classes.bgvid}>
			<source src={video} />
		</video>
	)
}

export default BackgroundVideo
