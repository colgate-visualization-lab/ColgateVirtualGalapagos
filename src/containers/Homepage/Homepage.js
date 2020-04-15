import React, { Component, Fragment } from "react"
import classes from './Homepage.css'
import Footer from '../../components/Footer/Footer'
import MapImg from '../../assets/homepage/homepage.png'
import ImageMapper from 'react-image-mapper'
import MAP from '/Users/giancarloarcese/ColgateVirtualGalapagos/src/components/ImageMaps.js'

class Homepage extends Component {
    render(){
        const animation = " animated slideInRight"
       
          
        return (
            
                <div className={classes.Map + animation}>
                <ImageMapper 
                src={MapImg}
                width={700}
                imgWidth={1920}
                map={MAP}
                
                />
                </div>
                /* <img src={MapImg} className={classes.Map + animation} useMap="#image-map"/> 
                <map name="image-map">
                    <area 
                        title="Mystery 1" 
                        href="mysteries/mystery1.html"
                        coords="390,367,438,342,446,311,497,295,514,275,533,297,553,334,587,367,595,395,601,462,637,
                        496,662,521,699,549,724,566,730,605,721,655,738,669,755,655,778,674,794,708,814,736,794,781,
                        780,820,738,854,710,854,674,871,618,894,567,879,491,874,474,846,446,817,458,793,497,742,539,
                        706,587,698,620,700,646,678,654,655,604,613,584,597,575,557,522,524,497,487,497,456,488,417,
                        486,386,469,369,415,386" 
                        shape="poly" />
                </map>  */
           
        )
    }
}

export default Homepage