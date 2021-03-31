import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import NotesIcon from "@material-ui/icons/Notes";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },

  menuButton: {
    // zIndex: 100,
    position: "absolute",
    top: 10,
    right: 5,
  },

  hide: {
    display: "none",
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },

  drawerPaper: {
    width: drawerWidth,
  },

  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    marginTop: theme.typography.pxToRem(60),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },

  drawerTitle: {
    justifySelf: "flex-start",
    marginRight: "auto",
    marginLeft: theme.spacing(1),
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  notesClass: {
    fontSize: "1rem",
  },
  notesTextarea: {
    margin: theme.spacing(2),
    marginTop: "auto",
    fontSize: "1rem",
  },

  saveNoteButton: {
    margin: theme.spacing(2),
    marginTop: 0,
  },

  saveButtonText: {
    fontSize: "1rem",
    fontWeight: "bold",
  },
}));

export default function SlideContentDrawer({
  contentDrawerOpen,
  handleContentDrawerToggle,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const [currentNote, setCurrentNote] = useState("");
  const [notes, setNotes] = useState([
    "This is a test note.",
    "I'm really enjoying this module",
    "Best module, like, ever!",
    "My brain is still in recovery mode from all these high level important ideas",
    "Interesting",
  ]);

  const handleNoteChange = (e) => {
    setCurrentNote(e.target.value);
  };

  const handleSaveNote = (e) => {
    setNotes([...notes, currentNote]);
    setCurrentNote("");
  };

  const handleDrawerOpen = () => {
    handleContentDrawerToggle(true);
  };

  const handleDrawerClose = () => {
    handleContentDrawerToggle(false);
  };

  return (
    <div className={classes.root}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, contentDrawerOpen && classes.hide)}
      >
        <NotesIcon />
      </IconButton>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={contentDrawerOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography className={classes.drawerTitle} variant="h6">
            Notes
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <>
                <ChevronRightIcon />
              </>
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {notes.map((note, index) => (
            <div key={index}>
              <ListItem key={index}>
                <ListItemText
                  primaryTypographyProps={{
                    className: classes.notesClass,
                  }}
                  primary={note}
                />
              </ListItem>
              <Divider variant="middle" />
            </div>
          ))}
        </List>
        <TextField
          id="notes-textarea"
          className={classes.notesTextarea}
          label="Notes"
          multiline
          rows={5}
          variant="outlined"
          value={currentNote}
          onChange={handleNoteChange}
        />
        <Button
          variant="outlined"
          color="secondary"
          //   fullWidth
          disabled={currentNote === ""}
          className={classes.saveNoteButton}
          onClick={handleSaveNote}
        >
          <Typography className={classes.saveButtonText}>Save Note</Typography>
        </Button>
      </Drawer>
    </div>
  );
}
