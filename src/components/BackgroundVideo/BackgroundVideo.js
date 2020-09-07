import React from "react"
import video from "https://virtualgalapagos.colgate.edu/assets/homepage/backgroundvideo.mp4"
import classes from "../BackgroundVideo/BackgroundVideo.css"

function BackgroundVideo() {
	return (               
		<video autoPlay loop muted className={classes.bgvid}>
			<source src={video} />
		</video>
	)
}

export default BackgroundVideo
