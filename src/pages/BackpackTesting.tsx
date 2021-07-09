import React, { useState } from "react";
import { Text } from "../atomic-design/atoms";
import Button from "../atomic-design/atoms/Button/Button";
import  BackpackButton  from "../atomic-design/molecules/BackpackButton/BackpackButton";
import { MapButton } from "../atomic-design/molecules/MapButton/MapButton";
import Page from "../atomic-design/templates/Page"; 
import backpackContents from "../utils/backpackContents";
import SpeechBubble, {
    SpeechBubbleProps,
  } from "../atomic-design/molecules/SpeechBubble/SpeechBubble";

export interface backpackContents{
    name: string;
    description: string;

}

export default function BackpackTesting({
    name,
    description,
    ...rest
}: backpackContents){

    const[backpackOpen, setBackpackOpen] = useState(false);
    const[doubloonsOpen, setDoubloonsOpen] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    
    const toggleBackpack = () =>{
        setBackpackOpen (!backpackOpen)
        console.log(backpackOpen)
    }

    const openDoubloons = () =>{
        setDoubloonsOpen (!doubloonsOpen)
        console.log(doubloonsOpen)
    }

    if(!backpackOpen) {
    return (
            <div className="fixed top-2 right-2 z-40">
                <img onClick={toggleBackpack} 
                src={'./images/' + (!backpackOpen ? 'backpack' : 'backpack_open') + '.png'} 
                height={100} width={100}/>    
            </div>
            );
    }
    return (
        <div className="fixed top-2 right-2 z-40">
            <img onClick={toggleBackpack} 
            src={'./images/' + (!backpackOpen ? 'backpack' : 'backpack_open') + '.png'} 
            height={100} width={100}/>    
                <div
                    onMouseEnter={() => description && setShowDescription(true)}
                    onMouseLeave={() => setShowDescription(false)}
                    className="flex h-full flex-col relative overflow-visible items-center"
                >
                    <div className="absolute right-7 space-y-7 h-180 w-15 bg-yellow-200 border-2 border-black">
                        <span className= "block">
                            <img src="./images/travel_log.png" height={50} width={50} />
                        </span>
                        <span className="block">
                            <img src="./images/field_book.png" height={50} width={50} />
                        </span>
                        <span className="block">
                            <img src="./images/map.png" height={50} width={50} />
                        </span>
                        <span className="block" onClick={openDoubloons}>
                            <img src="./images/coin_purse.png" height={50} width={50} onClick={openDoubloons}/>
                        </span>
                    </div>  
                    {showDescription && <SpeechBubble text={description} position="top" size="sm" />}     
                </div>
             </div>
            );
    }