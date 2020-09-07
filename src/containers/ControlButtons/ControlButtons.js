import React from 'react'
import {Back, Next} from '../../assets/VolcanoModule'
import classes from './ControlButtons'

export default function ControlButtons(props) {
    return (
        <div>
            <button><img className={classes.prev} src={Back} onClick={props.nextSlide} style={{width: 200, height: auto, position: 'absolute', bottom: props.bottom, left: props.left}}/></button>
            <button><img className={classes.next} src={Next} onClick={props.prevSlide} style={{width: 200, height: auto, position: 'absolute', bottom: props.bottom, right: props.right}}/></button>
        </div>
    )
}


