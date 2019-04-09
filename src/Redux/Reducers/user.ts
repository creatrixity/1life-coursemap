import { ActionConsts } from '@Definations';

import { IAction, IUser } from '@Interfaces';

/**
 * INITIAL_STATE
*/
const INITIAL_STATE: IUser.IState = {
	isCreatingUser: false,
  isAuthenticatingUser: false,
	authenticatedUser: null,
	loginErrorMessage: null,
	registrationErrorMessage: null
};

type IMapPayload = IUser.Actions.IMapPayload;

/**
 * REDUCER
*/
export const UserReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
	switch (action.type) {
		case ActionConsts.User.SetReducer:
			return {
				...state,
				...action.payload
			};

		case ActionConsts.User.ResetReducer:
			return INITIAL_STATE;

		default:
			return state;
	}
};
