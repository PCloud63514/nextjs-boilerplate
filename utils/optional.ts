import {Exception} from "./exception";
import {IOptional} from "../@types/optional";


class Optional<T = any> implements IOptional<T> {
    private readonly data: T | undefined;

    static empty<T>(): Optional<T> {
        return new Optional<T>();
    }

    private constructor(inData: T | undefined = undefined) {
        this.data = inData
    }

    isPresent(): boolean {
        return this.data !== undefined;
    }

    get(): T {
        if (this.data !== undefined) {
            return this.data;
        }
        throw new Exception(-1, `Optional In Data is NULL`)
    }

    static of<T>(data: T | undefined | null): Optional<T> {
        if (data === undefined || data === null) {
            throw new Exception(-1, `Optional In Data is NULL`)
        }
        return new Optional<T>(data);
    }

    static ofNullable<T>(data: T | undefined) {
        return new Optional<T>(data);
    }
}
