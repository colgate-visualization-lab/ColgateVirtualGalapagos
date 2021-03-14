import React, {useState} from "react"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import axios from 'axios'
import LocalStorage from '../../utils/localStorage'
import {Link} from "react-router-dom"

const SignIn = () => {
	const classes = useStyles()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isRemembered, setRemember] = useState(true)
	const data = { email, password }
	const [loggedIn, setLoggedIn] = useState(false)
	const handleSubmit = async (e) => {
		e.preventDefault()
		try{
			const result = await axios.post('/users/login', data)
			if (result.status == 200) {
				setLoggedIn(true)
				window.alert("You are logged in")
			}
			const userData = result.data
			LocalStorage.setUser(userData.user)
			LocalStorage.setToken(userData.token)
		}
		catch(e) {
			console.log(e)
		}

	}

	return (
		<Container component="main" maxWidth="xs">
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
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						className={classes.textField}
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
						id="password"
						autoComplete="current-password"
						className={classes.textField}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" checked />}
						label="Remember me"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
            			Sign In
					</Button>
					<Grid container>
						<Grid item xs>
							<Link to="/">
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
			</div>
			<Box mt={8}>
			</Box>
		</Container>
	)
}

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
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
	textField: {
		backgroundColor: "rgba(255, 255, 255, 0.2)",
	},
	link: {
		
	},
}))

export default SignIn