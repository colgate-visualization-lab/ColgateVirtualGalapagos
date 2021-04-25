import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert"
import axios from "axios";
import LocalStorage from "../../utils/localStorage";
import { Link, useHistory } from "react-router-dom";

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}
  

const SignIn = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemembered, setRemember] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(false)
  const history = useHistory()

  useEffect(() => {
	const userInfo = LocalStorage.getUser()
	const token = LocalStorage.getToken()
	if (userInfo.email != null && token != null) {
		setLoggedIn(true)
		setEmail(userInfo.email)
	}
  }, [])

  const handleClose = (e, reason) => {
	  if (reason === 'clickaway') {
		  return 
	  }
	  setError(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
	if (loggedIn) {
		return
	}
    try {
	  if (email === '' || password === '') {
		setError(true)
		return
	  }
      const data = { email, password };
      const result = await axios.post("/users/login", data)
      if (result.status == 200) {
        setLoggedIn(true)
      } 
      const userData = result.data;
      LocalStorage.setUser(userData.user)
      LocalStorage.setToken(userData.token)
	  history.push('/home') 
    } catch (e) {
      setError(true)
    }
  };

  const handleClick = () => {
    setRemember(!isRemembered);
  };

  return (
	<Container component="main" maxWidth="xs">
      <CssBaseline/>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                checked={isRemembered}
                onClick={handleClick}
                color="primary"
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
			      disabled={loggedIn}
            color="primary"
          >
            Sign In
          </Button>
          <Snackbar 
            open={error} 
            autoHideDuration={6000} 
            onClose={handleClose} 
            anchorOrigin={{vertical: "top", horizontal: "center"}}
          >
            <Alert onClose={handleClose} severity="error">Cannot log in. Try again!</Alert>
		      </Snackbar>
          <Grid container>
            <Grid item xs>
              <Link to="/" className={classes.link}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup" className={classes.link}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
		{loggedIn ? 
		<Snackbar 
			open={true} 
			autoHideDuration={6000}  
			anchorOrigin={{vertical: "top", horizontal: "center"}}
		>
			<Alert severity="success">You are logged in! Please log out before trying to log in again
			</Alert>
		</Snackbar> : null}
      </div>
    </Container>
)
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    fontSize: "small",
    color: theme.palette.primary.main,
  },
}));

export default SignIn;
