import { ActionConsts } from '@Definations';

import { IAction, IEntity } from '@Interfaces';

/**
 * INITIAL_STATE
*/
const INITIAL_STATE: IEntity.IStateProps = {
	courses: {},
	modules: {}
};

type IMapPayload = IEntity.Actions.IMapPayload;

/**
 * REDUCER
*/
export const EntityReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
	switch (action.type) {
    case ActionConsts.Entity.SetReducer:
			return {
				...state,
				...action.payload
			};

		case ActionConsts.Entity.ResetReducer:
			return INITIAL_STATE;

		default:
			return state;
	}
};
