import React from 'react'
import NewVolcanoModule from "../../containers/NewVolcanoModule/NewVolcanoModule"

function Slide_2() {
    return (
        <NewVolcanoModule 
            backLink="Volcano_1" 
            nextLink="Volcano_3"
            audio="https://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_Compare360.mp3"
            >
            <p>slide 2 baby</p>
        </NewVolcanoModule>
    )
}

export default Slide_2