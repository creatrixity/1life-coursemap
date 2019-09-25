import { Dispatch } from 'redux';

export interface IApi {
  authenticateUser: (user: Object) => Promise<any>;
  createJournalFeedback: (payload: Object) => Promise<any>;
  getJournalFeedback: () => Promise<any>;
  createUser: (user: Object) => Promise<any>;
  checkStatus: (response: any) => Promise<any>;
  errorHandler: (dispatch: Dispatch, e?: any) => void;
  fetchCourses: (payload?: any) => Promise<any>;
  fetchCourseModules: (courseId: number) => Promise<any>;
  fetchCoursemapModule: (response: any) => Promise<any>;
  fetchCourseModuleLessonView: (payload: {
    courseSlug: String;
    moduleSlug: String;
    lessonId: any;
  }) => Promise<any>;
  fetchLessonsByModuleId: (payload: any) => Promise<any>;
  getUserLessons: () => Promise<any>;
  getUserModules: () => Promise<any>;
  setToken: (token: any) => void;
  setUser: (user: any) => void;
  toText: (response: any) => Promise<any>;
  toJSON: (response: any) => Promise<any>;
  updateUserModule: (payload: any) => Promise<any>;
  updateUserLesson: (payload: any) => Promise<any>;
}
