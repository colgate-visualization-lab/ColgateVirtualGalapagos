import React, { useState } from "react";
import { Modal, Text } from "../atomic-design/atoms";
import BaseModalWrapper from "../atomic-design/atoms/Modal/BaseModalWrapper";

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
      <div className="absolute right-7 space-y-7 h-180 w-15 bg-yellow-200 border-2 border-black">
        <span className="block">
          {/*Use <Image /> component instead of native HTML tags */}
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
            <img
              src="./images/coin_purse.png"
              height={50}
              width={50}
              onClick={openDoubloons}
            />
          </span>
        </button>
      </div>
    </div>
  );
}
