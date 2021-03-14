import React from "react"
import {NavLink} from "react-router-dom"
import classes from "./Navbar.css"
import {Navbar, Nav} from "react-bootstrap"
import LogoImage from "./LogoImage/LogoImage"
import {Backpack} from "../../../assets/Misc"



const navbar = () => {
	return (
		<Navbar expand='lg' className={classes.container}>
			<NavLink to='/home'>
				<Navbar.Brand>
					<LogoImage className={classes.Logo}/>
				</Navbar.Brand>
			</NavLink>
			<Navbar.Text >
     			 <h1 className ={classes.text}>Add instructions for each different page</h1>
    		</Navbar.Text>
			<NavLink to="/home">
				<Nav.Item className={classes.NavItem}>Mysteries</Nav.Item>
			</NavLink>
			<NavLink to="/gallery">
				<Nav.Item className={classes.NavItem}>Gallery</Nav.Item>
			</NavLink>
			<NavLink to="/authorization">
				<Nav.Item className={classes.NavItem}>Sign In</Nav.Item>
			</NavLink>
			<NavLink to="/fieldbook">
				<Nav.Item className={classes.NavItem}><img src={Backpack} alt="Backpack" className={classes.Backpack}/></Nav.Item>
			</NavLink>
		</Navbar>
	)
}

export default navbar
