import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Head from 'next/head';
import Link from 'next/link';

import { IProfilePage, IStore } from '@Interfaces';
import { HomeActions, AppActions } from '@Actions';

import './profile.scss';
import { StarsCast } from '@Components';
import { UserIcon } from '@Components/Icons';
import { Nav } from '@Components/Nav';
import { getUser, getToken } from '@Redux/utils'

export class ProfilePage extends React.Component<IProfilePage.IProps, IProfilePage.IState> {
	constructor (props:IProfilePage.IProps) {
		super(props)

		this.state = {
			userCourseModules: {}
		}
	}

	componentDidMount() {
		if (!getToken()) return this.props.router.push('/login')

		if (getUser()) {
			this.getUserCourses(1)
			this.getUserCourses(2)
		}
	}

	getUserCourses(courseId:number) {
		const user = getUser();

		this.props.getUserModules({
			userId: user.id,
			courseId
		}, (userModules:any) => {
			this.setState(({ userCourseModules }) => ({
				userCourseModules: {
					...userCourseModules,
					[courseId]: userModules
				}
			}))
		})	
	}

	computeModuleProgression({
		courseId,
		moduleId
	}: { courseId: number, moduleId: number }) {
		const { userCourseModules } = this.state;

		const getProgression = () => {
			const res = userCourseModules[courseId]
							.filter((module:any) => module.module_id === moduleId)
							
			return  res.length ? res[0].progression: 0;
		}

		return courseId in userCourseModules ? getProgression(): 0
	}

	public render(): JSX.Element {
		const user = this.props.user.authenticatedUser;
		const { coursemapModules } = this.props.app

		const coursesList = Object.keys(coursemapModules);

		return (
			<div className="d-flex flex-column">
				<Head>
					<title>My Profile | 1Life</title>
				</Head>
				<Nav />
				<section className={'d-flex flex-column w-100 justify-content-center mb-5 py-5 px-3'}>
					<div className={'profile-screen__header text-center mb-4'}>
						<h1 className={'profile-screen__title font-weight-bold text-black-50 mb-3 h3'}>
							My Profile
						</h1>

						<section className={'profile-screen__avatar mb-3 rounded-circle d-flex justify-content-center align-items-center'}>
							<UserIcon fill={'#77B02A'} />
						</section>

						<h3 className={'text-brand h5'}>{user ? user.name: ''}</h3>
						<section className={'mb-3 d-flex flex-row justify-content-center'}>
							<StarsCast />
						</section>
					</div>

					<div className={'profile-screen__section text-center mb-4'}>
						<h1 className={'profile-screen__title font-weight-bold text-black-50 mb-3 h3'}>Roadmap Progress</h1>
						<p className={'lead mb-4'}>Track your progress. Reflect on your progress on each module.</p>
					</div>

					{coursesList.map((course:any, i:number) => {
						const currentCourse = coursemapModules[course];
						const modulesList = Object.keys(currentCourse.modules)

						return (
							<div className={'mb-3'} key={i}>
								<h3 className={'h5'}>{currentCourse.title}</h3>

								<div className={'container'}>
									<ul className={'list list-unstyled'}>
										{modulesList.map((module:any, k:number) => {
											const currentModule = coursemapModules[course].modules[module];

											return (
												<li key={k} className={'mb-2'}>
													<section className={'d-flex'}>
														<Link href={'/home'}>
															<a className={'w-75 mr-2 text-brand'}>
															{currentModule.title}
															</a>
														</Link>

														<div className={'w-20 d-flex align-items-center'}>
															<StarsCast
																progression={this.computeModuleProgression({
																	courseId: currentCourse.id,
																	moduleId: currentModule.id
																})}
															/>
														</div>
													</section>
												</li>
											)
										})}
									</ul>
								</div>

							</div>
					)})}

				</section>
			</div>
		);
	}
}

const mapStateToProps = (state: IStore) => {
	return {
		home: state.home,
		app: state.app,
		user: state.user
	}
};

const mapDispatchToProps = (dispatch: Dispatch) => (
	{
		getUserModules: bindActionCreators(AppActions.getUserModules, dispatch),
		Map: bindActionCreators(HomeActions.Map, dispatch)
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);