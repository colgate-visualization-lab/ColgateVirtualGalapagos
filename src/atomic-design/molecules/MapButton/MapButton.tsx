import React, { useState } from 'react';
import Button, {ButtonProps} from "../../atoms/Button/Button";


export const MapButton = (props: ButtonProps) => {
    const [onClick, setOnClick] = useState("");
    
    return (
        <div className="relative">
            <Button
            size = "lg"
            variant = "map"
            onClick = {() => openMap()}
            />
            
        </div>
    )
}



MapButton.defaultProps = {
    onClick: () => {},
};
