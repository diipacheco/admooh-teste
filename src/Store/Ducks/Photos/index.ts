import { Reducer } from 'redux'
import { Photostate, ActionTypes } from './types'


const INITIAL_STATE: Photostate = {
    data: [],
    loading: false,
    error: false
}

const reducer: Reducer<Photostate> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.LOAD_REQUEST:
            return { ...state, loading: true }
        case ActionTypes.LOAD_SUCCESS:
            return {
                loading: false, error: false, data: action.payload.data
            }
        case ActionTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: [] }
        default:
            return state
    }
}

export default reducer
