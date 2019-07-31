webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/Redux/api.ts":
/*!**************************!*\
  !*** ./src/Redux/api.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Actions */ "./src/Actions/index.ts");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/Redux/utils.ts");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/config */ "./node_modules/next/config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_3__);





var qs = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_3___default()(),
    envSpecifics = _getConfig.publicRuntimeConfig.envSpecifics;

var hostAddress = envSpecifics.api;

function prefixHostAddress(url) {
  return "".concat(hostAddress).concat(url);
}
/**
 * Creates a user http request.
 */


function createUser(user) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(prefixHostAddress('/v1/register'), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
}
/**
 * Creates an entry in the journal.
 */


function createJournalFeedback(payload) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(prefixHostAddress('/v1/feedback'), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });
}
/**
 * Fetches journal feedback
 */


function getJournalFeedback(payload) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(prefixHostAddress('/v1/feedback/getFeedback'), {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(_utils__WEBPACK_IMPORTED_MODULE_2__["getToken"]())
    },
    body: JSON.stringify(payload)
  });
}
/**
 * Updates a user module.
 */


function updateUserModule(payload) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(prefixHostAddress('/v1/modules/updateUserModule'), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(_utils__WEBPACK_IMPORTED_MODULE_2__["getToken"]())
    },
    body: JSON.stringify(payload)
  });
}
/**
 * Creates a user http request.
 */


function updateUserLesson(payload) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(prefixHostAddress("/v1/modules/updateUserLesson?".concat(qs.stringify(payload))), {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(_utils__WEBPACK_IMPORTED_MODULE_2__["getToken"]())
    }
  });
}
/**
 * Creates a user http request.
 */


function getUserLessons(payload) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(prefixHostAddress("/v1/modules/getUserLessons/".concat(qs.stringify(payload))), {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(_utils__WEBPACK_IMPORTED_MODULE_2__["getToken"]())
    }
  });
}
/**
 * Creates a user http request.
 */


function getUserModules(payload) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(prefixHostAddress('/v1/modules/getUserModules'), {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(_utils__WEBPACK_IMPORTED_MODULE_2__["getToken"]())
    },
    body: JSON.stringify(payload)
  });
}
/**
 * Fetches the lesson view for a course module
 * @param {Object} payload
 * @returns Promise<Object>
 */


function fetchCourseModuleLessonView(payload) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(prefixHostAddress('/v1/fetchModuleLessonView'), {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(_utils__WEBPACK_IMPORTED_MODULE_2__["getToken"]())
    },
    body: JSON.stringify(payload)
  });
}
/**
 * Fetches the lesson view for a course module
 * @param {Object} payload
 * @returns Promise<Object>
 */


function fetchLessonsByModuleId(payload) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(prefixHostAddress("/v1/modules/".concat(payload.moduleId)), {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(_utils__WEBPACK_IMPORTED_MODULE_2__["getToken"]())
    },
    body: JSON.stringify(payload)
  });
}
/**
 * Creates a HTTP request that fetches a collection of courses.
 * @returns Promise<Object>
 */


function fetchCourses() {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(prefixHostAddress('/v1/courses'), {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
}
/**
 * Creates a HTTP request that fetches a collection of courses.
 * @returns Promise<Object>
 */


function fetchCourseModules(courseId) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(prefixHostAddress("/v1/courses/".concat(courseId, "/modules")), {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
}
/**
 * Creates a user http request.
 */


function authenticateUser(user) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(prefixHostAddress('/v1/login'), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
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


function checkStatus(response) {
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


function setToken(response) {
  if (response.credentials) {
    localStorage.setItem('token', JSON.stringify({
      token: response.credentials.token
    }));
    localStorage.setItem('refreshToken', JSON.stringify({
      refreshToken: response.credentials.refreshToken
    }));
  }

  return response;
}
/**
 * Sets the auth user.
 * 
 * @param {Object<Response>} response
 * @return {Object<Response>}
 */


function setUser(response) {
  if (response.user) {
    localStorage.setItem('user', JSON.stringify({
      user: response.user
    }));
  }

  return response;
}
/**
 * Checks the status of a request.
 * 
 * @param {Object} response
 */


function errorHandler(dispatch, e) {
  console.log('Sorry, we encountered an error trying to process your request. Please try again.');
  dispatch(_Actions__WEBPACK_IMPORTED_MODULE_0__["AppActions"].Map({
    hasRequestError: true
  }));
}

function toText(response) {
  return response.text();
}

function toJSON(response) {
  return response.json();
}

/* harmony default export */ __webpack_exports__["default"] = ({
  authenticateUser: authenticateUser,
  createJournalFeedback: createJournalFeedback,
  getJournalFeedback: getJournalFeedback,
  createUser: createUser,
  checkStatus: checkStatus,
  errorHandler: errorHandler,
  fetchCourses: fetchCourses,
  fetchCourseModules: fetchCourseModules,
  fetchCourseModuleLessonView: fetchCourseModuleLessonView,
  fetchLessonsByModuleId: fetchLessonsByModuleId,
  getUserLessons: getUserLessons,
  getUserModules: getUserModules,
  setToken: setToken,
  setUser: setUser,
  toText: toText,
  toJSON: toJSON,
  updateUserModule: updateUserModule,
  updateUserLesson: updateUserLesson
});

/***/ })

})
//# sourceMappingURL=_app.js.a02e3d32f4c896433adf.hot-update.js.map