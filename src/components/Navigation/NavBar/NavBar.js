import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.css";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import LogoImage from "./LogoImage/LogoImage";
import { Backpack } from "../../../assets/Misc";

const NavBar = () => {
  return (
    <Navbar expand="lg" className={classes.navBar}>
      <NavLink to="/home" className={classes.navLink}>
        <Navbar.Brand className={classes.navBrand}>
          <LogoImage className={classes.logo} />
        </Navbar.Brand>
      </NavLink>
      {/* <Navbar.Text >
     			 <h1 className ={classes.text}>Add instructions for each different page</h1>
    		</Navbar.Text> */}
      <NavLink to="/home">
        <Nav.Item className={classes.navItem}>Mysteries</Nav.Item>
      </NavLink>
      <NavLink to="/gallery">
        <Nav.Item className={classes.navItem}>Gallery</Nav.Item>
      </NavLink>
      <NavLink to="/authorization">
        <Nav.Item className={classes.navItem}>Sign In</Nav.Item>
      </NavLink>
      <NavLink to="/fieldbook">
				<Nav.Item className={classes.NavItem}><img src={Backpack} alt="Backpack" className={classes.Backpack}/></Nav.Item>
			</NavLink>
    </Navbar>
  );
};

export default NavBar;
