import React from "react";
import Image from "../Image/Image";
import { GiTurtle } from "react-icons/gi";
const penguinImage = "/images/penguin.png";
export interface SliderProps {
  label?: string;
  onChange?: Function;
  value: number;
}

export default function Slider({ label, onChange, value }: SliderProps) {
  return (
    // <label
    //   className="flex cursor-pointer"
    //   // onClick={() => onChange && onChange(!value)}
    // >
    //   {label}
    //   <span className="relative mx-2 items-center select-none flex">
    //     <span
    //       role="slider"
    //       tabIndex={0}
    //       aria-valuemin={0}
    //       aria-valuenow={value}
    //       aria-valuemax={100}
    //       aria-labelledby="sld-label"
    //       className="border border-gray-500 focus:outline-none w-40"
    //     >
    //       {value && (
    //         // <div >
    //         //   <Image src={penguinImage} alt="penguin" className="text-theme absolute mr-1 inset-0 text-lg"/>
    //         // </div>
    //         <GiTurtle className="text-theme absolute mr-1 inset-0 text-lg" />
    //       )}
    //     </span>
    //   </span>
    // </label>

    <label
      className="flex cursor-pointer"
      onClick={() => onChange && onChange(!value)}
    >
    {label}
    {value &&(
     <div className="ml-5 py-1 relative w-60">
        <div className="h-2 bg-gray-200 rounded-full">
            <div className="absolute h-2 rounded-full bg-teal-600 w-0" ></div>
            <div className="absolute h-6 flex items-center justify-center w-6 rounded-full bg-transparent -ml-2 top-0 cursor-pointer" >
              <Image src={penguinImage} alt="penguin" />
                <div className="relative -mt-2 w-1">
                    <div className="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full">
                        <div className="relative shadow-md">
                            {/* <div className="bg-black -mt-8 text-white truncate text-xs rounded py-1 px-4">5</div> */}
                            <svg className="absolute text-black w-full h-2 left-0 top-100" x="0px" y="0px" viewBox="0 0 255 255" >
                                {/* <polygon className="fill-current" points="0,0 127.5,127.5 255,0"></polygon> */}
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute text-gray-800 -ml-1 bottom-0 left-0 -mb-6">0</div>
            <div className="absolute text-gray-800 -mr-1 bottom-0 right-0 -mb-6">100</div>
        </div>
      </div>
  )}
  </label>
  );
}
