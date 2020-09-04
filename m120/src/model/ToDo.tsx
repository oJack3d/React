export type UniqueId = number | string | undefined

export default interface ToDo {
    id: UniqueId,
    title: string,
    completed: boolean
}

export class ToDoImpl implements ToDo {
    id: UniqueId
    title: string
    completed: boolean

    constructor(title: string) {
        this.title = title
        this.completed = false
    }
}