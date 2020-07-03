import React, { Component } from 'react'
import VolcanoModule from "../../containers/VolcanoModule/VolcanoModule"


class EnterModule extends Component {
    constructor(props) {
        super(props)
            this.headerRef2 = React.createRef();
            this.audioRef = React.createRef();
        this.state = {
             slideIndex: 0,
             progressIndex: 0,
             completed: {visibility: "hidden"},
             optional1: false,
             optional2: false,
             optional2Next: false,
             optional3: false,
             height: 0,
             revealHidden: {visibility: "hidden"},
             imageChange: TerrainOvalWrong,
             draggable: false,
             dnd1: false, dnd2: false, dnd3: false, dnd4: false,
             dndIndex: 0
        }
    }
    render() { 
        const {VolcanoModule} = this.props
        if (VolcanoModule) {
            return (
                <TestComponent function={changeBackground} text={"heelo1"} style={this.state.background} />
            )
        }
    }
}

export default EnterModule
