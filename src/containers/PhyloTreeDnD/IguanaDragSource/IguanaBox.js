import React, { useContext } from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import { useDrag } from "react-dnd"

const useStyles = makeStyles((theme) => ({
  box: {
    background: "transparent",
    cursor: "pointer",
    padding: theme.spacing(0, 2, 0, 0),
  },
  dragSrc: {
    padding: "0.1rem 0.2rem",
    [theme.breakpoints.up("sm")]: {
      padding: "0.1rem 0.4rem",
    },
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: "0.3rem",
  },
  srcName: {
    fontSize: "0.7rem",
    color: "black",
    [theme.breakpoints.up(720)]: {
      fontSize: "0.8rem",
    },
  },
}))

const IguanaBox = ({ name }) => {
  const classes = useStyles()
  const [, drag] = useDrag({
    item: { name, type: "iguana" },
  })

  return (
    <div ref={drag} className={classes.box}>
      <div className={classes.dragSrc}>
        <Typography variant="subtitle1" className={classes.srcName}>
          {name}
        </Typography>
      </div>
    </div>
  )
}

export default IguanaBox
