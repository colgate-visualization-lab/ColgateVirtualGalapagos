import React from 'react'
import classes from './Modal.css'

const modal = (props) => {
    return (
        <div className={classes.Modal} id="open-modal">
            <a href="#" title="Close" className={classes.ModalClose}>Close</a>
            {props.children}
        </div>
    )
}

export default modal; 