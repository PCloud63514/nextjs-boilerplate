export interface IOptional<T> {
    isPresent(): boolean

    get(): T
}