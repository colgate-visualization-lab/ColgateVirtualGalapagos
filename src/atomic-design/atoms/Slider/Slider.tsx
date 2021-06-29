import React from "react";
import { GiCheckMark } from "react-icons/gi";
export interface SliderProps {
  label?: string;
  onChange?: Function;
  value: boolean;
}

export default function Slider({ label, onChange, value }: SliderProps) {
  return (
    // <label
    //   className="flex cursor-pointer"
    //   onClick={() => onChange && onChange(!value)}
    // >
    //   {label}
    //   <span className="relative mx-2 items-center select-none flex">
    //     <span
    //       role="slider"
    //       aria-checked={value}
    //       tabIndex={0}
    //       aria-labelledby="day-label"
    //       aria-valuenow={1}
    //       aria-valuemin={1}
    //       aria-valuemax={7}
    //       aria-valuetext="Sunday"
    //       className="border border-gray-500 focus:outline-none w-4 h-4"
    //     >
    //       {value && (
    //         <GiCheckMark className="text-theme absolute mr-1 inset-0 text-lg" />
    //       )}
    //     </span>
    //   </span>
    // </label>
    <div className="aria-widget-text-slider">
  <div id="idFan" className="label">
    Fan
  </div>
  <div className="rail w-160">
    <div id="idFanThumb"
         role="slider"
         tabIndex={0}
         className="thumb"
         aria-valuemin={0}
         aria-valuenow={0}
         aria-valuemax={3}
         aria-valuetext="Off"
         aria-labelledby="idFan"
         aria-orientation="horizontal"></div>
    <div className="value">
      Off
    </div>
    <div className="value">
      Low
    </div>
    <div className="value">
      High
    </div>
    <div className="value">
      Auto
    </div>
  </div>
</div>
  );
}
