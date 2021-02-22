import React, {useState, Fragment} from 'react'
import classes from "./test.css"
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom"
import {useParams} from "react-router"
import VolcanoSlides from "../../components/VolcanoSlides/VolcanoSlides"
import axios from 'axios'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { CSSTransition } from 'react-transition-group';

export default function Test() {

    //This is the Main layout For all Modules. Right now it is just the Volcano Module, but eventually this will be 
    //Conditionally rendered via a prop who which module the user is on. This returns the layout for the fixed components
    //for each module, as well as the state that keeps their progress.

    // "id" is the extentions of the URL after volcano/ . It's what's used to move the user to different slides in the module
    let {id} = useParams();
    let nextSlide = id - -1 //I don't know why, but just adding 1 made it like a string, and subtracting a negative 1 works lol
    let prevSlide = id - 1
    const history = useHistory(); //This is used to change the URL in the dropdown menu.
    //State
    const [state, setState] = useState({age: '',});
    const [test, setTest] = useState(true)
    //Methods 
    const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
        // const path = event.target.random
        history.push(event.target.value);
      };
    //Custom Styles
    const nextButton = {
        position: "absolute",
        right: "10px",
        bottom: "10px"
      };
    const prevButton = {
        position: "absolute",
        left: "10px",
        bottom: "10px"
      };
    //MaterialUI Themes
    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
          backgroundColor: "white",
          position: "relative",
          left: "10px",
          top: "10px"
        },
    }));
    const Muiclasses = useStyles();

    return (
       <Fragment>
            {/* <button onClick={() => setTest(true)}>click me</button>
            <button onClick={() => setTest(false)}>click me 2</button> */}
            <FormControl className={Muiclasses.formControl}>
                <InputLabel htmlFor="age-native-simple" />
                    <Select
                        native
                        value={state.age}
                        onChange={handleChange}
                        inputProps={{
                            name: 'age',
                            id: 'age-native-simple',
                        }}
                    > 
                        <option value="" disabled >Slide Menu</option>
                        <option value="./0" >Intro Slide</option>
                        <option value="./1" >Slide 1 </option>
                        <option value="./2" >Slide 2 </option>
                        <option value="./3" >Slide 3 </option>
                        <option value="./4" >Slide 4 </option>
                        <option value="./5" >Slide 5 </option>
                        <option value="./6" >Slide 6 </option>
                        <option value="./7" >Slide 7 </option>
                        <option value="./8" >Slide 8 </option>
                        <option value="./9" >Slide 9 </option>
                        <option value="./10">Slide 10</option>
                        <option value="./11">Slide 11</option>
                        <option value="./12">Slide 12</option>
                        <option value="./13">Slide 13</option>
                        <option value="./14">Slide 14</option>
                        <option value="./15">Slide 15</option>
                    </Select>
            </FormControl>
            {/* <CSSTransition
                in={test}
                timeout={300}
                classNames="alert"
                unmountOnExit
                // onEnter={() => setTest(false)}
                // onExited={() => setTest(false)}
            > */}
                <VolcanoSlides id={id} />
            {/* </CSSTransition> */}
            <Button style={nextButton} href={`./${nextSlide}`} variant="contained" color="secondary">
                Next
            </Button>
            <Button style={prevButton} href={`./${prevSlide}`} variant="contained" color="secondary">
                Back
            </Button>
        </Fragment>
    )
}