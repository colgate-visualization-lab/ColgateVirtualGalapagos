import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export interface SceneProps {
  mesh: THREE.Mesh | THREE.Mesh[];
  camera: THREE.PerspectiveCamera;
}

export const Scene = ({ mesh, camera }: SceneProps) => {
  const [container, setContainer] = useState<HTMLDivElement>();

  const containerMountCb = (node: HTMLDivElement) => {
    if (node) {
      setContainer(node);
    }
  };

  var width = container?.offsetWidth || 0,
    height = container?.offsetWidth || 0;
  var scene: THREE.Scene, renderer: THREE.WebGLRenderer;

  const animationFrame = useRef<number>();

  function init() {
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setClearColor(0xffffff, 0);
    container?.appendChild(renderer.domElement);

    scene = new THREE.Scene();
    scene.add(camera);
    if (Array.isArray(mesh)) {
      mesh.forEach((m) => scene.add(m));
    } else {
      scene.add(mesh);
    }

    const onWindowResize = () => {
      if (!container) return;
      camera.aspect = container.offsetWidth / container.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.offsetWidth, container.offsetHeight);
    };
    window.addEventListener("resize", onWindowResize, false);
  }

  function animate() {
    animationFrame.current = requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  useEffect(() => {
    init();
    animate();
    return () => {
      animationFrame.current && cancelAnimationFrame(animationFrame.current);
    };
  }, [mesh, container]);

  return <div className="w-full h-full" ref={containerMountCb}></div>;
};
