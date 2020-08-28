import { useEffect } from 'react'
import { useStoreActions } from '../store/StoreModel'

const useToDoInitDataHook = () => {
    const initData = useStoreActions(actions => actions.todoModel.initData)
    useEffect(
        () => {
            initData()
            console.log("initModelHook() called")

        }, []
    )
}

export  { useToDoInitDataHook }