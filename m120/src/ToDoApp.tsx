import React from 'react';
import AppLayout from './component/application/AppLayout'
import ToDoHeader from './component/todo/ToDoHeader'
import ToDoBody from './component/todo/ToDoBody'

function ToDoApp() {
  return ( 
      <AppLayout
        header={ <ToDoHeader/> }
        body={ <ToDoBody/> }
      />
  )
}
export default ToDoApp;