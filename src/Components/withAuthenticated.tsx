import * as React from 'react';

import { UserActions } from '@Actions';

export function withAuthenticated(WrappedComponent: any) {
  class AuthenticatedComp extends React.Component<{
    router: any;
    dispatch: any;
  }> {
    componentDidMount() {
      const { router, dispatch } = this.props;

      dispatch(UserActions.getAuthenticatedUser(() => router.push('/login')));
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return AuthenticatedComp;
}
