import React, { Fragment, Component } from "react"
import classes from "./Homepage.css"
import ImageMapper from "react-image-mapper"
import MAP from "../../components/ImageMap/ImageMaps.js"
import { Redirect } from "react-router"
import backgroundImage from "../../assets/images/homepage/P3153499.png"
//import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo.js"

class Homepage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			msg: "Click on the highlighted island to travel to the next module!",
			route: false,
			link: "",
			width: 0
		}
	}

	//Image Map States & Handlers
	enterArea(area) {
		let unlock = `${area._id}`
		let lockValue = this.props.lockValue

		if (unlock <= lockValue) {
			this.setState({ msg: `${area.name}`, link: `${area.id}` })
		} else {
			this.setState({ msg: "this is locked" })
		}
	}

	leaveArea() {
		this.setState({ msg: "Click on the highlighted island to travel to the next module!" })
	}

	enterModule(area) {
		let unlock = `${area._id}`
		let lockValue = this.props.lockValue
		if (unlock <= lockValue) {
			this.setState({ route: true })
		}
	}

    //<ImmageMapper> cannot be styled with css, so these methods update a width state for responsivness
    updateDimensions = () => {
    	let windowWidth = window.innerWidth
    	if (windowWidth > 1500) {
    		this.setState({ width: window.innerWidth - 500 })
    	} else if (windowWidth > 1300) {
    		this.setState({ width: window.innerWidth - 400 })
    	} else if (windowWidth > 1100) {
    		this.setState({ width: window.innerWidth - 300 })
    	} else {
    		this.setState({ width: window.innerWidth - 50 })
    	}
    }

    componentDidMount() {
    	window.addEventListener("resize", this.updateDimensions)
    	this.updateDimensions()
    }

    componentWillUnmount() {
    	window.removeEventListener("resize", this.updateDimensions)
    }

    render() {
    	const animation = "animated slideInRight"
    	const { msg, route, link, width } = this.state
    	const { MapImg } = this.props
    	if (route) {
    		return <Redirect to = { link }
    		/>
    	}
    	return ( 
    		<Fragment >
    			<img 
    				src = { backgroundImage }
    				className = { classes.videoSubstitute }
    				alt = "" 
    			/> { /*Background Image for Mobile Divices */ } 
    			<div className = { `${animation} ${classes.containerFix}` } >
    				<ImageMapper 
    					src = { MapImg }
    					width = { width }
    					imgWidth = { 1920 }
    					map = { MAP }
    					fillColor = { "rgba(0, 246, 255, 0.33)" }
    					onMouseEnter = { area => this.enterArea(area) }
    					onMouseLeave = {() => this.leaveArea()}
    					onClick = {(area) => this.enterModule(area)}
    				/> 
    			</div> 
    			<h1 className = { classes.Mapheader } style = {{ width: `${width}px` }}>{ msg }</h1>
    		</Fragment >
    	)
    }
}
export default Homepage