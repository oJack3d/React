import React from 'react'

import { useStoreActions, useStoreState } from '../../store/StoreModel'
import { ToDoImpl } from '../../model/ToDo'
import { Typography, Grid } from '@material-ui/core'
import todos from '../../data/todo_data'

interface CountTodoProps {
    
}

const CountToDo: React.FC<CountTodoProps> = (props) => {
    const countToDo = useStoreState(state => state.todoModel.jobsToDo)
    return (
        <Grid container direction='column' spacing={1}>
            <Grid>
                <Typography style={{marginTop:"10px", marginBottom:"10px", textJustify:"auto"}}>Do {countToDo} ToDo's ToDo</Typography>
            </Grid>
        </Grid>)
}

export default CountToDo