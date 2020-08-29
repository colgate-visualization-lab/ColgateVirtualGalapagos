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
  },
  {
    id: '1',
    title: 'Iguana_Carried01',
    type: 'image',
  }
]

const Media = props => {
        
  if(props.type === "image"){
    return(<img src={props.source} className={classes.img}/>)
  }
      
  else if(props.type === "video")
  {
    return(<video src={props.source} className={classes.vid}/>)
  }
  
}
 const nextSlide = () => {
    setSlide(slide+1)
}

 const prevSlide = () => {
  setSlide(slide-1)
}
const renderData = data.map((data) =>  <Media key={data.id} type={data.type} source={data.source} /> )       
      return(
        <div>
          {renderData}
          <ControlButtons bottom="20%" left="20%" right="20%" nextSlide={nextSlide} prevSlide={prevSlide}/>
        </div>

        )
}

MainContent.propTypes = {

}

export default MainContent

