import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({}));

const GeneDescription = ({ geneName, geneDescription }) => {
  const classes = useStyles();

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="Scale Color Gene Content"
        id="scale-color"
      >
        <Typography variant="button" component="p">
          {geneName}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="caption" component="p">
          {geneDescription}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default GeneDescription;
