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

	fetchRoadmapModule : (payload:any, roadmapModulesContent:any) => {
    const { module, id } = payload;

    console.log(payload)

    return ((dispatch:Dispatch, {}, api:any) => {	
      dispatch(AppActions.Map({ isFetchingRoadmapModule: true }))
      		
      return api.fetchRoadmapModule(payload)
        .then(api.checkStatus)
        .then((response: any) => response.text())
        .then((response:any) => { 
          let newRoadmapModule = {
            [module]: {
              content: response
            }
          }

          if (id) {
            newRoadmapModule = {
              [module]: {
                ...roadmapModulesContent[module],
                [id]: {
                  content: response
                }
              }
            }
          }
      
          dispatch(AppActions.Map({
            isFetchingRoadmapModule: false,
            roadmapModulesContent: {
              ...roadmapModulesContent,
              ...newRoadmapModule
            }
          })
          )

          // return response;
        })
    })
  },
}