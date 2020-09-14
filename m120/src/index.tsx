import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import { StoreProvider } from 'easy-peasy'
import store from './store/StoreModel'
import ToDoApp from './ToDoApp';
import { ThemeProvider } from '@material-ui/core';
import { ToDoTheme, defaultToDoTheme } from './theme/ToDoTheme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme= {ToDoTheme}>
    <StoreProvider store={store} >
      <Router>
        <ToDoApp />
      </Router>
    </StoreProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);