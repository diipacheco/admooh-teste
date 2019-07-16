export enum ActionTypes {
    LOAD_REQUEST = '@admooh/LOAD_REQUEST',
    LOAD_SUCCESS = "@admooh/LOAD_SUCCESS",
    LOAD_FAILURE = "@admooh/LOAD_FAILURE"
}



export interface Photos {
    albumId: string
    id: string
    title: string
    url: string
    thumbnailUrl: string
}


export interface Photostate {
    readonly data: Photos[],
    readonly loading: boolean,
    readonly error: boolean
}

