import { Thunk, thunk, Computed, computed, Action, action } from 'easy-peasy'
import ToDo from './ToDo'
import { toDoService } from '../service/ToDoService'
//import todos from '../data/todo_data'

const shortid = require('shortid')

export interface ToDoModel {
    todos: ToDo[]

    initData: Thunk<ToDoModel>

    deleteToDo: Thunk<ToDoModel, ToDo>
    toggleToDo: Thunk<ToDoModel, ToDo>
    addToDo: Thunk<ToDoModel, ToDo>
    modifyToDo: Thunk<ToDoModel, ToDo>

    selectedToDo: ToDo | null
    setSelectedToDo: Action<ToDoModel, ToDo>

    jobsToDo: Computed<ToDoModel, number>

    _delete: Action<ToDoModel, ToDo>
    _replace: Action<ToDoModel, ToDo>
    _add: Action<ToDoModel, ToDo>
    _initData: Action<ToDoModel, ToDo[]>

}

export const toDoModel: ToDoModel = {
    todos: [],

    initData: thunk(async (actions) => {
        await toDoService.loadTodos().then(
            (ToDoList: ToDo[]) => {actions._initData(ToDoList)}
        )
    }),

    deleteToDo: thunk(async (actions, todo: ToDo) => {
        toDoService.deleteTodo(todo).then(
            () => {actions._delete(todo)}
        )
        // call service and wait for result
        // await ToDoService
        // if ok, delete todo for local data
        
    }),

    toggleToDo: thunk(async (actions, todo: ToDo) => {
        // toggle
        todo.completed = !todo.completed
        // service
        toDoService.modifyTodo(todo).then(
            () => { actions._replace(todo)}
        )
    }),

    addToDo: thunk(async (actions, todo: ToDo) => {
        // service
        toDoService.addTodo(todo).then(
            () => { actions._add(todo) }
        )
        
    }),

    modifyToDo: thunk(async (actions, todo: ToDo) => {
        // service
        toDoService.modifyTodo(todo).then(
            () => { actions._replace(todo)}
        )
    }),

    //selectedToDo: {id: -1, title:'', completed: false},
    selectedToDo: null,

    setSelectedToDo: action((state, todo) => {
        state.selectedToDo = {...todo}
    }),

    jobsToDo: computed((state) => {
        // let res = 0
        // for(let i = 0; i < state.todos.length; ++i) {
        //     if (!state.todos[i].id) {
        //         ++res
        //     }
        // }
        //return res
         return state.todos.reduce((prev, todo: ToDo) => prev + (todo.completed ? 0 : 1), 0)
    }),

    _initData: action((state, todo)=>{
        state.todos = todo
    }),

    _delete: action((state, todo)=>{
        for(let i=0; i < state.todos.length; ++i) {
            if (state.todos[i].id === todo.id) {
                state.todos.splice(i, 1)
                if (state.selectedToDo && state.selectedToDo.id === todo.id) {
                    state.selectedToDo = null
                }
            }
        }
    }),

    _replace: action((state, todo)=>{
        for(let i=0; i < state.todos.length; ++i) {
            if (state.todos[i].id === todo.id) {
                state.todos[i] = {...todo} //Copy
            }
        }
    }),

    _add: action((state, todo)=>{
        todo.id = shortid()
        state.todos = [{...todo}, ...state.todos]
    })
}