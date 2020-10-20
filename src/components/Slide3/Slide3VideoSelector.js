import React, { useEffect } from "react";
import classes from "./Slide3.css";


const Slide3VideoSelector = ({data, onSrcChange}) => {
    useEffect(()=>{
        console.log(data[0].cardTitle)
    })



    return (
    <div className={classes.videoSelector}>
        {data.map((datum)=>(
            <button className={`${classes.videoSelectorButton} ${classes.button} `}  onClick={() => {
                onSrcChange(datum);
                console.log(datum.cardTitle);
              }} type="button" key={datum.id}>{datum.cardTitle}</button>
        ))}
    </div>
    )
}

export default Slide3VideoSelector;