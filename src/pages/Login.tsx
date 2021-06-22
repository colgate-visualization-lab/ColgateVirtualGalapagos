import Page from "../atomic-design/templates/Page";
import Image from "../atomic-design/atoms/Image/Image";
import React, { useState } from "react";
import { StaticAnimal, Text } from "../atomic-design/atoms";
import { Character } from "../atomic-design/organisms";
import GameBar from "../atomic-design/templates/GameBar";
import SpeechBubble, {
  SpeechBubbleProps,
} from "../atomic-design/molecules/SpeechBubble/SpeechBubble";
import { BiPaperPlane } from "react-icons/bi";
const lavaImage = "/images/lavalizard.png";
const boobyImage = "/images/bluefooted.png";
const turtleImage = "/images/turtle.png";


export default function Login() {
  return <Page transition="animate-fade-in" color="bg-primary">
    <GameBar className="w-100vw">
      <div className="fixed z-20 top-10">
        <Text
          text="Sign In for Adventure!"
          color="text-dark"
          type="heading"
         size="lg"
        />
       </div>
       
    <div className="absolute left-0 bottom-0">
        <SpeechBubble text="Hello there! Welcome to the Galapagos Islands! Please answer some questions so we can continue our adventure!" 
          color="text-dark" size="md" 
          position="top"
          />
        <Image src={boobyImage} alt="booby" />
      </div>

      <div className="absolute bottom-0">
        <SpeechBubble text="What is your Email?" color="text-dark" size="md" 
          position="top"
          className="right-0 "
          inputTest="placeholder"
         
          />
        <Image className="h-1/2 bottom-0" src={lavaImage} alt="lavalizard" />
      </div>
        
      

      <div className="absolute right-0 bottom-0 ">
        <SpeechBubble text="What is your Password?" color="text-dark" size="md" 
          position="top"
          className="right-0 "
          inputTest="placeholder"

          // <button onClick={handleSend} id="chat-icon" >
          // <BiPaperPlane className="text-gray-500"/>
          // {/* </button> */}
          />

        <Image className="h-1/2 bottom-0" src={turtleImage} alt="turtle" />
      </div>
       
    </GameBar>
  </Page>;
}
