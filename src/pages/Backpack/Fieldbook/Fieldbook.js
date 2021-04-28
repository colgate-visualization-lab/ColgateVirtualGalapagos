import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Grid, TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Note from "./Note/Note";
import axios from "axios";
import LocalStorage from "../../../utils/localStorage";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import FolderIcon from "@material-ui/icons/Folder";
import {module} from "../../../utils/const"

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Fieldbook = () => {
  const classes = useStyles();
  const [loggedIn, setLoggedIn] = useState(false);
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchNotes = async () => {
    const user = LocalStorage.getUser();
    const token = LocalStorage.getToken();
    if (user == null || token == null) {
      setLoggedIn(false);
      return;
    }
    setLoggedIn(true);
    const response = await axios.get("/notes", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    setNotes(response.data);
  };

  useEffect(() => {
    fetchNotes();
  }, [notes]);

  const deleteNote = (i) => {
	const token = LocalStorage.getToken();
    const id = notes[i]._id;
    const newNotes = notes;
    newNotes.splice(i, 1);
    setNotes(newNotes);
    axios.delete("/notes/" + id, {
		headers: {
		  Authorization: "Bearer " + token,
		},
	});
  };

  return (
    <div className={classes.root}>
      {!loggedIn ? (
        <Snackbar
          open={true}
          autoHideDuration={6000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert severity="error">Please log in to see notes</Alert>
        </Snackbar>
      ) : null}
	  <Grid container spacing={3} direction="row" className={classes.content}>
		  <Grid item xs={2}>
			<Typography
			variant="h5"
			align="center"
			color="primary"
			gutterBottom
			noWrap
			>
			Modules
			</Typography>
			<div>
			<List dense={false}>
				{Object.values(module).map((item, i) => (
					<ListItem key={i}>
					<ListItemAvatar>
						<Avatar>
						<FolderIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary={item}/>
					</ListItem>
				))}
			</List>
			</div>
		  </Grid>
		  <Grid item xs={8}>
			  <Grid container spacing={3} direction="column">
				  <Grid item>
					<TextField
						value={searchText}
						id="outlined-textarea"
						label="search"
						placeholder="search note"
						className={classes.searchField}
						margin="normal"
						variant="outlined"
						onChange={() => {}}
						InputProps={{
						endAdornment: (
							<InputAdornment position="end">
							<SearchIcon />
							</InputAdornment>
						),
						}}
				  	/>
				  </Grid>
				  <Grid item>
					  <Grid container spacing={3} direction="row">
						  {notes.length > 0
							? notes.map((item, i) => (
								<Grid item key={i}>
									<Note
									title={item.title}
									content={item.content}
									handleDelete={() => deleteNote(i)}
									/>
								</Grid>
								))
							: null}
						</Grid>
				  </Grid>
			  </Grid>
		  </Grid>
	  </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  searchField: {
    width: "50vw",
  },
  content: {
	  margin: theme.spacing(5),
  },
}));

export default Fieldbook;
