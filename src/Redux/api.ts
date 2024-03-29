import { Dispatch } from 'redux';
import { AppActions } from '@Actions';
import fetch from 'isomorphic-fetch';
import * as utils from './utils';
import getConfig from 'next/config';
const qs = require('query-string');

const {
  publicRuntimeConfig: { envSpecifics }
} = getConfig();

const hostAddress = envSpecifics.api;

function prefixHostAddress(url: string) {
  return `${hostAddress}/api${url}`;
}

/**
 * Creates a user http request.
 */
function createUser(user: Object) {
  return fetch(prefixHostAddress('/v1/register'), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
}

/**
 * Creates a user http request.
 */
function getAuthenticatedUser() {
  return fetch(prefixHostAddress('/v1/getAuthenticatedUser'), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${utils.getToken()}`
    }
  });
}

/**
 * Creates an entry in the journal.
 */
function createJournalFeedback(payload: Object) {
  return fetch(prefixHostAddress('/v1/feedback'), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });
}

/**
 * Fetches journal feedback
 */
function getJournalFeedback(payload: Object) {
  return fetch(
    prefixHostAddress(`/v1/feedback/getFeedback?${qs.stringify(payload)}`),
    {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${utils.getToken()}`
      }
    }
  );
}

/**
 * Updates a user module.
 */
function updateUserModule(payload: Object) {
  return fetch(prefixHostAddress('/v1/modules/updateUserModule'), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${utils.getToken()}`
    },
    body: JSON.stringify(payload)
  });
}

/**
 * Creates a user http request.
 */
function updateUserLesson(payload: Object) {
  return fetch(prefixHostAddress(`/v1/lessons/updateUserLesson`), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${utils.getToken()}`
    },
    body: JSON.stringify(payload)
  });
}

/**
 * Creates a user http request.
 */
function getUserLessons(payload: Object) {
  return fetch(
    prefixHostAddress(`/v1/lessons/getUserLessons?${qs.stringify(payload)}`),
    {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${utils.getToken()}`
      }
    }
  );
}

/**
 * Creates a user http request.
 */
function getUserModules(payload: Object) {
  return fetch(
    prefixHostAddress(`/v1/modules/getUserModules/?${qs.stringify(payload)}`),
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${utils.getToken()}`
      }
    }
  );
}

/**
 * Fetches the lesson view for a course module
 * @param {Object} payload
 * @returns Promise<Object>
 */
function fetchCourseModuleLessonView(payload: Object) {
  return fetch(
    prefixHostAddress(`/v1/fetchModuleLessonView/?${qs.stringify(payload)}`),
    {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${utils.getToken()}`
      }
    }
  );
}

/**
 * Fetches the lesson view for a course module
 * @param {Object} payload
 * @returns Promise<Object>
 */
function fetchLessonsByModuleId(payload: any) {
  return fetch(
    prefixHostAddress(
      `/v1/modules/${payload.moduleId}/?${qs.stringify(payload)}`
    ),
    {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${utils.getToken()}`
      }
    }
  );
}

/**
 * Creates a HTTP request that fetches a collection of courses.
 * @returns Promise<Object>
 */
function fetchCourses(payload?: any) {
  return fetch(prefixHostAddress(`/v1/courses?${qs.stringify(payload)}`), {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
}

/**
 * Creates a HTTP request that fetches a collection of courses.
 * @returns Promise<Object>
 */
function fetchCourseModules(courseId: number) {
  return fetch(prefixHostAddress(`/v1/courses/${courseId}/modules`), {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
}

/**
 * Creates a user http request.
 */
function authenticateUser(user: Object) {
  return fetch(prefixHostAddress('/v1/login'), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
}

/**
 * Checks the status of a request.
 *
 * @param {Object} response
 */
function checkStatus(response: any) {
  if (response.status >= 200 && response.status < 401) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(response);
  }
}

/**
 * Sets an auth token.
 *
 * @param {Object<Response>} response
 * @return {Object<Response>}
 */
function setToken(response: any) {
  if (response.credentials) {
    localStorage.setItem(
      'token',
      JSON.stringify({ token: response.credentials.token })
    );
    localStorage.setItem(
      'refreshToken',
      JSON.stringify({ refreshToken: response.credentials.refreshToken })
    );
  }

  return response;
}

/**
 * Sets the auth user.
 *
 * @param {Object<Response>} response
 * @return {Object<Response>}
 */
function setUser(response: any) {
  if (response.user) {
    localStorage.setItem('user', JSON.stringify({ user: response.user }));
  }

  return response;
}

/**
 * Checks the status of a request.
 *
 * @param {Object} response
 */
function errorHandler(dispatch: Dispatch, e: any) {
  console.log(
    'Sorry, we encountered an error trying to process your request. Please try again.',
    `Error: ${JSON.stringify(e)}`
  );

  dispatch(
    AppActions.Map({
      hasRequestError: true
    })
  );
}

const toText = (response: any) => response.text();
const toJSON = (response: any) => response.json();

export default {
  authenticateUser,
  createJournalFeedback,
  getJournalFeedback,
  createUser,
  checkStatus,
  errorHandler,
  fetchCourses,
  fetchCourseModules,
  fetchCourseModuleLessonView,
  fetchLessonsByModuleId,
  getAuthenticatedUser,
  getUserLessons,
  getUserModules,
  setToken,
  setUser,
  toText,
  toJSON,
  updateUserModule,
  updateUserLesson
};
