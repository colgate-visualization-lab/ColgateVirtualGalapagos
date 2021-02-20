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

export default function Test() {

    //This is the Main layout For all Modules. Right now it is just the Volcano Module, but eventually this will be 
    //Conditionally rendered via a prop who which module the user is on. This returns the layout for the fixed components
    //for each module, as well as the state that keeps their progress.

    // "id" is the extentions of the URL after volcano/ . It's what's used to move the user to different slides in the module
    let {id} = useParams();
    let nextSlide = id - -1 //I don't know why, but just adding 1 made it like a string, and subtracting a negative 1 works lol
    let prevSlide = id - 1
    const history = useHistory();

    //State
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
      });

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

    //Custome Styles
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
      
      const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));
      const Muiclasses = useStyles();

    return (
       <Fragment>
            <FormControl className={Muiclasses.formControl}>
                <InputLabel htmlFor="age-native-simple">Age</InputLabel>
                    <Select
                        native
                        value={state.age}
                        onChange={handleChange}
                        inputProps={{
                            name: 'age',
                            id: 'age-native-simple',
                        }}
                    > 
                        <option aria-label="None" value=""/>
                        <option value="./0">Intro Slide</option>
                        <option value="./1">Slide 1</option>
                        <option value="./2">Slide 2</option>
                    </Select>
            </FormControl>
            <VolcanoSlides id={id} />
            <Button style={nextButton} href={`./${nextSlide}`} variant="contained" color="secondary">
                Next
            </Button>
            <Button style={prevButton} href={`./${prevSlide}`} variant="contained" color="secondary">
                Back
            </Button>
        </Fragment>
    )
}
 {/* <div className={classes.scrollMenu}> Scroll Menu
                <div className={classes.flexbox}>
                    <Link to="./0">
                        <div className={classes.scrollItem}>Intro Video</div>
                    </Link>
                    <Link to="./1">
                        <div className={classes.scrollItem}>Slide 1</div>
                    </Link>
                    <Link to="./2">
                        <div className={classes.scrollItem}>Slide 2</div>
                    </Link>
                    <Link to="./3">
                        <div className={classes.scrollItem}>Slide 3</div>
                    </Link>
                    <Link to="./4">
                        <div className={classes.scrollItem}>Slide 4</div>
                    </Link>
                    <Link to="./5">
                        <div className={classes.scrollItem}>Slide 5</div>
                    </Link>
                    <Link to="./6">
                        <div className={classes.scrollItem}>Slide 6</div>
                    </Link>
                    <Link to="./7">
                        <div className={classes.scrollItem}>Slide 7</div>
                    </Link>
                    <Link to="./8">
                        <div className={classes.scrollItem}>Slide 8</div>
                    </Link>
                    <Link to="./9">
                        <div className={classes.scrollItem}>Slide 9</div>
                    </Link>
                    <Link to="./10">
                        <div className={classes.scrollItem}>Slide 10</div>
                    </Link>
                    <Link to="./11">
                        <div className={classes.scrollItem}>Slide 11</div>
                    </Link>
                    <Link to="./12">
                        <div className={classes.scrollItem}>Slide 12</div>
                    </Link>
                    <Link to="./13">
                        <div className={classes.scrollItem}>Slide 13</div>
                    </Link>
                    <Link to="./14">
                        <div className={classes.scrollItem}>Slide 14</div>
                    </Link>
                    <Link to="./15">
                        <div className={classes.scrollItem}>Slide 15</div>
                    </Link>
                </div>
            </div> */}
