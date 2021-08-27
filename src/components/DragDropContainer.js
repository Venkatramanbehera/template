import React from 'react'
import { useState } from 'react'
import { List } from './data'
import ListItem from './ListItem'

import '../css/DragDropContainer.css'

import { DragDropContext, Droppable } from 'react-beautiful-dnd'

const DragDropContainer = (props) => {
    const [ list, setList ] = useState(List.list)

    const rearrangeList = (dragProp) => {

        const { source, destination } = dragProp

        if(destination){
            list.splice(destination.index,0,list.splice(source.index,1)[0])
            setList(list);
        }

    }


    return (
        <div className="app">
            <DragDropContext onDragEnd={ rearrangeList }>
                <div className="list__container">
                    <h1>The List</h1>
                        <Droppable droppableId="drop-1">
                            {
                                (provided, snapshot) => (
                                    <div ref={ provided.innerRef } {...provided.droppableProps}>
                                        {
                                            list.map((item,index) => (
                                                <ListItem key={item.id} {...item} index={index} />
                                            ))
                                        }
                                    {provided.placeholder}
                                    </div>
                                )
                            }
                        
                        </Droppable>
                </div>
            </DragDropContext>
        </div>
    )
}

export default DragDropContainer
