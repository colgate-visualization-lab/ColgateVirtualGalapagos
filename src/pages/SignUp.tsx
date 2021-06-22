import Page from "../atomic-design/templates/Page";
import React, { useState } from "react";
import { StaticAnimal, Text } from "../atomic-design/atoms";
import Image from "../atomic-design/atoms/Image/Image";
import AnimatedSpriteSheet from "../atomic-design/molecules/AnimatedSpriteSheet/AnimatedSpriteSheet";
import ChatBubble from "../atomic-design/templates/ChatBubble";
import useCanvas from "../test/useCanvas";
import SpeechBubble from "../atomic-design/molecules/SpeechBubble/SpeechBubble";
import GameBar from "../atomic-design/templates/GameBar";
import turtleImage from "../assets/images/turtle.png";
import fishSheet from "../assets/sprites/fish_one.png";
import fishTwoSheet from "../assets/sprites/fish_two.png";
import talkingTurtle from "../assets/sprites/speaking_turtle.png";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";

// function Wrapper() {
//   function handleSubmit(userMessage: string) {
//     //handle send logic
//   }
//   return <SignUp onSend={handleSubmit} />;
// }

function SignUp({ onSend }: { onSend: Function }) {
  const [tempMessage, setTempMessage] = useState<string>("");
  const [userMessages, setUserMessages] = useState<any[]>([]);
  const [botMessages, setBotMessage] = useState<any[]>(["What is your email?"]);
  let [isAnimating, setAnimating] = useState(true);

  const UserMessage = ({ msg }: { msg: string }) => (
    <SpeechBubble text={msg}
      color="text-dark" size="md" 
      position="left"
    />
  );

  const BotMessage = ({ msg }: { msg: string }) => (
    <SpeechBubble text={msg}
      color="text-dark" size="md" 
      position="right"
    />
  );
  
  function handleHeartClick(event: any) {
    setUserMessages([
      ...userMessages,
      <AiFillHeart className="text-red-500" />,
    ]);
  }
  
  function handleSend(event: any) {
    setUserMessages([...userMessages, tempMessage]);
    setBotMessage([...botMessages,"What is your password?"]);
    setTempMessage("");
    onSend(tempMessage);
    onSend(botMessages);
  }

  return <Page transition="animate-fade-in" color="bg-primary">
    <div className="fixed z-20 top-10">
      <Text
        text="Sign Up for Adventure!"
        color="text-dark"
        type="heading"
       size="lg"
      />
    </div>
    <div className="bg-primary-dark flex mt-32 w-full md:w-4/5 p-5 xl:w-3/5 2xl:w-2/5 items-center justify-center">
      <div className="fixed left-0 bottom-0 transform translate-y-1/3">
        <Image className=" -scale-x-100" src={turtleImage} alt="turtle" />
        {/* <SpeechBubble text="Welcome to VG! What is your email?" 
          color="text-dark" size="md" 
          position="right"
        /> */}
        {botMessages.map((msg) => (
        <BotMessage msg={msg} />
        ))}
      </div>
      <div className="bg-primary-light fixed right-0 bottom-1/4 w-md">
        <div className="w-full h-full p-2 lg:p-10 flex flex-row h-full justify-between">
            {userMessages.map((msg) => (
            <UserMessage msg={msg} />
            ))}
        </div>
      </div>
      <div className="bg-primary-light fixed right-0 top-3/4 h-1/12 w-6/12">
        <div className="w-full h-full p-2 flex flex-row justify-evenly">
          <input className="border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent"
            onChange={(event) => setTempMessage(event.target.value)}
            value={tempMessage}
            type="text"
            placeholder="Type your message"/>
          <button onClick={handleHeartClick} id="heart-icon">
            <AiFillHeart className="text-red-500" />
          </button>
          <button onClick={handleSend} id="chat-icon">
              <BiPaperPlane className="text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  </Page>
}
export default SignUp;
