import React, { useState } from "react";
import { Text } from "../atomic-design/atoms";
import Button from "../atomic-design/atoms/Button/Button";
import Page from "../atomic-design/templates/Page"; 
import backpackContents from "../utils/backpackContents";
import { BackpackType, useGameContext } from "../contexts/GameContext";
import SpeechBubble, {
    SpeechBubbleProps,
  } from "../atomic-design/molecules/SpeechBubble/SpeechBubble";
import BaseModalWrapper from "../atomic-design/atoms/ModalPopup/BaseModalWrapper"

/* export interface backpackContents{
    name: string;
    description: string;

} */

export default function BackpackTesting({
    /* name,
    description,
    ...rest
}: backpackContents */}){

    const[backpackOpen, setBackpackOpen] = useState(false);
    const[doubloonsOpen, setDoubloonsOpen] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const[isModalVisible, setIsModalVisible] = useState(false);
    
    const toggleBackpack = () =>{
        setBackpackOpen (!backpackOpen)
        console.log(backpackOpen)
    }

    const openDoubloons = () =>{
        setDoubloonsOpen (!doubloonsOpen)
        console.log(doubloonsOpen)
    }

    const toggleModal = () => {
        setIsModalVisible(wasModalVisible => !wasModalVisible)
    }

    if(!backpackOpen) {
    return (
           <div className="fixed top-2 right-2 z-40">
         
                { <img onClick={toggleBackpack} 
                src={'./images/' + (!backpackOpen ? 'backpack' : 'backpack_open') + '.png'} 
                height={100} width={100}/>    }
                
                <button onClick={toggleModal}>Modal test</button>
                <BaseModalWrapper isModalVisible={isModalVisible} onBackdropClick={toggleModal}/>
               
            </div>
            );
    }
    return (
        <div className="fixed top-2 right-2 z-40">
            <img onClick={toggleBackpack} 
            src={'./images/' + (!backpackOpen ? 'backpack' : 'backpack_open') + '.png'} 
            height={100} width={100}/>    
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
                        <button onClick={toggleModal}>
                        <span className="block" onClick={openDoubloons}>
                            <img src="./images/coin_purse.png" height={50} width={50} onClick={openDoubloons}/>
                            <BaseModalWrapper isModalVisible={isModalVisible} onBackdropClick={toggleModal}/>
                        </span>
                        </button>
                    </div>  
             </div>
            );
    }