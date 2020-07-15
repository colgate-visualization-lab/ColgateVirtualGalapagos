import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapComponent extends Component{
    render(){
        return(
            <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDHUBUzVYYDhmF67bgnlP_HJ_PnJZZJfJA",
  })(MapComponent);
  