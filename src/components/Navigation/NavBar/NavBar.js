import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Navbar.css'
import {Navbar, Nav} from 'react-bootstrap'
import LogoImage from './LogoImage/LogoImage'
import Backpack from '../../../assets/homepage/backpack.png'

const navbar = () => {
    return (
        <Navbar expand='lg'>
            <NavLink to='/home'>
                <Navbar.Brand>
                    <LogoImage className={classes.Logo}/>
                </Navbar.Brand>
            </NavLink>
            <NavLink to="/home">
                <Nav.Item className={classes.NavItem}>Mysteries</Nav.Item>
            </NavLink>
            <NavLink to="/gallery">
                <Nav.Item className={classes.NavItem}>Gallery</Nav.Item>
            </NavLink>
            <NavLink to="/authorization">
                <Nav.Item className={classes.NavItem}>Sign In</Nav.Item>
            </NavLink>
            <a href="#open-backpack">
                <Nav.Item>
                    <img src={Backpack} alt="Backpack" className={classes.Backpack}/>
                </Nav.Item>
            </a>
        </Navbar>
    )
}

export default navbar
