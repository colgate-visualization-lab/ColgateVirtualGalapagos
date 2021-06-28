import React, { useState } from 'react'
import {bool, func} from 'prop-types';
import BackpackContents from '../BackpackContents/BackpackContents';
import BackpackButton from "../../molecules/BackpackButton/BackpackButton"

interface Props{
    open: boolean;
    setOpen: boolean;
}

const Backpack = ({open, setOpen}) => {
    return (
        <div>
            <img src="./images/backpack.png" 
            open = {open}
            onClick{ () => setOpen(!open)}
            >
                <div />
                <div />
                <div />
            </img>
        </div>
    )
}

Backpack.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Backpack;
