import { all, takeLatest } from 'redux-saga/effects'

import { ActionTypes } from './Photos/types'
import { load } from './Photos/sagas'

export default function* rootSaga() {
    return yield all([
        takeLatest(ActionTypes.LOAD_REQUEST, load)
    ])
}