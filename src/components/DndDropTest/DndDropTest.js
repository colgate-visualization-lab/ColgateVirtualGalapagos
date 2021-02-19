import React, { useContext, Fragment } from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../utils/items'

const DndDroppables = props => {

    const [{isOver}, drop] = useDrop({
        accept: ItemTypes.VOLCANO,
        drop: () => {
            if (props.dropIndex == props.dragIndex) {
                console.log("Right Answer");
                props.correctDrop();
            }
            else {
                console.log("Wrong Answer");
                props.incorrectDrag();
            }},
        collect: monitor => ({
            isOver: monitor.isOver(),
        }),
    });

    const opaque = {opacity: "0.5"}; 
        
        if (props.image) {
            return (
                <img ref={drop} className={props.className} style={isOver? opaque : {}} src={props.src} />
            )
        }
        else {
            return (
                <div ref={drop} className={props.className} style={isOver? opaque : {}}>
                    {props.children} 
                </div>
            )
        }
}

export default DndDroppables
