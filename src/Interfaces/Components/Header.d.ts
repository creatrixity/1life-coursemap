import { Props } from 'react';

declare module IHeader {
    export interface IProps extends Props<{}> {
        style?: object;
        backlinkHref: string;
        title: string;
    }

    export interface IState { }
}