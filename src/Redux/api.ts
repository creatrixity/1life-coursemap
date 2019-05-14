import { Dispatch } from 'redux';
import { AppActions } from '@Actions';
import fetch from 'isomorphic-fetch';
import * as utils from './utils'
import getConfig from 'next/config';

const { publicRuntimeConfig: { envSpecifics } } = getConfig();

const hostAddress = envSpecifics.api;

function prefixHostAddress (url:string) {
  return `${hostAddress}${url}`;
}

/**
 * Creates a user http request.
 */
function createUser (user:Object) {
  return fetch(prefixHostAddress('/v1/register'), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
}

/**
 * Creates an entry in the journal.
 */
function createJournalFeedback (payload:Object) {
  return fetch(prefixHostAddress('/v1/feedback'), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
}

/**
 * Fetches journal feedback
 */
function getJournalFeedback (payload:Object) {
  return fetch(prefixHostAddress('/v1/feedback/getFeedback'), {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${utils.getToken()}`
    },
    body: JSON.stringify(payload)
  })
}

/**
 * Updates a user module.
 */
function updateUserModule (payload:Object) {
  return fetch(prefixHostAddress('/v1/modules/updateUserModule'), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${utils.getToken()}`
    },
    body: JSON.stringify(payload)
  })
}

/**
 * Creates a user http request.
 */
function updateUserLesson (payload:Object) {
  return fetch(prefixHostAddress('/v1/modules/updateUserLesson'), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${utils.getToken()}`
    },
    body: JSON.stringify(payload)
  })
}

/**
 * Creates a user http request.
 */
function getUserLessons (payload:Object) {
  return fetch(prefixHostAddress('/v1/modules/getUserLessons'), {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${utils.getToken()}`
    },
    body: JSON.stringify(payload)
  })
}

/**
 * Creates a user http request.
 */
function getUserModules (payload:Object) {
  return fetch(prefixHostAddress('/v1/modules/getUserModules'), {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${utils.getToken()}`
    },
    body: JSON.stringify(payload)
  })
}

/**
 * Fetches Roadmap Data
 */
function fetchCoursemapModule (payload:Object) {
  return fetch(prefixHostAddress('/v1/getModuleData'), {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${utils.getToken()}`
    },
    body: JSON.stringify(payload)
  })
}

/**
 * Creates a user http request.
 */
function authenticateUser (user:Object) {
  return fetch(prefixHostAddress('/v1/login'), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
}

/**
 * Checks the status of a request.
 * 
 * @param {Object} response
 */
function checkStatus (response:any) {
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
function setToken (response:any) {
  if (response.credentials) {
    localStorage.setItem('token', JSON.stringify({ token: response.credentials.token }));
    localStorage.setItem('refreshToken', JSON.stringify({ refreshToken: response.credentials.refreshToken }));
  }

  return response;
}

/**
 * Sets the auth user.
 * 
 * @param {Object<Response>} response
 * @return {Object<Response>}
 */
function setUser (response:any) {
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
function errorHandler (dispatch:Dispatch, e:any) {
  alert('Sorry, we encountered an error trying to process your request. Please try again.');

  dispatch(AppActions.Map({
    hasRequestError: true
  }))
}

function toJSON(response:any) {
  return response.json();
}

export default {
  authenticateUser,
  createJournalFeedback,
  getJournalFeedback,
  createUser,
  checkStatus,
  errorHandler,
  fetchCoursemapModule,
  getUserLessons,
  getUserModules,
  setToken,
  setUser,
  toJSON,
  updateUserModule,
  updateUserLesson,
}