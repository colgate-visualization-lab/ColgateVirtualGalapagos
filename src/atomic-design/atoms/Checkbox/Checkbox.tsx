import React from "react";
import { GiCheckMark } from "react-icons/gi";
export interface CheckboxProps {
  label?: string;
  onChange?: Function;
  value: boolean;
}

export function CheckBox({ label, onChange, value }: CheckboxProps) {
  return (
    <label
      className="flex cursor-pointer"
      onClick={() => onChange && onChange(!value)}
    >
      {label}
      <span className="relative mx-2 items-center select-none flex">
        <span
          role="checkbox"
          aria-checked={value}
          tabIndex={0}
          aria-labelledby="chk-label"
          className="border border-gray-500 focus:outline-none w-4 h-4"
        >
          {value && (
            <GiCheckMark className="text-theme absolute mr-1 inset-0 text-lg" />
          )}
        </span>
      </span>
    </label>
  );
}

export default CheckBox
