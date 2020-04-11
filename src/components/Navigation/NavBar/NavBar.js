import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Navbar.css'
import {Navbar, Nav} from 'react-bootstrap'
import LogoImage from '../../LogoImage/LogoImage'
import Backpack from '../../../assets/homepage/backpack.png'

const navbar = () => {
    return (
        <Navbar expand='lg' className='row'>
            <Navbar.Brand className="col-8"><NavLink to='/home'><LogoImage/></NavLink></Navbar.Brand>
            <Nav.Item className="col" style={{padding: '10px'}}>Mysteries</Nav.Item>
            <Nav.Item className="col"><NavLink to="/gallery">Gallery</NavLink></Nav.Item>
            <Nav.Item className="col-md-auto"><NavLink to="/authorization">Sign In/Sign Up</NavLink></Nav.Item>
            <Nav.Item className="col-3"><NavLink to="/home"><img src={Backpack} alt="Backpack" className={classes.Backpack}/></NavLink></Nav.Item>
        </Navbar>
    )
}

export default navbar
