import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Zmiana importu bez użycia 'default'
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
