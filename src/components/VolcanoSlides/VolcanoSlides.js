import React from 'react'
import {Link} from "react-router-dom"

export default function VolcanoSlides(props) {

    if (props.id == 0) {
        return (
            <Link to="./1">slide 0</Link>
        )
    }
    else if (props.id == 1) {
        return (
            <Link to="./2">slide 1</Link>
        )
    }
    else if (props.id == 2) {
        return (
            <Link to="./0">slide 2</Link>
        )
    }
    else if (props.id == 3) {
        return (
            <Link to="./0">slide 2</Link>
        )
    }
    else if (props.id == 4) {
        return (
            <Link to="./0">slide 2</Link>
        )
    }
    else if (props.id == 5) {
        return (
            <Link to="./0">slide 2</Link>
        )
    }
}
