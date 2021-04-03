import { makeStyles } from '@material-ui/core'
import React, { Fragment, useEffect, useState } from 'react'
import {Button} from '@material-ui/core'
import axios from 'axios'
import LocalStorage from '../../utils/localStorage'

const Settings = () => {
    const classes = useStyles()
    const [loggedIn, setLoggedIn] = useState(false)
    useEffect(() => {
        const user = LocalStorage.getUser()
        const token = LocalStorage.getToken()
        if (user != null && token != null){
            setLoggedIn(true)
        }
    }, [])

    const handleLogOut = async () => {
        try {
            const token = LocalStorage.getToken()
            const result = await axios.post("/users/logout", {},{
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            if (result.status == 201){
                console.log('Success!')
                LocalStorage.removeUser()  
                LocalStorage.removeToken()
                setLoggedIn(false)
            }  
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <Fragment>
           <h1>Settings</h1>
           {loggedIn? <div>Logged In</div> : <div>Please log in</div>}
           <Button 
                variant="contained" 
                className={classes.button}
                onClick={handleLogOut}
            >
                Log out
            </Button> 
           <br />
           <Button variant="contained" className={classes.button}>Deactivate account</Button> 
        </Fragment>
    )
    
}

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: "red",
        margin: "10px",
    }
}))

export default Settings