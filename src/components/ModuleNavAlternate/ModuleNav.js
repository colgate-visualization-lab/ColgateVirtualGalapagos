import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import ModuleNavItem from "./ModuleNavItem";
const test = 1;
const modules = [
  {
    title: "Volcano",
    description:
      "Follow along with Carlos and Adriana as they learn about volcanoes. Explore how volcanic islands form and how they came to be in the Galapagos!",
    background:
      "url(https://virtualgalapagos.colgate.edu/assets/misc/Volcano.png)",
    animation: " animated slideInDown",
    link: `/volcano/${test}`,
  },
  {
    title: "Iguana",
    description:
      "Carlos and Adriana need to learn about iguanas if they want to find the ones in their mystery. Help them learn about the different types of iguanas in the Galapagos and how they got there in the first place.",
    background:
      "url(https://virtualgalapagos.colgate.edu/assets/misc/Iguana.png)",
    animation: " animated slideInDown slower",
    link: "/iguana/1",
  },

  {
    title: "Currents",
    description:
      "Currents are key to this iguana mystery! Learn about how currents affect the Galapagos islands and the benefits they provide animals like Carlos and Adriana!",
    background:
      "url(http://virtualgalapagos.colgate.edu/assets/misc/Currents.png)",
    animation: " animated slideInUp",
    link: "/home",
  },

  {
    title: "Eruption",
    description:
      "Volcanic eruptions can have a big impact on the animals and plants that live near them. Find out all the ways eruptions take place in the Galapagos.",
    background:
      "url(http://virtualgalapagos.colgate.edu/assets/misc/Eruption.png)",
    animation: " animated slideInUp slow",
    link: "/home",
  },

  {
    title: "Island Life Cycle",
    description:
      "In order to figure out this mystery, Carlos and Adriana need to find the oldest islands. Learn about what makes an island old and where they are most likely to be in the Galapagos!",
    background:
      "url(http://virtualgalapagos.colgate.edu/assets/misc/IslandLifeCycle.png)",
    animation: " animated slideInUp slower",
    link: "/home",
  },
  {
    title: "Extras",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    background: "url(https://source.unsplash.com/collection/894/1600x900)",
    animation: " animated slideInDown slow",
    link: "/extras",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  islandName: {
    fontSize: theme.typography.pxToRem(34),
    fontWeight: "600",
    paddingLeft: theme.spacing(2),
  },
}));

const ModuleNav = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Grid container justify="center" className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Typography className={classes.islandName}>Isabella</Typography>
        </Grid>
        {modules.map((moduleItem, index) => (
          <Grid key={index} item xs={12}>
            <ModuleNavItem {...moduleItem} index={index} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ModuleNav;
