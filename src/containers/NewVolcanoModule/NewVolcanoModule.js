import React, {useState} from 'react'
import classes from "./NewVolcanoModule.css"
import {Back, Next} from "../../assets/VolcanoModule"
import { Redirect } from "react-router"
import {Link} from "react-router-dom"

function NewVolcanoModule(props) {

    return (
        <div className={classes.parentDiv}>
            {/* Back and Next buttons */}
            <Link to={props.backLink}>
                <img src={Back} className={classes.back}/>
            </Link>
            <Link to={props.nextLink}>
                <img src={Next} className={classes.next}/>
            </Link>
            <audio controls src={props.audio}/>
            {/* This is where each slide goes */}
            {props.children}
        </div>
    )
}

export default NewVolcanoModule