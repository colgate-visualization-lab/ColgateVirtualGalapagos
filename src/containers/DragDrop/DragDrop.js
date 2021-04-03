import React, { Component } from 'react'

class DragDrop extends Component {
    render() {
        return (
            <div style={{height: "100%", width: "100%"}}>
                <div style={{backgroundColor: "red" }} className="droppable">drop Here</div>
                <div style={{backgroundColor: "red" }} className="droppable">drop Here</div>
            </div>
        )
    }
}

export default DragDrop
