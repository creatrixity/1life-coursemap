import { ActionConsts } from '@Definations';

import { IAction, IApp } from '@Interfaces';

/**
 * INITIAL_STATE
*/
const INITIAL_STATE: IApp.IState = {
	prevPathDepth: 0,
	hasRequestError: false,
	isUpdatingUserLesson: false
};

type IMapPayload = IApp.Actions.IMapPayload;

/**
 * REDUCER
*/
export const AppReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
	switch (action.type) {
		case ActionConsts.App.SetReducer:
			return {
				...state,
				...action.payload
			};

		case ActionConsts.App.ResetReducer:
			return INITIAL_STATE;

		default:
			return state;
	}
};
