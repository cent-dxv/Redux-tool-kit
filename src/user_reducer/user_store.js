import {createStore} from 'redux';
import reducer_user from './user_reducer'

import {combineReducers } from 'redux'

// const old_store = createStore( reducer_user)
const root = combineReducers( {user:reducer_user} )
const old_store = createStore(root)

export default old_store