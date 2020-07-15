import React, { Component } from 'react'
import { Back, Next, TerrainMap, Ferd } from "../../assets/VolcanoModule/Images"
import { terrainMap2, volcanoSlider1, volcanoCompare360, terrainMap3, fernandina1, santaCruz1, terrainMap4, terrainMapAges1, terrainMapAges2, otherVolcanoes1, tectonicPlates1, platesGame1, tectonicPlates2, southAmerica1, terrainMap6, plumePlacement1, plumeYes1, plumeNo1, whereNext1, Exploration01, Exploration02, Exploration03, Exploration04, Exploration05 } from "../../assets/VolcanoModule/Audio"
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer"
import classes from "./VolcanoLayout.css"
import SlideContent from "../SlideContent/SlideContent"

class VolcanoLayout extends Component {
    constructor(props) {
        super(props)
        this.refForWidth = React.createRef();
        this.refForWidth2 = React.createRef();

        this.state = {
             audioPlaying: true,
             Completed: false,
             hideAudio: true, hideBack: true, hideNext: false,
             optional1: false, optional2: false, optional3: false, optional4: false,
             progressIndex: 0,
             slideAudio: "",
             slideIndex: 0,
             usedForWidth: 0, usedForWidth2: 0,
        }
    }
audioFinished() {
    this.setState({Completed: true, audioPlaying: false})
}    
nextSlide() {
    if (this.state.slideIndex == 0 && this.state.progressIndex > this.state.slideIndex) {
        this.setState({audioPlaying: false, hideAudio: false, hideBack: false, slideIndex: 1});
        setTimeout(() => this.setState({slideAudio: Exploration01}), 1)
    }
    else if (this.state.slideIndex == 0) {
        this.setState({audioPlaying: true, Completed: false, hideAudio: false, hideBack: false, progressIndex: 1, slideAudio: Exploration01, slideIndex: 1})
    }
    else if (this.state.slideIndex == 1 && this.state.progressIndex > this.state.slideIndex) {
        this.setState({audioPlaying: false, slideIndex: 2});
        setTimeout(() => this.setState({slideAudio: Exploration02}), 1)
    }
    else if (this.state.slideIndex == 1) {
        this.setState({audioPlaying: true, Completed: false, progressIndex: 2, slideAudio: Exploration02, slideIndex: 2})
    }
    else if (this.state.slideIndex == 2 && this.state.progressIndex > this.state.slideIndex) {
        this.setState({audioPlaying: false, slideIndex: 3});
        setTimeout(() => this.setState({slideAudio: Exploration03}), 1)
    }
    else if (this.state.slideIndex == 2) {
        this.setState({audioPlaying: true, Completed: false, progressIndex: 3, slideAudio: Exploration03, slideIndex: 3})
    }
    else if (this.state.slideIndex == 3 && this.state.progressIndex > this.state.slideIndex) {
        this.setState({audioPlaying: false, slideIndex: 4});
        setTimeout(() => this.setState({slideAudio: Exploration04}), 1)
    }
    else if (this.state.slideIndex == 3) {
        this.setState({audioPlaying: true, Completed: false, progressIndex: 4, slideAudio: Exploration04, slideIndex: 4})
    }
    else if (this.state.slideIndex == 4 && this.state.progressIndex > this.state.slideIndex) {
        this.setState({audioPlaying: false, slideIndex: 5});
        setTimeout(() => this.setState({slideAudio: Exploration05}), 1)
    }
    else if (this.state.slideIndex == 4) {
        this.setState({audioPlaying: true, Completed: false, progressIndex: 5, slideAudio: Exploration05, slideIndex: 5})
    }
    else if (this.state.slideIndex == 5 && this.state.progressIndex > this.state.slideIndex) {
        this.setState({audioPlaying: false, slideIndex: 6});
        setTimeout(() => this.setState({slideAudio: terrainMap2}), 1)
    }
    else if (this.state.slideIndex == 5) {
        this.setState({audioPlaying: true, Completed: false, progressIndex: 6, slideAudio: terrainMap2, slideIndex: 6})
    }
    else if (this.state.slideIndex == 6 && this.state.progressIndex > this.state.slideIndex) {
        this.setState({audioPlaying: false, slideIndex: 8});
        setTimeout(() => this.setState({slideAudio: volcanoCompare360}), 1)
    }
    else if (this.state.slideIndex == 6) {
        this.setState({audioPlaying: true, Completed: false, progressIndex: 8, slideAudio: volcanoCompare360, slideIndex: 8})
    }
}
prevSlide() {
    this.setState((prevState) => ({audioPlaying: false, slideIndex: this.state.slideIndex -1}));
    if (this.state.slideIndex == 1) {
        setTimeout(() => this.setState({hideAudio: true, hideBack: true, slideAudio: ""}), 1)
    }
    else if (this.state.slideIndex == 2) {
        setTimeout(() => this.setState({slideAudio: Exploration01}), 1)
    }
    else if (this.state.slideIndex == 3) {
        setTimeout(() => this.setState({slideAudio: Exploration02}), 1)
    }
    else if (this.state.slideIndex == 4) {
        setTimeout(() => this.setState({slideAudio: Exploration03}), 1)
    }
    else if (this.state.slideIndex == 5) {
        setTimeout(() => this.setState({slideAudio: Exploration04}), 1)
    }
    else if (this.state.slideIndex == 6) {
        setTimeout(() => this.setState({slideAudio: Exploration05}), 1)
    }
    else if (this.state.slideIndex == 7) {
        setTimeout(() => this.setState({hideNext: false, slideAudio: terrainMap2}), 1)
    }
}
optionalSlide() {
    if (this.state.slideIndex == 6 && this.state.optional1) {
        this.setState({audioPlaying: false, hideNext: true, slideIndex: 7});
        setTimeout(() => this.setState({slideAudio: volcanoSlider1}), 1)
    }
    else if (this.state.slideIndex == 6) {
        this.setState({audioPlaying: true, Completed: false, hideNext: true, optional1: true, slideAudio: volcanoSlider1, slideIndex: 7})
    }
}
toggleAudio() {
    if (this.state.audioPlaying) {
        this.setState({audioPlaying: false})
    }
    else {
        this.setState({audioPlaying: true})
    }
}
usedForWidth = () => {
    this.setState({usedForWidth: this.refForWidth.current.clientWidth, usedForWidth2: this.refForWidth2.current.clientWidth })
}
/* Lifecycle Functions */
componentDidMount() {
    window.addEventListener("resize", this.usedForWidth);
    setTimeout(() => this.setState({usedForWidth: this.refForWidth.current.clientWidth, usedForWidth2: this.refForWidth2.current.clientWidth}), 1)
}
componentWillUnmount () {
    window.removeEventListener("resize", this.usedForWidth)
}
    render() {
        const buttonStyle = {pointerEvents: "none", opacity: "0.3"} 
        const {audioPlaying, Completed, hideAudio, hideBack, hideNext, slideAudio, slideIndex, usedForWidth, usedForWidth2} = this.state
        return (
            <div className={classes.mainDiv}>
                <button style={{width: "100px", position: "absolute", right: "0"}} onClick={() => this.setState({hideAudio: false, hideBack: false, slideAudio: Exploration05, progressIndex: 6, slideIndex: 6 })}>dev button</button>
                <AudioPlayer hide={hideAudio} onEnded={() => this.audioFinished()} playing={audioPlaying} src={slideAudio} toggleAudio={() => this.toggleAudio()} />
                <SlideContent Completed={Completed} optionalSlide={() => this.optionalSlide()} slide={slideIndex} videoFinished={() => this.audioFinished()} widthRef={usedForWidth} widthRef2={usedForWidth2} />
                <img className={hideBack? classes.invisible : classes.imgBack} onClick={() => this.prevSlide()} src={Back} style={Completed? {} : buttonStyle} />
                <img className={hideNext? classes.invisible : classes.imgNext} onClick={() => this.nextSlide()} src={Next} style={Completed? {} : buttonStyle} />
                    {/* Using these as references for width */}
                    <img ref={this.refForWidth} src={TerrainMap} style={{height: "100%", visibility: "hidden"}} />
                    <img ref={this.refForWidth2} src={Ferd} style={{height: "100%", visibility: "hidden"}} />
            </div>
        )
    }
}

export default VolcanoLayout
