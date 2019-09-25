'use strict';

import { IStore } from '@Interfaces';
import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';

import { moduleSchema } from '@Redux/schema';
import EntitySelectors from './EntitySelectors';

const getIsFetchingCourseModuleLessonView = (state: IStore) =>
  state.module.isFetchingCourseModuleLessonView;
const getIsFetchingCourseModuleLessons = (state: IStore) =>
  state.module.isFetchingCourseModuleLessons;

const getCourseModuleLessons = (moduleId: number) =>
  createSelector(
    [EntitySelectors.getEntities],
    entities => {
      const { modules } = entities as any;
      return moduleId in modules ? modules[moduleId].lessons : [];
    }
  );

const getCourseModuleNextLesson = (moduleId: number, lessonId: number) =>
  createSelector(
    [getCourseModuleLessons(moduleId)],
    lessons => {
      const nextLesson = lessons
        ? lessons.filter((lesson: any) => lesson.id == Number(lessonId) + 1)
        : [];

      return nextLesson.length ? nextLesson[0] : {};
    }
  );

const getCourseModuleLessonsCount = (moduleId: number) =>
  createSelector(
    [EntitySelectors.getEntities],
    entities => {
      const { modules } = entities as any;
      return moduleId in modules ? modules[moduleId].lessons.length : 0;
    }
  );

export default {
  getCourseModuleLessons,
  getCourseModuleNextLesson,
  getIsFetchingCourseModuleLessons,
  getCourseModuleLessonsCount,
  getIsFetchingCourseModuleLessonView
};
