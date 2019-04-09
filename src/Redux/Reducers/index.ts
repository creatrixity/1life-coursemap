import { combineReducers } from 'redux';

import { AppReducer } from './app';
import { HomeReducer } from './home';
import { UserReducer } from './user';

export default combineReducers({
  app: AppReducer,
  home: HomeReducer,
  user: UserReducer
});