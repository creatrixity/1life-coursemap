import * as React from 'react';
import { connect } from 'react-redux';
import convert from 'htmr';

import { bindActionCreators, Dispatch } from 'redux';
import Head from 'next/head';
import Link from 'next/link';
import { AppActions } from '@Actions';

import { Header, StarsCast, JournalInput } from '@Components';
import { ToolIcon, PlayIcon } from '@Components/Icons';
import Spinner from '@Components/LoadSpinner';
import { IHomePage, IStore } from '@Interfaces';

import ReactPlayer from 'react-player';

import '../../../coursemap/module.scss'
import {
	getUser,
	getToken
} from '@Redux/utils';
import { computeModulesProgression } from '../../../../src/Helpers/index';

export class LessonPage extends React.Component<IHomePage.IProps, IHomePage.IState> {
	private course = '';
	private currentCourse:any = {};
	private currentCourseModule: {[id:string]: any} = {};
	private currentCourseModuleLessons:{[id:string]: any} = {};
	private lessonId:any = null;
	private module:any = null;
	private nextModule:any = null;
	private nextModuleData:any = null;
	private moduleTitle:any = null;

	constructor (props:IHomePage.IProps) {
		super(props);

		this.state = {
			moduleProgression: 0
		}

		this.handleSaveJournalInput = this.handleSaveJournalInput.bind(this);
	}

	componentDidMount () {
		if (!getToken()) return this.props.router.push('/login')

		const { app, router } = this.props

		const { course, lesson, module } = router.query;
		const { coursemapModules, coursemapModulesContent } = app;

		const lessonId = parseInt(lesson.split('-')[1]);
		const currentCourse = coursemapModules[course];
		const currentCourseModule:any = currentCourse.modules[module];
		const currentCourseModuleLessons = currentCourseModule && currentCourseModule.lessons;

		this.props.fetchCoursemapModule({
			module,
			course,
			id: lessonId
		}, coursemapModulesContent)

		this.course = course;
		this.currentCourse = currentCourse;
		this.currentCourseModule = currentCourseModule;
		this.currentCourseModuleLessons = currentCourseModuleLessons;
		this.lessonId = lessonId;
		this.module = module;
		this.moduleTitle = currentCourseModule.title;
		this.nextModule = currentCourseModule.nextModule;
		this.nextModuleData = currentCourse.modules[this.nextModule];
		
		const moduleId = currentCourseModule.id;
		const moduleLessonsCount = Object.keys(currentCourseModuleLessons).length;

		const user = getUser()

		this.props.updateUserLesson({
			lessonId: lessonId,
			lessonsCount: moduleLessonsCount,
			moduleId,
			userId: user.id,
			progression: 100
		}, (lessons:any) => {
			const moduleProgression = computeModulesProgression(lessons, moduleLessonsCount);

			this.setState({
				moduleProgression
			})
		});

		this.props.getJournalFeedback({
			user_id: user.id,
			course_id: currentCourse.id,
			module_id: currentCourseModule.id,
			lesson_id: lessonId,
		})
	}

	componentWillUnmount () {
		this.handleSaveJournalInput = () => {};
	}

