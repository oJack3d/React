import React from 'react'
import { Grid } from '@material-ui/core'

import ToDoList from './ToDoList'
import ToDoView from './ToDoView'
import CountTodo from './ToDoCount'

const ToDoContent: React.FC = () => {
    return (
        <Grid container direction="row">
            <Grid container direction="column">
                <CountTodo />
            </Grid>
            <Grid item xs={12} sm={4}>
                <ToDoList />
            </Grid>
            <Grid item xs={12} sm={8}>
                <ToDoView />
            </Grid>
            
        </Grid>
    )
}

export default ToDoContent