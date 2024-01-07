import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as thunk from 'redux-thunk'; // Zmiana importu na named import

import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({});

const initialState = {};

const middleware = [thunk.default]; // Dodanie .default do importu

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
