import React from "react";
import { Character } from "../atomic-design/organisms";
import GameBar from "../atomic-design/templates/GameBar";
import Page from "../atomic-design/templates/Page";
import Islands from "../test/Islands";
const birdSheet = "/sprites/bird.png";
const blueBirdSheet = "/sprites/blue_bird.png";

export default function Introduction() {
  return (
    <Page className="bg-ocean-texture">
      <Islands className="h-4/6 w-full fixed top-0 left-0 p-10" />
      <GameBar className="h-2/6">
        <div className="absolute left-0 transform -translate-x-1/2">
          <Character
            audio="/audio/welcome.mp3"
            speech="Welcome to the Galapagos"
            filename={birdSheet}
            initialFrame={0}
            bounds={{ x: 0, y: 0, width: 1029, height: 903 }}
            frame={{ width: 343, height: 301 }}
            speed={200}
            scale={{ x: 0.8, y: 0.55 }}
          />
        </div>
        <div className="absolute right-0 transform translate-x-1/2">
          <Character
            // audio="/audio/so_cool.mp3"
            className="transform -scale-x-100"
            speechPosition="left"
            speech="Thank you green birdie"
            filename={blueBirdSheet}
            initialFrame={0}
            bounds={{ x: 0, y: 0, width: 1029, height: 903 }}
            frame={{ width: 343, height: 301 }}
            speed={200}
            scale={{ x: 0.8, y: 0.55 }}
          />
        </div>
      </GameBar>
    </Page>
  );
}
