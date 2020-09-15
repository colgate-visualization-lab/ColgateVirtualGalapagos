import React, {useState, Fragment} from 'react'
import PropTypes from 'prop-types'
import {Back, Next} from '../../assets/VolcanoModule/Images'
import classes from './MainContent.css'
import ControlButtons from '../ControlButtons/ControlButtons'





function MainContent(props) {

  const [slide, setSlide] = useState(0)

const data = [
  {
    id: '0',
    title: 'Iguana_Endemic01',
    type: 'video',
    url:'http://virtualgalapagos.colgate.edu/assets/VolcanoModule/VolcanoMantlePlumes.mp4'
  },
  {
    id: '1',
    title: 'Iguana_Carried01',
    type: 'image',
    url:'http://virtualgalapagos.colgate.edu/assets/VolcanoModule/TerrainMapOvals.png'
  },
  {
    id: '2',
    title: 'Iguana_Carried02',
    type: 'image',
    url:'http://virtualgalapagos.colgate.edu/assets/VolcanoModule/DragandDropAnswers.png'
  }
]

// const Media = props => {
        
//   if(props.type === "image"){
//     return(<img src={props.source} className={classes.img}/>)
//   }
      
//   else if(props.type === "video")
//   {
//     return(<video src={props.source} className={classes.vid} />)
//   }
  
// }
 const nextSlide = () => {
    setSlide(slide+1)
}

 const prevSlide = () => {
  setSlide(slide-1)
}
// const renderData = data.map((data) =>  <Media key={data.id} type={data.type} source={data.source} /> )       
const content = data[slide]
        if(content.type == 'image'){
          return(
        <div>
          {/* {renderData} */}
          
            <img src={content.url} className={classes.img}/>
          
          <ControlButtons bottom="20%" left="20%" right="20%" nextSlide={nextSlide} prevSlide={prevSlide}/>
        </div>

        )}
        else if(content.type == 'video'){
          return(
        <div>
          {/* {renderData} */}
          
            <video src={content.url} className={classes.vid} controls/>
          
          <ControlButtons bottom="20%" left="20%" right="20%" nextSlide={nextSlide} prevSlide={prevSlide}/>
        </div>

        )}
}

MainContent.propTypes = {

}

export default MainContent

