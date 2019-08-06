import { ActionConsts } from '@Definations';

import { IAction, ICoursePage } from '@Interfaces';

/**
 * INITIAL_STATE
*/
const INITIAL_STATE: ICoursePage.IStateProps = {
	isFetchingCourse: false,
	isFetchingCourses: false,
	courses: [],
	courseModules: []
};

type IMapPayload = ICoursePage.Actions.IMapPayload;

/**
 * REDUCER
*/
export const CourseReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
	switch (action.type) {
    case ActionConsts.Course.SetReducer:
			return {
				...state,
				...action.payload
			};

		case ActionConsts.Course.ResetReducer:
			return INITIAL_STATE;

		default:
			return state;
	}
};
