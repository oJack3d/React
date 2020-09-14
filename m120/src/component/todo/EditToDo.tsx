import React from 'react'

import ToDoForm from './ToDoForm'
import { ToDoImpl } from '../../model/ToDo'
import { Typography, Grid } from '@material-ui/core'
import { useStoreActions, useStoreState } from '../../store/StoreModel'
import { action } from 'easy-peasy'

interface EditTodoProps {
    
}

const EditTodo: React.FC<EditTodoProps> = (props) => {
    // TODO: Get the actual todo and show it
    //var existingTodo = new ToDoImpl('I\'m an existing todo')
    const selecedtToDo = useStoreState(state => state.todoModel.selectedToDo)
    const modifyToDo = useStoreActions(actions => (actions.todoModel.modifyToDo))
    if (!selecedtToDo) return null
    return (
        <Grid container direction='column' spacing={1}>
            <Grid>
                <Typography style={{marginTop:"10px", marginBottom:"10px"}} variant='h3'>Edit a ToDo</Typography>
            </Grid>
            <Grid>
                <ToDoForm
                    todo={selecedtToDo}
                    submitText='Edit ToDo'
                    submitFunction={(todo)=>{modifyToDo(todo)}}
                    resetAfterSubmit={false}
                />
            </Grid>
    </Grid>)
}

export default EditTodo