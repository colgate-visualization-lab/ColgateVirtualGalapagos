import Page from "../atomic-design/templates/Page";
import React, { useState } from "react";
import { StaticAnimal, Text } from "../atomic-design/atoms";
import SpeechBubble from "../atomic-design/molecules/SpeechBubble/SpeechBubble";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";
import { Character } from "../atomic-design/organisms";

// function Wrapper() {
//   function handleSubmit(userMessage: string) {
//     //handle send logic
//   }
//   return <SignUp onSend={handleSubmit} />;
// }

const signupQuestion =
  "I'll need your email and\npassword to remember who you are";

function SignUp({ onSend }: { onSend: Function }) {
  const [tempMessage, setTempMessage] = useState<string>("");
  const [userMessages, setUserMessages] = useState<any[]>([]);
  // let [isAnimating, setAnimating] = useState(true);
  const [showInfo, setShowInfo] = useState(false);

  const UserMessage = ({ msg }: { msg: string }) => (
    <Character name="carlos" speech={msg} speechPosition="left" />
  );

  const BotMessage = ({ msg }: { msg: string }) => (
    <Character name="alberto" speech={msg} speechPosition="right" />
  );

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

  return (
    <Page transition="animate-fade-in" color="bg-primary">
      <div className="fixed z-20 top-10">
        <Text
          text="Sign Up for Adventure!"
          color="text-dark"
          type="heading"
          size="lg"
        />
      </div>
      <div className="flex mt-32 w-full md:w-4/5 p-5 xl:w-3/5 2xl:w-2/5 items-center justify-center">
        <div
          className={"fixed left-0 bottom-0 animate-slide-up"}
          onAnimationEnd={() => setShowInfo(true)}
        >
          {showInfo && (
            <div className="fixed left-1/4 bottom-1/4 translate-y-1/4">
              <Character speech={signupQuestion} name="alberto" />
            </div>
          )}
        </div>
        <div className="fixed right-0 bottom-1/4 w-md">
          <div className="w-full h-full p-2 lg:p-10 flex flex-col h-full justify-between">
            <Character
              speech="My email is <<email>>, and password can be <<password>>"
              name="carlos"
              speechPosition="left"
            />
          </div>
        </div>
        <div className="fixed right-0 top-3/4 h-1/12 w-6/12">
          <div className="w-full h-full p-2 flex flex-row justify-evenly">
            <input
              className="w-2/3 pl-5 rounded-full bg-transparent outline-none border-b-2 border-primary-light hover:border-opacity-70"
              onChange={(event) => setTempMessage(event.target.value)}
              value={tempMessage}
              type="text"
              placeholder="Type your message"
            />
            <button onClick={handleHeartClick} id="heart-icon">
              <AiFillHeart className="text-red-500 hover:text-opacity-70" />
            </button>
            <button onClick={handleSend} id="chat-icon">
              <BiPaperPlane className="text-gray-500 hover:text-opacity-70" />
            </button>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default SignUp;
