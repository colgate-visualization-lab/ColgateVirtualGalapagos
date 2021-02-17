import React, {useState, Fragment} from 'react'
import classes from "./test.css"
import {Link} from "react-router-dom"
import {useParams} from "react-router"
import VolcanoSlides from "../../components/VolcanoSlides/VolcanoSlides"
import axios from 'axios'

export default function Test() {


    let {id} = useParams();

    const hidden = {visibility: "hidden"}

    return (
        <Fragment>
            <div className={classes.scrollMenu}> Scroll Menu
                <div className={classes.flexbox}>
                    <Link to="./0">
                        <div className={classes.scrollItem}>Intro Video</div>
                    </Link>
                    <Link to="./1">
                        <div className={classes.scrollItem}>Slide 1</div>
                    </Link>
                    <Link to="./2">
                        <div className={classes.scrollItem}>Slide 2</div>
                    </Link>
                    <Link to="./3">
                        <div className={classes.scrollItem}>Slide 3</div>
                    </Link>
                    <Link to="./4">
                        <div className={classes.scrollItem}>Slide 4</div>
                    </Link>
                    <Link to="./5">
                        <div className={classes.scrollItem}>Slide 5</div>
                    </Link>
                </div>
            </div>
            <VolcanoSlides id={id} />
        </Fragment>
    )
}
