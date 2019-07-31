import { normalize } from 'normalizr';

import { Dispatch } from 'redux';
import { ActionConsts } from "@Definations";

import { feedbackSchema } from '@Redux/schema'
/**
 * ACTIONS
*/
export const AppActions = {
	Map : (payload:any) => ({
		payload,
		type: ActionConsts.App.SetReducer
	}),

	Reset : () => ({
		type: ActionConsts.App.ResetReducer
	}),

	createJournalFeedback : (payload:any, callback:Function) => {
    return ((dispatch:Dispatch, {}, api:any) => {			
      return api.createJournalFeedback(payload)
        .then(api.checkStatus)
				.then(api.toJSON)
        .then((response:any) => { 
          return callback(response)
        })
        .catch(() => api.errorHandler(dispatch))
    })
  },

  getJournalFeedback : (payload:any, callback:Function) => {
    const { course_id, module_id, lesson_id } = payload;

    return ((dispatch:Dispatch, getState:any, api:any) => {			
      return api.getJournalFeedback(payload)
        .then(api.checkStatus)
				.then(api.toJSON)
        .then((response:any) => {
          const { entities: { feedback }}= normalize(response, [feedbackSchema]);

          let newCoursemapModuleFeedback = {
            [course_id]: {
              [module_id]: {
                [lesson_id]: feedback
              }
            }
          }

          dispatch(AppActions.Map({
            coursemapModulesFeedback: {
              ...getState().app.coursemapModulesFeedback,
              ...newCoursemapModuleFeedback
            }
          }))

          callback({
            ...getState().app.coursemapModulesFeedback,
            ...newCoursemapModuleFeedback
          })
        })
        .catch(() => api.errorHandler(dispatch))
    })
  },

	updateUserLesson : (payload:any, callback:Function) => {
    return ((dispatch:Dispatch, {}, api:any) => {
			dispatch(AppActions.Map({ isUpdatingUserLesson: true }))
			
      return api.updateUserLesson(payload)
        .then(api.checkStatus)
				.then(api.toJSON)
        .then((response:any) => { 
          dispatch(AppActions.Map({
            isUpdatingUserLesson: false,
          }))

          return callback(response)
        })
        .catch(() => api.errorHandler(dispatch))
    })
  },

	getUserLessons : (payload:any, callback:Function) => {
    return ((dispatch:Dispatch, {}, api:any) => {			
      return api.getUserLessons(payload)
        .then(api.checkStatus)
				.then(api.toJSON)
        .then((response:any) => { 
          return callback(response)
        })
        .catch(() => api.errorHandler(dispatch))
    })
  },

	getUserModules : (payload:any, callback:Function) => {
    return ((dispatch:Dispatch, {}, api:any) => {			
      return api.getUserModules(payload)
        .then(api.checkStatus)
				.then(api.toJSON)
        .then((response:any) => { 
          return callback(response)
        })
        .catch(() => api.errorHandler(dispatch))
    })
  },

	fetchCoursemapModule : (payload:any, coursemapModulesContent:any) => {
    const { module, id, course } = payload;

    return ((dispatch:Dispatch, {}, api:any) => {	
      dispatch(AppActions.Map({ isFetchingCoursemapModule: true }))
      		
      return api.fetchCoursemapModule(payload)
        .then(api.checkStatus)
        .then((response: any) => response.text())
        .then((response:any) => { 
          let newCoursemapModule = {
            [course]: {
              [module]: {
                content: response
              }
            }
          }

          if (id) {
            newCoursemapModule = {
              [course]: {
                [module]: {
                  ...coursemapModulesContent[module],
                  [id]: {
                    content: response
                  }
                }
              }
            }
          }
      
          dispatch(AppActions.Map({
            isFetchingCoursemapModule: false,
            coursemapModulesContent: {
              ...coursemapModulesContent,
              ...newCoursemapModule
            }
          })
        )
      })
    })
  },
}