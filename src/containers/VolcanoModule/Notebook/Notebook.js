import React, { Fragment } from 'react'
import classes from './Notebook.css'

const Notebook = () => {
    return (
        <Fragment>
            <input type="text" placeholder="Type your note here" autoFocus className={classes.formInput}></input>
        </Fragment>
    )
}

export default Notebook
