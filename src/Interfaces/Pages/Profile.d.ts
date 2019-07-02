import { Props } from 'react';

declare module IProfilePage {
	export interface IOwnProps extends Props<{}> { 
		router: any;
	 }

	export interface IState {
		userCourseModules: any;
	}
	
	export interface IStateProps {
		user?: any
		app?: any
	}
	
	export interface IDispatchProps {
		Map(payload: Actions.IMapPayload): Actions.IMapResponse
		getUserModules?: any;
  }
    
	export type IProps = IOwnProps & IStateProps & IDispatchProps;

    module Actions {
		export interface IMapPayload { }
		
		export interface IMapResponse { }
	}
}