import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Head from 'next/head';
import Link from 'next/link';

import { IHomePage, IStore } from '@Interfaces';
import { AuthActions } from '@Actions';

import Spinner from '@Components/LoadSpinner';

import '../auth/auth.scss';

export class LoginPage extends React.Component<IHomePage.IProps, IHomePage.IState> {
	state = {
		uid: ''
	}

	constructor(props:IHomePage.IProps) {
		super(props);

		this.onLoginFormSubmit = this.onLoginFormSubmit.bind(this);
	}

	onLoginFormSubmit(e:any) {
		e.preventDefault();

		const {
			uid
		} = this.state;
		const { authenticateUser, router } = this.props;

		const password = 'default';

		authenticateUser({
			uid,
			password
		}, () => router.push('/welcome'));

	}

	public render(): JSX.Element {
		const { user } = this.props;

		return (
			<div className="d-flex flex-row align-items-center auth-screen auth-screen--login">
				<Head>
					<title>Login | 1Life Coursemap</title>
				</Head>
				<section className={'d-flex flex-column w-100 justify-content-center mb-5 py-5 px-3'}>
					<div className={'auth-screen--header text-center mb-4'}>
						<img className={'auth-screen__img img mb-4'} src={'/static/img/splashLogo.webp'} alt="1Life Logo"/>
						<h1 className={'auth-screen__title font-weight-bold mb-3 h3'}>Quick Login</h1>
					</div>
					<form onSubmit={this.onLoginFormSubmit}>
						<div className={'form-group mb-4'}>
							<label>Your E-mail</label>
							<input type={'email'} required value={this.state.uid} className={'form-control mb-2'} placeholder={'Example: john.doe@example.com'} onChange={(e:any) => this.setState({ uid: e.target.value })} />
							<button
								className={'btn btn-brand btn-block auth-screen--btn'}
								type={'submit'}
								disabled={user.isAuthenticatingUser}
							>
								{ !user.isAuthenticatingUser ? 'Login' :   <Spinner /> }
							</button>
							<p className={'text-danger my-2'}>{ user.loginErrorMessage }</p>
						</div>
						<div className={'text-center'}>
							<Link href={'/register'}>
								<a>Register now</a>							
							</Link>
						</div>
					</form>
				</section>
			</div>
		);
	}
}

const mapStateToProps = (state: IStore) => {
	return {
		user: state.user
	}
};

const mapDispatchToProps = (dispatch: Dispatch) => (
	{
		authenticateUser: bindActionCreators(AuthActions.authenticateUser, dispatch)
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);