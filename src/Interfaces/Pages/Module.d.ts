import { Props } from 'react';
import { ThunkAction } from 'redux-thunk'
import { Router } from 'next-routes'

declare module IModulePage {
	export interface IOwnProps extends Props<{}> { 
		router: Router;
	 }

	export interface IState {
		moduleProgression: number,
		userLessons: Number[],
		moduleLessonView: string
	}
	
	export interface IStateProps {
		getCourseModuleLessons: Function,
		isFetchingCourseModuleLessons: boolean,
		isFetchingCourseModuleLessonView?: boolean
	}
	
	export interface IDispatchProps {
		Map(payload: Actions.IMapPayload): Actions.IMapResponse,
		fetchCourseModuleLessonView(payload:IFetchCourseModuleLessonViewArgs, cb:Function): ThunkAction<void, IState, any, any>
		fetchCourseModuleLessons(payload:any): ThunkAction<void, IState, any, any>,
		updateUserLesson: (payload:any, cb:Function) => ThunkAction<void, IState, any, any>,
		getUserLessons: (payload:any, cb:Function) => ThunkAction<void, IState, any, any>
  }
    
	export type IProps = IOwnProps & IStateProps & IDispatchProps;

	module Actions {
		export interface IMapPayload { }
		
		export interface IMapResponse { }
	}

	export interface IModuleData {
		id: number,
		course_id: number,
		title: string,
		__meta__: {
			lessons_count: number
		}
	}

	export interface IFetchCourseModuleLessonViewArgs {
		courseSlug:string,
		moduleSlug:string,
		lessonId?:number
	}
}