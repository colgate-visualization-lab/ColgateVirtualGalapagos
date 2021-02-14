import React from 'react'
import {Link} from "react-router-dom"
import {useParams} from "react-router"
import VolcanoSlides from "../../components/VolcanoSlides/VolcanoSlides"

export default function Test(props) {

    let {id} = useParams();

    return (
        <div style={{backgroundColor: "orange", height: "100%", width: "100%"}}>
            <div>s</div>
            <VolcanoSlides id={id} />
        </div>
    )
}
