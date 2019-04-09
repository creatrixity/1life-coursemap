import * as React from 'react';
import { connect } from 'react-redux';
import convert from 'htmr';

import { bindActionCreators, Dispatch } from 'redux';
import Head from 'next/head';
import Link from 'next/link';
import { AppActions } from '@Actions';

import { Header, StarsCast } from '@Components';
import { ToolIcon, PlayIcon } from '@Components/Icons';
import Spinner from '@Components/LoadSpinner';
import { IHomePage, IStore } from '@Interfaces';

import ReactPlayer from 'react-player';

import data from '../data';

import '../../../roadmap/module.scss'
import {
	getUser,
	getToken
} from '@Redux/utils';
import { computeModulesProgression } from '../../../../src/Helpers/index';

export class LessonOnePage extends React.Component<IHomePage.IProps, IHomePage.IState> {
	private content = '';
	private lessonId:any = null;
	private module:any = null;
	private nextModule:any = null;
	private nextModuleData:any = null;
	private moduleTitle:any = null;
	private moduleLessons:any = {};

	constructor (props:IHomePage.IProps) {
		super(props);

		this.state = {
			moduleProgression: 0
		}
	}

	componentDidMount () {
		if (!getToken()) return this.props.router.push('/login')

		const { lesson } = this.props.router.query;
		const module:any = this.props.router.query.module;

		const lessonId = parseInt(lesson.split('-')[1], 10);
		const moduleLessons = data[this.module] ? data[this.module].lessons : {};

		const content = convert(data[module].lessons[lessonId].content, {
			transform: {
				reactplayer: (props:any) => <ReactPlayer url={props.url} width={'100%'} light playing />
			}
		})

		this.content = content;
		this.lessonId = lessonId;
		this.module = module;
		this.moduleTitle = data[module].title;
		this.nextModule = data[module].nextModule;
		this.nextModuleData = data[this.nextModule];
		this.moduleLessons = moduleLessons;
		
		const moduleId = data[module].id;

		const moduleLessonsCount = Object.keys(data[this.module].lessons).length;

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
		const nextLesson = this.module ? data[this.module].lessons[this.lessonId + 1] : {};
		const hasValidNextLesson = nextLesson ? Object.keys(nextLesson).length > 0: false;
		const nextLessonTitle =  hasValidNextLesson ? nextLesson.title : '';
		const nextLessonType =  hasValidNextLesson ? nextLesson.type : '';
		const isAtLastLesson = data[this.module] ?
			(this.lessonId === Object.keys(data[this.module].lessons).length)
			: false;

		return (
			<section>
				{!isAtLastLesson && hasValidNextLesson ? (
				<div className={'mb-5'}>
					<h4 className={'h5'}>You've Completed Lesson {this.lessonId}</h4>
					<h5 className={'h6 mb-3 text-black-50'}>Let's move on to the next one.</h5>

					<Link prefetch href={`/roadmap/${this.module}/lesson-${this.lessonId + 1}`}>
						{this.renderModuleCardLink({
								icon: nextLessonType === 'lesson' ? PlayIcon: ToolIcon,
								title: nextLessonTitle
						})}
					</Link>
				</div>
				): (
					<div className={'mb-5'}>
						<h4 className={'h5 text-brand'}>Great! You've finished this module!</h4>
						<h5 className={'h6 mb-3 text-black-50'}>You are doing awesome! Let's move on to the next one.</h5>

						<Link prefetch href={`/roadmap/${this.nextModule}`}>
							{this.renderModuleCardLink({
								icon: PlayIcon,
								title: this.nextModuleData ? this.nextModuleData.title : ''
							})}
						</Link>
					</div>
				)}

			</section>
		);
	}

	public render(): JSX.Element {
		return (
			<div className="d-flex flex-column module" style={{ paddingTop: '100px' }}>
				<Head>
					<title>Lesson {this.lessonId} | Module: {this.moduleTitle}</title>
				</Head>

        <Header
					backlinkHref={`/roadmap/${this.module}`}
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
							{this.content}
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
		updateUserLesson: bindActionCreators(AppActions.updateUserLesson, dispatch)
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(LessonOnePage);