import { ActionConsts } from '@Definations';
import { Dispatch } from 'redux';

/**
 * ACTIONS
 */
export const UserActions = {
  Map: (payload: any) => ({
    payload,
    type: ActionConsts.User.SetReducer
  }),

  Reset: () => ({
    type: ActionConsts.User.ResetReducer
  }),

  getAuthenticatedUser: (errCallback: Function) => {
    return (dispatch: Dispatch, getState: any, api: any) => {
      if (getState().user.authenticatedUser) return;

      dispatch(UserActions.Map({ isAuthenticatingUser: true }));

      return api
        .getAuthenticatedUser()
        .then(api.checkStatus)
        .then(api.toJSON)
        .then(api.setToken)
        .then((response: any) => {
          dispatch(
            UserActions.Map({
              isAuthenticatingUser: false,
              authenticatedUser: response.user
            })
          );
        })
        .catch((error: any) => {
          return error.json().then((errResponse: any) => {
            dispatch(UserActions.Map({ isAuthenticatingUser: false }));
            errCallback(errResponse.message);
          });
        });
    };
  }
};