	renderModuleCardLink({
		icon,
		title
	}: {
		icon: any,
		title: string
	}):JSX.Element {
		const Icon = icon;

		return (
			<div className={'card d-flex flex-row module__link-card'}>
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
		const lessonsCount = Object.keys(this.currentCourseModuleLessons).length;
		const nextLesson = this.currentCourseModuleLessons[this.lessonId + 1];
		const hasValidNextLesson = nextLesson && Object.keys(nextLesson).length > 0;
		const nextLessonTitle = hasValidNextLesson && nextLesson.title;
		const nextLessonType = hasValidNextLesson && nextLesson.type;
		const isAtLastLesson = this.lessonId === lessonsCount;

		return (
			<section>
				{!isAtLastLesson && hasValidNextLesson ? (
				<div className={'mb-5'}>
					<h4 className={'h5'}>You've Completed Lesson {this.lessonId}</h4>
					<h5 className={'h6 mb-3 text-black-50'}>Let's move on to the next one.</h5>

					<Link prefetch href={`/courses/${this.course}/${this.module}/lesson-${this.lessonId + 1}`}>
						{this.renderModuleCardLink({
								icon: nextLessonType === 'lesson' ? PlayIcon: ToolIcon,
								title: nextLessonTitle
						})}
					</Link>
				</div>
				): (
					<div className={'mb-5'}>
						<h4 className={'h5 text-brand'}>Great! You've finished this module!</h4>

						{this.nextModuleData ?
						<>
							<h5 className={'h6 mb-3 text-black-50'}>You are doing awesome! Let's move on to the next one.</h5>
							<Link prefetch href={`/courses/${this.course}/${this.nextModule}`}>
								{this.renderModuleCardLink({
									icon: PlayIcon,
									title: this.nextModuleData && this.nextModuleData.title
								})}
							</Link>
						</>: 
						<>
						<h5 className={'h6 mb-3 text-black-50'}>Whoohoo! You have finished this course!</h5>
						<Link prefetch href={`/courses`}>
							{this.renderModuleCardLink({
								icon: PlayIcon,
								title: 'See all courses'
							})}
						</Link>
						</>
					}
					</div>
				)}
			</section>
		);
	}

	handleSaveJournalInput({ question, value, tag }: { value:string, question:string, tag: number }, callback:() => any) {
		this.props.createJournalFeedback({
			question: question,
			answer: value,
			user_id: getUser().id,
			course_id: this.currentCourse.id,
			module_id: this.currentCourseModule['id'],
			lesson_id: this.lessonId,
			feedback_id: tag
		}, callback)
	}

	public render(): JSX.Element {
		const { coursemapModulesContent, coursemapModulesFeedback } = this.props.app
		const hasModulesFeedback = Object.keys(coursemapModulesFeedback).length;

		const journalInputValue = hasModulesFeedback ? coursemapModulesFeedback[this.currentCourse.id][this.currentCourseModule.id][this.lessonId]: {};

		const lessonData = coursemapModulesContent[this.course] && coursemapModulesContent[this.course][this.module][this.lessonId];

		let lessonContent = lessonData ? lessonData.content: 'Loading...';
		const content = convert(lessonContent, {
				transform: {
					reactplayer: (props:any) => <ReactPlayer url={props.url} width={'100%'} light playing />,
					journalinput: (props:any) => {
						const tag = parseInt(props.tag);
						const value = journalInputValue && journalInputValue.hasOwnProperty(tag) ? journalInputValue[tag].answer: '';

						return (
							<JournalInput
								onSaveJournalInput={this.handleSaveJournalInput}
								tag={tag}
								type={props.type || 'textarea'}
								name={props.name}
								label={props.label}
								showLabel={!props.showlabel}
								value={value}
							/>
						)
					}
				}
			}
		)

		return (
			<div className="d-flex flex-column module" style={{ paddingTop: '100px' }}>
				<Head>
					<title>Lesson {this.lessonId} | Module: {this.moduleTitle}</title>
				</Head>

        <Header
					backlinkHref={`/courses/${this.course}/${this.module}`}
					title={`Lesson ${this.lessonId}`}
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
					<div>
						<section className={'mb-5 container'}>
							{content}
						</section>

						<section className={'container'}>
							{this.renderUpcomingLinks()}
						</section>
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

const mapDispatchToProps = (dispatch: Dispatch) => (
	{
		updateUserLesson: bindActionCreators(AppActions.updateUserLesson, dispatch),
		fetchCoursemapModule: bindActionCreators(AppActions.fetchCoursemapModule, dispatch),
		createJournalFeedback: bindActionCreators(AppActions.createJournalFeedback, dispatch),
		getJournalFeedback: bindActionCreators(AppActions.getJournalFeedback, dispatch)
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(LessonPage);