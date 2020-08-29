import React from "react"
import {NavLink} from "react-router-dom"
import classes from "./Navbar.css"
import {Navbar, Nav, Dropdown} from "react-bootstrap"
import LogoImage from "./LogoImage/LogoImage"
import Backpack from "../../../assets/images/homepage/backpack.png"



const navbar = () => {
	
	return (
		<Navbar expand='lg'>
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
			<Dropdown>
				<Dropdown.Toggle id="backpack" className={classes.dropdown}>
					<img src={Backpack} alt="Backpack" className={classes.Backpack}/>
				</Dropdown.Toggle>
				<Dropdown.Menu className={classes.dropdownList}>
					<Dropdown.Item className={classes.dropdownItem}><NavLink to='/fieldbook'>Fieldbook</NavLink></Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</Navbar>
	)
}

export default navbar
