import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import { StoreProvider } from 'easy-peasy'
import store from './store/StoreModel'
import ToDoApp from './ToDoApp';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store} >
      <Router>
        <ToDoApp />
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);