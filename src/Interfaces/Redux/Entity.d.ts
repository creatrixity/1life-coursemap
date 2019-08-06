import { Props } from 'react';
import { IStoreData } from '@Interfaces/Redux/Store';

declare module IEntity {
	export interface IState {}
  
	export interface IStateProps {
		courses: {},
		modules: {}
  }
	
	export interface IDispatchProps {
		Map(payload: Actions.IMapPayload): Actions.IMapResponse;
  }

	export type IProps = IOwnProps & IStateProps & IDispatchProps;

    module Actions {
		export interface IMapPayload { }
		
		export interface IMapResponse { }

		export interface IStoresResponse { }
	}
}