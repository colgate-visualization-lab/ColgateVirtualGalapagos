import React, { Component } from 'react'
import { TerrainMap, magnifyingGlass, Ferd, santaCruz, VolcanoCompare, tectonicPlatesMap, convergent, convergent2, convergent2fix, divergent, transform, seaMounts, eruptionDates, oval } from "../../assets/VolcanoModule/Images"
import { terrainMap2, volcanoSlider1, volcanoCompare360, terrainMap3, fernandina1, santaCruz1, terrainMap4, terrainMapAges1, terrainMapAges2, otherVolcanoes1, tectonicPlates1, platesGame1, tectonicPlates2, southAmerica1, terrainMap6, plumePlacement1, plumeYes1, plumeNo1, whereNext1 } from "../../assets/VolcanoModule/Audio"
import VolcanoeIframe from "../../components/VolcanoeIframe/VolcanoeIframe"
import classes from "./VolcanoModule.css"
import logo from "../../assets/images/homepage/logo.png"
import mantlePlumes from "../../assets/VolcanoModule/Videos/Final - Volcano - Mantle Plumes.mp4"
import tectonicPlates from "../../assets/VolcanoModule/Videos/Final - Volcano - Plate Tectonics.mp4"


class VolcanoeModule extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             slideIndex: 0,
             progressIndex: 0,
             completed: {visibility: "hidden"},
        }
    }

