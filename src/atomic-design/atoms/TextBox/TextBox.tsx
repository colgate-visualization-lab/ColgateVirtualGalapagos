import classNames from "classnames";
import React from "react";

export interface TextBoxProps
  extends Omit<React.HTMLProps<HTMLInputElement>, "onChange"> {
  onChange?: Function;
}

export default function TextBox({
  className,
  onChange,
  ...rest
}: TextBoxProps) {
  const classes = classNames(className, "bg-transparent inline-block");
  return (
    <span className="relative">
      <input
        className={classes}
        {...rest}
        onChange={(e) =>
          onChange && onChange({ [e.target.name]: e.target.value })
        }
      />
      <span
        aria-hidden={true}
        className="absolute bottom-0 left-0 h-0.5 w-full bg-black"
      />
    </span>
  );
}
