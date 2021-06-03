import React, { useState } from "react";
import AnimatedSpriteSheet from "../atomic-design/molecules/AnimatedSpriteSheet/AnimatedSpriteSheet";
import characterSheet from "../assets/sprites/attacking_soldier.png";
import birdSheet from "../assets/sprites/bird.png";
import blueBirdSheet from "../assets/sprites/blue_bird.png";

export default function DemoAnimations() {
  let [isAnimating, setAnimating] = useState(true);
  const buttonClasses = "text-xl mt-5 focus:outline-none";
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <AnimatedSpriteSheet
          filename={characterSheet}
          bounds={{ x: 0, y: 0, width: 516, height: 306 }}
          frame={{ width: 172, height: 153 }}
          speed={200}
          isPlaying={isAnimating}
        />
        <button
          className={buttonClasses}
          onClick={() => setAnimating(!isAnimating)}
        >
          {isAnimating ? "Freeze!" : "Unfreeze!"}
        </button>
      </div>
      <div className="absolute top-0 left-0 w-full">
        <div className="relative top-5 w-full">
          <AnimatedSpriteSheet
            filename={birdSheet}
            initialFrame={0}
            bounds={{ x: 0, y: 0, width: 1029, height: 903 }}
            frame={{ width: 343, height: 301 }}
            speed={300}
            isPlaying={isAnimating}
            scale={{ x: 0.8, y: 0.55 }}
            animation={{ name: "animate-left-right", offset: 0 }}
          />
        </div>
        <div className="relative top-0 w-full">
          <AnimatedSpriteSheet
            filename={birdSheet}
            initialFrame={2}
            bounds={{ x: 0, y: 0, width: 1029, height: 903 }}
            frame={{ width: 343, height: 301 }}
            speed={300}
            isPlaying={isAnimating}
            scale={{ x: 0.8, y: 0.55 }}
            animation={{ name: "animate-left-right", offset: 5 }}
          />
        </div>
        <div className="relative top-1 w-full">
          <AnimatedSpriteSheet
            filename={birdSheet}
            initialFrame={3}
            bounds={{ x: 0, y: 0, width: 1029, height: 903 }}
            frame={{ width: 343, height: 301 }}
            speed={300}
            isPlaying={isAnimating}
            scale={{ x: 0.8, y: 0.55 }}
            animation={{ name: "animate-left-right", offset: 40 }}
          />
        </div>
        <div className="relative top-3 w-full">
          <AnimatedSpriteSheet
            initialFrame={0}
            filename={blueBirdSheet}
            bounds={{ x: 0, y: 0, width: 1029, height: 903 }}
            frame={{ width: 343, height: 301 }}
            speed={200}
            isPlaying={isAnimating}
            scale={{ x: 0.8, y: 0.55 }}
            animation={{ name: "animate-left-right", offset: 15 }}
          />
        </div>
        <div className="relative top-10 w-full">
          <AnimatedSpriteSheet
            initialFrame={1}
            filename={blueBirdSheet}
            bounds={{ x: 0, y: 0, width: 1029, height: 903 }}
            frame={{ width: 343, height: 301 }}
            speed={200}
            isPlaying={isAnimating}
            scale={{ x: 0.8, y: 0.55 }}
            animation={{ name: "animate-left-right", offset: 5 }}
          />
        </div>
        <div className="relative top-6 w-full">
          <AnimatedSpriteSheet
            initialFrame={2}
            filename={blueBirdSheet}
            bounds={{ x: 0, y: 0, width: 1029, height: 903 }}
            frame={{ width: 343, height: 301 }}
            speed={200}
            isPlaying={isAnimating}
            scale={{ x: 0.8, y: 0.55 }}
            animation={{ name: "animate-left-right", offset: 30 }}
          />
        </div>
      </div>
    </>
  );
}
