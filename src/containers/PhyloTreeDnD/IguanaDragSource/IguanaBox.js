import React, { useState } from "react"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import DragIndicatorIcon from "@material-ui/icons/DragIndicator"
import { makeStyles } from "@material-ui/core/styles"
import { useDrag } from "react-dnd"

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: ({ cursor }) => cursor,
    padding: theme.spacing(0.5, 1),
    // margin: theme.spacing(0, 1),
    backgroundColor: "rgb(239,239,239)",
    color: "#000",
    "&:hover": {
      backgroundColor: "rgb(220,220,220)",
      // cursor: "grab",
    },

    borderRadius: 5,
  },

  dragSrc: {
    display: "flex",
    alignItems: "center",
  },
  dragIndicator: {
    fontSize: "1.7rem",
    textTransform: "none",
  },

  srcName: {
    fontWeight: "bold",
    fontSize: "0.8rem",
    padding: theme.spacing(1),
  },
}))

const IguanaBox = ({ name }) => {
  const [cursor, setCursor] = useState("grab")

  const [{ dragCursor }, drag] = useDrag({
    item: { name, type: "iguana" },
    collect: (monitor) => ({
      dragCursor: monitor.isDragging() ? "grabbing" : null,
    }),
  })

  const styleProps = { cursor: dragCursor || cursor }
  const classes = useStyles(styleProps)

  const handleMouseOver = () => {
    setCursor("grab")
  }
  const handleMouseDown = () => {
    setCursor("grabbing")
  }
  const handleMouseUp = () => {
    setCursor("grab")
  }

  return (
    <Paper
      ref={drag}
      elevation={0}
      className={classes.root}
      onMouseOver={handleMouseOver}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div className={classes.dragSrc}>
        <DragIndicatorIcon className={classes.dragIndicator} />
        <Typography className={classes.srcName}>{name}</Typography>
      </div>
    </Paper>
  )
}

export default IguanaBox
