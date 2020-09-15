import React, { Component, Fragment } from 'react'
import VideoPlayer from '../../containers/VideoPlayer/VideoPlayer'
import classes from "../ModuleNav/ModuleNav.css"
import ModuleNavItem from "../ModuleNav/ModuleNavItem/ModuleNavItem"
import backgroundimage from "../../assets/images/homepage/P3153499.png"


class ExtraSelect extends React.Component{
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
      }
     
      openModal () {
        this.setState({isOpen: true})
      }

      render(){
        return (
            <div className={classes.backgroundDiv}>
            <img src={backgroundimage} className={classes.backgroundImage} />
            <div className={classes.wrapper}>
                <div className={classes.cols}>
                    {items}
                </div>
            </div> 
            </div> 
        )
      }
        
    }


const content = [
    {"title": "Scientest 1", 
        "description": "Follow along with Carlos and Adriana as they learn about volcanoes. Explore how volcanic islands form and how they came to be in the Galapagos!", 
        "background": "url(https://source.unsplash.com/collection/1155333/1600x900)", 
        "animation": " animated slideInDown",
        "video": ""
    }, 

    {"title": "Scientest 2", 
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.", 
        "background": "url(https://source.unsplash.com/collection/894/1600x900)", 
        "animation": " animated slideInDown slow",
        "video": ""
    }, 

    {"title": "Scientest 3",
        "description": "Carlos and Adriana need to learn about iguanas if they want to find the ones in their mystery. Help them learn about the different types of iguanas in the Galapagos and how they got there in the first place.",
        "background": "url(https://source.unsplash.com/collection/327760/1600x900)", 
        "animation": " animated slideInDown slower",
        "video": ""
    }, 

    {"title": "Interview",
        "description": "Currents are key to this iguana mystery! Learn about how currents affect the Galapagos islands and the benefits they provide animals like Carlos and Adriana!",
        "background": "url(https://source.unsplash.com/collection/319663/1600x900)", 
        "animation": " animated slideInUp",
        "video": ""
    }

]

const items = content.map((item, index) => <ModuleNavItem key={index} title={item.title} description={item.description} background={item.background} animation={item.animation} video={item.video}/>)

export default ExtraSelect
