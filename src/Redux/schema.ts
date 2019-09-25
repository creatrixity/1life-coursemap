'use strict';

import { schema } from 'normalizr';

export const courseSchema = new schema.Entity('courses');

export const moduleSchema = new schema.Entity('modules');
export const lessonSchema = new schema.Entity('lessons');

export const feedbackSchema = new schema.Entity(
  'feedback',
  {},
  {
    idAttribute: 'serial_id'
  }
);
