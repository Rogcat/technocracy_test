import { combineReducers } from 'redux'
import { usersReducer } from './usersReducer'
import { modalReduser } from './modalReduser'

export const rootReducer = combineReducers({
    users: usersReducer,
    modal: modalReduser
})