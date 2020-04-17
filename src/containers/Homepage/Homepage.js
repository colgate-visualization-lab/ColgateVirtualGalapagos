import React, { Component, Fragment } from "react"
import classes from './Homepage.css'
import Footer from '../../components/Footer/Footer'
import MapImg from '../../assets/homepage/homepage.png'
import ImageMapper from 'react-image-mapper'
import MAP from '../../components/ImageMap/ImageMaps.js'

class Homepage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg: 'Click on the highlighted island to travel to the next module!',
        }
    }
enterArea(area) {
    let unlock = `${area._id}`
    let lockValue = this.props.lockValue
    if(unlock <= lockValue){
        this.setState({
            msg: `${area.name}`
    })
}
    else { 
        this.setState({
            msg: "this is locked"
        })
    }
}
leaveArea() {
    this.setState({
        msg: 'Click on the highlighted island to travel to the next module!'
    })
}
    render(){
        const animation = "animated slideInRight"
        const {msg} = this.state
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
                <h1 className={classes.Mapheader}>{msg}</h1>
            </div>
        </div>  
        )
    }
}

export default Homepage
// export const unlockModules = (event) => {
//     this.setState({ 
//         lockingValue: event.target.id },() => {
//       console.log(this.state.lockingValue)
//     });
//   }