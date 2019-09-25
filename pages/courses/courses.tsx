import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Head from 'next/head';

import { ICoursePage, IStore } from '@Interfaces';
import { CourseSelectors } from '@Selectors';
import { slugify } from '@Helpers';
import { CourseActions } from '@Actions';
import { ListingsCard, LoaderScreen, withAuthenticated } from '@Components';
import { Nav } from '@Components/Nav';

import '../course/course.scss';

export class CoursesPage extends React.Component<
  ICoursePage.IProps,
  ICoursePage.IState
> {
  courses = {};

  constructor(props: ICoursePage.IProps) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { fetchCourses } = this.props as any;
    fetchCourses();
  }

  public render(): JSX.Element {
    const { isFetchingCourses, courses } = this.props;

    return (
      <div className="d-flex flex-column">
        <Head>
          <title>Choose a Course | 1Life</title>
        </Head>
        <Nav />

        <section className="container">
          <div className="row pb-4">
            <section className="col-md-12 mb-5">
              <div
                className={`d-flex align-items-center ${isFetchingCourses &&
                  'invisible'}`}
              >
                <img
                  src={'/static/img/cap.svg'}
                  className={'mr-3'}
                  width={100}
                />
                <h1 className={'h3 coursemap-title text-gray'}>
                  Choose a Course
                </h1>
              </div>
            </section>

            {isFetchingCourses && <LoaderScreen caption={'Fetching Courses'} />}
            {!isFetchingCourses &&
              courses.length &&
              courses.map((course: ICoursePage.ICourseData, idx: number) => {
                const {
                  id,
                  title,
                  __meta__: { modules_count }
                } = course;
                return (
                  <section className="col-md-12 mb-4" key={idx}>
                    {this.renderCourseItem(id, title, modules_count)}
                  </section>
                );
              })}
          </div>
        </section>
      </div>
    );
  }

  renderCourseItem(id: number, title: string, modulesCount: number) {
    return (
      <ListingsCard
        actionBtnHref={{
          link: `/course?course=${slugify(title)}-${id}`,
          as: `/course/${slugify(title)}-${id}`
        }}
        actionBtnTitle={'Start course'}
        title={title}
        subtitle={`${modulesCount} modules`}
        isActive
      />
    );
  }
}

const mapStateToProps = (state: IStore) => {
  return {
    app: state.app,
    isFetchingCourses: CourseSelectors.getIsFetchingCourses(state),
    courses: CourseSelectors.getCourses(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCourses: bindActionCreators(CourseActions.fetchCourses, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthenticated(CoursesPage));
