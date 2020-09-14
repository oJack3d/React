import React from 'react'
import { ListItem } from '@material-ui/core'

import ToDo from '../../model/ToDo'

import { useStoreActions, useStoreState } from '../../store/StoreModel'

//start gaga imports
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
//end gaga imports

//start gaga style

//end gaga style

interface ToDOListItemProps {
    todo: ToDo
}

//start gaga return
const ToDoListItem:React.FC<ToDOListItemProps> = ({todo}) => {
    const deleteToDo = useStoreActions(
        actions => actions.todoModel.deleteToDo
    )
    const toggleToDo = useStoreActions(
        actions => actions.todoModel.toggleToDo
    )
    const selectToDo = useStoreState(state => state.todoModel.selectedToDo)
    const setSelectedToDo = useStoreActions(actions => actions.todoModel.setSelectedToDo)
    return (
        <ListItem
        key={todo.id}
        selected={ selectToDo ? todo.id === selectToDo.id :false}
        role={undefined} dense button>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    color="primary"
                    checked={todo.completed}
                    onClick= {() => { toggleToDo(todo) }}
                />
            </ListItemIcon>
            <ListItemText 
                primary={todo.title} 
                onClick={() => {setSelectedToDo(todo) }}
            />
            <ListItemSecondaryAction>
                <IconButton 
                    edge="end" 
                    color="secondary"
                    aria-label="delete"
                    onClick={() => { deleteToDo(todo) }}>
                    <DeleteForeverIcon />
                </IconButton>
            </ListItemSecondaryAction>
      </ListItem>
    )
}
//end gaga return

// const ToDoListItem:React.FC<ToDOListItemProps> = (props) => {
//     return (
//         <ListItem >
//             {props.todo.title}
//         </ListItem>
//     )
// }

export default ToDoListItem