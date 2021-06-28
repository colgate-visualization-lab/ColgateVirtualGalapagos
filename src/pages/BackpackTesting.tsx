import React, { useState } from "react";
import { Text } from "../atomic-design/atoms";
import Button from "../atomic-design/atoms/Button/Button";
import  BackpackButton  from "../atomic-design/molecules/BackpackButton/BackpackButton";
import { MapButton } from "../atomic-design/molecules/MapButton/MapButton";
import Page from "../atomic-design/templates/Page"; 


export default function BackpackTesting(){

    const[backpackOpen, setBackpackOpen] = useState(false);
    
    const toggleBackpack = () =>{
        setBackpackOpen (!backpackOpen)
        console.log(backpackOpen)
    }

    if(!backpackOpen) {
    return (
        <Page transition="none">
            <div className="fixed top-2 right-2 z-40">
                <img onClick={toggleBackpack} 
                src={'./images/' + (!backpackOpen ? 'backpack' : 'backpack_open') + '.png'} 
                height={100} width={100}/>    
            </div>
        </Page> 
            );
    }
    return (
        <Page transition="none">
        <div className="fixed top-2 right-2 z-40">
            <img onClick={toggleBackpack} 
            src={'./images/' + (!backpackOpen ? 'backpack' : 'backpack_open') + '.png'} 
            height={100} width={100}/>    
                    <div className="absolute inest-5 space-y-7 h-180 w-15 bg-yellow-200 border-2 border-black">
                        <span className= "block">
                            <img src="./images/travel_log.png" height={50} width={50} />
                        </span>
                        <span className="block">
                            <img src="./images/field_book.png" height={50} width={50} />
                        </span>
                        <span className="block">
                            <img src="./images/map.png" height={50} width={50} />
                        </span>
                    </div>      
             </div>
         </Page> 
            );
    }