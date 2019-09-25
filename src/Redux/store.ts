import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import Reducers from './Reducers';

import api from './api';

export default (initialState = {}) => {
  return createStore(
    Reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware.withExtraArgument(api)))
  );
};
