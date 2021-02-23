import React, {useState, Fragment, useEffect} from 'react'
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
    const [animationState, setAnimationState] = useState(false)
    const [slideChange, setSlideChange] = useState("")
    //Methods 
    const handleDropdownChange = (event) => {
        setSlideChange(event.target.value)
    };
    const handleSlideChange = () => {
        // Necessary, at least for now, so the route doesn't get pushed to ""
        if (slideChange == "") {
        }
        else {
        history.push(`./${slideChange}`)
        }
    }
    const buttonHandler = (path, slide8opt, slide1) => {
        if (id == 1 && slide1) {
            setSlideChange("0")
        }
        else if (id == "6optional") {
            setSlideChange(6)
        }
        else if (id == "8optional1") {
            setSlideChange(slide8opt)
        }
        else if (id == "8optional2") {
            setSlideChange("8optional1")
        }
        else {
            setSlideChange(path)
        }
    }
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
    const hidden = {visibility: "hidden"}
    //MaterialUI Themes
    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
          backgroundColor: "white",
          borderRadius: "5px",
          position: "relative",
          left: "10px",
          top: "10px",
        },
    }));
    const Muiclasses = useStyles();
    //Lifecycle. Fires once, at mount, and everytime slideChange changes. Change slieChange to change route.
    useEffect(() => {
        setAnimationState(false); //Triggers fade out once slideChange change occurs.
        setTimeout(() => {handleSlideChange();setAnimationState(true)}, 500) //Triggers fade in at the same time as changing the route.
    }, [slideChange]);
    //Fires once, at mount.
    useEffect(() => {
        setTimeout(() => setAnimationState(true), 500)
        return () => {
            // cleaning up the listeners here
        }
    }, []);
    return (
       <Fragment>
            <FormControl className={Muiclasses.formControl}>
                <InputLabel htmlFor="age-native-simple" />
                    <Select
                        native
                        value={slideChange}
                        onChange={handleDropdownChange}
                    > 
                        <option value="" disabled >Slide Menu</option>
                        <option value="0" >Intro Slide</option>
                        <option value="1" >Slide 1 </option>
                        <option value="2" >Slide 2 </option>
                        <option value="3" >Slide 3 </option>
                        <option value="4" >Slide 4 </option>
                        <option value="5" >Slide 5 </option>
                        <option value="6" >Slide 6 </option>
                        <option value="6optional" >6 optional</option>
                        <option value="7" >Slide 7 </option>
                        <option value="8" >Slide 8 </option>
                        <option value="8optional1" >8optional1</option>
                        <option value="8optional2" >8optional2</option>
                        <option value="9" >Slide 9 </option>
                        <option value="10">Slide 10</option>
                        <option value="11">Slide 11</option>
                        <option value="12">Slide 12</option>
                        <option value="13">Slide 13</option>
                        <option value="14">Slide 14</option>
                        <option value="15">Slide 15</option>
                    </Select>
            </FormControl>
            <CSSTransition
                in={animationState}
                timeout={500}
                classNames={{
                    enter: `${classes.testenter}`,
                    enterActive: `${classes.testenteractive}`,
                    exit: `${classes.testexit}`,
                    exitActive: `${classes.testexitactive}`,
                    }}
                unmountOnExit
                > 
                <VolcanoSlides id={id} setSlideChange={setSlideChange} />
            </CSSTransition>
            <Button style={id == "6optional" || id == "8optional2" ? hidden : nextButton} 
                onClick={() => buttonHandler(nextSlide, "8optional2")} 
                variant="contained" 
                color="secondary">
                Next
            </Button>
            <Button style={id == "0"? hidden : prevButton} 
                onClick={() => buttonHandler(prevSlide, 8, true)} 
                variant="contained" 
                color="secondary">
                Back
            </Button>
        </Fragment>
    )
}