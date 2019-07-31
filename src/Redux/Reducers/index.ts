import { combineReducers } from 'redux';

import { AppReducer } from './app';
import { CourseReducer } from './course';
import { EntityReducer } from './entity';
import { HomeReducer } from './home';
import { LessonReducer } from './lesson';
import { ModuleReducer } from './module';
import { UserReducer } from './user';

export default combineReducers({
  app: AppReducer,
  course: CourseReducer,
  entities: EntityReducer,
  home: HomeReducer,
  lesson: LessonReducer,
  module: ModuleReducer,
  user: UserReducer
});