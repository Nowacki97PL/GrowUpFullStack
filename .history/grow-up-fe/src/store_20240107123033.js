import {legacy_createStore, combineReducers, applyMiddleware} from 'redux'
import * as thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducer = combineReducers({})

const initialState = {}

const middleware = [thunk.default]

const store = legacy_createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))


export default store