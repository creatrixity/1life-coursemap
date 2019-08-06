import { ActionConsts } from '@Definations';

import { IAction, IModulePage } from '@Interfaces';

/**
 * INITIAL_STATE
*/
const INITIAL_STATE: IModulePage.IStateProps = {
	isFetchingCourseModuleLessonView: false,
	isFetchingCourseModuleLessons: false,
	getCourseModuleLessons: Function
};

type IMapPayload = IModulePage.Actions.IMapPayload;

/**
 * REDUCER
*/
export const ModuleReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
	switch (action.type) {
    case ActionConsts.Module.SetReducer:
			return {
				...state,
				...action.payload
			};

		case ActionConsts.Module.ResetReducer:
			return INITIAL_STATE;

		default:
			return state;
	}
};
