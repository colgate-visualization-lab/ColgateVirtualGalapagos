import React, { useState, useRef, useEffect } from "react";
import Popup from "reactjs-popup";
import ImageSlider from "react-image-comparison-slider";
import ImageMapper from "react-image-mapper";
import Button from "@material-ui/core/Button";

import classes from "./OldVolcanoSlides.css";
import DndLayout from "components/DndLayout";
import * as volcanoAssets from "assets/volcano-data/volcano-module";
import IframeCompoment from "components/IframeComponent";

export default function VolcanoSlides(props) {
  //State. Any state set here does not reset when changing slides.
  //Include a seperate file to handle slide-specific state when possible. Like DND
  const [slide21state, setSlide21State] = useState(null);

  //Refs
  const slide21ref = useRef(null);

  //Methods
  const slide21Handler = (area) => {
    if (area.id == 1) {
      props.setSlideChange("21wrong");
    } else if (area.id == 2) {
      props.setSlideChange("22");
    }
  };

  //Styles
  const popup = {
    margin: "auto",
    padding: "20px",
    background: "rgba(0, 0, 0, 0.762)",
    borderRadius: "5px",
    zIndex: "2",
    width: "auto",
    position: "absolute",
  };

  //Lifecycle
  useEffect(() => {
    if (props.id == 21) {
      setTimeout(() => setSlide21State(slide21ref.current.clientWidth), 100);
      window.addEventListener("resize", () =>
        setSlide21State(slide21ref.current.clientWidth)
      );
    } else {
      window.removeEventListener("resize", () =>
        setSlide21State(slide21ref.current.clientWidth)
      );
    }
    return () => {
      // Clean up event listeners here
    };
  }, [props.id]);

  if (props.id == 0) {
    return (
      <video
        className={classes.center}
        src={volcanoAssets.introVideo}
        autoPlay
        controls
        controlsList="nodownload"
        type="video/mp4"
      />
    );
  } else if (props.id == 1) {
    return (
      <div>
        <audio
          className={classes.audioPlayer}
          src={volcanoAssets.Exploration01}
          autoPlay
          controls
          controlsList="nodownload"
        />
        <IframeCompoment class={classes.vista} src={volcanoAssets.Vista} />
      </div>
    );
  } else if (props.id == 2) {
    return (
      <div>
        <audio
          className={classes.audioPlayer}
          src={volcanoAssets.Exploration02}
          autoPlay
          controls
          controlsList="nodownload"
        />
        <IframeCompoment class={classes.vista} src={volcanoAssets.Vista2} />
      </div>
    );
  } else if (props.id == 3) {
    return (
      <div>
        <audio
          className={classes.audioPlayer}
          src={volcanoAssets.Exploration03}
          autoPlay
          controls
          controlsList="nodownload"
        />
        <IframeCompoment class={classes.vista} src={volcanoAssets.Vista3} />
      </div>
    );
  } else if (props.id == 4) {
    return (
      <div>
        <audio
          className={classes.audioPlayer}
          src={volcanoAssets.Exploration04}
          autoPlay
          controls
          controlsList="nodownload"
        />
        <IframeCompoment class={classes.vista} src={volcanoAssets.Vista4} />
      </div>
    );
  } else if (props.id == 5) {
    return (
      <div>
        <audio
          className={classes.audioPlayer}
          src={volcanoAssets.Exploration04}
          autoPlay
          controls
          controlsList="nodownload"
        />
        <IframeCompoment class={classes.vista} src={volcanoAssets.Vista5} />
      </div>
    );
  } else if (props.id == 6) {
    return (
      <div>
        <audio
          className={classes.audioPlayer}
          src={volcanoAssets.terrainMap2}
          autoPlay
          controls
          controlsList="nodownload"
        />
        <div className={classes.imgContainer}>
          <img className={classes.imgFill} src={volcanoAssets.TerrainMap} />
          <div className={classes.hypothesis}>
            Click on the magnifying glass!
          </div>
          <img
            className={classes.magnifying}
            onClick={() => props.setSlideChange("./6optional")}
            src={volcanoAssets.magnifyingGlass}
          />
        </div>
      </div>
    );
  } else if (props.id == "6optional") {
    return (
      //Width of this needs to get fixed eventually
      <div>
        <audio
          className={classes.audioPlayer}
          src={volcanoAssets.volcanoSlider1}
          autoPlay
          controls
          controlsList="nodownload"
        />
        <div className={classes.sliderDiv}>
          <ImageSlider
            image1={volcanoAssets.santaCruz}
            image2={volcanoAssets.Ferd}
            leftLabelText="Fernandina"
            rightLabelText="Santa Cruz"
          />
        </div>
      </div>
    );
  } else if (props.id == 7) {
    return (
      <div>
        <audio
          className={classes.audioPlayer}
          src={volcanoAssets.volcanoCompare360}
          autoPlay
          controls
          controlsList="nodownload"
        />
        <IframeCompoment class={classes.leftVista} src={volcanoAssets.Vista} />
        <IframeCompoment
          class={classes.rightVista}
          src={volcanoAssets.Vista4}
        />
      </div>
    );
  } else if (props.id == 8) {
    const button = {
      position: "absolute",
      zIndex: "1",
      top: "55%",
      left: "7%",
    };
    return (
      <div>
        <audio
          className={classes.audioPlayer}
          src={volcanoAssets.terrainMap3}
          autoPlay
          controls
          controlsList="nodownload"
        />
        <div className={classes.imgContainer}>
          <img className={classes.imgFill} src={volcanoAssets.TerrainMap} />
          <div className={classes.hypothesis}>
            <Button
              style={button}
              variant="contained"
              color="secondary"
              onClick={() => props.setSlideChange("./8optional1")}
            >
              Compare Observations
            </Button>
          </div>
        </div>
      </div>
    );
  } else if (props.id == "8optional1") {
    return (
      <div>
        <audio
          className={classes.audioPlayer}
          src={volcanoAssets.fernandina1}
          autoPlay
          controls
          controlsList="nodownload"
        />
        <div className={classes.imgContainer}>
          <img className={classes.imgFill} src={volcanoAssets.Ferd} />
          <Popup
            trigger={
              <button className={`${classes.dot} ${classes.dot4}`}></button>
            }
            contentStyle={popup}
            arrow={false}
            position="right center"
          >
            <div>
              The sides of a volcano are called the flanks of the volcano. Lava
              erupts from the volcano and hardens into black basalt.
            </div>
          </Popup>
          <Popup
            trigger={
              <button className={`${classes.dot} ${classes.dot5}`}></button>
            }
            contentStyle={popup}
            arrow={false}
            position="right center"
          >
            <div>
              Fernandina's caldera is in the middle of the island. This formed
              when the ground above the magma chamber collapsed after an
              eruption.
            </div>
          </Popup>
          <Popup
            trigger={
              <button className={`${classes.dot} ${classes.dot6}`}></button>
            }
            contentStyle={popup}
            arrow={false}
            position="right center"
          >
            <div>
              There is very little vegetation on the island as plants have not
              had time to develop after the eruptions.
            </div>
          </Popup>
        </div>
      </div>
    );
  } else if (props.id == "8optional2") {
    return (
      <div>
        <audio
          className={classes.audioPlayer}
          src={volcanoAssets.santaCruz1}
          autoPlay
          controls
          controlsList="nodownload"
        />
        <div className={classes.imgContainer}>
          <img className={classes.imgFill} src={volcanoAssets.santaCruz} />
          <Popup
            trigger={
              <button className={`${classes.dot} ${classes.dot7}`}></button>
            }
            contentStyle={popup}
            arrow={false}
            position="right center"
          >
            <div>
              When basalt has been exposed to the elements for a long time it
              becomes oxidized and turns red.
            </div>
          </Popup>
          <Popup
            trigger={
              <button className={`${classes.dot} ${classes.dot8}`}></button>
            }
            contentStyle={popup}
            arrow={false}
            position="right center"
          >
            <div>
              Since there has not been an eruption in recent history, plants
              have been able to develop and grow to cover most of the island.
            </div>
          </Popup>
          <Popup
            trigger={
              <button className={`${classes.dot} ${classes.dot9}`}></button>
            }
            contentStyle={popup}
            arrow={false}
            position="right center"
          >
            <div>
              Humans have been able to move into the island and develop
              communities. Farming and developments take up most of the southern
              part of the island.
            </div>
          </Popup>
        </div>
      </div>
    );
  } else if (props.id == 9) {
    return (
      <div>
        <audio
          className={classes.audioPlayer}
          src={volcanoAssets.terrainMap4}
          autoPlay
          controls
          controlsList="nodownload"
        />
        <div className={classes.imgContainer}>
          <img className={classes.imgFill} src={volcanoAssets.TerrainMap} />
          <div className={classes.hypothesis}>
            What's a hypothesis? (click the circle){" "}
          </div>
          <Popup
            trigger={
              <button
                className={`${classes.dot} ${classes.dothypothesis}`}
              ></button>
            }
            contentStyle={popup}
            arrow={false}
            position="right center"
          >
            <div>
              A <i>Hypothesis</i> is a statement that explains why something
              happens. It is usually backed up by evidence or data that you have
              observed or collected beforehand. If the data and experiments
              agree with your idea, it supports you hypthesis. If the results of
              the tests disagree with your idea, then it refutes your hypohtesis
              indicating that it isn't quite right. Then your hypothesis needs
              to be adjusted. Part of science is testing to see what doesn't
              work, fixing it, and then retesting.
            </div>
          </Popup>
        </div>
      </div>
    );
  } else if (props.id == 10) {
    return (
      <div>
        <audio
          className={classes.audioPlayer}
          src={volcanoAssets.terrainMapAges1}
          autoPlay
          controls
          controlsList="nodownload"
        />
        <div className={classes.imgContainer}>
          <img className={classes.imgFill} src={volcanoAssets.TerrainMap} />
          <DndLayout volcano10={true} />
        </div>
      </div>
    );
  } else if (props.id == 11) {
    return (
      <div>
        <audio
          className={classes.audioPlayer}
          src={volcanoAssets.terrainMapAges2}
          autoPlay
          controls
          controlsList="nodownload"
        />
        <div className={classes.imgContainer}>
          <img className={classes.imgFill} src={volcanoAssets.DnDAnswers} />
        </div>
      </div>
    );
  } else if (props.id == 12) {
    return (
      <div>
        <audio
          className={classes.audioPlayer}
          src={volcanoAssets.otherVolcanoes1}
          autoPlay
          controls
          controlsList="nodownload"
        />
        <div className={classes.imgContainer}>
          <img className={classes.imgFill} src={volcanoAssets.VolcanoCompare} />
          <Popup
            trigger={
              <button className={`${classes.dot} ${classes.dot10}`}></button>
            }
            contentStyle={popup}
            arrow={false}
            position="right center"
          >
            <div>
              The volcanoes in western Hawaii and have been dormant for hundreds
              of years.
            </div>
          </Popup>
          <Popup
            trigger={
              <button className={`${classes.dot} ${classes.dot11}`}></button>
            }
            contentStyle={popup}
            arrow={false}
            position="right center"
          >
            <div>
              The Hawaiian islands get progressively older as you move west
              along the archipelago.
            </div>
          </Popup>
          <Popup
            trigger={
              <button className={`${classes.dot} ${classes.dot12}`}></button>
            }
            contentStyle={popup}
            arrow={false}
            position="right center"
          >
            <div>
              Hawaii's youngest volcanoes (and some of the largest volcanoes in
              the world) are in the east of the archipelago!
            </div>
          </Popup>
          <Popup
            trigger={
              <button className={`${classes.dot} ${classes.dot13}`}></button>
            }
            contentStyle={popup}
            arrow={false}
            position="right center"
          >
            <div>
              There is a large trench, or subduction zone, off the coast of
              Japan.
            </div>
          </Popup>
          <Popup
            trigger={
              <button className={`${classes.dot} ${classes.dot14}`}></button>
            }
            contentStyle={popup}
            arrow={false}
            position="right center"
          >
            <div>
              Volcanoes rise high in Japan and erupt often all along the island.
            </div>
          </Popup>
          <Popup
            trigger={
              <button className={`${classes.dot} ${classes.dot15}`}></button>
            }
            contentStyle={popup}
            arrow={false}
            position="right center"
          >
            <div>
              There is a subduction zone off the coast of Central America.
            </div>
          </Popup>
          <Popup
            trigger={
              <button className={`${classes.dot} ${classes.dot16}`}></button>
            }
            contentStyle={popup}
            arrow={false}
            position="right center"
          >
            <div>
              Central Americas Volcanoes are located on the western coast. All
              along the coast volcanoes erupt regularly!
            </div>
          </Popup>
        </div>
      </div>
    );
  } else if (props.id == 13) {
    return (
      <video
        className={classes.center}
        src={volcanoAssets.plateTectonics}
        autoPlay
        controls
        controlsList="nodownload"
        type="video/mp4"
      />
    );
  } else if (props.id == 14) {
    return (
      <div>
        <audio
          className={classes.audioPlayer}
          src={volcanoAssets.tectonicPlates1}
          autoPlay
          controls
          controlsList="nodownload"
        />
        <img className={classes.center} src={volcanoAssets.tectonicPlatesMap} />
      </div>
    );
  } else if (props.id == 15) {
    return (
      <div>
        This slide is not completed yet! You can listen to the audio tho :D
      </div>
    );
  } else if (props.id == 16) {
    return (
      <div>
        <audio
          className={classes.audioPlayer}
          src={volcanoAssets.tectonicPlates2}
          autoPlay
          controls
          controlsList="nodownload"
        />
        <img className={classes.center} src={volcanoAssets.tectonicPlatesMap} />
      </div>
    );
  } else if (props.id == 17) {
    return (
      <video
        className={classes.center}
        src={volcanoAssets.mantlePlumes}
        autoPlay
        controls
        controlsList="nodownload"
        type="video/mp4"
      />
    );
  } else if (props.id == 18) {
    return (
      <div>
        <audio
          className={classes.audioPlayer}
          src={volcanoAssets.southAmerica1}
          autoPlay
          controls
          controlsList="nodownload"
        />
        <div className={classes.imgContainer}>
          <img className={classes.imgFill} src={volcanoAssets.seaMounts} />
        </div>
      </div>
    );
  } else if (props.id == 19) {
    const button = {
      position: "absolute",
      zIndex: "1",
      top: "55%",
      left: "7%",
    };
    return (
      <div>
        <audio
          className={classes.audioPlayer}
          src={volcanoAssets.terrainMap6}
          autoPlay
          controls
          controlsList="nodownload"
        />
        <div className={classes.imgContainer}>
          <img className={classes.imgFill} src={volcanoAssets.TerrainMap} />
          <Button
            style={button}
            variant="contained"
            color="secondary"
            onClick={() => props.setSlideChange(20)}
          >
            Eruption Dates
          </Button>
        </div>
      </div>
    );
  } else if (props.id == 20) {
    return (
      <div>
        <audio
          className={classes.audioPlayer}
          src={volcanoAssets.eruptionAudio}
          autoPlay
          controls
          controlsList="nodownload"
        />
        <div className={classes.imgContainer}>
          <img className={classes.imgFill} src={volcanoAssets.eruptionDates} />
        </div>
      </div>
    );
  } else if (props.id == 21) {
    return (
      <div>
        <audio
          className={classes.audioPlayer}
          src={volcanoAssets.plumePlacement1}
          autoPlay
          controls
          controlsList="nodownload"
        />
        <img
          ref={slide21ref}
          src={volcanoAssets.TerrainOval}
          className={classes.center}
          style={{ visibility: "hidden" }}
        />
        <div className={classes.imageMapper}>
          <ImageMapper
            src={volcanoAssets.TerrainOval}
            width={slide21state + 15}
            imgWidth={2117}
            map={volcanoAssets.imageMap}
            fillColor={"rgba(0, 246, 255, 0.33)"}
            onClick={(area) => slide21Handler(area)}
          />
        </div>
      </div>
    );
  } else if (props.id == "21wrong") {
    const button = { flexGrow: "1" };
    return (
      <div>
        <audio
          className={classes.audioPlayer}
          src={volcanoAssets.plumeNo1}
          autoPlay
          controls
          controlsList="nodownload"
        />
        <div className={classes.imgContainer}>
          <div
            style={{
              display: "flex",
              position: "absolute",
              left: "0",
              bottom: "20px",
              height: "20%",
              flexDirection: "column",
            }}
          >
            <Button
              style={button}
              variant="contained"
              color="secondary"
              onClick={() => props.setSlideChange(20)}
            >
              Eruption Dates
            </Button>
            <Button
              style={button}
              variant="contained"
              color="secondary"
              onClick={() => props.setSlideChange(11)}
            >
              Island Ages
            </Button>
          </div>
          <img
            className={classes.imgFill}
            src={volcanoAssets.TerrainOvalWrong}
          />
        </div>
      </div>
    );
  } else if (props.id == 22) {
    return (
      <div>
        <audio
          className={classes.audioPlayer}
          src={volcanoAssets.plumeYes1}
          autoPlay
          controls
          controlsList="nodownload"
        />
        <div className={classes.imgContainer}>
          <img
            className={classes.imgFill}
            src={volcanoAssets.TerrainOvalCorrect}
          />
        </div>
      </div>
    );
  } else if (props.id == 23) {
    return (
      <div>
        <audio
          className={classes.audioPlayer}
          src={volcanoAssets.whereNext1}
          autoPlay
          controls
          controlsList="nodownload"
        />
        <div className={classes.imgContainer}>
          This is the end!
          <img className={classes.imgFill} src={volcanoAssets.TerrainMap} />
        </div>
      </div>
    );
  } else if (props.id == 24) {
    return (
      <video
        className={classes.center}
        src={volcanoAssets.summaryVolcano}
        autoPlay
        controls
        controlsList="nodownload"
        type="video/mp4"
      />
    );
  } else {
    return <div>Oopsie Woopsie there's been an error! ;)</div>;
  }
}
