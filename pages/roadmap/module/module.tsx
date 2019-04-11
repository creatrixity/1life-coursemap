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

import '../../roadmap/module.scss'
import {
	getUser,
	getToken
} from '@Redux/utils'
import { computeModulesProgression } from '../../../src/Helpers/index'

export class ModulePage extends React.Component<IHomePage.IProps, IHomePage.IState> {
	content = '';
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
			fetchRoadmapModule
		} = this.props;
		const { roadmapModules, roadmapModulesContent } = app;

		const module:string = this.props.router.query.module;
		this.module = module;
		fetchRoadmapModule({
			module
		}, roadmapModulesContent)

		this.content = roadmapModules[module].content || 'Loading...';
		this.moduleTitle = roadmapModules[module].title
		const moduleLessons = roadmapModules[module].lessons;

		this.lessons = moduleLessons
		const user = getUser()
		let moduleProgression;

		getUserLessons({
			moduleId: roadmapModules[module].id,
			userId: user.id
		}, (userLessons:any) => {
			moduleProgression =  computeModulesProgression(userLessons, Object.keys(moduleLessons).length);

			if (moduleProgression === 0 || !userLessons.length) {
				this.props.updateUserLesson({
					lessonId: 1,
					lessonsCount: Object.keys(moduleLessons).length,
					moduleId: roadmapModules[module].id,
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
		const userLessons:Array<number> = this.state.userLessons || [];
		return (
			<div>
				<h4 className={'h5 mb-3'}>Up Next</h4>

				<ul className={'list list-unstyled'}>

				{Object.keys(this.lessons).map((lessonId: any, key:number) => {
					const {
						title,
						type
					} = this.lessons[lessonId];

					return (
						<li key={key} className={'mb-2'}>
						{ (userLessons).includes(parseInt(lessonId, 10)) ? (
							<Link prefetch href={`/roadmap/${this.module}/lesson-${lessonId}`}>
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
		const { roadmapModulesContent } = app;

		return (
			<div className="d-flex flex-column module" style={{ paddingTop: '100px' }}>
				<Head>
					<title>{this.moduleTitle} | 1Life</title>
				</Head>

        <Header
					backlinkHref={'/roadmap'}
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
						{convert(roadmapModulesContent[this.module] ? roadmapModulesContent[this.module].content : 'Loading...')}
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
		fetchRoadmapModule: bindActionCreators(AppActions.fetchRoadmapModule, dispatch),
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(ModulePage);