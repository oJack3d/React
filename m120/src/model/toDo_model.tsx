import { Action, action } from 'easy-peasy'
import todos from '../data/todo_data'
import ToDo from './ToDo'

const shortid = require('shortid')

export interface ToDoModel {
    todos: ToDo[]

    initData: Action<ToDoModel>

    deleteToDo: Action<ToDoModel, ToDo>
    toggleToDo: Action<ToDoModel, ToDo>
    addToDo: Action<ToDoModel, ToDo>
    modifyToDo: Action<ToDoModel, ToDo>

    selectedToDo: ToDo
    setSelectedToDo: Action<ToDoModel, ToDo>

}

export const toDoModel: ToDoModel = {
    todos: [],

    initData: action((state) => {
        state.todos = todos
    }),

    deleteToDo: action((state, todo) => {
        for(let i=0; i < state.todos.length; ++i) {
            if (state.todos[i].id === todo.id) {
                state.todos.splice(i, 1)
            }
        }
    }),

    toggleToDo: action((state, todo) => {
        for(let i=0; i < state.todos.length; ++i) {
            if (state.todos[i].id === todo.id) {
                todo.completed = !todo.completed
                state.todos[i] = {...todo} //Copy
            }
        }
    }),

    addToDo: action((state, todo) => {
        //state.todos.push(todo)
        todo.id = shortid()
        state.todos = [{...todo}, ...state.todos]
    }),

    modifyToDo: action((state, todo) => {
        for(let i=0; i < state.todos.length; ++i) {
            if (state.todos[i].id === todo.id) {
                state.todos[i] = {...todo} //Copy
            }
        }
    }),

    selectedToDo: {id: -1, title:'', completed: false},

    setSelectedToDo: action((state, todo) => {
        state.selectedToDo = {...todo}
    })
}