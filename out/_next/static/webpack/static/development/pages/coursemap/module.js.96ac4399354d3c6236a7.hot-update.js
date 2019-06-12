webpackHotUpdate("static\\development\\pages\\coursemap\\module.js",{

/***/ "./src/Actions/AppActions.ts":
/*!***********************************!*\
  !*** ./src/Actions/AppActions.ts ***!
  \***********************************/
/*! exports provided: AppActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppActions", function() { return AppActions; });
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalizr */ "./node_modules/normalizr/dist/normalizr.es.js");
/* harmony import */ var _Definations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Definations */ "./src/Definations/index.ts");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }



var feedbackSchema = new normalizr__WEBPACK_IMPORTED_MODULE_0__["schema"].Entity('feedback', {}, {
  idAttribute: 'feedback_id'
});
/**
 * ACTIONS
*/

var AppActions = {
  Map: function Map(payload) {
    return {
      payload: payload,
      type: _Definations__WEBPACK_IMPORTED_MODULE_1__["ActionConsts"].App.SetReducer
    };
  },
  Reset: function Reset() {
    return {
      type: _Definations__WEBPACK_IMPORTED_MODULE_1__["ActionConsts"].App.ResetReducer
    };
  },
  createJournalFeedback: function createJournalFeedback(payload, callback) {
    return function (dispatch, _ref, api) {
      _objectDestructuringEmpty(_ref);

      return api.createJournalFeedback(payload).then(api.checkStatus).then(api.toJSON).then(function (response) {
        return callback(response);
      }).catch(function () {
        return api.errorHandler(dispatch);
      });
    };
  },
  getJournalFeedback: function getJournalFeedback(payload, callback) {
    var course_id = payload.course_id,
        module_id = payload.module_id,
        lesson_id = payload.lesson_id;
    return function (dispatch, getState, api) {
      return api.getJournalFeedback(payload).then(api.checkStatus).then(api.toJSON).then(function (response) {
        var _normalize = Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["normalize"])(response, [feedbackSchema]),
            feedback = _normalize.entities.feedback;

        var newCoursemapModuleFeedback = _defineProperty({}, course_id, _defineProperty({}, module_id, _defineProperty({}, lesson_id, feedback)));

        dispatch(AppActions.Map({
          coursemapModulesFeedback: _objectSpread({}, getState().app.coursemapModulesFeedback, newCoursemapModuleFeedback)
        }));
        callback();
      }).catch(function () {
        return api.errorHandler(dispatch);
      });
    };
  },
  updateUserLesson: function updateUserLesson(payload, callback) {
    return function (dispatch, _ref2, api) {
      _objectDestructuringEmpty(_ref2);

      dispatch(AppActions.Map({
        isUpdatingUserLesson: true
      }));
      return api.updateUserLesson(payload).then(api.checkStatus).then(api.toJSON).then(function (response) {
        dispatch(AppActions.Map({
          isUpdatingUserLesson: false
        }));
        return callback(response);
      }).catch(function () {
        return api.errorHandler(dispatch);
      });
    };
  },
  getUserLessons: function getUserLessons(payload, callback) {
    return function (dispatch, _ref3, api) {
      _objectDestructuringEmpty(_ref3);

      return api.getUserLessons(payload).then(api.checkStatus).then(api.toJSON).then(function (response) {
        return callback(response);
      }).catch(function () {
        return api.errorHandler(dispatch);
      });
    };
  },
  getUserModules: function getUserModules(payload, callback) {
    return function (dispatch, _ref4, api) {
      _objectDestructuringEmpty(_ref4);

      return api.getUserModules(payload).then(api.checkStatus).then(api.toJSON).then(function (response) {
        return callback(response);
      }).catch(function () {
        return api.errorHandler(dispatch);
      });
    };
  },
  fetchCoursemapModule: function fetchCoursemapModule(payload, coursemapModulesContent) {
    var module = payload.module,
        id = payload.id,
        course = payload.course;
    return function (dispatch, _ref5, api) {
      _objectDestructuringEmpty(_ref5);

      dispatch(AppActions.Map({
        isFetchingCoursemapModule: true
      }));
      return api.fetchCoursemapModule(payload).then(api.checkStatus).then(function (response) {
        return response.text();
      }).then(function (response) {
        var newCoursemapModule = _defineProperty({}, course, _defineProperty({}, module, {
          content: response
        }));

        if (id) {
          newCoursemapModule = _defineProperty({}, course, _defineProperty({}, module, _objectSpread({}, coursemapModulesContent[module], _defineProperty({}, id, {
            content: response
          }))));
        }

        dispatch(AppActions.Map({
          isFetchingCoursemapModule: false,
          coursemapModulesContent: _objectSpread({}, coursemapModulesContent, newCoursemapModule)
        }));
      });
    };
  }
};

/***/ })

})
//# sourceMappingURL=module.js.96ac4399354d3c6236a7.hot-update.js.map