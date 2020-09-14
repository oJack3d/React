import ToDo from '../model/ToDo'
import axios from 'axios'
import { resolve } from 'dns'
import { rejects } from 'assert'
import { TheatersRounded } from '@material-ui/icons'

export interface ToDoService {
    loadTodos(): Promise<ToDo[]>

    addTodo(todo: ToDo): Promise<ToDo>
    modifyTodo(todo: ToDo): Promise<ToDo>
    deleteTodo(todo: ToDo): Promise<void>
}

const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 2000,
    headers: {'Content-Type': 'application/json'}
})
//hihi
const gaga = axios.create({
    baseURL: 'http://10.66.4.36:3000',
    timeout: 2000,
    headers: {'Content-Type': 'application/json'}
})

async function callForData<R>(httpFun: any, uri: string, params?: any): Promise<R> {
    return new Promise<R>((resolve, reject) => {
        httpFun(uri, params)
            .then((response: any) => { resolve(response.data) })
            .catch((error: any) => { reject(error) })
    })
}

class ToDoServiceImpl implements ToDoService {
    async loadTodos(): Promise<ToDo[]> {
        return callForData(http.get, '/todos?_limit=15')
    }
    async addTodo(todo: ToDo): Promise<ToDo> {
        return callForData(http.post, '/todos', todo)
    }
    async modifyTodo(todo: ToDo): Promise<ToDo> {
        return callForData(http.put, `/todos/${todo.id}`, todo)
    }
    async deleteTodo(todo: ToDo): Promise<void> {
        return callForData(http.delete, `/todos/${todo.id}`)
    }
    //haha
    async pat(todo: ToDo): Promise<ToDo> {
        return callForData(http.post, '/todos', todo)
    }
}

export const toDoService: ToDoService = new ToDoServiceImpl()