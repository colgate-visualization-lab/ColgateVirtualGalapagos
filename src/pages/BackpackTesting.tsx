import React, { useState } from "react";
import { Modal, Text } from "../atomic-design/atoms";
import BaseModalWrapper from "../atomic-design/atoms/Modal/BaseModalWrapper";
const coinPurse = "/images/coin_purse.png";
const map = "/images/map.png";
const fieldBook = "/images/field_book.png";
const travelLog = "/images/travel_log.png";
const safe = "/images/safe.png";
const mib = "/images/message_in_bottle.png";
import Image from "../atomic-design/atoms/Image/Image";

/* export interface backpackContents{
    name: string;
    description: string;

} */

export default function BackpackTesting(
  {
    /* name,
    description,
    ...rest
}: backpackContents */
  }
) {
  const [backpackOpen, setBackpackOpen] = useState(false);
  const [doubloonsOpen, setDoubloonsOpen] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleBackpack = () => {
    setBackpackOpen(!backpackOpen);
    console.log(backpackOpen);
  };

  const openDoubloons = () => {
    setDoubloonsOpen(!doubloonsOpen);
    console.log(doubloonsOpen);
  };

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };

  if (!backpackOpen) {
    return (
      <div className="fixed top-2 right-2 z-40">
        {
          <img
            onClick={toggleBackpack}
            src={
              "./images/" +
              (!backpackOpen ? "backpack" : "backpack_open") +
              ".png"
            }
            height={100}
            width={100}
          />
        }
        <button onClick={toggleModal}>Modal test</button>
        {isModalVisible && (
          <Modal onDiscard={() => setIsModalVisible(false)}>
            {/* This could be refactored into its own component <Header /> or something like that */}
            <div className="mt-5">
              <Text
                text="Doubloon information"
                color="text-dark"
                type="title"
              />
            <Image src={coinPurse}/>
            </div>
            {/*You can add anything as a child to modal and it'll show up in there. Feel free to adjust its size accoring to the content we need */}
          </Modal>
        )}
      </div>
    );
  }
  return (
    <div className="fixed top-2 right-2 z-40">
      <img
        onClick={toggleBackpack}
        src={
          "./images/" + (!backpackOpen ? "backpack" : "backpack_open") + ".png"
        }
        height={100}
        width={100}
      />
      <div className="flex-col justify-between space-y-5 p-2 h-200 w-20 bg-yellow-200 border-2 border-black ml-3 mt-2">
        <span className="h-10 w-10">
          {/*Use <Image /> component instead of native HTML tags */}
          <Image className="object-contain" src={travelLog} />
        </span>
        <span className="block">
          <Image src={fieldBook}/>
        </span>
        <span className="block">
          <Image src={map}/>
        </span>
        <span className="block">
        <button onClick={toggleModal}>
        <Image src={coinPurse} />
        {isModalVisible && (
        <Modal onDiscard={() => setIsModalVisible(false)}>
          <div className="mt-5">
              <Text
                text="Doubloon information"
                color="text-dark"
                type="title"
              />

             {/* <div className="bg-blue-300 w-16 h-16"></div> */}
           <div className=" flex">
            <div className="h-40 w-40 mt-14 ml-10">
                <Image src={safe}/>
                <Text
                    text="Current Doubloon Count: 0"
                    color="text-dark"
                    type="heading"
                />
            </div>          
            <div className="h-20 w-20 mt-10 ml-24">
                <div className="flex">
                <Image className="object-contain" src={mib}/>
     
                <Text
                    className="ml-6 mt-20"
                    text="Find bottles to earn more doubloons!"
                    color="text-dark"
                    type="body"
                />
                </div>
            </div>
            </div>
            </div>
            {/*You can add anything as a child to modal and it'll show up in there. Feel free to adjust its size accoring to the content we need */}
          </Modal>
        )}
        </button>
        </span>
      </div>
    </div>
  );
}
