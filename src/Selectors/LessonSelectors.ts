'use strict';

import { IStore } from '@Interfaces';

const getIsFetchingLessonView = (state:IStore) => state.lesson.isFetchingLessonView

export default {
  getIsFetchingLessonView
}