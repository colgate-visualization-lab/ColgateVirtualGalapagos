import React from 'react'
import './chat.css';
import Page from "../atomic-design/templates/Page";
import Image from "../atomic-design/atoms/Image/Image";
import turtleImage from "../assets/images/turtle.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { getTime } from './chat';

const time = getTime();

function chatbot() {
    return (
    <>
    <Page color="bg-primary-light">
        <div className="absolute bottom-0 left-10">
        <div className="w-50 lg:w-60">
          <Image src={turtleImage} alt="turtle" />
        </div>
        </div>

      <div className="absolute top-0 left-0 w-full">
        <div>
            {/* Message Container */}
            <div className="outer-container">
                <div className="chat-container">
                    {/* Messages */}
                    <div id="chatbox">
                        <div>{time}</div>
                        <p id="botStarterMessage" className="botText">
                            <span>Welcome to Virtual Galapagos! What is your name?</span>
                        </p>
                    </div>
                    <div className="chat-bar-input-block">
                        <div id="userInput">
                            <input id="textInput" className="input-box" type="text" name="msg"
                                placeholder="Tap 'Enter' to send a message"/>
                            <p></p>
                        </div>
                        <div className="chat-bar-icons">
                            <button id="heart-icon"><FontAwesomeIcon icon={faHeart} color='red' /></button>
                            <button id="chat-icon"><FontAwesomeIcon icon={faPaperPlane} color='darkgray' /></button>
                        </div>
                    </div>
                    <div id="chat-bar-bottom">
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    </Page>
    </>  
    );
}

export default chatbot

