import thunk from 'redux-thunk';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { producListReducer } from './reducers/productReducers';

const initialState = {};
const reducer = combineReducers({
  productList: producListReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
