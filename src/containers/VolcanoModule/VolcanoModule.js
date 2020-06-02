import React, { Component } from 'react'
import { TerrainMap, magnifyingGlass, Ferd, santaCruz, VolcanoCompare, tectonicPlatesMap, convergent, convergent2, convergent2fix, divergent, transform, seaMounts, eruptionDates, oval } from "../../assets/VolcanoModule/Images"
import VolcanoeIframe from "../../components/VolcanoeIframe/VolcanoeIframe"
import classes from "./VolcanoModule.css"
import logo from "../../assets/images/homepage/logo.png"
import tectonicPlates from "../../assets/VolcanoModule/Videos/Final - Volcano - Plate Tectonics.mp4"
import mantlePlumes from "../../assets/VolcanoModule/Videos/Final - Volcano - Mantle Plumes.mp4"

class VolcanoeModule extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             slideIndex: 0,
             revealHidden: {visibility: "hidden"},
             progressIndex: 0,
             completed: {visibility: "hidden"},
             notCompleted: {visibility: "hidden"},
        }
    }

nextSlide() {
    this.setState(prevState => {
        return {slideIndex: prevState.slideIndex +1}
    })
}
prevSlide()  {
    this.setState(prevState => {
        return {slideIndex: prevState.slideIndex -1}
    })
}
optionalSlide() {
    this.setState(prevState => {
        return {slideIndex: prevState.slideIndex +50}
    })
}
prevoptionalSlide() {
    this.setState(prevState => {
        return {slideIndex: prevState.slideIndex -50}
    })
}
prevoptionalSlide2() {
    this.setState(prevState => {
        return {slideIndex: prevState.slideIndex -51}
    })
}
renderHidden() {
    this.setState({revealHidden: {visibility: "visible"}})
}
hideAnotherHidden() {
    this.setState({revealHidden: {visibility: "hidden"}})
}
hideHidden() {
    this.setState({notCompleted: {visibility: "hidden"}})
}
updateProgress() {
    this.setState({progressIndex: this.state.slideIndex + 1})
}
backTrack() {
    if (this.state.progressIndex > this.state.slideIndex) {
       this.setState({completed: {visibility: "visible"}, notCompleted: {visibility: "hidden"}})
    }
    else if (this.state.slideIndex = this.state.progressIndex) {
        this.setState({completed: {visibility: "hidden"}, notCompleted: {visibility: "visible"}})
    }
}
// forwardTrack() {
//     if (this.state.progressIndex - 2 > this.state.slideIndex) {
//         this.setState({completed: {visibility: "visible"}, notCompleted: {visibility: "hidden"}})
//      }
//      else if (this.state.slideIndex == this.state.progressIndex - 2) {
//          this.setState({completed: {visibility: "hidden"}, notCompleted: {visibility: "visible"}})
//      }
//      console.log("yo")
// }

    render() {
        const {slideIndex, revealHidden, completed, notCompleted} = this.state
        if (slideIndex == 0) {
            return (
                <div className={classes.divClass}>
                    <img style={{height: "auto", width: "70%"}} src={logo} />
                    <button className={classes.buttonClassnext} onClick={() => {this.updateProgress(); this.nextSlide(); setTimeout(() => this.backTrack(), 2000)}}>Enter Volcano Module</button>
                </div>
            )
        }
        else if (slideIndex == 1) {
            const Vista1 = "http://virtual.colgate.edu/Cooley/"
            return (
                <div className={classes.divClass}>
                    <VolcanoeIframe threeD={Vista1} />
                    <button style={notCompleted} className={classes.buttonClassnext} onClick={() => {this.updateProgress(); this.nextSlide(); this.hideHidden(); setTimeout(() => this.backTrack(), 2000)}}>Next</button>
                    <button style={completed} className={classes.buttonClassnext} onClick={() => {this.nextSlide(); setTimeout(() => this.backTrack(), 1)}}>Next :)</button>
                </div>
            )
        }
        else if (slideIndex == 2) {
            return (
                <div className={classes.divClass}>
                    <img style={{height: "100%", width: "100%"}} src={TerrainMap} />
                    <img style={notCompleted} className={classes.slide2Image} src={magnifyingGlass} onClick={() => this.optionalSlide()}/>
                    <img style={completed} className={classes.slide2Image} src={magnifyingGlass} onClick={() => this.optionalSlide()}/>
                    <button style={notCompleted} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={notCompleted} className={classes.buttonClassnext} onClick={() => {this.updateProgress(); this.nextSlide(); this.hideHidden(); setTimeout(() => this.backTrack(), 2000)}}>Next</button>
                    <button style={completed} className={classes.buttonClassnext} onClick={() => {this.nextSlide(); setTimeout(() => this.backTrack(), 1)}}>Next :)</button>
                </div>
            )
        }
        else if (slideIndex == 52) {
            const splitImage = "https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=70e85972-9c07-11ea-a7cb-0edaf8f81e27"
            return (
                <div className={classes.divClass}>
                    <VolcanoeIframe threeD={splitImage} />
                    <button className={classes.buttonClassback} onClick={() => this.prevoptionalSlide()}>Back</button>
                </div>
            )
        }
        else if (slideIndex == 3) {
            const Vista1 = "http://virtual.colgate.edu/Cooley/"
            return (
                <div className={classes.divClass}>
                    <VolcanoeIframe threeD={Vista1} />
                    <button style={notCompleted} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={notCompleted} className={classes.buttonClassnext} onClick={() => {this.updateProgress(); this.nextSlide(); this.hideHidden(); setTimeout(() => this.backTrack(), 2000)}}>Next</button>
                    <button style={completed} className={classes.buttonClassnext} onClick={() => {this.nextSlide(); setTimeout(() => this.backTrack(), 1)}}>Next :)</button>
                </div>
            )
        }
        else if (slideIndex == 4) {
            return (
                <div className={classes.divClass}>
                    <img style={{height: "100%", width: "100%"}} src={TerrainMap} />
                    <button style={notCompleted} className={classes.slide4Button} onClick={() => this.optionalSlide()}>Compare Observations</button>
                    <button style={completed} className={classes.slide4Button} onClick={() => this.optionalSlide()}>Compare Observations</button>
                    <button style={notCompleted} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={notCompleted} className={classes.buttonClassnext} onClick={() => {this.updateProgress(); this.nextSlide(); this.hideHidden(); setTimeout(() => this.backTrack(), 2000)}}>Next</button>
                    <button style={completed} className={classes.buttonClassnext} onClick={() => {this.nextSlide(); setTimeout(() => this.backTrack(), 1)}}>Next :)</button>
                </div>
            )
        }
        else if (slideIndex == 54) {
            return (
                <div className={classes.divClass}>
                    <img style={{height: "100%", width: "100%"}} src={Ferd} />
                    <button className={classes.buttonClassback} onClick={() => this.prevoptionalSlide()}>Back</button>
                    <button className={classes.buttonClassnext} onClick={() => this.nextSlide()}>Next</button>
                </div>
            )
        }
        else if (slideIndex == 55) {
            return (
                <div className={classes.divClass}>
                    <img style={{height: "100%", width: "100%"}} src={santaCruz} />
                    <button className={classes.buttonClassback} onClick={() => this.prevSlide()}>Back</button>
                    <button className={classes.buttonClassnext} onClick={() => this.prevoptionalSlide2()}>Back to Slide 10</button>
                </div>
            )
        }
        else if (slideIndex == 5) {
            return (
                <div className={classes.divClass}>
                    <img style={{height: "100%", width: "100%"}} src={TerrainMap} />
                    <button style={notCompleted} className={classes.slide4Button} onClick={() => this.renderHidden()}>What's A Hypothesis?</button>
                    <button style={completed} className={classes.slide4Button} onClick={() => this.renderHidden()}>What's A Hypothesis?</button>
                    <div style={revealHidden} className={classes.popUp} onClick={() => this.hideAnotherHidden()}>A <i>Hypothesis</i> is a statement that explains why something happens. It is usually backed up by evidence or data that you have observed or collected beforehand. If the data and experiments agree with your idea, it supports you hypthesis. If the results of the tests disagree with your idea, then it refutes your hypohtesis indicating that it isn't quite right. Then your hypothesis needs to be adjusted. Part of science is testing to see what doesn't work, fixing it, and then retesting.</div>
                    <button style={notCompleted} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={notCompleted} className={classes.buttonClassnext} onClick={() => {this.updateProgress(); this.nextSlide(); this.hideHidden(); setTimeout(() => this.backTrack(), 2000)}}>Next</button>
                    <button style={completed} className={classes.buttonClassnext} onClick={() => {this.nextSlide(); setTimeout(() => this.backTrack(), 1)}}>Next :)</button>
                </div>
            )
        }
        else if (slideIndex == 6) {
            return (
                <div className={classes.divClass}>
                    <img style={{height: "100%", width: "100%"}} src={TerrainMap} />
                    <h1 style={{position: "absolute", top: "0", left: "0"}}>Drag and Drop Activity</h1>
                    <button style={notCompleted} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={notCompleted} className={classes.buttonClassnext} onClick={() => {this.updateProgress(); this.nextSlide(); this.hideHidden(); setTimeout(() => this.backTrack(), 2000)}}>Next</button>
                    <button style={completed} className={classes.buttonClassnext} onClick={() => {this.nextSlide(); setTimeout(() => this.backTrack(), 1)}}>Next :)</button>
                </div>
            )
        }
        else if (slideIndex == 7) {
            return (
                <div className={classes.divClass}>
                    <img style={{height: "100%", width: "100%"}} src={TerrainMap} />
                    <h1 style={{position: "absolute", top: "0", left: "0"}}>Drag and Drop Activity Answers!</h1>
                    <button style={notCompleted} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={notCompleted} className={classes.buttonClassnext} onClick={() => {this.updateProgress(); this.nextSlide(); this.hideHidden(); setTimeout(() => this.backTrack(), 2000)}}>Next</button>
                    <button style={completed} className={classes.buttonClassnext} onClick={() => {this.nextSlide(); setTimeout(() => this.backTrack(), 1)}}>Next :)</button>
                </div>
            )
        }
        else if (slideIndex == 8) {
            return (
                <div className={classes.divClass}>
                    <img style={{height: "100%", width: "100%"}} src={VolcanoCompare} />
                    <button style={notCompleted} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={notCompleted} className={classes.buttonClassnext} onClick={() => {this.updateProgress(); this.nextSlide(); this.hideHidden(); setTimeout(() => this.backTrack(), 2000)}}>Next</button>
                    <button style={completed} className={classes.buttonClassnext} onClick={() => {this.nextSlide(); setTimeout(() => this.backTrack(), 1)}}>Next :)</button>
                </div>
            )
        }
        else if (slideIndex == 9) {
            return (
                <div className={classes.divClass}>
                    <VolcanoeIframe threeD={tectonicPlates} />
                    <button style={notCompleted} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={notCompleted} className={classes.buttonClassnext} onClick={() => {this.updateProgress(); this.nextSlide(); this.hideHidden(); setTimeout(() => this.backTrack(), 2000)}}>Next</button>
                    <button style={completed} className={classes.buttonClassnext} onClick={() => {this.nextSlide(); setTimeout(() => this.backTrack(), 1)}}>Next :)</button>
                </div>
            )
        }
        else if (slideIndex == 10) {
            return (
                <div className={classes.divClass}>
                    <img style={{height: "100%", width: "100%"}} src={tectonicPlatesMap} />
                    <button style={notCompleted} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={notCompleted} className={classes.buttonClassnext} onClick={() => {this.updateProgress(); this.nextSlide(); this.hideHidden(); setTimeout(() => this.backTrack(), 2000)}}>Next</button>
                    <button style={completed} className={classes.buttonClassnext} onClick={() => {this.nextSlide(); setTimeout(() => this.backTrack(), 1)}}>Next :)</button>
                </div>
            )
        }
        else if (slideIndex == 11) {
            return (
                <div className={classes.divClass}>
                    <img style={{position: "absolute", height: "25%", width: "25%", top: "0", left: "0"}} src={convergent} /> <img style={{position: "absolute", height: "25%", width: "25%", bottom: "0", left: "0"}} src={convergent2fix} />
                    <img style={{position: "absolute", height: "25%", width: "25%", bottom: "0", right: "0"}} src={divergent} /> <img style={{position: "absolute", height: "25%", width: "25%", top: "0", right: "0"}} src={transform} />
                    <button style={notCompleted} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={notCompleted} className={classes.buttonClassnext} onClick={() => {this.updateProgress(); this.nextSlide(); this.renderHidden(); this.hideHidden(); setTimeout(() => this.backTrack(), 2000)}}>Next</button>
                    <button style={completed} className={classes.buttonClassnext} onClick={() => {this.nextSlide(); this.renderHidden(); setTimeout(() => this.backTrack(), 1)}}>Next :)</button>
                </div>
            )
        }
        else if (slideIndex == 12) {
            return (
                <div className={classes.divClass}>
                    <img style={{height: "100%", width: "100%"}} src={tectonicPlatesMap} />
                    <div style={revealHidden} className={classes.popUp} onClick={() => this.hideAnotherHidden()}><b>Divergent:</b> two plates move away from each other. <b>Convergent:</b> two plates move toward each other and collide, creating subduction zones or mountain building events. <b>Transform:</b> two plates slide past each other in opposite directions.</div>
                    <button style={notCompleted} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={notCompleted} className={classes.buttonClassnext} onClick={() => {this.updateProgress(); this.nextSlide(); this.hideHidden(); setTimeout(() => this.backTrack(), 2000)}}>Next</button>
                    <button style={completed} className={classes.buttonClassnext} onClick={() => {this.nextSlide(); setTimeout(() => this.backTrack(), 1)}}>Next :)</button>
                </div>
            )
        }
        else if (slideIndex == 13) {
            return (
                <div className={classes.divClass}>
                    <VolcanoeIframe threeD={mantlePlumes} />
                    <button style={notCompleted} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={notCompleted} className={classes.buttonClassnext} onClick={() => {this.updateProgress(); this.nextSlide(); this.hideHidden(); setTimeout(() => this.backTrack(), 2000)}}>Next</button>
                    <button style={completed} className={classes.buttonClassnext} onClick={() => {this.nextSlide(); setTimeout(() => this.backTrack(), 1)}}>Next :)</button>
                </div>
            )
        }
        else if (slideIndex == 14) {
            return (
                <div className={classes.divClass}>
                    <img style={{height: "100%", width: "100%"}} src={seaMounts} />
                    <button style={notCompleted} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={notCompleted} className={classes.buttonClassnext} onClick={() => {this.updateProgress(); this.nextSlide(); this.hideHidden(); setTimeout(() => this.backTrack(), 2000)}}>Next</button>
                    <button style={completed} className={classes.buttonClassnext} onClick={() => {this.nextSlide(); setTimeout(() => this.backTrack(), 1)}}>Next :)</button>
                </div>
            )
        }
        else if (slideIndex == 15) {
            return (
                <div className={classes.divClass}>
                    <img style={{height: "100%", width: "100%"}} src={TerrainMap} />
                    <button style={notCompleted} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={notCompleted} className={classes.slide4Button} onClick={() => {this.updateProgress(); this.nextSlide(); this.hideHidden(); setTimeout(() => this.backTrack(), 2000)}}>Eruption Dates</button>
                    <button style={completed} className={classes.slide4Button } onClick={() => {this.nextSlide(); setTimeout(() => this.backTrack(), 1)}}>Eruption Dates</button>
                </div>
            )
        }
        else if (slideIndex == 16) {
            return (
                <div className={classes.divClass}>
                    <img style={{height: "100%", width: "100%"}} src={eruptionDates} />
                    <button style={notCompleted} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={notCompleted} className={classes.buttonClassnext} onClick={() => {this.updateProgress(); this.nextSlide(); this.hideHidden(); setTimeout(() => this.backTrack(), 1)}}>Next</button>
                    <button style={completed} className={classes.buttonClassnext} onClick={() => {this.nextSlide(); setTimeout(() => this.backTrack(), 1)}}>Next :)</button>
                </div>
            )
        }
        else if (slideIndex == 17) {
            return (
                <div className={classes.divClass}>
                    <img style={{height: "100%", width: "100%"}} src={TerrainMap} /> 
                    <img style={{position: "absolute", width: "50%", right: "0"}} src={oval} onClick={() => this.optionalSlide()}/>
                    <img style={{position: "absolute", width: "50%", left: "0"}} src={oval} onClick={() => {this.updateProgress(); this.nextSlide(); this.hideHidden(); setTimeout(() => this.backTrack(), 1)}} />
                    <div style={{zIndex: "1", position: "absolute", top: "0", left: "0"}}>Pick a circle.</div>
                </div>
            )
        }
        else if (slideIndex == 67) {
            return (
                <div className={classes.divClass}>
                    <img style={{height: "100%", width: "100%"}} src={TerrainMap} />
                    <img style={{position: "absolute", width: "50%", right: "0"}} src={oval}/>
                    <h1 style={{zIndex: "1", position: "absolute", top: "0", left: "0"}}>That was wrong Dummy! Click back and try again.</h1>
                    <button className={classes.buttonClassback} onClick={() => this.prevoptionalSlide()}>Back</button>
                </div>
            )
        }
        else if (slideIndex == 18) {
            return (
                <div className={classes.divClass}>
                    <img style={{height: "100%", width: "100%"}} src={TerrainMap} />
                    <img style={{position: "absolute", width: "50%", left: "0"}} src={oval} />
                    <h1 style={{zIndex: "1", position: "absolute", top: "0", left: "0"}}>That's Correct!!!!!</h1>
                    <button style={notCompleted} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={notCompleted} className={classes.buttonClassnext} onClick={() => {this.updateProgress(); this.nextSlide(); this.hideHidden(); setTimeout(() => this.backTrack(), 1)}}>Next</button>
                    <button style={completed} className={classes.buttonClassnext} onClick={() => {this.nextSlide(); setTimeout(() => this.backTrack(), 1)}}>Next :)</button>
                </div>
            )
        }
        else if (slideIndex == 19) {
            return (
                <div className={classes.divClass}>
                    <img style={{height: "100%", width: "100%"}} src={TerrainMap} />
                    <button style={notCompleted} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => {this.prevSlide(); setTimeout(() => this.backTrack(), 1)}}>Back</button>
                    <button style={notCompleted} className={classes.buttonClassnext} onClick={() => {this.updateProgress(); this.nextSlide(); this.hideHidden(); setTimeout(() => this.backTrack(), 2000)}}>Next</button>
                    <button style={completed} className={classes.buttonClassnext} onClick={() => {this.nextSlide(); setTimeout(() => this.backTrack(), 1)}}>Next :)</button>
                </div>
            )
        }
    }
}

export default VolcanoeModule
