import React, { Component } from 'react'
import { Back, Next, TerrainMap, magnifyingGlass, Ferd, santaCruz, VolcanoCompare, tectonicPlatesMap, convergent, convergent2, convergent2fix, divergent, transform, seaMounts, eruptionDates, TerrainOval, TerrainOvalCorrect, TerrainOvalWrong, oval } from "../../assets/VolcanoModule/Images"
import { terrainMap2, volcanoSlider1, volcanoCompare360, terrainMap3, fernandina1, santaCruz1, terrainMap4, terrainMapAges1, terrainMapAges2, otherVolcanoes1, tectonicPlates1, platesGame1, tectonicPlates2, southAmerica1, terrainMap6, plumePlacement1, plumeYes1, plumeNo1, whereNext1 } from "../../assets/VolcanoModule/Audio"
import VolcanoeIframe from "../../components/VolcanoeIframe/VolcanoeIframe"
import classes from "./VolcanoModule.css"
import logo from "../../assets/images/homepage/logo.png"
import mantlePlumes from "../../assets/VolcanoModule/Videos/Final - Volcano - Mantle Plumes.mp4"
import tectonicPlates from "../../assets/VolcanoModule/Videos/Final - Volcano - Plate Tectonics.mp4"
import MAP from "./ImageMap.js"
import ImageMapper from "react-image-mapper"

