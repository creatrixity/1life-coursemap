import { Dispatch } from 'redux';
import { UserActions } from './UserActions';

export const AuthActions = {
	createUser : (payload:any, callback: Function) => {
    return ((dispatch:Dispatch, getState:any, api:any) => {
      dispatch(UserActions.Map({ isCreatingUser: true }))

      return api.createUser(payload)
        .then(api.checkStatus)
        .then(api.toJSON)
        .then(api.setToken)
        .then(api.setRefreshToken)
        .then(api.setUser)
        .then((response:any) => { 
          dispatch(UserActions.Map({
            isCreatingUser: false,
            user: response.user
          }))
        })
        .then(() => callback())
        .catch(( error:any ) => {
          return error.json().then((errResponse:any) => {
            dispatch(UserActions.Map({ isCreatingUser: false }))
            dispatch(UserActions.Map({ registrationErrorMessage: errResponse[0].message }))  
          });
        })
    })
  },

	authenticateUser : (payload:any, callback: Function) => {
    return ((dispatch:Dispatch, getState:any, api:any) => {
      dispatch(UserActions.Map({ isAuthenticatingUser: true }))

      return api.authenticateUser(payload)
        .then(api.checkStatus)
        .then(api.toJSON)
        .then(api.setToken)
        .then(api.setRefreshToken)
        .then(api.setUser)
        .then((response:any) => {
          dispatch(UserActions.Map({
            isAuthenticatingUser: false,
            authenticatedUser: response.user
          }))
        })
        .then(() => callback())
        .catch((error: any) => {
          return error.json().then((errResponse:any) => {
            dispatch(UserActions.Map({ isAuthenticatingUser: false }))
            dispatch(UserActions.Map({ loginErrorMessage: errResponse[0].message }))  
          });
        })
    })
  },
}