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
import Islands from "../test/Islands";
import DrawingPanel from "../test/DrawingPanel"
import Button from "../atomic-design/atoms/Button/Button"

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
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [isFieldBookVisible, setIsFieldBookVisible] = useState(false);
  const [isTravelLogVisible, setIsTravelLogVisible] = useState(false);
  const [isDrawingPanelVisible, setIsDrawingPanelVisible] = useState(false);

  const toggleBackpack = () => {
    setBackpackOpen(!backpackOpen);
    console.log(backpackOpen);
  };

  const openDoubloons = () => {
    setDoubloonsOpen(!doubloonsOpen);
    console.log(doubloonsOpen);
  };

  const toggleDrawingPanel = () => {
    setIsDrawingPanelVisible(!isDrawingPanelVisible);
    console.log(backpackOpen);
  };

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };
  
  const toggleMap = () => {
      setIsMapVisible((wasModalVisible) => !wasModalVisible);
  }

  const toggleFieldbook = () => {
    setIsFieldBookVisible((wasModalVisible) => !wasModalVisible);
}

const toggleTravelLog = () => {
    setIsTravelLogVisible((wasModalVisible) => !wasModalVisible);
}

  if (!backpackOpen) {
    return (
      <div className="fixed top-2 right-2 z-40">
          {/* <DrawingPanel/> */}
        {
          <img
            onClick={toggleBackpack}
            src={
              "./images/" +
              (!backpackOpen ? "backpack" : "backpack_open") +
              ".png"
            }
          />
        }
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
        height={100} width={100}
      />
      <div className="flex-col justify-between space-y-5 p-2 h-200 w-20 bg-yellow-200 border-2 border-black ml-3 mt-2">
        <span className="block">
        <button onClick={toggleTravelLog}>Travel Log
          <Image src={travelLog} />
          {isTravelLogVisible && (
            <Modal onDiscard={() => setIsModalVisible(false)}>
                <Text
                    className="m-2"
                    text="Look at all your progress!"
                    color="text-dark"
                    type="title"
                />
                <div className="rounded-lg bg-gray-100 w-10/12 h-1/3 mt-8 ml-20">
                    
                </div>

                <div className="rounded-lg bg-gray-100 w-10/12 h-1/3 mt-12 ml-20">
                
                </div>

            </Modal>
          )}
        </button> 
        </span>
        <span className="block">
        <button onClick={toggleFieldbook}>Field Book
          <Image src={fieldBook}/>
          {isFieldBookVisible && (
            <Modal onDiscard={() => setIsModalVisible(false)}>
                <div className="bg-yellow-300 h-full rounded"> 
                {/*can get refactored as its own component*/}
                    <div className="flex-row pt-3 space-x-4">
                    <button className="bg-yellow-100 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded border-2 border-black">Table of Contents</button>
                    <button className="bg-red-500 hover:bg-red-700 text-black font-bold py-2 px-4 rounded border-2 border-black">Volcano</button>
                    <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded border-2 border-black">Iguana</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded border-2 border-black">Currents</button>
                    <button className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded border-2 border-black">Island Life Cycle</button>
                    <button className="bg-purple-400 hover:bg-purple-700 text-black font-bold py-2 px-4 rounded border-2 border-black">Eruption</button>
                    
                    <div className="m-3 ml-30">
                        <Button onClick={toggleDrawingPanel} size="lg" variant="wooden">
                            <Text text="Start Drawing" color="text-dark" />
                            {isDrawingPanelVisible && (
                                <Modal onDiscard={() => setIsDrawingPanelVisible(false)}>
                                    <DrawingPanel/>
                                </Modal>
                            )}
                        </Button>
                    </div>
                </div>
        
                <div className="flex flex-row h-full object-contain">
                    <div className="bg-gray-100 rounded w-1/2 h-3/4 m-4 mb-3">
                        {/* observations will be recorded on the left side */}
                            <Text text="Write down observations here:" color="text-dark" className="border-black bg-gray-400" />
                            <form>
                                <input className="h-full w-4/5"/>
                            </form>
                    </div>
                    {/* Was thinking this right side would be a gallery of the user's drawings, but need backend */}
                    <div className="bg-gray-100 rounded w-1/2 h-3/4 m-4 mb-3"/>
                </div>           
                </div>          
            </Modal>
          )}
        </button>
        </span>
        <span className="block">
        <button onClick={toggleMap}> Map
        <Image src={map}/>
        {isMapVisible && (
        <Modal onDiscard={() => setIsModalVisible(false)}>
            <div className="mt-3">
                <Text
                    text="Map of the Galapagos"
                    color="text-dark"
                    type="title"
                />
            </div>
            <Islands className="object-contain justify-center h-full w-full pr-4 pb-14 mb-5 border-black border-3" />
        </Modal>
        )}
        </button>
        </span> 
        <span className="block">
        <button onClick={toggleModal}> Coin Purse
        <Image src={coinPurse} />
        {isModalVisible && (
        <Modal onDiscard={() => setIsModalVisible(false)}>
          <div className="mt-5">
              <Text
                text="Doubloon information"
                color="text-dark"
                type="title"
                />
           <div className="flex">
            <div className="h-1/2 w-1/2 mt-20 ml-10 bg-yellow-200 rounded border-4 border-black">
                <div className="justify-center object-middle p-2">
                <Image src={safe}/>
                </div>
                <Text
                    text="Current Doubloon Count: 0"
                    color="text-dark"
                    type="heading"
                />
            </div>          
            <div className="h-20 w-20 mt-36 ml-24">
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
