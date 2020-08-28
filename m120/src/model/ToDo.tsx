export type UniqueId = number | string | undefined

export default interface ToDo {
    id: UniqueId,
    title: string,
    completed: boolean
}