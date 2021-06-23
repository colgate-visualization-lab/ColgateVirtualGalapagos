import React from 'react'
import Button, { ButtonProps } from "../../atoms/Button/Button";

export const Map = (props: ButtonProps) => {
    return (
        <div>
            <h1>Hello</h1>
            <Button 
            {...props}
            size="lg"
            variant="map"
            />
        
        </div>
    )
}

export default Map
