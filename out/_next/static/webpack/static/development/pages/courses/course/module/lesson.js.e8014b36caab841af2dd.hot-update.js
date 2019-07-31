webpackHotUpdate("static\\development\\pages\\courses\\course\\module\\lesson.js",{

/***/ "./src/Actions/ModuleActions.ts":
/*!**************************************!*\
  !*** ./src/Actions/ModuleActions.ts ***!
  \**************************************/
/*! exports provided: ModuleActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleActions", function() { return ModuleActions; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! normalizr */ "./node_modules/normalizr/dist/normalizr.es.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ */ "./src/Actions/index.ts");
/* harmony import */ var _Definations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Definations */ "./src/Definations/index.ts");
/* harmony import */ var _Redux_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Redux/schema */ "./src/Redux/schema.ts");




function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






/**
 * ACTIONS
*/
var ModuleActions = {
  Map: function Map(payload) {
    return {
      payload: payload,
      type: _Definations__WEBPACK_IMPORTED_MODULE_3__["ActionConsts"].Module.SetReducer
    };
  },
  Reset: function Reset() {
    return {
      type: _Definations__WEBPACK_IMPORTED_MODULE_3__["ActionConsts"].Module.ResetReducer
    };
  },
  fetchModuleLessons: function fetchModuleLessons(moduleId, courseId) {
    return (
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch, _ref, api) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _objectDestructuringEmpty(_ref);

                  dispatch(ModuleActions.Map({
                    isFetchingCourseModules: true
                  }));
                  api.fetchCourseModules(courseId).then(api.checkStatus).then(api.toJSON).then(
                  /*#__PURE__*/
                  function () {
                    var _ref3 = _asyncToGenerator(
                    /*#__PURE__*/
                    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(response) {
                      var _normalize, modules;

                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _normalize = Object(normalizr__WEBPACK_IMPORTED_MODULE_1__["normalize"])(response, [_Redux_schema__WEBPACK_IMPORTED_MODULE_4__["moduleSchema"]]), modules = _normalize.entities.modules;
                              dispatch(___WEBPACK_IMPORTED_MODULE_2__["EntityActions"].Map({
                                modules: modules
                              }));
                              dispatch(ModuleActions.Map({
                                isFetchingModules: false
                              }));

                            case 3:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee, this);
                    }));

                    return function (_x4) {
                      return _ref3.apply(this, arguments);
                    };
                  }()).catch(function () {
                    return api.errorHandler(dispatch);
                  });

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function (_x, _x2, _x3) {
          return _ref2.apply(this, arguments);
        };
      }()
    );
  },
  fetchCourseModuleLessonView: function fetchCourseModuleLessonView(_ref4, cb) {
    var courseSlug = _ref4.courseSlug,
        moduleSlug = _ref4.moduleSlug,
        lessonId = _ref4.lessonId;
    return (
      /*#__PURE__*/
      function () {
        var _ref6 = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch, _ref5, api) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _objectDestructuringEmpty(_ref5);

                  dispatch(ModuleActions.Map({
                    isFetchingCourseModuleLessonView: true
                  }));
                  api.fetchCourseModuleLessonView({
                    courseSlug: courseSlug,
                    moduleSlug: moduleSlug,
                    lessonId: lessonId
                  }).then(api.checkStatus).then(api.toText).then(function (response) {
                    dispatch(ModuleActions.Map({
                      isFetchingCourseModuleLessonView: false
                    }));
                    cb(response);
                  }).catch(function () {
                    return api.errorHandler(dispatch);
                  });

                case 3:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        return function (_x5, _x6, _x7) {
          return _ref6.apply(this, arguments);
        };
      }()
    );
  },
  fetchCourseModuleLessons: function fetchCourseModuleLessons(_ref7) {
    var moduleId = _ref7.moduleId;
    return (
      /*#__PURE__*/
      function () {
        var _ref8 = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch, getState, api) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  dispatch(ModuleActions.Map({
                    isFetchingCourseModuleLessons: true
                  }));
                  return _context4.abrupt("return", api.fetchLessonsByModuleId({
                    moduleId: moduleId
                  }).then(api.checkStatus).then(api.toJSON).then(function (response) {
                    var _normalize2 = Object(normalizr__WEBPACK_IMPORTED_MODULE_1__["normalize"])(response[0], _Redux_schema__WEBPACK_IMPORTED_MODULE_4__["moduleSchema"]),
                        modules = _normalize2.entities.modules;

                    dispatch(___WEBPACK_IMPORTED_MODULE_2__["EntityActions"].Map({
                      modules: _objectSpread({}, getState().entities.modules, modules)
                    }));
                    dispatch(ModuleActions.Map({
                      isFetchingCourseModuleLessons: false
                    }));
                  }).catch(function () {
                    return api.errorHandler(dispatch);
                  }));

                case 2:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        return function (_x8, _x9, _x10) {
          return _ref8.apply(this, arguments);
        };
      }()
    );
  }
};

/***/ })

})
//# sourceMappingURL=lesson.js.e8014b36caab841af2dd.hot-update.js.map