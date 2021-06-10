import React, { useState } from "react";
import "./chat.css";
import Page from "../atomic-design/templates/Page";
import Image from "../atomic-design/atoms/Image/Image";
import turtleImage from "../assets/images/turtle.png";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";
import { getTime } from "./chat";

const time = getTime();

const UserMessage = ({ msg }: { msg: string }) => <p className="">{msg}</p>;

function Wrapper() {
  function handleSubmit(userMessage: string) {
    //handle send logic
  }

  return <Chatbot onSend={handleSubmit} />;
}

function Chatbot({ onSend }: { onSend: Function }) {
  const [tempMessage, setTempMessage] = useState<string>("");
  const [userMessages, setUserMessages] = useState<any[]>([]);

  function handleHeartClick(event: any) {
    setUserMessages([
      ...userMessages,
      <AiFillHeart className="text-red-500" />,
    ]);
  }

  function handleSend(event: any) {
    setUserMessages([...userMessages, tempMessage]);
    setTempMessage("");
    onSend(tempMessage);
  }

  // setUserMessages([...userMessages,'hello'])

  return (
    <>
      <Page color="bg-primary-light">
        <div className="absolute bottom-0 left-10">
          <div className="w-50 lg:w-60">
            <Image src={turtleImage} alt="turtle" />
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full">
          {/* Message Container */}
          <div className="min-h-60 h-full max-w-screen-xl bottom-10 left-12 relative">
            <div className="h-full flex flex-col justify-center">
              {/* Messages */}
              <div id="chatbox">
                <div>{time}</div>
                <p id="botStarterMessage" className="botText">
                  <span className="font-heading">
                    Welcome to Virtual Galapagos! What is your name?
                  </span>
                </p>
                {userMessages.map((msg) => (
                  <UserMessage msg={msg} />
                ))}
              </div>
              <div className="chat-bar-input-block">
                <div id="userInput">
                  <input
                    onChange={(event) => setTempMessage(event.target.value)}
                    value={tempMessage}
                    className="input-box"
                    type="text"
                    placeholder="Tap 'Enter' to send a message"
                  />
                  <p></p>
                </div>
                <div className="chat-bar-icons">
                  <button onClick={handleHeartClick} id="heart-icon">
                    <AiFillHeart />
                  </button>
                  <button onClick={handleSend} id="chat-icon">
                    <BiPaperPlane />
                  </button>
                </div>
              </div>
              <div id="chat-bar-bottom">
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </>
  );
}

export default Chatbot;
