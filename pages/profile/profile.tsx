import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Head from 'next/head';
import Link from 'next/link';

import { IHomePage, IStore } from '@Interfaces';
import { HomeActions } from '@Actions';

import './profile.scss';
import { StarsCast } from '@Components';
import { UserIcon } from '@Components/Icons';

export class ProfilePage extends React.Component<IHomePage.IProps, IHomePage.IState> {
	public render(): JSX.Element {
		return (
			<div className="d-flex flex-column">
				<Head>
					<title>My Profile | 1Life</title>
				</Head>
				<section className={'d-flex flex-column w-100 justify-content-center mb-5 py-5 px-3'}>
					<div className={'profile-screen__header text-center mb-4'}>
						<h1 className={'profile-screen__title font-weight-bold text-black-50 mb-3 h3'}>My Profile</h1>

						<section className={'profile-screen__avatar mb-3 rounded-circle d-flex justify-content-center align-items-center'}>
							<UserIcon fill={'#838383'} />
						</section>

						<h3 className={'text-brand h5'}>John Smith</h3>
						<section className={'mb-3 d-flex flex-row justify-content-center'}>
							<StarsCast />
						</section>
					</div>

					<div className={'profile-screen__section text-center mb-4'}>
						<h1 className={'profile-screen__title font-weight-bold text-black-50 mb-3 h3'}>Roadmap Progress</h1>
						<p className={'lead mb-4'}>Track your progress. Reflect on your progress on each module.</p>
					</div>

					<div className={'container'}>
						<ul className={'list list-unstyled'}>
							<li>
								<section className={'d-flex'}>
									<Link href={'/home'}>
										<a className={'w-50 mr-2 lead text-brand'}>
											Welcome
										</a>									
									</Link>

									<div className={'w-20 d-flex align-items-center'}>
										<StarsCast />
									</div>

								</section>
							</li>

						</ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);