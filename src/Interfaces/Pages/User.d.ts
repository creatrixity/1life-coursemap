//#region Global Imports
import { Props } from 'react';
//#endregion Global Imports

declare module IUser {
    export interface IProps extends Props<{}> {
        store: any;
    }

    export interface IState { }
    
    module Actions {
        export interface IMapPayload { }
    }
}