import React from 'react'
import NewVolcanoModule from "../../containers/NewVolcanoModule/NewVolcanoModule"

function Slide_1() {
    return (
        <NewVolcanoModule 
            backLink="Volcano_0" 
            nextLink="Volcano_2"
            audio="https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_Slider01.mp3"
            >
            <p>slide 1 baby</p>
        </NewVolcanoModule>
    )
}

export default Slide_1