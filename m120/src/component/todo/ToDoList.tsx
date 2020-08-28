import React from 'react'
import { List } from '@material-ui/core'

import { useStoreState } from '../../store/StoreModel'

import ToDoListItem from './ToDoListItem'
import ToDo from '../../model/ToDo'

const ToDoList: React.FC = () => {
    const todos = useStoreState( (state) => {return state.todoModel.todos})
    return (
        <List>
            {todos.map((element: ToDo) => {
                return <ToDoListItem key={element.id} todo={element}/>
            })}
        </List>
    )
}

export default ToDoList
