import React, {useState} from "react"
import { makeStyles } from "@material-ui/core"
import { Typography, TextField, Button } from "@material-ui/core"
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import LocalStorage from "../../../../utils/localStorage"

const NewNote = () => {
  const classes = useStyles()
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const addNote = async () => {
    try {
      const data = {title, content}
      const token = LocalStorage.getToken()
      const result = await axios.post('/notes', data, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
      history.push('/fieldbook')
    } 
    catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <Typography 
        variant="h5" 
        color="primary" 
        gutterBottom
        >
          Add a new Note
      </Typography>
      <div className={classes.container}>
        <form>
          <TextField
            id="outlined-textarea"
            label="Title"
            placeholder="Write your title"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <TextField
            id="outlined-textarea"
            label="Write your Note"
            placeholder="Write your note"
            multiline
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={e => setContent(e.target.value)}
            rows={10}
            fullWidth
            value={content}
          />
          <Button
            variant="contained"
            className={classes.button}
            onClick={addNote}
          >
            Add Note
          </Button>
        </form>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    marginLeft: theme.spacing(2),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1), 
    backgroundColor: "white",
  },
}))
export default NewNote