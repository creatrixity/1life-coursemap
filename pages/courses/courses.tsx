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
	getToken
} from '@Redux/utils'

import '../coursemap/module.scss'

export class CoursesPage extends React.Component<IHomePage.IProps, IHomePage.IState> {
	courses = {};

	constructor (props:IHomePage.IProps) {
		super(props);

		this.state = {
			userModules: []
		}
	}

	componentDidMount () {
		if (!getToken()) return this.props.router.replace('/login')

		const { coursemapModules } = this.props.app;

		this.courses = coursemapModules;
	}

	public render(): JSX.Element {
		return (
			<div className="d-flex flex-column">
				<Head>
					<title>Choose a Course | 1Life</title>
				</Head>
				<Nav />

				<section className="container">
					<div className="row pb-4">
						<section className="col-md-12 mb-5">
							<div className={'d-flex align-items-center'}>
								<img src={'/static/img/cap.svg'} className={'mr-3'} width={100} />
								<h1 className={'h3 coursemap-title text-gray'}>Choose a Course</h1>
							</div>
						</section>
						{	Object
							.keys(this.courses)
							.map((course:any, idx) => {
								return (
									<section className="col-md-12 mb-4" key={idx}>
										<div className={'text-center card coursemap-listing coursemap-listing--active'}>
											<section className="d-flex flex-column align-items-center">
												<h3 className={'h4 coursemap-listing__title mb-3'}>{this.courses[course].title}</h3>
			
												<p className="font-style-italic coursemap-listing__subtext text-gray mb-4">
													{ this.courses[course].modules && Object.keys(this.courses[course].modules).length } modules
												</p>

												<Link href={`/courses/${course}`}>
													<button className="btn btn-success coursemap-listing__btn">
														<span className={'mr-2'}>Start course</span>
														<ArrowRightIcon />
													</button>
												</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);