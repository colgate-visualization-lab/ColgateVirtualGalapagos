import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Scene } from "../../atoms/ThreeScene/ThreeScene";

export interface SpriteSheetTextureProps {
  src: string;
  framesX: number;
  framesY: number;
  frameDelay: number;
  endFrame?: number;
}

const getCanvasTexture = function ({
  src,
  framesX,
  framesY,
  frameDelay,
  endFrame,
}: SpriteSheetTextureProps) {
  var timer,
    frameWidth = 0,
    frameHeight = 0,
    x = 0,
    y = 0,
    count = 0,
    lastFrame = endFrame || framesX * framesY,
    canvas = document.createElement("canvas"),
    ctx = canvas.getContext("2d"),
    canvasTexture = new THREE.CanvasTexture(canvas),
    img = new Image();
  img.onload = function () {
    canvas.width = frameWidth = img.width / framesX;
    canvas.height = frameHeight = img.height / framesY;
    timer = setInterval(nextFrame, frameDelay);
  };
  img.src = src;

  function nextFrame() {
    count++;

    if (count >= lastFrame) {
      count = 0;
    }

    x = (count % framesX) * frameWidth;
    y = ((count / framesX) | 0) * frameHeight;

    ctx?.clearRect(0, 0, frameWidth, frameHeight);
    ctx?.drawImage(
      img,
      x,
      y,
      frameWidth,
      frameHeight,
      0,
      0,
      frameWidth,
      frameHeight
    );

    canvasTexture.needsUpdate = true;
  }

  return canvasTexture;
};

export const ThreeAnimatedTexture = ({ src }: { src: string }) => {
  const [mesh, setMesh] = useState<THREE.Mesh>();

  var width = window.innerWidth,
    height = window.innerHeight / 2;

  const camera = new THREE.PerspectiveCamera(50, width / height, 1, 2000);
  camera.position.z = 500;

  useEffect(() => {
    if (src) {
      const texture = getCanvasTexture({
        src,
        framesX: 4,
        framesY: 4,
        frameDelay: 100,
        endFrame: 16,
      });
      var material = new THREE.MeshBasicMaterial({
        map: texture,
      });
      const geometry = new THREE.BoxGeometry(200, 200, 200);
      const _mesh = new THREE.Mesh(geometry, material);
      setMesh(_mesh);
    }
  }, [src]);

  return mesh ? <Scene camera={camera} mesh={mesh} /> : <div>Loading...</div>;
};
