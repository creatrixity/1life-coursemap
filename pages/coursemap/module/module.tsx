import * as React from 'react';
import { connect } from 'react-redux';
import convert from 'htmr';
import { bindActionCreators, Dispatch } from 'redux';
import Head from 'next/head';
import Link from 'next/link';

import { Header, StarsCast } from '@Components';
import { PlayIcon, ToolIcon } from '@Components/Icons';
import Spinner from '@Components/LoadSpinner';
import { AppActions } from '@Actions';
import { IHomePage, IStore } from '@Interfaces';

import '../../coursemap/module.scss'
import {
	getUser,
	getToken
} from '@Redux/utils'
import { computeModulesProgression } from '../../../src/Helpers/index'

export class ModulePage extends React.Component<IHomePage.IProps, IHomePage.IState> {
	content = '';
	course = '';
	moduleTitle = '';
	module = '';
	lessons: { [title:number]: any } = {}

	constructor (props:IHomePage.IProps) {
		super(props);

		this.state = {
			moduleProgression: 0,
			userLessons: []
		}
	}

	componentDidMount () {
		if (!getToken()) return this.props.router.push('/login')
		const {
			app,
			getUserLessons,
			fetchCoursemapModule
		} = this.props;
		const { coursemapModules, coursemapModulesContent } = app;

		const { module, course } = this.props.router.query;

		this.module = module;
		fetchCoursemapModule({
			module,
			course
		}, coursemapModulesContent)

		this.course = course;
		this.content = coursemapModules[course].modules[module].content || 'Loading...';
		this.moduleTitle = coursemapModules[course].modules[module].title
		const moduleLessons = coursemapModules[course].modules[module].lessons;

		this.lessons = moduleLessons
		const user = getUser()
		let moduleProgression;

		getUserLessons({
			moduleId: coursemapModules[course].modules[module].id,
			courseId: coursemapModules[course].id,
			userId: user.id
		}, (userLessons:any) => {
			moduleProgression =  computeModulesProgression(userLessons, Object.keys(moduleLessons).length);

			if (moduleProgression === 0 || !userLessons.length) {
				this.props.updateUserLesson({
					lessonId: 1,
					lessonsCount: Object.keys(moduleLessons).length,
					moduleId: coursemapModules[course][module].id,
					userId: user.id,
					progression: 0
				}, (lessons:any) => {
					moduleProgression = computeModulesProgression(lessons, Object.keys(moduleLessons).length);

					this.setState({
						moduleProgression,
						userLessons: lessons.map((lesson:any) => lesson.lesson_id)
					})
				});	
			} else {
				this.setState({
					moduleProgression,
					userLessons: userLessons.map((userLesson:any) => userLesson.lesson_id)
				})	
			}
		})
	}

	renderModuleCardLink({
		icon,
		title,
		isDisabled
	}: {
		icon: any,
		title: string,
		isDisabled: boolean
	}):JSX.Element {
		const Icon = icon;

		return (
			<div className={`card d-flex flex-row module__link-card ${isDisabled && 'module__link-card--disabled'}`}>
				<section className={'module__link-card__preview d-flex justify-content-center align-items-center'}>
					<Icon />
				</section>
				<section className={'px-3 py-4 module__link-card__content'}>
					<h5 className={'h6 module__link-card__title'}>{title}</h5>
				</section>
			</div>
		)
	}

	public renderUpcomingLinks(): JSX.Element {
		const lessonKeys = Object.keys(this.lessons);
		const userLessons:Array<number> = this.state.userLessons || [];
		
		return (
			<div>
				<h4 className={'h5 mb-3'}>Up Next</h4>

				<ul className={'list list-unstyled'}>
				{lessonKeys.map((lessonId: any, key:number) => {
					const {
						title,
						type
					} = this.lessons[lessonId];

					return (
						<li key={key} className={'mb-2'}>
						{  key === 0 || (userLessons).includes(parseInt(lessonId, 10)) ? (
							<Link prefetch href={`/courses/${this.course}/${this.module}/lesson-${lessonId}`}>
								{this.renderModuleCardLink({
									icon: type === 'lesson' ? PlayIcon: ToolIcon,
									title,
									isDisabled: false
								})}						
							</Link>
						): (
						<div>
								{this.renderModuleCardLink({
									icon: type === 'lesson' ? PlayIcon: ToolIcon,
									title,
									isDisabled: true
								})}
						</div>
						)}
						</li>
					)
				})}
				</ul>

			</div>
		);
	}

	public render(): JSX.Element {
		const { app } = this.props
		const { coursemapModulesContent } = app;

		return (
			<div className="d-flex flex-column module" style={{ paddingTop: '100px' }}>
				<Head>
					<title>{this.moduleTitle} | 1Life</title>
				</Head>

        <Header
					backlinkHref={`/courses/${this.course}`}
					title={this.moduleTitle}
					style={{
						position: 'fixed',
						top: 0,
						zIndex: 900,
						width: '100%'
					}}
					>
					{!this.props.app.isUpdatingUserLesson ? <StarsCast progression={this.state.moduleProgression || 0} />: <Spinner width={'25px'} height={'25px'} />}
				</Header>

				<section>
					<div className={'container'}>
						{convert(coursemapModulesContent[this.course] ? coursemapModulesContent[this.course][this.module].content : 'Loading...')}
						<section className={'row'}>
							<div className={'col-12'}>
								{this.renderUpcomingLinks()}
							</div>
						</section>
					</div>
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
		updateUserLesson: bindActionCreators(AppActions.updateUserLesson, dispatch),
		getUserLessons: bindActionCreators(AppActions.getUserLessons, dispatch),
		fetchCoursemapModule: bindActionCreators(AppActions.fetchCoursemapModule, dispatch),
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(ModulePage);