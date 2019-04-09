import App, { Container } from 'next/app';
import * as React from 'react';
import { PageTransition } from 'next-page-transitions';

import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import store from '@Redux/store';

import { IApp } from '@Interfaces';
import {
    UserActions,
    AppActions
} from '@Actions';

import { findRoutePathDepth } from '../src/Helpers';
import { getUser } from '@Redux/utils';

class MyApp extends App<IApp.IProps> {
    constructor(props:any, context:any) {
        super(props, context);
        this.state = {
            prevDepth: findRoutePathDepth(props.router.route)
        };
    }

    static async getInitialProps(props: any) {
        let pageProps = {};

        if (props.Component.getInitialProps) {
            pageProps = await props.Component.getInitialProps(props.ctx);
        }

        return { pageProps };
    }

    componentWillUnmount() {
        this.props.store.dispatch(AppActions.Map({
            prevPathDepth: findRoutePathDepth(this.props.router.route)
        }));
    }

    componentDidMount() {
        const {
            store,
            router
        } = this.props;

        store.dispatch(AppActions.Map({
            prevPathDepth: findRoutePathDepth(this.props.router.route)
        }));

        store.dispatch(UserActions.Map({
            authenticatedUser: getUser()
        }));
        
        router.events.on('routeChangeStart', function() {
            store.dispatch(AppActions.Map({
                prevPathDepth: findRoutePathDepth(router.route)
            }));    
        })
    }


    render(): JSX.Element {
        const { Component, pageProps, router, store } = this.props;
        const { app } = store.getState();
        
        const transitionDirection = findRoutePathDepth(router.asPath) >= app.prevPathDepth ? 'left': 'right';

        return (
            <Container>
                <Provider store={store}>
                    <PageTransition
                        timeout={300}
                        classNames={`page-container ${transitionDirection} page-transition`}
                    >

                        <Component {...pageProps} router={router} key={router.route} />
                    </PageTransition>
                </Provider>

                <style jsx global>{`
                    .page-transition-enter.left {
                        transform: translate3d(100%, 0, 0);
                    }
                    .page-transition-enter.right {
                        transform: translate3d(-100%, 0, 0);
                    }
                    .page-transition-enter-active.left {
                        transform: translate3d(0, 0, 0);
                        transition: transform 100ms;
                    }
                    .page-transition-enter-active.right {
                        transform: translate3d(0, 0, 0);
                        transition: transform 100ms;
                    }
                    .page-transition-exit {
                        transform: translate3d(0, 0, 0);
                    }
                    .page-transition-exit-active.left {
                        transform: translate3d(-100%, 0, 0);
                        transition: transform 600ms;
                    }
                    .page-transition-exit-active.right {
                        transform: translate3d(100%, 0, 0);
                        transition: transform 600ms;
                    }
                    .page-container {
                        height: 100%;
                        overflow-x: hidden;
                    }
                `}</style>
            </Container>
        );
    }
}

export default withRedux(store)(MyApp);