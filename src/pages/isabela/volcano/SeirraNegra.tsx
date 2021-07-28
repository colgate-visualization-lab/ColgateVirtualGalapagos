import React, { useEffect, useMemo, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import Conversation, {
  ScriptType,
} from "../../../atomic-design/templates/Conversation";
import GameBar from "../../../atomic-design/templates/GameBar";
import Page from "../../../atomic-design/templates/Page";
import Notification from "../../../atomic-design/templates/Notification";
import { useNotificationContext } from "../../../contexts/NotificationContext";
import Loading from "../../Loading";
import { CharacterType, useGameContext } from "../../../contexts/GameContext";
import { useCallback } from "react";

const makeScript = (buddy: CharacterType): ScriptType => {
  return {
    lines: [
      {
        speaker: "olivia",
        speech: "We made it! Welcome to the top of the Sierra Negra Volcano!",
      },
      {
        speaker: buddy.name,
        speech: "Oh wow! This view is amaaaaaaaazzzinnnnnngggg!!!",
      },
      {
        speaker: "olivia",
        speech:
          "Right!? One of my favorite parts about being a Geologist is that we are able to do research in beautiful places! As you’re looking around, begin to view the area through the lens of a scientist!",
      },
      {
        speaker: buddy.name,
        speech: "Uhm.. I don't have scientist glasses.",
      },
      {
        speaker: "olivia",
        speech:
          "Nooo, not a literal lens! I mean try observing, or noticing something about your surroundings, whether that's through sight, hearing, smell, touch, or taste.",
      },
      {
        speaker: buddy.name,
        speech: "So I can lick this rock here?",
      },
      {
        speaker: "olivia",
        speech:
          "WAIT! Though taste is sometimes a handy tool for geologists, you should try to use your other senses first before going straight to that...",
      },
      {
        speaker: buddy.name,
        speech: "Aww man. What's the fun in that?",
      },
      {
        speaker: "olivia",
        speech: "Safety first!",
      },
      {
        speaker: buddy.name,
        speech:
          "Hey, what's that crunching sound? Everytime I take a step it's like CrOnCh cRoNcH!",
      },
      {
        speaker: "olivia",
        speech:
          "Great observation! That crunch sound is from stepping on cinders and  scoria, which are  small, pea sized chunks of lava that formed as it cooled!",
        image: "/images/isabela/lava_rocks_real.png",
      },
      {
        speaker: buddy.name,
        speech:
          "Wait!? We're standing on lava!? But this ground is so cold - I thought lava was always hot!",
      },
      {
        speaker: "olivia",
        speech:
          "Right when lava erupts from a volcano it's hot, but when it cools, it looks like this!",
        image: "/images/isabela/volcano_diagram.jpg",
      },
      {
        speaker: "olivia",
        speech:
          "You see, when volcanoes erupt, the lava can flow in a couple of different ways.",
        image: "/images/isabela/eruption_diagram.jpg",
      },
      {
        speaker: "olivia",
        speech:
          "First, it could flow out of the volcano like channels of water in a river. These flat lying streams of lava are called lava flows.",
        image: "/images/isabela/eruption_diagram.jpg",
      },
      {
        speaker: "olivia",
        speech:
          "Another way that lava can erupt from a volcano is similar to how a fountain shoots water up into the air. The lava is blown out into the air, where it breaks up and separates into little specks, like this.",
        image: "/images/isabela/scoria_hot.jpg",
      },
      {
        speaker: buddy.name,
        speech: "Oh wow!",
        image: "/images/isabela/scoria_hot.jpg",
      },
      {
        speaker: "olivia",
        speech:
          "Cool, right!? Well, actually it’s hot. Like, over 1200 degrees Celsius hot. For instance, the average temperature in Los Angeles, California is around 17 degrees Celsius, in New York City and the Galapagos Islands during the summer, it’s about 26 degrees celsius, in Japan in the summer it's about 35 degrees celsius, water boils at 100 degrees celsius, and the cast iron pot you are boiling the water in melts at around 1204 degrees celsius, which is about twelve times that of the boiling water. So yeah, it's pretty hot.  As this tiny piece of lava hits the air, which is much colder than the lava, what do you think happens?",
        image: "/images/isabela/scoria_cold.jpg",
      },
    ],
  };
};

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
        map: loader.load(`images/cube_maps/isabela/sierra_negra/${side}.png`),
        side: THREE.BackSide,
      })
  );
}

