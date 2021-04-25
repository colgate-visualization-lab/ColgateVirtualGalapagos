import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import NotesIcon from "@material-ui/icons/Notes";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import ClearIcon from "@material-ui/icons/Clear";
import LocalStorage from "../../utils/localStorage";
import axios from "axios";

import {
  DrawerIcon,
  DrawerContent,
  DrawerHeader,
} from "../../components/Drawer";

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
  moduleName,
  slideId,
  contentDrawerOpen,
  handleContentDrawerToggle,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const [currentNote, setCurrentNote] = useState("");
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const token = LocalStorage.getToken();
    if (token == null) {
      return;
    }
    const path = "/notes/" + moduleName + "/" + slideId;
    const response = await axios.get(path, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    setNotes(response.data);
  };

  const saveNote = (note) => {
    const token = LocalStorage.getToken();
    if (token == null) {
      return;
    }
    const data = {
      content: note,
      moduleName: moduleName,
      slide: slideId,
    };
    const response = axios.post("/notes", data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  };

  const deleteNote = (index, note) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
    const token = LocalStorage.getToken();
    if (token == null) {
      return;
    }
    axios.delete("/notes/" + note._id, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  };

  useEffect(() => {
    fetchNotes();
  }, [slideId]);

  const handleNoteChange = (e) => {
    setCurrentNote(e.target.value);
  };

  const handleSaveNote = (e) => {
    setCurrentNote("");
    saveNote(currentNote);
    fetchNotes();
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
                  primary={note.content}
                />
                <ClearIcon onClick={() => deleteNote(index, note)} />
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
