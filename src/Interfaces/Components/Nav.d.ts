import { Props } from 'react';

declare module INav {
    export interface IProps extends Props<{}> {}

    export interface IState {
        isMenuOpen: boolean
    }
}