import { ActionConsts } from '@Definations';

import { IAction, ILessonPage } from '@Interfaces';

/**
 * INITIAL_STATE
*/
const INITIAL_STATE: ILessonPage.IStateProps = {
	isFetchingLessonView: false,
};

type IMapPayload = ILessonPage.Actions.IMapPayload;

/**
 * REDUCER
*/
export const LessonReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
	switch (action.type) {
    case ActionConsts.Lesson.SetReducer:
			return {
				...state,
				...action.payload
			};

		case ActionConsts.Lesson.ResetReducer:
			return INITIAL_STATE;

		default:
			return state;
	}
};
