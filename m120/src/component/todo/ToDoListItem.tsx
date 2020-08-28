import React from 'react'
import { ListItem } from '@material-ui/core'

import ToDo from '../../model/ToDo'

import { useStoreActions } from '../../store/StoreModel'

//start gaga imports
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
//end gaga imports

//start gaga style
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));
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
    return (
        <ListItem key={todo.id} role={undefined} dense button>
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