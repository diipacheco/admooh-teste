import { call, put } from 'redux-saga/effects'
import api from '../../../Services/api'
import { loadSuccess, loadFailure } from './actions'

export function* load() {
    try {
        const response = yield call(api.get, 'photos');
        yield put(loadSuccess(response.data))
    } catch (error) {
        yield put(loadFailure())
        alert('deu ruim')

    }
}