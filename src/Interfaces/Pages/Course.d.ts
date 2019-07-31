import { Props } from 'react';
import { ThunkAction } from 'redux-thunk'
import { Router } from 'next-routes'

import { IModulePage } from '@Interfaces'

declare module ICoursePage {
	export interface IOwnProps extends Props<{}> { 
		router: Router;
	 }

	export interface IState {
		userModules?: any
	}
	
	export interface IStateProps {
		courses: ICourseData[],
		courseModules: IModulePage.IModuleData[],
		isFetchingCourse?: boolean,
		isFetchingCourses?: boolean,
		isFetchingCourseModules?: boolean
	}
	
	export interface IDispatchProps {
		Map(payload: Actions.IMapPayload): Actions.IMapResponse
		fetchCourseModules ?(courseId:number): ThunkAction<void, IState, any, any>;
		fetchCourses ?(): ThunkAction<void, IState, any, any>;
  }
    
	export type IProps = IOwnProps & IStateProps & IDispatchProps;

	module Actions {
		export interface IMapPayload { }
		
		export interface IMapResponse { }
	}

	export interface ICourseData {
		id: number
		title: string,
		__meta__: {
			modules_count: number
		}
	}
}