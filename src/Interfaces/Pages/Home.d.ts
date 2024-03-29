import { Props } from 'react';

declare module IHomePage {
  export interface IOwnProps extends Props<{}> {
    router: any;
  }

  export interface IState {
    moduleProgression?: number;
    ratingCumulative?: number;
    name?: string;
    email?: string;
    uid?: string;
    userLessons?: [];
    userModules?: [];
  }

  export interface IStateProps {
    user?: any;
    app?: any;
  }

  export interface IDispatchProps {
    Map(payload: Actions.IMapPayload): Actions.IMapResponse;
    createUser?: any;
    createJournalFeedback?: any;
    getJournalFeedback?: any;
    authenticateUser?: any;
    updateUserLesson?: any;
    getUserLessons?: any;
    getUserModules?: any;
    fetchCoursemapModule?: any;
  }

  export type IProps = IOwnProps & IStateProps & IDispatchProps;

  module Actions {
    export interface IMapPayload {}

    export interface IMapResponse {}
  }
}
