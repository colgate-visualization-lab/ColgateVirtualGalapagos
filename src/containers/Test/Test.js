import React, {useState} from 'react'
import classes from "./test.css"
import {Link} from "react-router-dom"
import {useParams} from "react-router"
import VolcanoSlides from "../../components/VolcanoSlides/VolcanoSlides"
import axios from 'axios'

export default function Test() {


    let {id} = useParams();

    const hidden = {visibility: "hidden"}

    return (
        <div style={{position: "relative", height: "100%", width: "100%"}}>
            <div className={classes.scrollMenu}> Scroll Menu
                <div className={classes.flexbox}>
                    <Link to="./0">
                        <div className={classes.scrollItem}>hello</div>
                    </Link>
                    <Link to="./1">
                        <div className={classes.scrollItem}>hello</div>
                    </Link>
                    <Link to="./2">
                        <div className={classes.scrollItem}>hello</div>
                    </Link>
                    <Link to="./3">
                        <div className={classes.scrollItem}>hello</div>
                    </Link>
                    <Link to="./4">
                        <div className={classes.scrollItem}>hello</div>
                    </Link>
                    <Link to="./5">
                        <div className={classes.scrollItem}>hello</div>
                    </Link>
                </div>
            </div>
            <VolcanoSlides id={id} />
        </div>
    )
}
