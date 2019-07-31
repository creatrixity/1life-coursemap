import { Props } from 'react';
import { ThunkAction } from 'redux-thunk'
import { Router } from 'next-routes'

declare module ILessonPage {
	export interface IOwnProps extends Props<{}> { 
		router: Router;
	 }

	export interface IState {
		moduleProgression: number,
		ratingCumulative: number,
		lessonView: string
	}
	
	export interface IStateProps {
    isFetchingLessonView: boolean
  }
	
	export interface IDispatchProps {
		Map(payload: Actions.IMapPayload): Actions.IMapResponse,
		fetchLessonView(payload:IFetchCourseModuleLessonViewArgs, cb:Function): ThunkAction<void, IState, any, any>
  }

	export type IProps = IOwnProps & IStateProps & IDispatchProps;

	module Actions {
		export interface IMapPayload { }
		
		export interface IMapResponse { }
	}

	export interface IFetchCourseModuleLessonViewArgs {
		courseSlug:string,
		moduleSlug:string,
		lessonId?:number
	}
}