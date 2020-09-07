import React from "react"
import classes from "./Modal.css"

const modal = (props) => {
	return (
		<div className={classes.Modal} id="open-backpack">
			<div>
				<a href="#" title="Close" className={classes.ModalClose}>Close</a>
				{props.children}
			</div>
		</div>
	)
}

export default modal 