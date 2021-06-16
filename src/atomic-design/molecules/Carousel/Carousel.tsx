import classNames from "classnames";
import React, { useEffect, useState } from "react";
import Arrow from "./Arrow";

const Slide = ({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
}) => {
  const classes = classNames(
    className,
    "h-full transition-normal absolute items-center justify-center flex object-cover"
  );
  return (
    <div onClick={onClick} className={classes}>
      {children}
    </div>
  );
};

export default function Carousel({
  className,
  children,
  onSelect,
}: {
  className: string;
  children?: React.ReactNode;
  onSelect?: React.MouseEventHandler;
}) {
  const classes = classNames(
    className,
    "w-full h-40 max-w-2xl select-none flex relative",
    {}
  );

  const [centerIndex, setCenterIndex] = useState(0);
  const [slides, setSlides] = useState<any>([]);

  useEffect(() => {
    const c = React.Children.toArray(children);
    const leftIndex = centerIndex === 0 ? c.length - 1 : centerIndex - 1;
    const rightIndex = centerIndex === c.length - 1 ? 0 : centerIndex + 1;
    setSlides([c[centerIndex], c[leftIndex], c[rightIndex]]);
  }, [centerIndex]);

  const handleLeftClick = () => {
    setCenterIndex((i) =>
      i === 0 ? React.Children.count(children) - 1 : i - 1
    );
  };

  const handleRightClick = () => {
    setCenterIndex((i) =>
      i === React.Children.count(children) - 1 ? 0 : i + 1
    );
  };

  const leftClasses = "left-0 w-1/6 opacity-30 transform scale-75";
  const centerClasses =
    "left-1/2 transform -translate-x-1/2 w-4/6 scale-110 cursor-pointer";
  const rightClasses = "right-0 w-1/6 opacity-30 transform scale-75";

  return (
    <div className={classes}>
      <Slide className={leftClasses}>{slides[1]}</Slide>

      <Slide className={centerClasses} onClick={onSelect}>
        <Arrow
          className="transform absolute z-30 left-0 translate-x-full w-12"
          onClick={handleLeftClick}
          variant="left"
        />
        {slides[0]}
        <Arrow
          className="right-0 absolute transform -translate-x-full z-30 w-12"
          onClick={handleRightClick}
          variant="right"
        />
      </Slide>
      <Slide className={rightClasses}>{slides[2]}</Slide>
    </div>
  );
}
