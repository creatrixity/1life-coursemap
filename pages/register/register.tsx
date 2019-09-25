import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Head from 'next/head';
import Link from 'next/link';

import { IHomePage, IStore } from '@Interfaces';
import { AuthActions } from '@Actions';
import Spinner from '@Components/LoadSpinner';

import '../auth/auth.scss';

export class RegisterPage extends React.Component<
  IHomePage.IProps,
  IHomePage.IState
> {
  state = {
    name: '',
    email: ''
  };

  constructor(props: IHomePage.IProps) {
    super(props);

    this.onRegisterFormSubmit = this.onRegisterFormSubmit.bind(this);
  }

  onRegisterFormSubmit(e: any) {
    const { email, name } = this.state;
    const { createUser, router } = this.props;

    const password = 'default';

    createUser(
      {
        email,
        name,
        password,
        password_confirmation: password
      },
      () => router.push('/welcome')
    );

    e.preventDefault();
  }

  public render(): JSX.Element {
    const { user } = this.props;

    return (
      <div className="d-flex flex-row align-items-center auth-screen auth-screen--login">
        <Head>
          <title>Register | 1Life Coursemap</title>
        </Head>
        <div className={'w-100 justify-content-center d-flex'}>
          <section
            className={
              'w-100 justify-content-center mb-5 py-5 px-3 col-xs-12 col-md-5'
            }
          >
            <div className={'auth-screen--header text-center mb-4'}>
              <img
                className={'auth-screen__img img mb-4'}
                src={'/static/img/splashLogo.webp'}
                alt="1Life Logo"
              />
              <h1 className={'auth-screen__title font-weight-bold mb-3 h3'}>
                Register
              </h1>
            </div>
            <form onSubmit={this.onRegisterFormSubmit}>
              <div className={'form-group mb-4'}>
                <label>Full name</label>
                <input
                  type={'text'}
                  required
                  value={this.state.name}
                  className={'form-control mb-2'}
                  onChange={e => this.setState({ name: e.target.value })}
                />
              </div>

              <div className={'form-group mb-4'}>
                <label>Your E-mail</label>
                <input
                  type={'email'}
                  required
                  value={this.state.email}
                  className={'form-control mb-2'}
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </div>

              <div className={'form-group mb-4'}>
                <button
                  className={'btn btn-brand btn-block auth-screen--btn'}
                  disabled={user.isCreatingUser}
                  type={'submit'}
                >
                  {!user.isCreatingUser ? 'Create account' : <Spinner />}
                </button>
                <p className={'text-danger my-2'}>
                  {user.registrationErrorMessage}
                </p>
              </div>

              <div className={'text-center'}>
                <span className={'mr-1'}>Already have an account?</span>
                <Link href={'/login'}>
                  <a>Login now</a>
                </Link>
              </div>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IStore) => {
  return {
    user: state.user,
    home: state.home
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createUser: bindActionCreators(AuthActions.createUser, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage);
