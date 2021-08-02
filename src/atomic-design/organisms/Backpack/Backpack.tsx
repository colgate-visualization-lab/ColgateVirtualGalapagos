import classNames from "classnames";
import React from "react";
import { useState } from "react";
import { Image, Modal } from "../../atoms";
import CoinPurse from "../../molecules/BackPackItems/CoinPurse";
import Fieldbook from "../../molecules/BackPackItems/Fieldbook";
import Map from "../../molecules/BackPackItems/Map";
import Travelogue from "../../molecules/BackPackItems/Travelogue";
import ClosedIcon from "./ClosedIcon";
import OpenIcon from "./OpenIcon";

const items = ["fieldbook", "travelogue", "map", "coin_purse"] as const;

const itemNameToComponent = {
  fieldbook: <Fieldbook />,
  travelogue: <Travelogue />,
  map: <Map />,
  coin_purse: <CoinPurse />,
};

export default function Backpack() {
  const [open, setOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState<typeof items[number]>();

  const Icon = open ? OpenIcon : ClosedIcon;

  const menuClasses = classNames(
    "transition-max-height duration-200 ease-in-out overflow-hidden",
    {
      "max-h-80": open,
      "max-h-0": !open,
    }
  );

  return (
    <div>
      <Icon
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      />

      <ul role="menu" className={menuClasses}>
        {items.map((item) => (
          <>
            <li
              className="flex cursor-pointer w-full my-2 items-center justify-center"
              key={item}
              role="menuitem"
              aria-haspopup="true"
              onClick={() => setCurrentTab(item)}
            >
              <p className="sr-only">{item}</p>
              <div className="w-3/4">
                <Image src={`/images/${item}.png`} coverType="contain" />
              </div>
            </li>
            {currentTab === item && (
              <Modal
                size="lg"
                color="bg-accent-primary"
                onDiscard={() => setCurrentTab(undefined)}
              >
                {itemNameToComponent[item]}
              </Modal>
            )}
          </>
        ))}
      </ul>
    </div>
  );
}
