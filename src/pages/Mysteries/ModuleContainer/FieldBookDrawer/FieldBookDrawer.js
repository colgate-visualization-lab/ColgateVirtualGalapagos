import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import NotesIcon from "@material-ui/icons/Notes";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";

import { DrawerIcon, DrawerContent, DrawerHeader } from "@components/Drawer";

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
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
      <DrawerIcon
        handleDrawerOpen={handleDrawerOpen}
        contentDrawerOpen={contentDrawerOpen}
        edge="end"
      >
        <NotesIcon />
      </DrawerIcon>
      <DrawerContent
        drawerWidth={drawerWidth}
        contentDrawerOpen={contentDrawerOpen}
        anchor="right"
      >
        <DrawerHeader
          title="Notes"
          anchor="right"
          handleDrawerClose={handleDrawerClose}
        />
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
      </DrawerContent>
    </div>
  );
}
