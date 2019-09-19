import * as React from 'react';
import { getToken } from '@Redux/utils';

export function withAuthenticated(WrappedComponent: any) {
  return class extends React.Component<{ router: any }> {
    componentDidMount() {
      if (!getToken()) return this.props.router.replace('/login');
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
