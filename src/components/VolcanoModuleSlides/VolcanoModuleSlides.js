import React from 'react'
import NewVolcanoModule from "../../containers/NewVolcanoModule/NewVolcanoModule"

function VolcanoModuleSlides(props) {

    if (props.slide == 0) {
    return (
        <NewVolcanoModule 
            nextLink="Volcano_1"
            audio="https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_TerrainMap02.mp3"
            >
            <p>Slide0</p>
        </NewVolcanoModule>
    )}
    else if (props.slide == 1) {
    return (
        <NewVolcanoModule 
            backLink="Volcano_0" 
            nextLink="Volcano_2"
            audio="https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_Slider01.mp3"
            >
            <p>slide 1 baby</p>
        </NewVolcanoModule>
    )}
    else if (props.slide == 2) {
    return( 
        <NewVolcanoModule 
            backLink="Volcano_1" 
            nextLink="Volcano_3"
            audio="https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_Compare360.mp3"
            >
            <p>slide 2 baby</p>
        </NewVolcanoModule>
        )}
    }
    
export default VolcanoModuleSlides
