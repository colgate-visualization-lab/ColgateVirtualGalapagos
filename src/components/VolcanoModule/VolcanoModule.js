import React from 'react'
import MainContent from "../../containers/MainContent/MainContent"
import volcanoData from "../../components/VolcanoData/VolcanoData.js";
import MapComponent from "../../components/MapComponent/MapComponent"

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
            <MapComponent
            initialLocation={{ lat: -0.781072, lng: -91.11596 }}
            markerName={"Sierra Negra, Caldera Rim"}/>
        </MainContent>
    )}
    else if (slideId == 3) { 
        return (
        <MainContent {...props} data={volcanoData} route={"volcano"}>
             <MapComponent
            location={{ lat: -0.791302, lng: -91.096232 }}
            markerName={"Sierra Negra, Caldera Rim"}/>
        </MainContent>
    )}
    else if (slideId == 4) { 
        return (
        <MainContent {...props} data={volcanoData} route={"volcano"}>
            <MapComponent
            location={{ lat: -0.962448, lng: -90.958908 }}
            markerName={"Coast of Villamil"}/>
        </MainContent>
    )}
    else if (slideId == 5) { 
        return (
        <MainContent {...props} data={volcanoData} route={"volcano"}>
            <MapComponent
            location={{ lat: -0.756385, lng: -90.328649 }}
            markerName={"Santa Cruz, Tortuga Bay"}/>
        </MainContent>
    )}
    else if (slideId == 6) { 
        return (
        <MainContent {...props} data={volcanoData} route={"volcano"}>
             <MapComponent
            location={{ lat: -0.583869, lng: -90.160893 }}
            markerName={"Plazas"} />
        </MainContent>
    )}
    else {
        return (
            <MainContent {...props} data={volcanoData} route={"volcano"} />
        )
    }
}

export default VolcanoModule
