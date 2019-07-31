'use strict';

import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';

import EntitySelectors from './EntitySelectors';
import { IStore } from '@Interfaces';

import { courseSchema, moduleSchema } from '@Redux/schema'


const getIsFetchingCourseModules = (state:IStore) => state.course.isFetchingCourseModules

const getIsFetchingCourses = (state:IStore) => state.course.isFetchingCourses

const getCourses = createSelector([EntitySelectors.getEntities], (entities) => {
  return denormalize(Object.keys(entities.courses), [courseSchema], entities)
})

const getCourseModules = createSelector([EntitySelectors.getEntities], (entities) => {
  return denormalize(Object.keys(entities.modules), [moduleSchema], entities)
})

export default {
  getIsFetchingCourseModules,
  getIsFetchingCourses,
  getCourses,
  getCourseModules
}