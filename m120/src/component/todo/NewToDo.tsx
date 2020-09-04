import React from 'react'

import { useStoreActions, useStoreState } from '../../store/StoreModel'
import ToDoForm from './ToDoForm'
import { ToDoImpl } from '../../model/ToDo'
import { Typography, Grid } from '@material-ui/core'

interface NewTodoProps {
    
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
    const addToDo = useStoreActions(actions => actions.todoModel.addToDo)
    return (
        <Grid container direction='column' spacing={1}>
            <Grid>
                <Typography style={{marginTop:"10px", marginBottom:"10px"}} variant='h3'>Create a ToDo</Typography>
            </Grid>
            <Grid>
                <ToDoForm
                    todo={new ToDoImpl('')}
                    submitText='Create a new ToDo'
                    submitFunction={(todo)=>{
                        addToDo(todo)}
                    }
                    resetAfterSubmit={true}
                />
            </Grid>
        </Grid>)
}

export default NewTodo