import { action } from 'typesafe-actions'
import { ActionTypes, Albums } from './types'

export const loadRequest = () => action(ActionTypes.LOAD_REQUEST)

export const loadSuccess = (data: Albums[]) => action(ActionTypes.LOAD_SUCCESS, { data })

export const loadFailure = () => action(ActionTypes.LOAD_FAILURE)