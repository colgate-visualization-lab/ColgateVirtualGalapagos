import React, { Component, Fragment } from 'react'
import { Back, Next, TerrainMap, magnifyingGlass, Ferd, santaCruz, VolcanoCompare, tectonicPlatesMap, convergent, convergent2, convergent2fix, divergent, transform, seaMounts, eruptionDates, TerrainOval, TerrainOvalCorrect, TerrainOvalWrong, XImage, DnDAnswers, DnD} from "../../assets/VolcanoModule/Images"
import { introVideo, plateTectonics, mantlePlumes} from "../../assets/VolcanoModule/Videos/index"
import classes from "./SlideContent.css"
import ResizePanel from "react-resize-panel";
import VolcanoeIframe from "../../components/VolcanoeIframe/VolcanoeIframe"

class SlideContent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    render() {
        const {Completed, optionalSlide, slide, videoFinished, widthRef, widthRef2} = this.props
        if (slide == 0) {
            return (
                <video controls controlsList="nodownload" className={classes.Video} onEnded={() => videoFinished()}>
                    <source src={introVideo} type="video/mp4"/>
                </video>
            ) 
        }
        else if (slide == 1) {
            const Vista = "https://virtualgalapagos.colgate.edu/360Videos/VolcanoModule/Caldara_Endtrail/index.htm"
            return (
                    <VolcanoeIframe src={Vista} />
            )
        }
        else if (slide == 2) {
            const Vista = "https://virtualgalapagos.colgate.edu/360Videos/VolcanoModule/Caldara_Shotfive/index.htm"
            return (
                <VolcanoeIframe src={Vista} />
            )
        }
        else if (slide == 3) {
            const Vista = "https://virtualgalapagos.colgate.edu/360Videos/VolcanoModule/Stillwater/index.htm"
            return (
                <VolcanoeIframe src={Vista} />
            )
        }
        else if (slide == 4) {
            const Vista = "https://virtualgalapagos.colgate.edu/360Videos/VolcanoModule/Cactus_Final/index.htm"
            return (
                <VolcanoeIframe src={Vista} />
            )
        }
        else if (slide == 5) {
            const Vista = "https://virtualgalapagos.colgate.edu/360Videos/VolcanoModule/PlazaCliff/index.htm"
            return (
                <VolcanoeIframe src={Vista} />
            )
        }
        else if (slide == 6) {
            return (
                <div className={classes.Image} style={{backgroundImage: `url(${TerrainMap})`, width: `${widthRef}px`}}>
                    <img onClick={() => optionalSlide()} src={magnifyingGlass} style={Completed? {position: "absolute", left: "20%", bottom: "20%", width: "6%"} : {position: "absolute", left: "20%", bottom: "20%", width: "6%", opacity: "0.3", pointerEvents: "none"}} />
                </div>
            )
        }
        else if (slide == 7) {
            return (
                // <div className={classes.mainDiv}>
                <Fragment>
                <img style={{zIndex: "-1"}} className={classes.mainContent} src={Ferd} />
                <div style={{width: `${widthRef2}px`}} className={classes.container}>
                    <div className={classes.body} >
                        <ResizePanel direction="e" style={{ width: '400px' }} handleClass={classes.customHandle} borderClass={classes.customResizeBorder}>
                            <div className={`${classes.sidebar} ${classes.withMargin} ${classes.panel}`}>
                                <div className={classes.duck3} />
                            </div>
                        </ResizePanel>
                    </div>
                 </div>
            </Fragment>
            )
        }
    }
}

export default SlideContent