class VolcanoeModule extends Component {
    constructor(props) {
        super(props)
        this.headerRef2 = React.createRef();
        this.state = {
             slideIndex: -4,
             progressIndex: -4,
             completed: {visibility: "hidden"},
             optional1: false,
             optional2: false,
             optional2Next: false,
             optional3: false,
             height: 0
        }
    }
nextSlide() {
    if (this.state.progressIndex == -4) {
        this.setState({slideIndex: -3, progressIndex: -3});
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
reveal() {
    this.setState({completed: {visibility: "visible"}})
}
optionalOne() {                                             
    if (this.state.optional1) {
        this.setState({slideIndex: 52})   
    }
    else {
        this.setState({optional1: true, slideIndex: 52, completed: {visibility: "hidden"}});
        setTimeout(() => this.refs.audio.play(), 1)
    }
}
optionalTwo() {
    if (this.state.optional2) {
        this.setState({slideIndex: 54})   
    }
    else {
        this.setState({optional2: true, slideIndex: 54, completed: {visibility: "hidden"}});
        setTimeout(() => this.refs.audio.play(), 1)
    }
}
optionalTwoNext() {
    if (this.state.optional2Next) {
        this.setState({slideIndex: 55})   
    }
    else {
        this.setState({optional2Next: true, slideIndex: 55, completed: {visibility: "hidden"}});
        setTimeout(() => this.refs.audio.play(), 1)
    }
}
optionalThree() {
    if (this.state.optional3) {
        this.setState({slideIndex: 67})   
    }
    else {
        this.setState({optional3: true, slideIndex: 67, completed: {visibility: "hidden"}});
        setTimeout(() => this.refs.audio.play(), 1)
    }
}
updateDimensions = () => {
    this.setState({height: this.headerRef2.current.clientWidth })
}
imageFunction(area) {
    let decision = `${area.id}`
    if (decision > 1) {
        setTimeout(() => this.nextSlide(),1);
        window.removeEventListener("resize", this.updateDimensions)
    }
    else {
        setTimeout(() => this.optionalThree(),1);
        window.removeEventListener("resize", this.updateDimensions)
    }
}
    render() {
        const {slideIndex, completed, height} = this.state
        if (slideIndex == -4) {
            return (
                <div className={classes.divClass}>
                    <img style={{height: "auto", width: "70%"}} src={logo} />
                    <button onClick={() => this.setState({slideIndex: 18, progressIndex: 18})}>Dev Button</button>
                    <button style={{position: "absolute", right: "15%", bottom: "15%"}} className={classes.buttonClass} onClick={() => this.nextSlide()}>Enter Volcano Module</button>
                </div>
            )
        }
        else if (slideIndex == -3) {
            const Vista2 = "http://virtualgalapagos.colgate.edu/Volcano_360(1)/index.htm"
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={terrainMap2} onEnded={() => this.reveal()}/>
                    <VolcanoeIframe threeD={Vista2} />
                    <img style={completed} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    <img style={completed} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                </div>
            )
        }
        else if (slideIndex == -2) {
            const Vista1 = "http://virtualgalapagos.colgate.edu/Volcano_360(2)/index.htm"
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={terrainMap2} onEnded={() => this.reveal()}/>
                    <VolcanoeIframe threeD={Vista1} />
                    <img style={completed} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    <img style={completed} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                </div>
            )
        }
        else if (slideIndex == -1) {
            const Vista1 = "http://virtualgalapagos.colgate.edu/Volcano_360(3)/index.htm"
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={terrainMap2} onEnded={() => this.reveal()}/>
                    <VolcanoeIframe threeD={Vista1} />
                    <img style={completed} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    <img style={completed} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                </div>
            )
        }
        else if (slideIndex == 0) {
            const Vista1 = "http://virtualgalapagos.colgate.edu/Volcano_360(4)/index.htm"
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={terrainMap2} onEnded={() => this.reveal()}/>
                    <VolcanoeIframe threeD={Vista1} />
                    <img style={completed} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    <img style={completed} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                </div>
            )
        }
        else if (slideIndex == 1) {
            const Vista1 = "http://virtualgalapagos.colgate.edu/Volcano_360(5)/index.htm"
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={terrainMap2} onEnded={() => this.reveal()}/>
                    <VolcanoeIframe threeD={Vista1} />
                    <img style={completed} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    <img style={completed} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                </div>
            )
        }
        else if (slideIndex == 2) {
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={terrainMap2} onEnded={() => this.reveal()}/>
                    <img className={classes.imgClass} src={TerrainMap} />
                    <img style={completed} src={magnifyingGlass} className={classes.Magnifying} onClick={() => this.optionalOne()} />
                    <img style={completed} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    <img style={completed} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                </div>
            )
        }
        else if (slideIndex == 52) {
            const splitImage = "https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=70e85972-9c07-11ea-a7cb-0edaf8f81e27"
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={volcanoSlider1} onEnded={() => this.reveal()}/>
                    <VolcanoeIframe threeD={splitImage} />
                    <img style={completed} src={Back} className={classes.imgBack} onClick={() => this.setState({slideIndex: 2})} />
                </div>
            )
        }
        else if (slideIndex == 3) {
            const Vista1 = "http://virtual.colgate.edu/Cooley/"
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={volcanoCompare360} onEnded={() => this.reveal()}/>
                    <VolcanoeIframe threeD={Vista1} />
                    <img style={completed} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    <img style={completed} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                </div>
            )
        }
        else if (slideIndex == 4) {
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={terrainMap3} onEnded={() => this.reveal()}/>
                    <img className={classes.imgClass} src={TerrainMap} />
                    <button style={completed} className={`${classes.buttonClass} ${classes.button4}`} onClick={() => this.optionalTwo()}>Compare Observations</button>
                    <img style={completed} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    <img style={completed} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                </div>
            )
        }
        else if (slideIndex == 54) {
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={fernandina1} onEnded={() => this.reveal()}/>
                    <img className={classes.imgClass} src={Ferd} />
                    <img style={completed} src={Back} className={classes.imgBack} onClick={() => this.setState({slideIndex: 4})} />
                    <img style={completed} src={Next} className={classes.imgNext} onClick={() => this.optionalTwoNext()} />
                </div>
            )
        }
        else if (slideIndex == 55) {
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={santaCruz1} onEnded={() => this.reveal()}/>
                    <img className={classes.imgClass} src={santaCruz} />
                    <img style={completed} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                    <button style={completed} className={`${classes.buttonClass} ${classes.button55}`} onClick={() => this.setState({slideIndex: 4})}>Back to Slide 10</button>
                </div>
            )
        }
        else if (slideIndex == 5) {
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={terrainMap4} onEnded={() => this.reveal()}/>
                    <img className={classes.imgClass} src={TerrainMap} />
                    {/* <button style={completed} className={classes.slide4Button} onClick={() => this.renderHidden()}>What's A Hypothesis?</button>
                    <div style={revealHidden} className={classes.popUp} onClick={() => this.hideAnotherHidden()}>A <i>Hypothesis</i> is a statement that explains why something happens. It is usually backed up by evidence or data that you have observed or collected beforehand. If the data and experiments agree with your idea, it supports you hypthesis. If the results of the tests disagree with your idea, then it refutes your hypohtesis indicating that it isn't quite right. Then your hypothesis needs to be adjusted. Part of science is testing to see what doesn't work, fixing it, and then retesting.</div> */}
                    <img style={completed} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    <img style={completed} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                </div>
            )
        }
        else if (slideIndex == 6) {
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={terrainMapAges1} onEnded={() => this.reveal()}/>
                    <img className={classes.imgClass} src={TerrainMap} />
                    <h1 style={{position: "absolute", top: "0", left: "0"}}>Drag and Drop Activity</h1>
                    <img style={completed} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    <img style={completed} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                </div>
            )
        }
        else if (slideIndex == 7) {
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={terrainMapAges2} onEnded={() => this.reveal()}/>
                    <img className={classes.imgClass} src={TerrainMap} />
                    <h1 style={{position: "absolute", top: "0", left: "0"}}>Drag and Drop Activity Answers!</h1>
                    <img style={completed} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    <img style={completed} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                </div>
            )
        }
        else if (slideIndex == 8) {
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={otherVolcanoes1} onEnded={() => this.reveal()}/>
                    <img className={classes.imgClass} src={VolcanoCompare} />
                    <img style={completed} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    <img style={completed} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                </div>
            )
        }
        else if (slideIndex == 9) {
            return (
                <div className={classes.divClass}>
                    <audio muted src={otherVolcanoes1} />
                    <video controls controlsList="nodownload" muted className={classes.imgClass} onEnded={() => this.reveal()}>
				        <source src={tectonicPlates} type="video/mp4"/>
		        	</video>
                    <img style={completed} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    <img style={completed} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                </div>
            )
        }
        else if (slideIndex == 10) {
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={tectonicPlates1} onEnded={() => this.reveal()}/>
                    <img className={classes.imgClass} src={tectonicPlatesMap} />
                    <img style={completed} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    <img style={completed} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                </div>
            )
        }
        else if (slideIndex == 11) {
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={platesGame1} onEnded={() => this.reveal()}/>
                    <img style={{position: "absolute", height: "25%", width: "25%", top: "0", left: "0"}} src={convergent} /> <img style={{position: "absolute", height: "25%", width: "25%", bottom: "0", left: "0"}} src={convergent2fix} />
                    <img style={{position: "absolute", height: "25%", width: "25%", bottom: "0", right: "0"}} src={divergent} /> <img style={{position: "absolute", height: "25%", width: "25%", top: "0", right: "0"}} src={transform} />
                    <img style={completed} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    <img style={completed} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                </div>
            )
        }
        else if (slideIndex == 12) {
            return (
                <div className={classes.divClass}>
                    {/* Slide needs changes */}
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={tectonicPlates2} onEnded={() => this.reveal()}/>
                    <img className={classes.imgClass} src={tectonicPlatesMap} />
                    {/* <div style={revealHidden} className={classes.popUp} onClick={() => this.hideAnotherHidden()}><b>Divergent:</b> two plates move away from each other. <b>Convergent:</b> two plates move toward each other and collide, creating subduction zones or mountain building events. <b>Transform:</b> two plates slide past each other in opposite directions.</div> */}
                    <img style={completed} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    <img style={completed} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                </div>
            )
        }
        else if (slideIndex == 13) {
            return (
                <div className={classes.divClass}>
                    {/* Audio Missing */}
                    <audio muted src={tectonicPlates2} />
                    <video controls controlsList="nodownload" muted className={classes.imgClass} onEnded={() => this.reveal()}>
				        <source src={mantlePlumes} type="video/mp4"/>
		        	</video>
                    <img style={completed} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    <img style={completed} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                </div>
            )
        }
        else if (slideIndex == 14) {
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={southAmerica1} onEnded={() => this.reveal()}/>
                    <img className={classes.imgClass} src={seaMounts} />
                    <img style={completed} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    <img style={completed} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                </div>
            )
        }
        else if (slideIndex == 15) {
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={terrainMap6} onEnded={() => this.reveal()}/>
                    <img className={classes.imgClass} src={TerrainMap} />
                    <button style={completed} className={classes.buttonClassnext} onClick={() => this.nextSlide()}>Eruption Dates</button>
                    <img style={completed} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                </div>
            )
        }
        else if (slideIndex == 16) {
            return (
                <div className={classes.divClass} ref={this.randomRef}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={plumePlacement1} onEnded={() => {this.reveal();}}/>
                    <img className={classes.imgClass} src={eruptionDates} />
                    <img style={completed} src={Next} className={classes.imgNext} onClick={() => {this.nextSlide(); window.addEventListener("resize", this.updateDimensions)}} />
                    <img style={completed} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                </div>
            )
        }
        else if (slideIndex == 17) {
            return (
                <div className={classes.divClass} ref={this.headerRef}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={plumePlacement1} onEnded={() => {this.reveal(); this.updateDimensions()}}/>
                    <img className={classes.imgClass} src={TerrainMap} ref={this.headerRef2}/>
                    <div className={classes.divClass17} style={completed}>
                    <ImageMapper 
                        src = { TerrainOval }
    					width = { height }
    					imgWidth = { 1588 }
    					map = { MAP }
    					fillColor = { "rgba(0, 246, 255, 0.33)" }
    					onClick = {(area) => this.imageFunction(area)}
    				/> 
                    </div>
                    <div style={{zIndex: "1", position: "absolute", top: "0", left: "0"}}>Pick a circle.</div>
                </div>
            )
        }
        else if (slideIndex == 67) {
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={plumeNo1} onEnded={() => this.reveal()}/>
                    <img className={classes.imgClass} src={TerrainOvalWrong} />
                    <h1 style={{zIndex: "1", position: "absolute", top: "0", left: "0"}}>That was wrong Dummy! Click back and try again.</h1>
                    <img style={completed} src={Back} className={classes.imgBack} onClick={() => {this.setState({slideIndex: 17}); window.addEventListener("resize", this.updateDimensions)}} />
                </div>
            )
        }
        else if (slideIndex == 18) {
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={plumeYes1} onEnded={() => this.reveal()}/>
                    <img className={classes.imgClass} src={TerrainOvalCorrect} />
                    <h1 style={{zIndex: "1", position: "absolute", top: "0", left: "0"}}>That's Correct!!!!!</h1>
                    <img style={completed} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    <img style={completed} src={Back} className={classes.imgBack} onClick={() => {this.prevSlide(); window.addEventListener("resize", this.updateDimensions); setTimeout(() => this.updateDimensions(),1)}} />
                </div>
            )
        }
        else if (slideIndex == 19) {
            return (
                <div className={classes.divClass}>
                    <audio className={classes.audioPlayer} controls controlsList="nodownload" ref="audio" src={whereNext1} onEnded={() => this.reveal()}/>
                    <img className={classes.imgClass} src={TerrainMap} />
                    <img style={completed} src={Next} className={classes.imgNext} onClick={() => this.nextSlide()} />
                    <img style={completed} src={Back} className={classes.imgBack} onClick={() => this.prevSlide()} />
                </div>
            )
        }
    }
}

export default VolcanoeModule
