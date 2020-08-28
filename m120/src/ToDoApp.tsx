import React from 'react';
import { useLocation } from 'react-router-dom'

import AppLayout from './component/application/AppLayout'
import ToDoHeader from './component/todo/ToDoHeader'
import ToDoPage from './component/todo/ToDoPage'
import AboutPage from './component/todo/AboutPage'
import PageNotFoundPage from './component/todo/PageNotFoundPage'
import { useToDoInitDataHook } from './model/todo_data_init_hook'

function ToDoApp() {
  useToDoInitDataHook()

  let body = <PageNotFoundPage />
  switch (useLocation().pathname) {
    case '/':
      body = <ToDoPage />
      break;
    case '/todo':
      body = <ToDoPage />
      break;
    case '/about':
      body = <AboutPage />
      break;
  }
  return ( 
      <AppLayout
        header={ <ToDoHeader/> }
        body={ body }
      />
  )
}
export default ToDoApp;