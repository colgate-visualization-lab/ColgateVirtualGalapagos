import React from "react"
import PropTypes from "prop-types"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(0, 1),
    fontSize: "0.7rem",
    fontWeight: "bold",
    background: "#FFF",
    color: "#000",
    "&:hover": {
      backgroundColor: "rgb(249,249,249)",
    },
  },
}))

const PhyloTreeMenuButton = ({ handleClick, label }) => {
  const classes = useStyles()
  return (
    <Button
      variant="contained"
      size="small"
      className={classes.button}
      onClick={handleClick}
    >
      {label}
    </Button>
  )
}

PhyloTreeMenuButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}

export default PhyloTreeMenuButton
