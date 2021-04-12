import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: theme.spacing(2, 2, 4, 2),
    display: "flex",
    position: "absolute",
    zIndex: 100,
    top: 20,
    right: 20,
  },
}))

const PhyloTreeMenu = ({ children }) => {
  const classes = useStyles()
  return <div className={classes.root}>{children}</div>
}

export default PhyloTreeMenu
