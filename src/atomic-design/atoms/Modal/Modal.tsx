import classNames from "classnames";
import React from "react";
import ReactDOM from "react-dom";
import { ValidBgColors } from "../../../types";

export interface ModalProps {
  onDiscard?: React.MouseEventHandler<HTMLDivElement>;
  children?: React.ReactNode;
  size?: "md" | "lg";
  color?: ValidBgColors;
}

const Overlay = ({ children, onDiscard, size = "md", color }: ModalProps) => {
  const classes = classNames(
    "flex items-center justify-center",
    "h-1/2 w-3/4",
    color,
    {
      "filter shadow-2xl": color != null,
      "max-w-lg max-h-96": size === "md",
      "max-w-2xl max-h-104": size === "lg",
    }
  );

  const wrapperClasses = classNames(
    "fixed h-full w-full z-50 top-0 left-0",
    "flex items-center text-center justify-center",
    "bg-dark bg-opacity-80",
    "animate-fade-in cursor-pointer"
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onDiscard}
      className={wrapperClasses}
    >
      <div className={classes} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

const Modal = (props: ModalProps) => {
  return ReactDOM.createPortal(
    <Overlay {...props} />,
    document.getElementById("modal-root")!
  );
};

export default Modal;