export default function SeirraNegra() {
  const { buddy } = useGameContext();

  const [scriptMode, setScriptMode] = useState(true);

  return (
    <Page>
      <GameBar className="h-3/12 ">
        <Conversation
          script={useMemo(() => makeScript(buddy), [buddy])}
          onFinish={() => setScriptMode(false)}
        />
      </GameBar>
      <Scene isInteractive={true} />
    </Page>
  );
}

function Scene({ isInteractive = false }) {
  const [container, setContainer] = useState<HTMLDivElement>();
  const [isLoading, setLoading] = useState(true);

  const { addNotification, clearNotifications } = useNotificationContext();

  const showRockImage = useCallback(() => {
    isInteractive &&
      addNotification({
        id: "rock",
        image: "/images/isabela/lava_rocks_real.png",
        scope: "observation",
      });
  }, [isInteractive]);

  const hideRockImage = () => {
    clearNotifications("observation");
  };

  const showMIB = useCallback(() => {
    isInteractive &&
      addNotification({
        id: "quiz",
        text:
          "I see you have turned your eye to the horizon! From the top of Sierra Negra you have a view that stretches for miles. Here you can see part of the Western coast of Isabela. The coastline you can see across the water is around 16 miles (25 kilometers) away. Remember where Sierra Negra is on the map and you can get a sense of just how far you can see! If you look back across the caldera, you can see the other side about 4 to 6 miles away.",
        scope: "quiz",
      });
  }, [isInteractive]);

  const hideMIB = () => {
    clearNotifications("quiz");
  };

  function raycast(e: TouchEvent & MouseEvent, touch = false, click = false) {
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
      if (object.parent?.name === "rock") {
        click && showRockImage();
      }

      if (object.name === "mib") {
        click && showMIB();
      }
    }
  }

  const containerMountCb = (node: HTMLDivElement) => {
    if (node) {
      setContainer(node);
    }
  };

  let skyboxGeo, skybox: THREE.Mesh;
  let controls: OrbitControls;

  function init(wrapper: HTMLDivElement) {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      45,
      30000
    );
    camera.position.set(1200, -250, 20000);
    camera.aspect = wrapper.offsetWidth / wrapper.offsetHeight;
    camera.updateProjectionMatrix();
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(wrapper.offsetWidth, wrapper.offsetHeight);
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
      "images/isabela/rock.svg",
      function (data) {
        const paths = data.paths;

        const group = new THREE.Group();
        group.position.set(1000, -4000, -4000);
        group.scale.set(5, -5, 5);
        group.name = "rock";

        paths.forEach((path) => {
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

    const tLoader = new THREE.TextureLoader();
    tLoader.load(
      "images/isabela/mib_parachute.png",
      function (data) {
        const plane = new THREE.PlaneBufferGeometry(100, 200);
        const material = new THREE.MeshBasicMaterial({
          map: data,
          transparent: true,
          alphaTest: 0.5,
        });
        const mesh = new THREE.Mesh(plane, material);
        mesh.position.set(2000, 1000, -4000);

        mesh.name = "mib";
        scene.add(mesh);
      },
      () => null,
      () => console.log("An error happened")
    );

    animate();

    const onWindowResize = () => {
      if (!container) return;
      camera.aspect = container.offsetWidth / container.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.offsetWidth, container.offsetHeight);
    };
    window.addEventListener("resize", onWindowResize, false);
    window.addEventListener("click", (e: any) => raycast(e, false, true));
    window.addEventListener("mousemove", (e: any) => raycast(e));
    window.addEventListener("touchend", (e: any) => raycast(e, true, true));
  }

  function animate() {
    renderer.render(scene, camera);
    controls.update();
    requestAnimationFrame(animate);
  }

  useEffect(() => {
    container && init(container);
  }, [container]);

  THREE.DefaultLoadingManager.onLoad = function () {
    setLoading(false);
  };

  return (
    <>
      {isLoading && <Loading />}
      <Notification
        scope="observation"
        onDiscard={hideRockImage}
        useModal={true}
        size="lg"
      />
      <Notification
        scope="quiz"
        onDiscard={hideMIB}
        useModal={true}
        size="lg"
      />
      <div
        className={
          isInteractive ? "w-full h-full" : "pointer-events-none h-full w-full"
        }
        ref={containerMountCb}
      ></div>
    </>
  );
}
