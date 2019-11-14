import { combineReducers } from 'redux'
import {uiReducer} from './ui';
import {usersReducer} from './users';

export const rootReducer = combineReducers({
  ui: uiReducer,
  users: usersReducer
})