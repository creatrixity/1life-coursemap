import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Head from 'next/head';

import { ICoursePage, IModulePage, IStore } from '@Interfaces';
import { AppActions, CourseActions } from '@Actions';
import { ListingsCard, LoaderScreen } from '@Components';
import { extractIdFromSlug, slugify } from '@Helpers'
import { Nav } from '@Components/Nav';
import { CourseSelectors } from '@Selectors';
import {
	getUser,
	getToken
} from '@Redux/utils'

import '../course.scss';

export class CoursePage extends React.Component<ICoursePage.IProps, ICoursePage.IState> {
	courseId:number = 0;

	constructor (props:ICoursePage.IProps) {
		super(props);

		this.state = {
			userModules: []
		}

	}

	componentDidMount () {
		if (!getToken()) return this.props.router.replace('/login')

		const { fetchCourseModules, getUserModules, router } = this.props as any;
		const { course } = router.query as any;

		const courseId:number = extractIdFromSlug(course)
		this.courseId = courseId

		const user = getUser();

		if (user) {
			fetchCourseModules(courseId)

			getUserModules({ userId: user.id, courseId}, (userModules:any) => {
				userModules = userModules
				.filter((userModule:any) => userModule.progression === 100)
				.map((userModule:any) => userModule.module_id)
		
				this.setState({
					userModules
				})
			})	
		}
	}

	userCanAccessModule (moduleId:any) {
		const userModules:any = this.state.userModules || [];

		return userModules.includes(moduleId - 1)
	}

	public render(): JSX.Element {
		const { courseModules, isFetchingCourseModules, router: {query} } = this.props;
		const canDisplayModules = courseModules.length > 0 && !isFetchingCourseModules;

		return (
			<div className="d-flex flex-column">
				<Head><title>My Coursemap | 1Life</title></Head>
				<Nav />
				<section className="container">
					<div className="row pb-4">
						<section className="col-md-12 mb-5">
							<div className={'d-flex align-items-center'}>
								<img src={'/static/img/cap.svg'} className={'mr-3'} width={100} />
								<h1 className={'h4 coursemap-title text-gray'}>Course Modules</h1>
							</div>
						</section>
						{isFetchingCourseModules && <LoaderScreen caption={'Fetching Modules'} />}
						{
							canDisplayModules && courseModules.map((courseModule:IModulePage.IModuleData, idx:number) => {
								const lessonsCount = courseModule.__meta__.lessons_count;
								let { id, title } = courseModule;
								const titleFrags = title.split(':');
								const moduleSlug = slugify(titleFrags[titleFrags.length - 1].trim());

								return (
									<section className="col-md-12 mb-4" key={idx}>
										<ListingsCard
											title={title}
											subtitle={`${lessonsCount} ${lessonsCount === 1 ? 'Lesson': 'Lessons'}`}
											actionBtnHref={`/courses/${(query as any).course}/${moduleSlug}-${id}`}
											actionBtnTitle={`Let's Go`}
											isActive={this.userCanAccessModule(id) || idx === 0}
										/>
									</section>
								)
							})
						}
					</div>
				</section>
			</div>
		);
	}
}

const mapStateToProps = (state: IStore) => {
	return {
		app: state.app,
		isFetchingCourseModules: CourseSelectors.getIsFetchingCourseModules(state),
		courseModules: CourseSelectors.getCourseModules(state)
	}
};

const mapDispatchToProps = (dispatch:Dispatch) => (
	{
		fetchCourseModules: bindActionCreators(CourseActions.fetchCourseModules, dispatch),
		getUserModules: bindActionCreators(AppActions.getUserModules, dispatch)
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);