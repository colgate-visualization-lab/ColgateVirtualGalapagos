import classNames from "classnames";
import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  onDiscard?: React.MouseEventHandler<HTMLDivElement>;
  children?: React.ReactNode;
}

const Overlay = ({ children, onDiscard }: ModalProps) => {
  const classes = classNames(
    "h-1/2 w-3/4 max-w-lg max-h-96",
    "filter shadow-2xl bg-primary-light"
  );

  const wrapperClasses = classNames(
    "fixed h-full w-full top-0 left-0",
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
