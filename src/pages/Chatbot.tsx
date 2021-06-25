import React, { useState } from "react";
// import "./chat.css";
import Page from "../atomic-design/templates/Page";
import Image from "../atomic-design/atoms/Image/Image";
import turtleImage from "../assets/images/turtle.png";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";
import AnimatedSpriteSheet from "../atomic-design/molecules/AnimatedSpriteSheet/AnimatedSpriteSheet";
import fishSheet from "../assets/sprites/fish_one.png";
import fishTwoSheet from "../assets/sprites/fish_two.png";
import talkingTurtle from "../assets/sprites/speaking_turtle.png";
import useCanvas from "../test/useCanvas";
import SpeechBubble from "../atomic-design/molecules/SpeechBubble/SpeechBubble";
import GameBar from "../atomic-design/templates/GameBar";

// import { getTime } from "./chat";

//message input from user
// const UserMessage = ({ msg }: { msg: string }) => (
//   <ChatBubble color="bg-primary">
//     <span style={{ fontFamily: "body", fontSize: 23 }}>{msg}</span>
//   </ChatBubble>
// );

//time
const getTime = () => {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var n = hours + ":" + minutes;
  return n;
};

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
  const fishImage = new window.Image();
  fishImage.src = "/images/fish.png";

  const fishImage2 = new window.Image();
  fishImage2.src = "/images/fish1.png";
  const fishRef = useCanvas(
    (ctx: CanvasRenderingContext2D, frameCount: number) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      if (fishImage.complete && fishImage.naturalHeight !== 0) {
        ctx.drawImage(
          fishImage,
          (frameCount % (ctx.canvas.width + fishImage.width)) - fishImage.width,
          10
        );
        ctx.drawImage(
          fishImage,
          (((frameCount % ctx.canvas.width) + 0.9 * ctx.canvas.width) %
            (ctx.canvas.width + fishImage.width)) -
            fishImage.width,
          100
        );
      }
      if (fishImage2.complete && fishImage2.naturalHeight !== 0) {
        ctx.drawImage(
          fishImage2,
          (((frameCount % ctx.canvas.width) + 0.3 * ctx.canvas.width) %
            (ctx.canvas.width + fishImage2.width)) -
            fishImage2.width,
          50
        );
        ctx.drawImage(
          fishImage2,
          (((frameCount % ctx.canvas.width) + 0.7 * ctx.canvas.width) %
            (ctx.canvas.width + fishImage2.width)) -
            fishImage2.width,
          50
        );
      }
    },
    { isFullScreen: true, animate: true }
  );
  return (
    <Page color="bg-primary">
      <canvas
        ref={fishRef}
        className="fixed w-full h-auto left-0 top-10 z-20"
      />

      <div className="absolute left-0 transform translate-y-1/3 bottom-0 -scale-x-100 ">
        <Image className="h-1/2 bottom-0" src={turtleImage} alt="turtle" />
      </div>

      {/* <div className="absolute bottom-10 right-10 w-2/3 h-auto flex flex-col justify-center"> */}
      <GameBar className="w-100vw">
        <div className="absolute left-0 bottom-0 ">
          {/* <div style={{ fontFamily: "body" }}>{time}</div> */}
          <SpeechBubble
            text="Welcome to VG! What is your name?"
            size="md"
            position="right"
          />
        </div>

        {/* <ChatBubble color="bg-primary">
          <span style={{ fontFamily: "body", fontSize: 23 }}>
            Welcome to Virtual Galapagos! What is your name?
          </span>
        </ChatBubble> */}

        {/* <div className="float-right place-self-end">
          {userMessages.map((msg) => (
            <UserMessage msg={msg} />
          ))}
        </div> */}

        <div
          style={{
            display: "flex",
            float: "right",
            boxSizing: "border-box",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "transparent",
            borderRadius: 10,
            padding: 10,
          }}
        >
          <div id="userInput" style={{ width: "75%" }}>
            <input
              onChange={(event) => setTempMessage(event.target.value)}
              value={tempMessage}
              className="input-box"
              style={{
                float: "right",
                boxSizing: "border-box",
                borderRadius: 10,
                padding: 10,
                fontSize: 23,
                fontFamily: "body",
                backgroundColor: "transparent",
                borderBottom: "1px solid",
              }}
              type="text"
              placeholder="Tap 'Enter' to send a message"
            />
            <p></p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              boxSizing: "border-box",
              width: "25%",
              float: "right",
              fontSize: 23,
            }}
          >
            <button onClick={handleHeartClick} id="heart-icon">
              <AiFillHeart className="text-red-500" />
            </button>
            <button onClick={handleSend} id="chat-icon">
              <BiPaperPlane className="text-gray-500" />
            </button>
          </div>
        </div>
        {/* </div> */}

        {/* 
      <div className="absolute bottom-10 left-20">
        <AnimatedSpriteSheet
          fileName={talkingTurtle}
          bounds={{ x: 0, y: 0, width: 516, height: 306 }}
          frame={{ width: 172, height: 153 }}
          speed={400}
          isPlaying={isAnimating}
        />
      </div> */}
      </GameBar>
    </Page>
  );
}

export default Chatbot;
