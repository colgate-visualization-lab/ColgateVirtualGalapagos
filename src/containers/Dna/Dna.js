import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import DnaBackbone from "../../components/DnaBackbone";
import DnaSequence from "../../components/DnaSequence";
// import { basePair1, basePair2 } from "../IguanaSlide17/constants";

const useStyles = makeStyles((theme) => ({}));

const Dna = ({ label, basePairs }) => {
  const classes = useStyles();
  const svgStyle = {
    border: "1px solid white",
    float: "left",
  };

  const numGroups = 6;

  const viewBox = [10, 0, 282.32, 32.56];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="body1" component="h2">
          {label}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewBox}
          // style={svgStyle}
          preserveAspectRatio="xMidYMid meet"
          width="100%"
          height="100%"
        >
          <g
            id="dna"
            // transform={`translate(0,${yTranslateDistance})`}
          >
            <DnaBackbone numGroups={numGroups + 1} />
            <DnaSequence
              classes={classes}
              numGroups={numGroups}
              basePairs={basePairs}
            />
          </g>
        </svg>
      </Grid>
    </Grid>

    // <div className={classes.geneContainer}>
    //   <p className={classes.geneLabel}>{label}</p>
    //   <div className={classes.geneSvg}>
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox={viewBox}
    //       // style={svgStyle}
    //       preserveAspectRatio="xMidYMid meet"
    //       width="100%"
    //       height="100%"
    //     >
    //       <g
    //         id="dna"
    //         // transform={`translate(0,${yTranslateDistance})`}
    //       >
    //         <DnaBackbone numGroups={numGroups + 1} />
    //         <DnaSequence
    //           classes={classes}
    //           numGroups={numGroups}
    //           basePairs={basePairs}
    //         />
    //       </g>
    //     </svg>
    //   </div>
    // </div>
  );
};

export default Dna;
