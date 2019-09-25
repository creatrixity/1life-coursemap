'use strict';

import { normalize } from 'normalizr';
import { Dispatch } from 'redux';

import { EntityActions } from '@Actions';
import { ActionConsts } from '@Definations';
import { IApi } from '@Interfaces';

import { courseSchema, moduleSchema } from '@Redux/schema';
import { sleep } from '../Helpers';

/**
 * ACTIONS
 */
export const CourseActions = {
  Map: (payload: any) => ({
    payload,
    type: ActionConsts.Course.SetReducer
  }),

  Reset: () => ({
    type: ActionConsts.Course.ResetReducer
  }),

  fetchCourses: (payload?: any) => {
    return async (dispatch: Dispatch, {}, api: IApi) => {
      dispatch(CourseActions.Map({ isFetchingCourses: true }));

      api
        .fetchCourses(payload)
        .then(api.checkStatus)
        .then(api.toJSON)
        .then(async (response: any) => {
          const {
            entities: { courses, modules }
          } = normalize(response, [courseSchema]);

          dispatch(EntityActions.Map({ courses }));

          await sleep(1500);
          dispatch(CourseActions.Map({ isFetchingCourses: false }));
        })
        .catch(() => api.errorHandler(dispatch));
    };
  },

  fetchCourseModules: (courseId: number) => {
    return async (dispatch: Dispatch, {}, api: IApi) => {
      dispatch(CourseActions.Map({ isFetchingCourseModules: true }));

      api
        .fetchCourseModules(courseId)
        .then(api.checkStatus)
        .then(api.toJSON)
        .then(async (response: any) => {
          const {
            entities: { modules }
          } = normalize(response, [moduleSchema]);

          dispatch(EntityActions.Map({ modules }));

          await sleep(1000);
          dispatch(CourseActions.Map({ isFetchingCourseModules: false }));
        })
        .catch(() => api.errorHandler(dispatch));
    };
  }
};
