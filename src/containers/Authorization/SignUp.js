import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'
import {Link, useHistory} from 'react-router-dom'
import LocalStorage from '../../utils/localStorage'
import MuiAlert from "@material-ui/lab/Alert"
import Snackbar from "@material-ui/core/Snackbar"
import { ErrorOutlineTwoTone } from '@material-ui/icons';

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SignUp = () => {
  const classes = useStyles()
  const history = useHistory()
  const [error, setError] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [allowedExtraEmail, setAllowedExtraEmail] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const userInfo = LocalStorage.getUser()
    const token = LocalStorage.getToken()
    if (userInfo.email != null && token != null) {
      setError(true)
      setErrorMessage("You are already signed in!")
    }
  }, [])

  const handleSubmit = async (e) => {
      e.preventDefault()
      
      try {
          if (password.length < 7) {
            setError(true)
            setErrorMessage("Password must have at least 7 characters")
          }
          const data = {username, email, password}
          const result = await axios.post('/users', data)
          const userData = result.data
          if (result.status == 201) {
            history.push('/home')
            LocalStorage.setUser(userData.user)
            LocalStorage.setToken(userData.token)
          }
          else {
            setError(true)
            setErrorMessage("Please check your credentials and try again!")
          }
      }
      catch (e) {
          setError(true)
          setErrorMessage('Cannot sign up. Please try again')
      }
  }

  const handleClick = () => {
    setAllowedExtraEmail(!allowedExtraEmail)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="userName"
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="Username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
			        	onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
				        onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" checked={allowedExtraEmail} color="primary" onClick={handleClick}/>}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/authorization" className={classes.link}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
        {error ? 
          <Snackbar 
            open={true} 
            autoHideDuration={6000}  
            anchorOrigin={{vertical: "top", horizontal: "center"}}
          >
            <Alert severity="error">{errorMessage}
            </Alert>
          </Snackbar> : null}
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    link: {
      fontSize: "small",
      color: theme.palette.primary.main,
    },
}))

export default SignUp