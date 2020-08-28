import React from 'react'
import { Grid } from '@material-ui/core'

import ToDoList from './ToDoList'
import ToDoView from './ToDoView'

const ToDoContent: React.FC = () => {
    return (
        <Grid container direction="row">
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