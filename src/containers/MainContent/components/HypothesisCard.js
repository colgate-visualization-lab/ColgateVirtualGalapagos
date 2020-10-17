import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import AudioPlayer from "material-ui-audio-player";

export default function InteractiveGameComponent(props) {
  return (
    <Card className={props.classes.cardRoot}>
      <CardActionArea
        onClick={(event) =>
          props.launchHypothesisModal(event, props.data["videoSrc"])
        }
      >
        <CardHeader title={props.data["cardTitle"]} />
        <CardMedia
          className={props.classes.image}
          image={props.data["cardThumbnail"]}
        />
      </CardActionArea>
      <CardMedia
        component="audio"
        className={props.classes.audio}
        src={props.data["audioSrc"]}
        controls
      />
    </Card>
  );
}
