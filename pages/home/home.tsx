import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Head from 'next/head';
import Link from 'next/link';

import { IHomePage, IStore } from '@Interfaces';
import { HomeActions } from '@Actions';

import './home.scss';

export class HomePage extends React.Component<IHomePage.IProps, IHomePage.IState> {
	public render(): JSX.Element {
		return (
			<div className="d-flex flex-column splash-screen">
				<Head>
					<title>My Roadmap | 1Life</title>
				</Head>
				<section className={'text-center justify-content-center mb-5 py-5 px-3 splash-screen__hero'}>
					<div className={''}>
						<img className={'splash-screen__img mb-4'} src={'/static/img/splashLogo.webp'} alt=""/>
						<h1 className={'splash-screen__title font-weight-bold mb-3'}>My 1Life Road Map</h1>
						<h2 className={'splash-screen__subtitle'}>Ready to create your 1 Life masterpiece?</h2>
					</div>
				</section>
				<section className={'splash-screen__cta-container has-dd p-5'}>
					<div className="col-sm-6 offset-sm-3">
						<Link href="/welcome">
							<a className="btn btn-block btn-dark splash-screen__cta">
								Get Started
							</a>
						</Link>

						<Link href={'/roadmap'}>
							<a className="btn btn-block btn-outline-light splash-screen__cta">See Roadmap Outline</a>
						</Link>
					</div>
				</section>
			</div>
		);
	}
}

const mapStateToProps = (state: IStore) => state.home;

const mapDispatchToProps = (dispatch: Dispatch) => (
	{
		Map: bindActionCreators(HomeActions.Map, dispatch)
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);