nextSlide() {
    if (this.state.progressIndex == 0) {
        this.setState({slideIndex: 1, progressIndex: 1});
        setTimeout(() => this.refs.audio.play(), 1)
        console.log("1")
    }
    else if (this.state.progressIndex > this.state.slideIndex) {
        this.setState((prevState) => ({slideIndex: prevState.slideIndex +1}))
        console.log("2")
    }
    else {
        this.setState((prevState) => ({slideIndex: prevState.slideIndex +1, progressIndex: this.state.slideIndex + 1, completed: {visibility: "hidden"}}));
        setTimeout(() => this.refs.audio.play(), 1)
        console.log("3")
    }
}
prevSlide()  {
    this.setState((prevState) => ({slideIndex: prevState.slideIndex -1}))
}
optionalSlide() {
    this.setState((prevState) => ({slideIndex: prevState.slideIndex +50}))
}
optionalNext() {
    this.setState((prevState) => ({slideIndex: prevState.slideIndex +1}))
}
prevoptionalSlide() {
    this.setState((prevState) => ({slideIndex: prevState.slideIndex -50}))
}
prevoptionalSlide2() {
    this.setState((prevState) => ({slideIndex: prevState.slideIndex -51}))
}
reveal() {
    this.setState({completed: {visibility: "visible"}})
}

    render() {
        const {slideIndex, completed} = this.state
        if (slideIndex == 0) {
            return (
                <div className={classes.divClass}>
                    <img style={{height: "auto", width: "70%"}} src={logo} />
                    <button className={classes.buttonClassnext} onClick={() => this.nextSlide()}>Enter Volcano Module</button>
                </div>
            )
        }
        else if (slideIndex == 1) {
            const Vista1 = "http://virtual.colgate.edu/Cooley/"
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={terrainMap2} onEnded={() => this.reveal()}/>
                    <VolcanoeIframe threeD={Vista1} />
                    <button style={completed} className={classes.buttonClassnext} onClick={() => this.nextSlide()}>Next</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => this.prevSlide()}>Back</button>
                </div>
            )
        }
        else if (slideIndex == 2) {
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={terrainMap2} onEnded={() => this.reveal()}/>
                    <img className={classes.imgClass} src={TerrainMap} />
                    <button style={completed} className={classes.buttonClassnext} onClick={() => this.optionalSlide()}>Optional</button>
                    <button style={completed} className={classes.buttonClassnext} onClick={() => this.nextSlide()}>Next</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => this.prevSlide()}>Back</button>
                </div>
            )
        }
        else if (slideIndex == 52) {
            const splitImage = "https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=70e85972-9c07-11ea-a7cb-0edaf8f81e27"
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={volcanoSlider1} onEnded={() => this.reveal()}/>
                    <VolcanoeIframe threeD={splitImage} />
                    <button className={classes.buttonClassback} onClick={() => this.prevoptionalSlide()}>back</button>
                </div>
            )
        }
        else if (slideIndex == 3) {
            const Vista1 = "http://virtual.colgate.edu/Cooley/"
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={volcanoCompare360} onEnded={() => this.reveal()}/>
                    <VolcanoeIframe threeD={Vista1} />
                    <button style={completed} className={classes.buttonClassnext} onClick={() => this.nextSlide()}>Next</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => {this.prevSlide(); this.optionalFalse()}}>Back</button>
                </div>
            )
        }
        else if (slideIndex == 4) {
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={terrainMap3} onEnded={() => this.reveal()}/>
                    <img style={{height: "100%", width: "100%"}} src={TerrainMap} />
                    <button style={completed} className={classes.slide4Button} onClick={() => this.optionalSlide()}>Compare Observations</button>
                    <button style={completed} className={classes.buttonClassnext} onClick={() => this.nextSlide()}>Next</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => this.prevSlide()}>Back</button>
                </div>
            )
        }
        else if (slideIndex == 54) {
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={fernandina1} onEnded={() => this.reveal()}/>
                    <img style={{height: "100%", width: "100%"}} src={Ferd} />
                    <button style={completed} className={classes.buttonClassback} onClick={() => this.prevoptionalSlide()}>Back</button>
                    <button style={completed} className={classes.buttonClassnext} onClick={() => this.optionalNext()}>Next</button>
                </div>
            )
        }
        else if (slideIndex == 55) {
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={santaCruz1} onEnded={() => this.reveal()}/>
                    <img style={{height: "100%", width: "100%"}} src={santaCruz} />
                    <button style={completed} className={classes.buttonClassback} onClick={() => this.prevSlide()}>Back</button>
                    <button style={completed} className={classes.buttonClassnext} onClick={() => this.prevoptionalSlide2()}>Back to Slide 10</button>
                </div>
            )
        }
        else if (slideIndex == 5) {
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={terrainMap4} onEnded={() => this.reveal()}/>
                    <img style={{height: "100%", width: "100%"}} src={TerrainMap} />
                    <button style={completed} className={classes.slide4Button} onClick={() => this.renderHidden()}>What's A Hypothesis?</button>
                    <div style={revealHidden} className={classes.popUp} onClick={() => this.hideAnotherHidden()}>A <i>Hypothesis</i> is a statement that explains why something happens. It is usually backed up by evidence or data that you have observed or collected beforehand. If the data and experiments agree with your idea, it supports you hypthesis. If the results of the tests disagree with your idea, then it refutes your hypohtesis indicating that it isn't quite right. Then your hypothesis needs to be adjusted. Part of science is testing to see what doesn't work, fixing it, and then retesting.</div>
                    <button style={completed} className={classes.buttonClassnext} onClick={() => this.nextSlide()}>Next</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => this.prevSlide()}>Back</button>
                </div>
            )
        }
        else if (slideIndex == 6) {
            return (
                <div className={classes.divClass}>
                    {/* Audio is Missing, using placeholder */}
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={terrainMapAges1} onEnded={() => this.reveal()}/>
                    <img style={{height: "100%", width: "100%"}} src={TerrainMap} />
                    <h1 style={{position: "absolute", top: "0", left: "0"}}>Drag and Drop Activity</h1>
                    <button style={completed} className={classes.buttonClassnext} onClick={() => this.nextSlide()}>Next</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => this.prevSlide()}>Back</button>
                </div>
            )
        }
        else if (slideIndex == 7) {
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={terrainMapAges2} onEnded={() => this.reveal()}/>
                    <img style={{height: "100%", width: "100%"}} src={TerrainMap} />
                    <h1 style={{position: "absolute", top: "0", left: "0"}}>Drag and Drop Activity Answers!</h1>
                    <button style={completed} className={classes.buttonClassnext} onClick={() => this.nextSlide()}>Next</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => this.prevSlide()}>Back</button>
                </div>
            )
        }
        else if (slideIndex == 8) {
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={otherVolcanoes1} onEnded={() => this.reveal()}/>
                    <img style={{height: "100%", width: "100%"}} src={VolcanoCompare} />
                    <button style={completed} className={classes.buttonClassnext} onClick={() => this.nextSlide()}>Next</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => this.prevSlide()}>Back</button>
                </div>
            )
        }
        else if (slideIndex == 9) {
            return (
                <div className={classes.divClass}>
                    {/* Audio is missing, using placeholder */}
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={otherVolcanoes1} onEnded={() => this.reveal()}/>
                    <VolcanoeIframe threeD={tectonicPlates} />
                    <button style={completed} className={classes.buttonClassnext} onClick={() => this.nextSlide()}>Next</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => this.prevSlide()}>Back</button>
                </div>
            )
        }
        else if (slideIndex == 10) {
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={tectonicPlates1} onEnded={() => this.reveal()}/>
                    <img style={{height: "100%", width: "100%"}} src={tectonicPlatesMap} />
                    <button style={completed} className={classes.buttonClassnext} onClick={() => this.nextSlide()}>Next</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => this.prevSlide()}>Back</button>
                </div>
            )
        }
        else if (slideIndex == 11) {
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={platesGame1} onEnded={() => this.reveal()}/>
                    <img style={{position: "absolute", height: "25%", width: "25%", top: "0", left: "0"}} src={convergent} /> <img style={{position: "absolute", height: "25%", width: "25%", bottom: "0", left: "0"}} src={convergent2fix} />
                    <img style={{position: "absolute", height: "25%", width: "25%", bottom: "0", right: "0"}} src={divergent} /> <img style={{position: "absolute", height: "25%", width: "25%", top: "0", right: "0"}} src={transform} />
                    <button style={completed} className={classes.buttonClassnext} onClick={() => this.nextSlide()}>Next</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => this.prevSlide()}>Back</button>
                </div>
            )
        }
        else if (slideIndex == 12) {
            return (
                <div className={classes.divClass}>
                    {/* Slide needs changes */}
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={tectonicPlates2} onEnded={() => this.reveal()}/>
                    <img style={{height: "100%", width: "100%"}} src={tectonicPlatesMap} />
                    <div style={revealHidden} className={classes.popUp} onClick={() => this.hideAnotherHidden()}><b>Divergent:</b> two plates move away from each other. <b>Convergent:</b> two plates move toward each other and collide, creating subduction zones or mountain building events. <b>Transform:</b> two plates slide past each other in opposite directions.</div>
                    <button style={completed} className={classes.buttonClassnext} onClick={() => this.nextSlide()}>Next</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => this.prevSlide()}>Back</button>
                </div>
            )
        }
        else if (slideIndex == 13) {
            return (
                <div className={classes.divClass}>
                    {/* Audio Missing */}
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={tectonicPlates2} onEnded={() => this.reveal()}/>
                    <VolcanoeIframe threeD={mantlePlumes} />
                    <button style={completed} className={classes.buttonClassnext} onClick={() => this.nextSlide()}>Next</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => this.prevSlide()}>Back</button>
                </div>
            )
        }
        else if (slideIndex == 14) {
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={southAmerica1} onEnded={() => this.reveal()}/>
                    <img style={{height: "100%", width: "100%"}} src={seaMounts} />
                    <button style={completed} className={classes.buttonClassnext} onClick={() => this.nextSlide()}>Next</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => this.prevSlide()}>Back</button>
                </div>
            )
        }
        else if (slideIndex == 15) {
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={terrainMap6} onEnded={() => this.reveal()}/>
                    <img style={{height: "100%", width: "100%"}} src={TerrainMap} />
                    <button style={completed} className={classes.buttonClassnext} onClick={() => this.nextSlide()}>Eruption Dates</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => this.prevSlide()}>Back</button>
                </div>
            )
        }
        else if (slideIndex == 16) {
            return (
                <div className={classes.divClass}>
                    {/* Audio missing */}
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={plumePlacement1} onEnded={() => this.reveal()}/>
                    <img style={{height: "100%", width: "100%"}} src={eruptionDates} />
                    <button style={completed} className={classes.buttonClassnext} onClick={() => this.nextSlide()}>Next</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => this.prevSlide()}>Back</button>
                </div>
            )
        }
        else if (slideIndex == 17) {
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={plumePlacement1} onEnded={() => this.reveal()}/>
                    <img style={{height: "100%", width: "100%"}} src={TerrainMap} /> 
                    <img style={{position: "absolute", width: "50%", right: "0"}} src={oval} onClick={() => this.optionalSlide()}/>
                    <img style={{position: "absolute", width: "50%", left: "0"}} src={oval} onClick={() => this.nextSlide()} />
                    <div style={{zIndex: "1", position: "absolute", top: "0", left: "0"}}>Pick a circle.</div>
                </div>
            )
        }
        else if (slideIndex == 67) {
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={plumeNo1} onEnded={() => this.reveal()}/>
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
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={plumeYes1} onEnded={() => this.reveal()}/>
                    <img style={{height: "100%", width: "100%"}} src={TerrainMap} />
                    <img style={{position: "absolute", width: "50%", left: "0"}} src={oval} />
                    <h1 style={{zIndex: "1", position: "absolute", top: "0", left: "0"}}>That's Correct!!!!!</h1>
                    <button style={completed} className={classes.buttonClassnext} onClick={() => this.nextSlide()}>Next</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => this.prevSlide()}>Back</button>
                </div>
            )
        }
        else if (slideIndex == 19) {
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={whereNext1} onEnded={() => this.reveal()}/>
                    <img style={{height: "100%", width: "100%"}} src={TerrainMap} />
                    <button style={completed} className={classes.buttonClassnext} onClick={() => this.nextSlide()}>Next</button>
                    <button style={completed} className={classes.buttonClassback} onClick={() => this.prevSlide()}>Back</button>
                </div>
            )
        }
    }
}

export default VolcanoeModule
