import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Head from 'next/head';
import Link from 'next/link';

import { IHomePage, IStore } from '@Interfaces';
import { AppActions } from '@Actions';
import { ArrowRightIcon } from '@Components/Icons';
import { ModulesInterface } from '../roadmap/module/data';
import {
	getModulesData,
	getUser,
	getToken
} from '@Redux/utils'

import './roadmap.scss';

export class RoadmapPage extends React.Component<IHomePage.IProps, IHomePage.IState> {
	private modules:any = {};

	constructor (props:IHomePage.IProps) {
		super(props);

		this.state = {
			userModules: []
		}
	}

	componentDidMount () {
		if (!getToken()) return this.props.router.push('/login')

		const modules:ModulesInterface = getModulesData();
		this.modules = modules;
		const user = getUser();

		if (user) {
			this.props.getUserModules({
				userId: user.id
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

		return userModules.includes(moduleId - 1) || moduleId === 1
	}

	public render(): JSX.Element {
		return (
			<div className="d-flex flex-column">
				<Head>
					<title>My Roadmap | 1Life</title>
				</Head>
				<section className="container">
					<div className="row">
						<nav className={'navbar navbar-light bg-white mb-4'}>
							<span className={'navbar-brand mb-0 h1'}>
								<img className={'img'} width={50} src={'/static/img/splashLogo.webp'} alt=""/>
							</span>
						</nav>
					</div>
				</section>

				<section className="container">
					<div className="row pb-4">
						<section className="col-md-12 mb-5">
							<div className={'d-flex align-items-center'}>
								<img src={'/static/img/cap.svg'} className={'mr-3'} width={100} />
								<h1 className={'h3 roadmap-title text-gray'}>1Life Roadmap</h1>
							</div>
						</section>

						{ Object
							.keys(this.modules)
							.filter(moduleKey => moduleKey !== '__route')
							.map((moduleKey:string, idx) => {
								const moduleId:any = this.modules[moduleKey].id;

								return (this.determineModuleStatus(moduleId)) ? (
									<section className="col-md-12 mb-4" key={idx}>
										<div className={'text-center card roadmap-listing roadmap-listing--active'}>
											<section className="d-flex flex-column align-items-center">
												<span className="roadmap-listing__number font-weight-bold mb-2">
													{this.modules[moduleKey].id}
												</span>
												<h3 className={'h4 roadmap-listing__title mb-0'}>{this.modules[moduleKey].title}</h3>
												<p className="font-style-italic roadmap-listing__subtext text-gray mb-4">
													{this.modules[moduleKey].lessons ?
													Object.keys(this.modules[moduleKey].lessons).length:0} Lessons
												</p>
			
												<Link href={`/roadmap/${moduleKey}`}>
													<button className="btn btn-success roadmap-listing__btn">
														<span className={'mr-2'}>Let's Go</span>
														<ArrowRightIcon />
													</button>
												</Link>
											</section>
										</div>
									</section>
								): (
									<section className="col-md-12 mb-4" key={idx}>
										<div className={'text-center card roadmap-listing'}>
											<img src="/static/img/lock.svg" className="roadmap-listing__icon" alt=""/>
											<section className="d-flex flex-column align-items-center">
												<span className="roadmap-listing__number font-weight-bold mb-2">
												{this.modules[moduleKey].id}
												</span>
												<h3 className={'h4 roadmap-listing__title'}>{this.modules[moduleKey].title}</h3>
												<p className="font-style-italic roadmap-listing__subtext text-gray">
													{this.modules[moduleKey].lessons ?
													Object.keys(this.modules[moduleKey].lessons).length:0} Lessons
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

const mapStateToProps = (state: IStore) => state.home;

const mapDispatchToProps = (dispatch:Dispatch) => (
	{
		getUserModules: bindActionCreators(AppActions.getUserModules, dispatch)
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(RoadmapPage);