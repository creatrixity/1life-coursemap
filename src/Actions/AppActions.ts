import { Dispatch } from 'redux';
import { ActionConsts } from "@Definations";

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

	updateUserLesson : (payload:any, callback:Function) => {
    return ((dispatch:Dispatch, getState:any, api:any) => {
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
    return ((dispatch:Dispatch, getState:any, api:any) => {			
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
    return ((dispatch:Dispatch, getState:any, api:any) => {			
      return api.getUserModules(payload)
        .then(api.checkStatus)
				.then(api.toJSON)
        .then((response:any) => { 
          return callback(response)
        })
        .catch(() => api.errorHandler(dispatch))
    })
  },

}