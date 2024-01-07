import {legacy_createStore, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducer = C

const store = legacy_createStore(reducer, initialState)