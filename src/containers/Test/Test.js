import React from 'react'
import {Link} from "react-router-dom"
import {useParams} from "react-router"
import IntroSlide from "../../components/VolcanoSlides/Intro Slide/IntroSlide"

export default function Test(props) {

    let { id } = useParams();
    if (id == "slide1") {
        return(
        <div style={{backgroundColor: "orange", height: "100%"}}> 
            Go fuck yourself!
        </div>
        )}
    else {
    return (
        <div style={{backgroundColor: "orange", height: "100%"}}>   {id} 
                <IntroSlide />
        </div>
    )}
}
