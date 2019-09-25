import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Head from 'next/head';
import Link from 'next/link';

import { IProfilePage, IStore } from '@Interfaces';
import { HomeActions, AppActions, CourseActions } from '@Actions';

import './profile.scss';
import { StarsCast, withAuthenticated } from '@Components';
import { UserIcon } from '@Components/Icons';
import { Nav } from '@Components/Nav';
import { CourseSelectors } from '@Selectors';

export class ProfilePage extends React.Component<
  IProfilePage.IProps,
  IProfilePage.IState
> {
  constructor(props: IProfilePage.IProps) {
    super(props);

    this.state = {
      userCourseModules: {}
    };
  }

  componentDidMount() {
    this.props.fetchCourses({
      fetch: 'modules'
    });
  }

  getUserCourses(courseId: number) {
    this.props.getUserModules(
      {
        courseId
      },
      (userModules: any) => {
        this.setState(({ userCourseModules }) => ({
          userCourseModules: {
            ...userCourseModules,
            [courseId]: userModules
          }
        }));
      }
    );
  }

  computeModuleProgression({
    courseId,
    moduleId
  }: {
    courseId: number;
    moduleId: number;
  }) {
    const { userCourseModules } = this.state;

    const getProgression = () => {
      const res = userCourseModules[courseId].filter(
        (module: any) => module.module_id === moduleId
      );

      return res.length ? res[0].progression : 0;
    };

    return courseId in userCourseModules ? getProgression() : 0;
  }

  public render(): JSX.Element {
    const { coursemapModules } = this.props.app;
    const {
      courses,
      user: { authenticatedUser }
    } = this.props;

    return (
      <div className="d-flex flex-column">
        <Head>
          <title>My Profile | 1Life</title>
        </Head>
        <Nav />
        <section
          className={
            'd-flex flex-column w-100 justify-content-center mb-5 py-5 px-3'
          }
        >
          <div className={'profile-screen__header text-center mb-4'}>
            <h1
              className={
                'profile-screen__title font-weight-bold text-black-50 mb-3 h3'
              }
            >
              My Profile
            </h1>

            <section
              className={
                'profile-screen__avatar mb-3 rounded-circle d-flex justify-content-center align-items-center'
              }
            >
              <UserIcon fill={'#77B02A'} />
            </section>

            <h3 className={'text-brand h5'}>
              {authenticatedUser ? authenticatedUser.name : ''}
            </h3>
            <section className={'mb-3 d-flex flex-row justify-content-center'}>
              <StarsCast />
            </section>
          </div>

          <div className={'profile-screen__section text-center mb-4'}>
            <h1
              className={
                'profile-screen__title font-weight-bold text-black-50 mb-3 h3'
              }
            >
              Roadmap Progress
            </h1>
            <p className={'lead mb-4'}>
              Track your progress. Reflect on your progress on each module.
            </p>
          </div>

          <div className={'mx-auto col-6'}>
            {courses &&
              courses.map((course: any, i: number) => {
                return (
                  <div className={'mb-4'} key={i}>
                    <h3 className={'h5'}>{course.title}</h3>

                    <div className={''}>
                      <ul className={'list list-unstyled ml-0'}>
                        {course.modules.map((module: any, k: number) => {
                          return (
                            <li key={k} className={'mb-2'}>
                              <section className={'d-flex'}>
                                <Link href={'/home'}>
                                  <a className={'w-75 mr-2 text-brand'}>
                                    {module.title}
                                  </a>
                                </Link>

                                <div
                                  className={'w-20 d-flex align-items-center'}
                                >
                                  <StarsCast progression={50} />
                                </div>
                              </section>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
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
    user: state.user,
    courses: CourseSelectors.getCourses(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCourses: bindActionCreators(CourseActions.fetchCourses, dispatch),
  getUserModules: bindActionCreators(AppActions.getUserModules, dispatch),
  Map: bindActionCreators(HomeActions.Map, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthenticated(ProfilePage));
