import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import '../css/ListItem.css'

const ListItem = ({id,title,index}) => {
    return (
        <Draggable key={id} draggableId={"draggable-"+id} index={index}>
            {
                (provided,snapshot) => (
                    <div 
                        className="list__item" 
                        ref={provided.innerRef} 
                        {...provided.draggableProps} 
                        {...provided.dragHandleProps}
                        style={{ 
                            ...provided.draggableProps.style,
                            boxShadow: snapshot.isDragging ? "0 0 4rem #666" : "none"}}
                        >
                        <span>{title}</span>
                    </div>
                )
                
            }
        </Draggable>
    )
}

export default ListItem
