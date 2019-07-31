'use strict';

import { normalize } from 'normalizr';
import { Dispatch } from 'redux';

import { EntityActions } from '@Actions'
import { ActionConsts } from "@Definations";
import { IApi, IStore } from "@Interfaces";

import { moduleSchema } from '@Redux/schema'
import { sleep } from '../Helpers'

/**
 * ACTIONS
*/
export const LessonActions = {
	Map : (payload:any) => ({
		payload,
		type: ActionConsts.Lesson.SetReducer
	}),

	Reset : () => ({
		type: ActionConsts.Lesson.ResetReducer
	}),

	fetchLessonView: ({ courseSlug, moduleSlug, lessonId }:
		{courseSlug:string, moduleSlug:string, lessonId?:number}, cb:Function) => {
    return (async (dispatch:Dispatch, {}, api:IApi) => {
			dispatch(LessonActions.Map({ isFetchingLessonView: true }))

			api.fetchCourseModuleLessonView({ courseSlug, moduleSlug, lessonId })
				.then(api.checkStatus)
				.then(api.toText)
        .then((response:any) => {
					dispatch(LessonActions.Map({ isFetchingLessonView: false }))
					cb(response)
        })
        .catch(() => api.errorHandler(dispatch))
    })
	},
}