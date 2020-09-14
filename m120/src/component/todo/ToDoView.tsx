import React from 'react'
import NewToDo from './NewToDo'
import EditToDo from './EditToDo'
import CountTodo from './ToDoCount'

interface ToDoViewProps {}

const ToDoView: React.FC<ToDoViewProps> = () => {
    return (
        <div>
            <NewToDo />
            <EditToDo />
        </div>
    )
}

export default ToDoView