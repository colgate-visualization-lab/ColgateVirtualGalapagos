import React from 'react'
import MainContent from "../../containers/MainContent/MainContent"
import volcanoData from "../../components/VolcanoData/VolcanoData.js";

function VolcanoModule(props) {
    
const slideId = parseInt(props.match.params.slide_id || 1);

    if (slideId == 1) { 
        return (
        <MainContent {...props} data={volcanoData} route={"volcano"}>
            <h1>hello!</h1>
        </MainContent>
    )}
    else if (slideId == 2) { 
        return (
        <MainContent {...props} data={volcanoData} route={"volcano"}>
            <h1>kahsdflkahdsfliah!</h1>
        </MainContent>
    )}
    else {
        return (
            <MainContent {...props} data={volcanoData} route={"volcano"} />
        )
    }
}

export default VolcanoModule
