import React from "react";
import Page from "../atomic-design/templates/Page";
import Image from "../atomic-design/atoms/Image/Image";
import penguinImage from "../assets/images/penguin.png";
import { Text } from "../atomic-design/atoms";
import AnimatedSpriteSheet from "../atomic-design/molecules/AnimatedSpriteSheet/AnimatedSpriteSheet";
import birdSheet from "../assets/sprites/bird.png";
import blueBirdSheet from "../assets/sprites/blue_bird.png";

export default function NotFoundPage() {
  return (
    <Page color="bg-primary">
      <div className="absolute top-0 left-0 w-full">
        <div className="relative top-5 w-full">
          <AnimatedSpriteSheet
            filename={birdSheet}
            initialFrame={0}
            bounds={{ x: 0, y: 0, width: 1029, height: 903 }}
            frame={{ width: 343, height: 301 }}
            speed={200}
            scale={{ x: 0.8, y: 0.55 }}
            animation={{ name: "animate-left-right", offset: 0 }}
          />
        </div>
        <div className="relative top-1 w-full">
          <AnimatedSpriteSheet
            filename={birdSheet}
            initialFrame={3}
            bounds={{ x: 0, y: 0, width: 1029, height: 903 }}
            frame={{ width: 343, height: 301 }}
            speed={200}
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
            speed={250}
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
            speed={250}
            scale={{ x: 0.8, y: 0.55 }}
            animation={{ name: "animate-left-right", offset: 5 }}
          />
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center top-20">
        <div className="w-40 lg:w-50">
          <Image src={penguinImage} alt="penguin" />
        </div>
        <Text
          type="title"
          size="lg"
          value="under construction"
          color="text-dark"
        />
      </div>
    </Page>
  );
}
