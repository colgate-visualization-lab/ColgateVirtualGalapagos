import React, { Component } from 'react'
import classes from "./LoadingScreen.css"
import logo from "../../assets/images/homepage/logo.png"

class LoadingScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            rotate: 0
        }
    }

zero() {
    this.setState({rotate: 0});
    setTimeout(() => this.one(), 250)
}   
one() {
    this.setState({rotate: 1});
    setTimeout(() => this.two(), 250)
}
two() {
    this.setState({rotate: 2});
    setTimeout(() => this.three(), 250)
}
three() {
    this.setState({rotate: 3});
    setTimeout(() => this.zero(), 250)
}
componentDidMount() {
    setTimeout(() => this.one(), 250)
}
    render() {
     const {rotate} = this.state
        if (rotate == 0) {
        return (
            <div style={{height: "100vh", width: "100vw", backgroundColor: "aqua", position: "relative"}}>
                <h1 className={classes.a}>Loading...</h1>
                <img src={logo} className={classes.zero} />
            </div>
        )
    }
    else if (rotate == 1) {
        return (
            <div style={{height: "100vh", width: "100vw", backgroundColor: "aqua", position: "relative"}}>
                <h1 className={classes.b}>Loading...</h1>
                <img src={logo} className={classes.one} />
            </div>
        )
    }
    else if (rotate == 2) {
        return (
            <div style={{height: "100vh", width: "100vw", backgroundColor: "aqua", position: "relative"}}>
                <h1 className={classes.c}>Loading...</h1>
                <img src={logo} className={classes.two} />
            </div>
        )
    }
    else if (rotate == 3) {
        return (
            <div style={{height: "100vh", width: "100vw", backgroundColor: "aqua", position: "relative"}}>
                <h1 className={classes.d}>Loading...</h1>
                <img src={logo} className={classes.three} />
            </div>
        )
    }
}
}

export default LoadingScreen
