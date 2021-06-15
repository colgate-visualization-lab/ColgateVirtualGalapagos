import React, { useState } from "react";
// import "./chat.css";
import Page from "../atomic-design/templates/Page";
import Image from "../atomic-design/atoms/Image/Image";
import turtleImage from "../assets/images/turtle.png";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";
import AnimatedSpriteSheet from "../atomic-design/molecules/AnimatedSpriteSheet/AnimatedSpriteSheet";
import fishSheet from "../assets/sprites/fish_one.png";
import fishTwoSheet from "../assets/sprites/fish_two.png"
import talkingTurtle from "../assets/sprites/speaking_turtle.png"

// import { getTime } from "./chat";

//message input from user
const UserMessage = ({ msg }: { msg: string }) => <p className="" 
  style={{backgroundColor: "#e0e0e0", padding:10, borderRadius:8, borderBottomRightRadius:2, 
  marginTop: 20, marginLeft:'80%',right:0, textAlign:"left",maxWidth:'80%', fontFamily:'cursive',fontSize:23}}>{msg}</p>;

//time
const getTime = () => {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var n = hours + ":" + minutes;
  return (
      n
  )
}


//???
function Wrapper() {
  function handleSubmit(userMessage: string) {
    //handle send logic
  }

  return <Chatbot onSend={handleSubmit} />;
}

//MAIN FUNCTION
function Chatbot({ onSend }: { onSend: Function }) {

  const time = getTime();
  const [tempMessage, setTempMessage] = useState<string>("");
  const [userMessages, setUserMessages] = useState<any[]>([]);
  let [isAnimating, setAnimating] = useState(true);

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
        <div className="absolute bottom-10 left-20">
            <AnimatedSpriteSheet
              filename={talkingTurtle}
              bounds={{ x: 0, y: 0, width: 516, height: 306 }}
              frame={{ width: 172, height: 153 }}
              speed={400}
              isPlaying={isAnimating}
          
            />
          
          </div>

        <div className="absolute bottom-0 right-20"> 
          <div className="max-w-screen-xl bottom-10 left-30 relative">
            <div className="h-full flex flex-col justify-center">

              <div id="chatbox">
                <div style={{fontFamily:'cursive'}}>{time}</div>
                <p id="botStarterMessage" style={{backgroundColor: "#e0e0e0", padding:10, borderRadius:8, 
                borderBottomLeftRadius:2, marginRight:300, textAlign:"left",maxWidth:'80%', lineHeight:'1.5em',
                
                }}>


                  <span style={{fontFamily:'cursive',fontSize:23}}>
                  Welcome to Virtual Galapagos! What is your name?
                  </span>
                </p>
                
                {userMessages.map((msg) => (
                  <UserMessage msg={msg} />
                ))}

              </div>

              <div style={{display:"flex",float:"right",boxSizing:"border-box", justifyContent:"space-between",
              alignItems:"center",backgroundColor:"transparent",borderRadius:10, padding:10}}>
                <div id="userInput" style={{width:"75%"}}>
                  <input
                    onChange={(event) => setTempMessage(event.target.value)}
                    value={tempMessage}
                    className="input-box"
                    style={{float:"right",boxSizing:"border-box",borderRadius:10, padding:10,fontSize:23,
                    fontFamily:"cursive", backgroundColor: 'transparent',borderBottom:'1px solid'}}
                    type="text"
                    placeholder="Tap 'Enter' to send a message"
                  />
                  <p></p>
                </div>
                
                <div style={{display:"flex",justifyContent:"space-evenly",
                boxSizing:"border-box",width:"25%",float:"right", fontSize:23, 
                }}>
                  <button onClick={handleHeartClick} id="heart-icon" >
                    <AiFillHeart className="text-red-500"/>
                  </button>
                  <button onClick={handleSend} id="chat-icon" >
                    <BiPaperPlane className="text-gray-500"/>
                  </button>
                </div>
              </div>

              {/* <div id="chat-bar-bottom" >
                <p></p>
              </div> */}
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full">
        <div className="relative top-1 w-full" style={{animation:"animate-left-right"}}>
          {/* <Image src={birdSheet} alt="bird" /> */}
         
          <AnimatedSpriteSheet
            initialFrame={0}
            filename={fishSheet}
            bounds={{ x: 0, y: 0, width: 1029, height: 903 }}
            frame={{ width: 343, height: 301 }}
            speed={250}
            scale={{ x: 0.5, y: 0.3 }}
            animation={{ name: "animate-left-right", offset: 15 }}
          />
        
        </div>

        <div className="relative top-40 w-full">
          <AnimatedSpriteSheet
            initialFrame={0}
            filename={fishTwoSheet}
            bounds={{ x: 0, y: 0, width: 1029, height: 903 }}
            frame={{ width: 343, height: 301 }}
            speed={300}
            scale={{ x: 0.8, y: 0.55 }}
            animation={{ name: "animate-left-right", offset: 5 }}
          />
        </div>
        </div>




      </Page>
    </>
  );
}

export default Chatbot;
