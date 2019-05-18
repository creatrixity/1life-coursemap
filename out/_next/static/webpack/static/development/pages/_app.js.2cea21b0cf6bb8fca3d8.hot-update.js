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
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(prefixHostAddress('/v1/modules/updateUserLesson'), {
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


function getUserLessons(payload) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(prefixHostAddress('/v1/modules/getUserLessons'), {
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
 * Fetches Roadmap Data
 */


function fetchCoursemapModule(payload) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(prefixHostAddress('/v1/getModuleData'), {
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
  fetchCoursemapModule: fetchCoursemapModule,
  getUserLessons: getUserLessons,
  getUserModules: getUserModules,
  setToken: setToken,
  setUser: setUser,
  toJSON: toJSON,
  updateUserModule: updateUserModule,
  updateUserLesson: updateUserLesson
});

/***/ })

})
//# sourceMappingURL=_app.js.2cea21b0cf6bb8fca3d8.hot-update.js.map