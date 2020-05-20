import React from "react"
import classes from "../ModuleNav.css"

const moduleNavItem = (props) => {
	return (
		<div className={classes.col + props.animation} onTouchStart={() => this.classList.toggle("hover")}>
			<div className={classes.container}>
				<div className={classes.front} style={{backgroundImage: props.background}}>
					<div className={classes.inner}>
						<p>{props.title}</p>
					</div>
				</div>
				<div className={classes.back}>
					<div className={classes.inner}>
						<p>{props.description}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default moduleNavItem