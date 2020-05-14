import React, { Component } from "react"
import classes from "./Fieldbook.css"
import FlipPage from "react-flip-page"

class Fieldbook extends Component {
	click(){
		console.log("Clicked")
	}

	inputHandler(event){
		console.log(event.target.value)
	}

	render(){
		return (
			<FlipPage 
				orientation="horizontal" 
				flipOnTouch="true"  
				uncutPages="true"  
				perspective="50em" 
				animationDuration="1000"
				responsive="true"
			>
				<textarea className={classes.textarea} onChange={this.inputHandler} onClick={this.click}
					value={"Default text"}/>
				<div className={classes.textarea}>Note 2</div>
			</FlipPage>
		)
	}
    
}

export default Fieldbook