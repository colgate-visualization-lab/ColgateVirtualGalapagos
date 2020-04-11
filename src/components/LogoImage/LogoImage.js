import React from 'react'

import classes from './LogoImage.css'
import LogoImage from '../../assets/homepage/logo.png'

const logoImage = () => {
    return (
        <img src={LogoImage} alt="Logo Image" className={classes.Logo}/>
    )
}

export default logoImage