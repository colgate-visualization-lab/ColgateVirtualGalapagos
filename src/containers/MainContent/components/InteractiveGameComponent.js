import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Popover from "@material-ui/core/Popover";
import HypothesisPopover from "./HypothesisPopover";
import HypothesisCard from "./HypothesisCard";

const data = [
  {
    id: "birdHypothesis",
    videoSrc:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/ShoreWaves.mp4",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_Compare360.mp3",
    cardTitle: "Bird Carrying Iguana",
    cardThumbnail:
      "https://pmdvod.nationalgeographic.com/NG_Video/993/419/66827_1_1280x720_1024x576_177585731924.jpg",
  },
  {
    id: "pumiceHypothesis",
    videoSrc:
      "http://virtualgalapagos.colgate.edu/assets/VolcanoModule/VolcanoModuleIntro.mp4",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_Exploration01.mp3",
    cardTitle: "Pumice Carrying Iguana",
    cardThumbnail:
      "https://c7.alamy.com/comp/F1MGEB/closeup-of-a-land-iguana-sitting-on-lava-gravel-and-pumice-F1MGEB.jpg",
  },
  {
    id: "vegetationRaftHypothesis",
    videoSrc:
      "http://virtualgalapagos.colgate.edu/assets/VolcanoModule/VolcanoPlateTectonics.mp4",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_Exploration01.mp3",
    cardTitle: "Vegetation Raft Carrying Iguana",
    cardThumbnail:
      "https://onlinelibrary.wiley.com/cms/asset/143fe60a-0897-43e3-a402-0dbf884379d9/ece35414-fig-0001-m.jpg",
  },
  {
    id: "driftwoodHypothesis",
    videoSrc:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/IguanaPath.mp4",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_Exploration03.mp3",
    cardTitle: "Driftwood Carrying Iguana",
    cardThumbnail:
      "https://www.santacruzgalapagoscruise.com/wp-content/uploads/2017/12/christmas-iguana-resting.jpg",
  },
  {
    id: "shipHypothesis",
    videoSrc:
      "http://virtualgalapagos.colgate.edu/assets/IguanaModule/IguanaRocks.mp4",
    audioSrc:
      "http://virtualgalapagos.colgate.edu/assets/VolcanoModule/Volcano_Fernandina01.mp3",
    cardTitle: "Ship Carrying Iguana",
    cardThumbnail:
      "https://www.galapagos.org/wp-content/uploads/2012/01/LandIguana.NorineAudette.2007.jpg",
  },
];

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: "80%",
    margin: "auto",
    padding: "10vh 10vw",
  },
  cardRoot: {
    minWidth: 275,
    maxWidth: 380,
  },
  image: {
    height: 0,
    paddingTop: "20%", // 16:9
    paddingBottom: "20%"
  },
  audio: {
    height: 30,
    // paddingTop: 10,
  },
  title: {
    fontSize: 12,
  },
  pos: {
    marginBottom: 12,
  },
  popoverRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "conter",
    width: "60%",
  },
});

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

export default function InteractiveGameComponent(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverSrc, setPopoverSrc] = useState();

  const divRef = useRef();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const launchHypothesisModal = (event, videoSrc) => {
    console.log(divRef.current, videoSrc);
    setAnchorEl(divRef.current);
    setPopoverSrc(videoSrc);
  };

  const open = Boolean(anchorEl);
  const id = open ? "hypothesis-video" : undefined;

  return (
    <>
      <div
        ref={divRef}
        style={{
          position: "absolute",
          height: "100vh",
          width: "100vw",
          backgroundColor: "red",
        }}
      >
        <Container
          className={classes.root}
          spacing={2}
          justify="center"
          align="center"
          alignItems="center"
        >
          {data.map((datum) => (
            <Item xs={4}>
              <HypothesisCard
                launchHypothesisModal={launchHypothesisModal}
                classes={classes}
                data={datum}
              />
            </Item>
          ))}

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{ vertical: "center", horizontal: "center" }}
            transformOrigin={{ vertical: "center", horizontal: "center" }}
          >
            <HypothesisPopover videoSrc={popoverSrc} />
          </Popover>
        </Container>
      </div>
    </>
  );
}
