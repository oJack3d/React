import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
    
const ToDoHeader: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();
    return (<>
    
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>ToDo Application</Typography>
                <Button className={classes.menuLink} color="inherit" onClick={ () => { history.push('/todo') }}>Todo</Button>
                <Button className={classes.menuLink} color="inherit" onClick={ () => { history.push('/about') }}>about</Button>
            </Toolbar>
        </AppBar>
    </>)
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuLink: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default ToDoHeader