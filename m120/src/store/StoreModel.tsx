import { createStore, createTypedHooks } from 'easy-peasy'
import { ToDoModel, toDoModel } from '../model/toDo_model'

// StoreModel may contain several Models
interface StoreModel {
    todoModel: ToDoModel;
}

// Create the store 
const store = createStore<StoreModel>({
    todoModel: toDoModel 
})

export default store

// Create typed hooks to interact with the store
// This is boilerplate code to create typescript information
export const { 
    useStoreActions,
    useStoreDispatch,
    useStoreState,
} = createTypedHooks<StoreModel>()

//export { useStoreActions, useStoreDispatch, useStoreState }