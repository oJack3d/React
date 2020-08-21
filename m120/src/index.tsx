import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"

import ToDoApp from './ToDoApp';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ToDoApp />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);