'use strict';

import { normalize } from 'normalizr';
import { Dispatch } from 'redux';

import { EntityActions } from '@Actions'
import { ActionConsts } from "@Definations";
import { IApi } from "@Interfaces";

import { moduleSchema } from '@Redux/schema'
import { sleep } from '../Helpers'

/**
 * ACTIONS
*/
export const ModuleActions = {
	Map : (payload:any) => ({
		payload,
		type: ActionConsts.Module.SetReducer
	}),

	Reset : () => ({
		type: ActionConsts.Module.ResetReducer
	}),
	
	fetchModuleLessons :(moduleId:number, courseId:number) => {
    return (async (dispatch:Dispatch, {}, api:IApi) => {
			dispatch(ModuleActions.Map({ isFetchingCourseModules: true }))

			api.fetchCourseModules(courseId)
        .then(api.checkStatus)
				.then(api.toJSON)
        .then(async (response:any) => {
          const {entities: { modules }}= normalize(response, [moduleSchema]);

					dispatch(EntityActions.Map({ modules }))

					dispatch(ModuleActions.Map({ isFetchingModules: false }))
        })
        .catch(() => api.errorHandler(dispatch))
    })
	},
	
	fetchCourseModuleLessonView: ({ courseSlug, moduleSlug, lessonId }:
		{courseSlug:string, moduleSlug:string, lessonId?:number}, cb:Function) => {
    return (async (dispatch:Dispatch, {}, api:IApi) => {
			dispatch(ModuleActions.Map({ isFetchingCourseModuleLessonView: true }))

			api.fetchCourseModuleLessonView({ courseSlug, moduleSlug, lessonId })
				.then(api.checkStatus)
				.then(api.toText)
        .then((response:any) => {
					dispatch(ModuleActions.Map({ isFetchingCourseModuleLessonView: false }))
					cb(response)
        })
        .catch(() => api.errorHandler(dispatch))
    })
	},
	
	fetchCourseModuleLessons: ({ moduleId }:{moduleId:number}) => {
    return (async (dispatch:Dispatch, getState:any, api:IApi) => {
			dispatch(ModuleActions.Map({ isFetchingCourseModuleLessons: true }))
			return api.fetchLessonsByModuleId({ moduleId })
				.then(api.checkStatus)
				.then(api.toJSON)
        .then((response:any) => {
          const {entities: {modules}}= normalize(response[0], moduleSchema);

					dispatch(EntityActions.Map({ modules: {
						...getState().entities.modules,
						...modules
						}
					}))
					dispatch(ModuleActions.Map({ isFetchingCourseModuleLessons: false }))
        })
        .catch(() => api.errorHandler(dispatch))
    })
  },
}