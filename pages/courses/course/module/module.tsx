import * as React from 'react';
import { connect } from 'react-redux';
import convert from 'htmr';
import { bindActionCreators, Dispatch } from 'redux';
import Head from 'next/head';
import Link from 'next/link';

import { Header, StarsCast, LoaderScreen } from '@Components';
import { PlayIcon, ToolIcon } from '@Components/Icons';
import Spinner from '@Components/LoadSpinner';
import { AppActions, LessonActions, ModuleActions } from '@Actions';
import { IModulePage, IStore } from '@Interfaces';
import { LessonSelectors, ModuleSelectors } from '@Selectors';

import './module.scss'
import {
	getUser,
	getToken
} from '@Redux/utils'
import {
	computeModulesProgression,
	extractIdFromSlug,
	extractSlugFromString,
	toTitleCase
} from '@Helpers'

export class ModulePage extends React.Component<IModulePage.IProps, IModulePage.IState> {
	lessons: { [title:number]: any } = {}
	moduleId:number = 0;

	constructor (props:IModulePage.IProps) {
		super(props);

		this.state = {
			moduleProgression: 0,
			userLessons: [],
			moduleLessonView: ''
		}
	}

	componentDidMount () {
		if (!getToken()) return this.props.router.replace('/login')
		const {
			// app,
			// getUserLessons,
			getCourseModuleLessons,
			getUserLessons,
			fetchCourseModuleLessons,
			fetchCourseModuleLessonView,
			router
		} = this.props;
		const { module, course } = (router as any).query;

		const courseId = parseInt(extractIdFromSlug(course));
		const moduleId = parseInt(extractIdFromSlug(module));
		const courseSlug = extractSlugFromString(course);
		const moduleSlug = extractSlugFromString(module);

		this.moduleId = moduleId;

		fetchCourseModuleLessonView({ courseSlug, moduleSlug, lessonId: 0 },
			(moduleLessonView:string) => {
				this.setState({ moduleLessonView })
				fetchCourseModuleLessons({ moduleId })
			}
		)

		const user = getUser()
		let moduleProgression;

		getUserLessons({
			moduleId,
			courseId,
			userId: user.id
		}, ({ userLessons, moduleLessonsCount }:any) => {
			moduleProgression =  computeModulesProgression(userLessons, moduleLessonsCount);

			this.setState({
				moduleProgression,
				userLessons: userLessons.map((userLesson:any) => userLesson.id)
			})	
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
		const {
			getCourseModuleLessons,
			isFetchingCourseModuleLessons,
			router: {query}
		} = this.props;
		const { module, course } = query as any;
		const lessons = getCourseModuleLessons(this.moduleId);

		return (
			<div>
				<h4 className={'h5 mb-3'}>Up Next</h4>
				{isFetchingCourseModuleLessons ?
					<LoaderScreen caption={'Fetching Lessons...'} />:
					<ul className={'list list-unstyled'}>
						{lessons.map(({ id, title, type }:any, key:number) => {
							const isLesson = type === 'lesson';
							const isUserLesson = this.state.userLessons.includes(id) || key === 0
							console.log({ u: this.state.userLessons })
							const icon = isLesson ? PlayIcon: ToolIcon;
							const WrapperElement = isUserLesson ? Link: 'div';
							const WrapperProps = isUserLesson ? {
								prefetch: true,
								href: `/courses/${course}/${module}/lesson-${id}`
							}: {};

							return (
								<li key={key} className={'mb-2'}>
									<WrapperElement {...WrapperProps}>
										<a>
										{this.renderModuleCardLink({ icon, title, isDisabled: !isUserLesson })}
										</a>
									</WrapperElement>
								</li>
							)}
						)}
					</ul>
				}
			</div>
		);
	}

	public render(): JSX.Element {
		const {
			app,
			isFetchingCourseModuleLessonView,
			router: {query}
		} = this.props as any
		const { moduleProgression, moduleLessonView } = this.state;
		const { module, course } = query;
		const moduleTitle = extractSlugFromString(module).split('-').join(' ');

		return (
			<div className="d-flex flex-column module" style={{ paddingTop: '100px' }}>
				<Head><title>{toTitleCase(moduleTitle)} | 1Life</title></Head>

        <Header backlinkHref={`/courses/${course}`} title={moduleTitle}>
					{!app.isUpdatingUserLesson ? <StarsCast progression={moduleProgression || 0} />: <Spinner width={'25px'} height={'25px'} />}
				</Header>

				<section>
					{isFetchingCourseModuleLessonView ? 
						<LoaderScreen caption={'Fetching content...'} /> :
						<div className={'container'}>
							{convert(moduleLessonView)}
							<section className={'row'}><div className={'col-12'}>{this.renderUpcomingLinks()}</div></section>
						</div>}
				</section>
			</div>
		);
	}
}

const mapStateToProps = (state: IStore) => {
	return {
		home: state.home,
		app: state.app,
		user: state.user,
		module: state.module,
		getCourseModuleLessons: (id:number) => ModuleSelectors.getCourseModuleLessons(id)(state),
		isFetchingCourseModuleLessonView: ModuleSelectors.getIsFetchingCourseModuleLessonView(state),
		isFetchingCourseModuleLessons: ModuleSelectors.getIsFetchingCourseModuleLessons(state)
	}
};

const mapDispatchToProps = (dispatch: Dispatch) => (
	{
		fetchCourseModuleLessonView: bindActionCreators(ModuleActions.fetchCourseModuleLessonView, dispatch),
		fetchCourseModuleLessons: bindActionCreators(ModuleActions.fetchCourseModuleLessons, dispatch),
		updateUserLesson: bindActionCreators(AppActions.updateUserLesson, dispatch),
		getUserLessons: bindActionCreators(AppActions.getUserLessons, dispatch),
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(ModulePage);