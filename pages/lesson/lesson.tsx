import * as React from 'react';
import { connect } from 'react-redux';
import convert from 'htmr';

import { bindActionCreators, Dispatch } from 'redux';
import Head from 'next/head';
import Link from 'next/link';
import { AppActions, LessonActions, ModuleActions } from '@Actions';

import {
  Header,
  StarsCast,
  LoaderScreen,
  JournalInput,
  withAuthenticated
} from '@Components';
import { ToolIcon, PlayIcon } from '@Components/Icons';
import Spinner from '@Components/LoadSpinner';
import { ILessonPage, IStore } from '@Interfaces';
import { LessonSelectors, ModuleSelectors } from '@Selectors';

import ReactPlayer from 'react-player';

import '../module/module.scss';
import './lesson.css';
import {
  computeModulesProgression,
  extractIdFromSlug,
  extractSlugFromString
} from '@Helpers';

export class LessonPage extends React.Component<
  ILessonPage.IProps,
  ILessonPage.IState
> {
  private courseId: any = null;
  private moduleId: any = null;
  private lessonId: any = null;
  private moduleTitle: any = null;

  constructor(props: ILessonPage.IProps) {
    super(props);

    this.state = {
      moduleProgression: 0,
      ratingCumulative: 0,
      lessonView: '<div></div>'
    };

    this.handleSaveJournalInput = this.handleSaveJournalInput.bind(this);
  }

  refreshFeedback({ courseId, moduleId, lessonId }: any) {
    (this.props as any).getJournalFeedback(
      {
        course_id: courseId,
        module_id: moduleId,
        lesson_id: lessonId
      },
      (feedback: any) => {
        let feedbackData = feedback[courseId][moduleId][lessonId];

        let feedbackDataKeys = Object.keys(feedbackData).filter((key: any) => {
          return feedbackData[key].type === 'rating';
        });

        const ratingCumulative = feedbackDataKeys.reduce(
          (previousValue: any, currentValue: any, currentIndex: any) => {
            return (
              parseInt(previousValue) +
              parseInt(feedbackData[feedbackDataKeys[currentIndex]].answer)
            );
          },
          0
        );

        this.setState({
          ratingCumulative
        });
      }
    );
  }

  renderModuleCardLink({
    icon,
    title
  }: {
    icon: any;
    title: string;
  }): JSX.Element {
    const Icon = icon;

    return (
      <div className={'card d-flex flex-row module__link-card'}>
        <section
          className={
            'module__link-card__preview d-flex justify-content-center align-items-center'
          }
        >
          <Icon />
        </section>
        <section className={'px-3 py-4 module__link-card__content'}>
          <h5 className={'h6 module__link-card__title'}>{title}</h5>
        </section>
      </div>
    );
  }

  public renderUpcomingLinks(): JSX.Element {
    const { getCourseModuleNextLesson, router } = this.props as any;
    const {
      query: { course, module }
    } = router as any;

    const nextLesson = getCourseModuleNextLesson(this.moduleId, this.lessonId);
    const hasValidNextLesson = Object.keys(nextLesson).length > 0;
    const nextLessonTitle = hasValidNextLesson && nextLesson.title;
    const nextLessonType = hasValidNextLesson && nextLesson.type;
    const nextLessonId = hasValidNextLesson && nextLesson.id;

    return (
      <section>
        {hasValidNextLesson ? (
          <div className={'mb-5'}>
            <h4 className={'h5'}>You've Completed This Lesson</h4>
            <h5 className={'h6 mb-3 text-black-50'}>
              Let's move on to the next one.
            </h5>

            <Link
              href={`/lesson?course=${course}&module=${module}&lesson=lesson-${nextLessonId}`}
              as={`/lesson/${course}/${module}/lesson-${nextLessonId}`}
            >
              <a>
                {this.renderModuleCardLink({
                  icon: nextLessonType === 'lesson' ? PlayIcon : ToolIcon,
                  title: nextLessonTitle
                })}
              </a>
            </Link>
          </div>
        ) : (
          <div className={'mb-5'}>
            <h4 className={'h5 text-brand'}>
              Great! You've finished this module!
            </h4>

            {
              <>
                <h5 className={'h6 mb-3 text-black-50'}>
                  Whoohoo! You have finished this module.
                </h5>
                <Link
                  prefetch
                  as={`/course/${course}`}
                  href={`/course?course=${course}`}
                >
                  <a>
                    {this.renderModuleCardLink({
                      icon: PlayIcon,
                      title: 'See all modules'
                    })}
                  </a>
                </Link>
              </>
            }
          </div>
        )}
      </section>
    );
  }

  handleSaveJournalInput(
    {
      question,
      type,
      value,
      tag
    }: { value: string; question: string; tag: number; type: string },
    callback: () => any
  ) {
    (this.props as any).createJournalFeedback(
      {
        question,
        answer: value,
        type,
        course_id: this.courseId,
        module_id: this.moduleId,
        lesson_id: this.lessonId,
        feedback_id: tag
      },
      () => {
        this.refreshFeedback({
          courseId: this.courseId,
          moduleId: this.moduleId,
          lessonId: this.lessonId
        });
      }
    );
  }

  async handleComponentMount() {
    const {
      router,
      fetchLessonView,
      updateUserLesson,
      fetchCourseModuleLessons
    } = this.props as any;

    const { course, lesson, module } = router.query as any;

    const courseId = parseInt(extractIdFromSlug(course));
    const moduleId = parseInt(extractIdFromSlug(module));
    const lessonId = parseInt(extractIdFromSlug(lesson));
    const courseSlug = extractSlugFromString(course);
    const moduleSlug = extractSlugFromString(module);

    this.courseId = courseId;
    this.moduleId = moduleId;
    this.lessonId = lessonId;

    fetchLessonView({ courseSlug, moduleSlug, lessonId }, (lessonView: any) => {
      fetchCourseModuleLessons({ moduleId });
      this.setState({ lessonView });
    });

    updateUserLesson(
      {
        courseId,
        moduleId,
        lessonId,
        progression: 100
      },
      async ({ userLessons, moduleLessonsCount }: any) => {
        const moduleProgression = computeModulesProgression(
          userLessons,
          moduleLessonsCount
        );

        this.setState({ moduleProgression });
      }
    );

    this.refreshFeedback({
      courseId,
      moduleId,
      lessonId
    });
  }

  componentDidMount() {
    this.handleComponentMount();

    // HACK: Work around Next.js router failings
    this.props.router.events.on('routeChangeComplete', (url: string) => {
      url.startsWith('/lesson') && this.handleComponentMount();
    });
  }

  componentWillUnmount() {
    this.handleSaveJournalInput = () => {};
  }

  public render(): JSX.Element {
    const {
      app,
      isFetchingLessonView,
      router: { query }
    } = this.props;
    const { coursemapModulesFeedback } = app;
    const hasModulesFeedback = Object.keys(coursemapModulesFeedback).length;

    let journalInputValue =
      hasModulesFeedback && this.lessonId
        ? coursemapModulesFeedback[this.courseId][this.moduleId][this.lessonId]
        : '';

    const content = convert(this.state.lessonView, {
      transform: {
        reactplayer: (props: any) => (
          <ReactPlayer url={props.url} width={'100%'} light playing />
        ),
        ratingfeedback: (props: any) => {
          const { displaythreshold } = props;
          const { ratingCumulative = 0 } = this.state;
          const [rangeStart, rangeEnd] = displaythreshold.split(':');
          const isCumulativeWithinBounds =
            ratingCumulative &&
            ratingCumulative >= parseInt(rangeStart) &&
            ratingCumulative <= parseInt(rangeEnd);

          return isCumulativeWithinBounds ? props.children : null;
        },
        journalinput: (props: any) => {
          const tag = parseInt(props.tag);
          const value =
            journalInputValue && tag in journalInputValue
              ? journalInputValue[tag].answer
              : '';

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
          );
        }
      }
    });

    const { course, module } = query as any;

    return (
      <div
        className="d-flex flex-column module"
        style={{ paddingTop: '100px' }}
      >
        <Head>
          <title>
            Lesson {this.lessonId} | Module: {this.moduleTitle}
          </title>
        </Head>

        <Header
          backlinkHref={{
            link: `/module?course=${course}&module=${module}`,
            as: `/module/${course}/${module}`
          }}
          title={`Lesson`}
        >
          {!this.props.app.isUpdatingUserLesson ? (
            <StarsCast progression={this.state.moduleProgression || 0} />
          ) : (
            <Spinner width={'25px'} height={'25px'} />
          )}
        </Header>

        <section>
          <div>
            {isFetchingLessonView ? (
              <LoaderScreen caption={'Fetching content...'} />
            ) : (
              <>
                <section className={'mb-5 container'}>{content}</section>
                <section className={'container'}>
                  {this.renderUpcomingLinks()}
                </section>
              </>
            )}
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state: IStore) => {
  return {
    app: state.app,
    isFetchingLessonView: LessonSelectors.getIsFetchingLessonView(state),
    getCourseModuleLessons: (id: number) =>
      ModuleSelectors.getCourseModuleLessons(id)(state),
    getCourseModuleLessonsCount: (id: number) =>
      ModuleSelectors.getCourseModuleLessonsCount(id)(state),
    getCourseModuleNextLesson: (moduleId: number, lessonId: number) =>
      ModuleSelectors.getCourseModuleNextLesson(moduleId, lessonId)(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCourseModuleLessons: bindActionCreators(
    ModuleActions.fetchCourseModuleLessons,
    dispatch
  ),
  updateUserLesson: bindActionCreators(AppActions.updateUserLesson, dispatch),
  fetchLessonView: bindActionCreators(LessonActions.fetchLessonView, dispatch),
  createJournalFeedback: bindActionCreators(
    AppActions.createJournalFeedback,
    dispatch
  ),
  getJournalFeedback: bindActionCreators(
    AppActions.getJournalFeedback,
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthenticated(LessonPage));
