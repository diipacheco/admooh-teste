import { createStore, Store, applyMiddleware } from 'redux'
import rootReducer from './Ducks/rootReducer'
import createSagaMiddleware from 'redux-saga';
import rooSaga from './Ducks/rootSaga'
import { Photostate } from './Ducks/Photos/types'

export interface ApplicationState {
    photos: Photostate
}

const sagaMiddleware = createSagaMiddleware()
const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rooSaga)

export default store;