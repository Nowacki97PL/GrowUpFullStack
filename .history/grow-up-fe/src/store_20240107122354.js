import {legacy_createStore, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducer = combineReducers({})

const initialState = {}

const store = legacy_createStore(reducer, initialState)