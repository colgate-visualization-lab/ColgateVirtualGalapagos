import React, { Component, Fragment } from "react"
import classes from './Homepage.css'
import Footer from '../../components/Footer/Footer'
import MapImg from '../../assets/homepage/homepage.png'
import ImageMapper from 'react-image-mapper'
import MAP from '/Users/giancarloarcese/ColgateVirtualGalapagos/src/components/ImageMaps.js'




class Homepage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           
             msg: 'Click on the highlighted island to travel to the next module!'
        }
    }
    
enterArea(area) {
    this.setState({
        msg: `${area.name}`
    })
}
leaveArea() {
    this.setState({
        msg: 'Click on the highlighted island to travel to the next module!'
    })
}
    render(){
        const animation = "animated slideInRight"
        return (
        <div className="container">
            <div className={animation}>
                <ImageMapper 
                src={MapImg}
                width={1100}
                imgWidth={1920}
                map={MAP}
                fillColor={"rgba(0, 246, 255, 0.33)"}
                onMouseEnter={area => this.enterArea(area)}
				onMouseLeave={() => this.leaveArea()}
                />
                <h1 className={classes.Mapheader}>{this.state.msg}</h1>
            </div>
        </div>  
        )
    }
}

export default Homepage