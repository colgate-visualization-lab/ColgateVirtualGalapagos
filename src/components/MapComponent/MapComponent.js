import React, { Component } from "react"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"
import classes from './MapComponent.css'


export class MapComponent extends Component{  
    render(){
        return(
          <div className={classes.MapComponent}>            
          <Map           
          google={this.props.google}
          zoom={8}
          initialCenter={this.props.location}
        >

    <Marker onClick={this.onMarkerClick}
            name={'Current location'} />

  
  </Map></div>

        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDHUBUzVYYDhmF67bgnlP_HJ_PnJZZJfJA",
  })(MapComponent);
  