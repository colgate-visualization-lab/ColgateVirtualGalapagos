import React from 'react'
import MainContent from "../MainContent/MainContent"
import VolcanoSlides from "../../components/VolcanoSlides/VolcanoSlides"

export default function ModuleSelector(props) {
    if (props.module == "volcano")
    return (
        <VolcanoSlides data={props.content} />
    )
    else if (props.module == "iguana")
    return (
        <MainContent content={props.content} />
    )
}
