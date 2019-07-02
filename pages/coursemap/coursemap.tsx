import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Head from 'next/head';
import Link from 'next/link';

import { IHomePage, IStore } from '@Interfaces';
import { AppActions } from '@Actions';
import { ArrowRightIcon } from '@Components/Icons';
import { Nav } from '@Components/Nav';
import {
	getUser,
	getToken
} from '@Redux/utils'

import './coursemap.scss';

export class CoursemapPage extends React.Component<IHomePage.IProps, IHomePage.IState> {
	private coursemapModules:any = {};
	private course:string = '';

	constructor (props:IHomePage.IProps) {
		super(props);

		this.state = {
			userModules: []
		}

	}

	componentDidMount () {
		if (!getToken()) return this.props.router.replace('/login')

		const { app, router } = this.props;
		const { coursemapModules } = app;
		const { course } = router.query;

		this.coursemapModules = coursemapModules;
		this.course = course;

		const user = getUser();

		if (user) {
			this.props.getUserModules({
				userId: user.id,
				courseId: this.coursemapModules[this.course].id
			}, (userModules:any) => {
				userModules = userModules
				.filter((userModule:any) => userModule.progression === 100)
				.map((userModule:any) => userModule.module_id)
		
				this.setState({
					userModules
				})
			})	
		}
	}

	determineModuleStatus (moduleId:any) {
		const userModules:any = this.state.userModules || [];

		return userModules.includes(moduleId - 1)
	}

	public render(): JSX.Element {
		return (
			<div className="d-flex flex-column">
				<Head>
					<title>My Coursemap | 1Life</title>
				</Head>
				<Nav />
				<section className="container">
					<div className="row pb-4">
						<section className="col-md-12 mb-5">
							<div className={'d-flex align-items-center'}>
								<img src={'/static/img/cap.svg'} className={'mr-3'} width={100} />
								<h1 className={'h4 coursemap-title text-gray'}>Course Modules</h1>
							</div>
						</section>
						{ this.course.length > 0 && 
							Object
							.keys(this.coursemapModules[this.course].modules)
							.filter(moduleKey => moduleKey !== '__route')
							.map((moduleKey:string, idx) => {
								const moduleObj:any = this.coursemapModules[this.course].modules[moduleKey];
								let { title, id, lessons } = moduleObj
								const lessonsCount = lessons && Object.keys(lessons).length;


								return (this.determineModuleStatus(id) || idx === 0) ? (
									<section className="col-md-12 mb-4" key={idx}>
										<div className={'text-center card coursemap-listing coursemap-listing--active'}>
											<section className="d-flex flex-column align-items-center">
												<span className="coursemap-listing__number font-weight-bold mb-2">{idx + 1}</span>
												<h3 className={'h4 coursemap-listing__title mb-0'}>{title}</h3>
												<p className="font-style-italic coursemap-listing__subtext text-gray mb-4">
													{ lessonsCount } { lessonsCount === 1 ? 'Lesson': 'Lessons'}
												</p>
			
												<Link href={`/courses/${this.course}/${moduleKey}`}>
													<button className="btn btn-success coursemap-listing__btn">
														<span className={'mr-2'}>Let's Go</span>
														<ArrowRightIcon />
													</button>
												</Link>
											</section>
										</div>
									</section>
								): (
									<section className="col-md-12 mb-4" key={idx}>
										<div className={'text-center card coursemap-listing'}>
											<img src="/static/img/lock.svg" className="coursemap-listing__icon" alt=""/>
											<section className="d-flex flex-column align-items-center">
												<span className="coursemap-listing__number font-weight-bold mb-2">
												{idx + 1}
												</span>
												<h3 className={'h4 coursemap-listing__title'}>{this.coursemapModules[this.course].modules[moduleKey].title}</h3>
												<p className="font-style-italic coursemap-listing__subtext text-gray">
													{this.coursemapModules[this.course].modules[moduleKey].lessons ?
													Object.keys(this.coursemapModules[this.course].modules[moduleKey].lessons).length:0} Lessons
												</p>
											</section>
										</div>
									</section>
								)
							}
						)}
					</div>
				</section>
			</div>
		);
	}
}

const mapStateToProps = (state: IStore) => {
	return {
		app: state.app
	}
};

const mapDispatchToProps = (dispatch:Dispatch) => (
	{
		getUserModules: bindActionCreators(AppActions.getUserModules, dispatch)
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(CoursemapPage);