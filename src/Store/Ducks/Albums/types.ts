import { Photos } from '../Photos/types'

export enum ActionTypes {
    LOAD_REQUEST = '@admooh/LOAD_REQUEST',
    LOAD_SUCCESS = "@admooh/LOAD_SUCCESS",
    LOAD_FAILURE = "@admooh/LOAD_FAILURE"
}

export interface Albums {
    id: number
    photos: Photos[]
}


export interface AlbumState {
    readonly data: Albums[],
    readonly loading: boolean,
    readonly error: boolean
}