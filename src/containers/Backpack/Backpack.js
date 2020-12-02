import React, { Component } from "react"
import {fieldbook} from "../../assets/Misc"
import classes from './Backpack.css'
import {Link} from "react-router-dom"

class Backpack extends Component {
	render(){
		return (
			<div>
				<Link to="/fieldbook"><img src={fieldbook} alt="Fieldbook" className={classes.Image}/></Link>
				<img src={fieldbook} alt="Fieldbook" className={classes.Image}/>
			</div>	
		)
	}   
}

export default Backpack