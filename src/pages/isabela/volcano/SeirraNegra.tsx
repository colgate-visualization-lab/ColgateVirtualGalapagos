import React, { useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import Conversation, {
  ScriptType,
} from "../../../atomic-design/templates/Conversation";
import GameBar from "../../../atomic-design/templates/GameBar";
import Page from "../../../atomic-design/templates/Page";

const raycaster = new THREE.Raycaster();

let scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer;

function createSkyboxMaterialArray() {
  const loader = new THREE.TextureLoader();
  let sides = ["px", "nx", "py", "ny", "pz", "nz"];
  return sides.map(
    (side) =>
      new THREE.MeshBasicMaterial({
        map: loader.load(`images/env_maps/${side}.png`),
        side: THREE.BackSide,
      })
  );
}

function getMousePos(e: React.MouseEvent) {
  return { x: e.clientX, y: e.clientY };
}

function getMouseDegrees(x: number, y: number, degreeLimit: number) {
  let dx = 0,
    dy = 0,
    xdiff,
    xPercentage,
    ydiff,
    yPercentage;

  let w = { x: window.innerWidth, y: window.innerHeight };

  // Left (Rotates neck left between 0 and -degreeLimit)

  // 1. If cursor is in the left half of screen
  if (x <= w.x / 2) {
    // 2. Get the difference between middle of screen and cursor position
    xdiff = w.x / 2 - x;
    // 3. Find the percentage of that difference (percentage toward edge of screen)
    xPercentage = (xdiff / (w.x / 2)) * 100;
    // 4. Convert that to a percentage of the maximum rotation we allow for the neck
    dx = ((degreeLimit * xPercentage) / 100) * -1;
  }
  // Right (Rotates neck right between 0 and degreeLimit)
  if (x >= w.x / 2) {
    xdiff = x - w.x / 2;
    xPercentage = (xdiff / (w.x / 2)) * 100;
    dx = (degreeLimit * xPercentage) / 100;
  }
  // Up (Rotates neck up between 0 and -degreeLimit)
  if (y <= w.y / 2) {
    ydiff = w.y / 2 - y;
    yPercentage = (ydiff / (w.y / 2)) * 100;
    // Note that I cut degreeLimit in half when she looks up
    dy = ((degreeLimit * 0.5 * yPercentage) / 100) * -1;
  }

  // Down (Rotates neck down between 0 and degreeLimit)
  if (y >= w.y / 2) {
    ydiff = y - w.y / 2;
    yPercentage = (ydiff / (w.y / 2)) * 100;
    dy = (degreeLimit * yPercentage) / 100;
  }
  return { x: dx, y: dy };
}

function raycast(e: TouchEvent & MouseEvent, touch = false) {
  var mouse: { x: number; y: number } = { x: 0, y: 0 };
  if (touch) {
    mouse.x = 2 * (e.changedTouches[0].clientX / window.innerWidth) - 1;
    mouse.y = 1 - 2 * (e.changedTouches[0].clientY / window.innerHeight);
  } else {
    mouse.x = 2 * (e.clientX / window.innerWidth) - 1;
    mouse.y = 1 - 2 * (e.clientY / window.innerHeight);
  }
  // update the picking ray with the camera and mouse position
  raycaster.setFromCamera(mouse, camera);

  // calculate objects intersecting the picking ray
  var intersects = raycaster.intersectObjects(scene.children, true);

  if (intersects[0]) {
    var object = intersects[0].object;

    console.log(object.name);
  }
}

export default function SeirraNegra() {
  const script: ScriptType = {
    lines: [
      {
        speaker: "sula",
        speech: "Welcome to Sierra Negra",
      },
      {
        speaker: "olivia",
        speech: "Feel free to look around, and let me know when you're done",
      },
    ],
  };

  return (
    <Page>
      <GameBar className="h-3/12 ">
        <Conversation script={script} />
      </GameBar>
      <Scene />
    </Page>
  );
}

function Scene() {
  const [container, setContainer] = useState<HTMLDivElement>();

  const containerMountCb = (node: HTMLDivElement) => {
    if (node) {
      setContainer(node);
    }
  };

  let skyboxGeo, skybox: THREE.Mesh;
  let controls: OrbitControls;

  let width = container?.offsetWidth || 0,
    height = container?.offsetWidth || 0;

  console.log(width, height);

  function init(wrapper: HTMLDivElement) {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      45,
      30000
    );
    camera.position.set(1200, -250, 20000);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xffffff, 0);

    controls = new OrbitControls(camera, container);
    controls.minDistance = 500;
    controls.maxDistance = 1500;

    wrapper.appendChild(renderer.domElement);

    skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
    skybox = new THREE.Mesh(skyboxGeo, createSkyboxMaterialArray());
    scene.add(skybox);

    // load SVG
    const loader = new SVGLoader();
    loader.load(
      "images/isabela/cactus.svg",
      function (data) {
        const paths = data.paths;

        const group = new THREE.Group();
        group.scale.y *= -1;

        paths.forEach((path) => {
          console.log(path);
          const material = new THREE.MeshBasicMaterial({
            color: path.color,
            side: THREE.DoubleSide,
            depthWrite: false,
          });
          const shapes = SVGLoader.createShapes(path);
          shapes.forEach((shape) => {
            const geometry = new THREE.ShapeGeometry(shape);
            const mesh = new THREE.Mesh(geometry, material);
            group.add(mesh);
          });
        });

        scene.add(group);
      },
      () => null,
      () => console.log("An error happened")
    );

    const axesHelper = new THREE.AxesHelper(20);
    scene.add(axesHelper);
    animate();

    const onWindowResize = () => {
      if (!container) return;
      camera.aspect = container.offsetWidth / container.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.offsetWidth, container.offsetHeight);
    };
    window.addEventListener("resize", onWindowResize, false);
    window.addEventListener("click", (e: any) => raycast(e));
    window.addEventListener("touchend", (e: any) => raycast(e, true));
  }

  function animate() {
    renderer.render(scene, camera);
    controls.update();
    requestAnimationFrame(animate);
  }

  useEffect(() => {
    container && init(container);
  }, [container]);

  return <div className="w-full h-full" ref={containerMountCb}></div>;
}
