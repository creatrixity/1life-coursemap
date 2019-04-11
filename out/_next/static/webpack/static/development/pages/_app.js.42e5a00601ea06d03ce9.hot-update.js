webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/Actions/AppActions.ts":
/*!***********************************!*\
  !*** ./src/Actions/AppActions.ts ***!
  \***********************************/
/*! exports provided: AppActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppActions", function() { return AppActions; });
/* harmony import */ var _Definations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Definations */ "./src/Definations/index.ts");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }


/**
 * ACTIONS
*/

var AppActions = {
  Map: function Map(payload) {
    return {
      payload: payload,
      type: _Definations__WEBPACK_IMPORTED_MODULE_0__["ActionConsts"].App.SetReducer
    };
  },
  Reset: function Reset() {
    return {
      type: _Definations__WEBPACK_IMPORTED_MODULE_0__["ActionConsts"].App.ResetReducer
    };
  },
  updateUserLesson: function updateUserLesson(payload, callback) {
    return function (dispatch, _ref, api) {
      _objectDestructuringEmpty(_ref);

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
    return function (dispatch, _ref2, api) {
      _objectDestructuringEmpty(_ref2);

      return api.getUserLessons(payload).then(api.checkStatus).then(api.toJSON).then(function (response) {
        return callback(response);
      }).catch(function () {
        return api.errorHandler(dispatch);
      });
    };
  },
  getUserModules: function getUserModules(payload, callback) {
    return function (dispatch, _ref3, api) {
      _objectDestructuringEmpty(_ref3);

      return api.getUserModules(payload).then(api.checkStatus).then(api.toJSON).then(function (response) {
        return callback(response);
      }).catch(function () {
        return api.errorHandler(dispatch);
      });
    };
  },
  fetchRoadmapModule: function fetchRoadmapModule(payload, roadmapModulesContent) {
    var module = payload.module,
        id = payload.id;
    return function (dispatch, _ref4, api) {
      _objectDestructuringEmpty(_ref4);

      dispatch(AppActions.Map({
        isFetchingRoadmapModule: true
      }));
      return api.fetchRoadmapModule(payload).then(api.checkStatus).then(api.toJSON).then(function (response) {
        console.log(response);

        var newRoadmapModule = _defineProperty({}, module, {
          content: response
        });

        if (id) {
          newRoadmapModule = _defineProperty({}, module, _objectSpread({}, roadmapModulesContent[module], _defineProperty({}, id, {
            content: response
          })));
        }

        dispatch(AppActions.Map({
          isFetchingRoadmapModule: false,
          roadmapModulesContent: _objectSpread({}, roadmapModulesContent, {
            newRoadmapModule: newRoadmapModule
          })
        }));
      }).catch(function () {
        return api.errorHandler(dispatch);
      });
    };
  }
};

/***/ })

})
//# sourceMappingURL=_app.js.42e5a00601ea06d03ce9.hot-update.js.map