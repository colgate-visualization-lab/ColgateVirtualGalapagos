import React, {useState, useEffect} from "react"
import {makeStyles} from '@material-ui/core'
import {Link} from 'react-router-dom'
import {Grid, TextField, InputAdornment} from '@material-ui/core'
import SearchIcon from "@material-ui/icons/Search"
import AddBoxIcon from '@material-ui/icons/AddBox'
import Note from "./Note/Note"
import axios from 'axios'
import { NotInterested } from "@material-ui/icons"

const Fieldbook = () => {
	const classes = useStyles()
	const [notes, setNotes] = useState([])
	const [searchText, setSearchText] = useState('')

	const fetchNotes = async () => {
		const response = await axios.get('/notes')
		setNotes(response.data)
	}

	useEffect(() => {
		fetchNotes()
	}, [notes])

	const deleteNote = (i) => {
		const id = notes[i]._id
		const newNotes = notes
		newNotes.splice(i, 1)
		setNotes(newNotes)
		axios.delete('/notes/'+ id)
	}
	
  	return (
		<div className={classes.root}>
			<TextField
        		value={searchText}
        		id="outlined-textarea"
        		label="search"
        		placeholder="search note"
        		className={classes.searchField}
        		margin="normal"
        		variant="outlined"
        		onChange={ () => {}}
        		InputProps={{
          		endAdornment: (
            		<InputAdornment position="end">
              			<SearchIcon />
            		</InputAdornment>
          		)
        		}}
      		/>
			<Grid container spacing={3} direction="row">
				{notes.length > 0
					? notes.map((item, i) => (
						<Grid item key={i}>
							<Note title={item.title} content={item.content} handleDelete={() => deleteNote(i)}/>
						</Grid>
					))
					: null}
				<Grid item>
					<Link to="/newnote">
						<AddBoxIcon className={classes.addIcon}/>
					</Link>
				</Grid>	
			</Grid>
		</div>
	)
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	searchField: {
		backgroundColor: "white",
	},
	addIcon: {
		fontSize: "8vw", 
		marginTop: "1vw"
	},
}))

export default Fieldbook