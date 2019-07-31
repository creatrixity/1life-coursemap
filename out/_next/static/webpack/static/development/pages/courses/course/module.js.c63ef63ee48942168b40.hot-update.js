webpackHotUpdate("static\\development\\pages\\courses\\course\\module.js",{

/***/ "./pages/courses/course/module/module.tsx":
/*!************************************************!*\
  !*** ./pages/courses/course/module/module.tsx ***!
  \************************************************/
/*! exports provided: ModulePage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulePage", function() { return ModulePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var htmr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! htmr */ "./node_modules/htmr/lib/htmr.min.js");
/* harmony import */ var htmr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(htmr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_Components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../src/Components */ "./src/Components/index.ts");
/* harmony import */ var _src_Components_Icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../src/Components/Icons */ "./src/Components/Icons/index.ts");
/* harmony import */ var _src_Components_LoadSpinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../src/Components/LoadSpinner */ "./src/Components/LoadSpinner/index.tsx");
/* harmony import */ var _src_Actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../src/Actions */ "./src/Actions/index.ts");
/* harmony import */ var _src_Selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../src/Selectors */ "./src/Selectors/index.ts");
/* harmony import */ var _module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./module.scss */ "./pages/courses/course/module/module.scss");
/* harmony import */ var _module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_Redux_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../src/Redux/utils */ "./src/Redux/utils.ts");
/* harmony import */ var _src_Helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../src/Helpers */ "./src/Helpers/index.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var ModulePage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ModulePage, _React$Component);

  function ModulePage(props) {
    var _this;

    _classCallCheck(this, ModulePage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModulePage).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "lessons", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "moduleId", 0);

    _this.state = {
      moduleProgression: 0,
      userLessons: [],
      moduleLessonView: ''
    };
    return _this;
  }

  _createClass(ModulePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!Object(_src_Redux_utils__WEBPACK_IMPORTED_MODULE_12__["getToken"])()) return this.props.router.replace('/login');
      var _this$props = this.props,
          getCourseModuleLessons = _this$props.getCourseModuleLessons,
          getUserLessons = _this$props.getUserLessons,
          fetchCourseModuleLessons = _this$props.fetchCourseModuleLessons,
          fetchCourseModuleLessonView = _this$props.fetchCourseModuleLessonView,
          router = _this$props.router;
      var _query = router.query,
          module = _query.module,
          course = _query.course;
      var courseId = parseInt(Object(_src_Helpers__WEBPACK_IMPORTED_MODULE_13__["extractIdFromSlug"])(course));
      var moduleId = parseInt(Object(_src_Helpers__WEBPACK_IMPORTED_MODULE_13__["extractIdFromSlug"])(module));
      var courseSlug = Object(_src_Helpers__WEBPACK_IMPORTED_MODULE_13__["extractSlugFromString"])(course);
      var moduleSlug = Object(_src_Helpers__WEBPACK_IMPORTED_MODULE_13__["extractSlugFromString"])(module);
      this.moduleId = moduleId;
      fetchCourseModuleLessonView({
        courseSlug: courseSlug,
        moduleSlug: moduleSlug,
        lessonId: 0
      }, function (moduleLessonView) {
        _this2.setState({
          moduleLessonView: moduleLessonView
        });

        fetchCourseModuleLessons({
          moduleId: moduleId
        });
      });
      var moduleLessons = getCourseModuleLessons(moduleId);
      var user = Object(_src_Redux_utils__WEBPACK_IMPORTED_MODULE_12__["getUser"])();
      var moduleProgression;
      getUserLessons({
        moduleId: moduleId,
        courseId: courseId,
        userId: user.id
      }, function (_ref) {
        var userLessons = _ref.userLessons,
            moduleLessonsCount = _ref.moduleLessonsCount;
        moduleProgression = Object(_src_Helpers__WEBPACK_IMPORTED_MODULE_13__["computeModulesProgression"])(userLessons, moduleLessonsCount);

        _this2.setState({
          moduleProgression: moduleProgression,
          userLessons: userLessons.map(function (userLesson) {
            return userLesson.id;
          })
        });
      });
    }
  }, {
    key: "renderModuleCardLink",
    value: function renderModuleCardLink(_ref2) {
      var icon = _ref2.icon,
          title = _ref2.title,
          isDisabled = _ref2.isDisabled;
      var Icon = icon;
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "card d-flex flex-row module__link-card ".concat(isDisabled && 'module__link-card--disabled')
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
        className: 'module__link-card__preview d-flex justify-content-center align-items-center'
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Icon, null)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
        className: 'px-3 py-4 module__link-card__content'
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", {
        className: 'h6 module__link-card__title'
      }, title)));
    }
  }, {
    key: "renderUpcomingLinks",
    value: function renderUpcomingLinks() {
      var _this3 = this;

      var _this$props2 = this.props,
          getCourseModuleLessons = _this$props2.getCourseModuleLessons,
          isFetchingCourseModuleLessons = _this$props2.isFetchingCourseModuleLessons,
          query = _this$props2.router.query;
      var _ref3 = query,
          module = _ref3.module,
          course = _ref3.course;
      var lessons = getCourseModuleLessons(this.moduleId);
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", {
        className: 'h5 mb-3'
      }, "Up Next"), isFetchingCourseModuleLessons ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_src_Components__WEBPACK_IMPORTED_MODULE_6__["LoaderScreen"], {
        caption: 'Fetching Lessons...'
      }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
        className: 'list list-unstyled'
      }, lessons.map(function (_ref4, key) {
        var id = _ref4.id,
            title = _ref4.title,
            type = _ref4.type;
        var isLesson = type === 'lesson';
        var isUserLesson = _this3.state.userLessons.includes(id) || key === 0;
        console.log({
          u: _this3.state.userLessons
        });
        var icon = isLesson ? _src_Components_Icons__WEBPACK_IMPORTED_MODULE_7__["PlayIcon"] : _src_Components_Icons__WEBPACK_IMPORTED_MODULE_7__["ToolIcon"];
        var WrapperElement = isUserLesson ? next_link__WEBPACK_IMPORTED_MODULE_5___default.a : 'div';
        var WrapperProps = isUserLesson ? {
          prefetch: true,
          href: "/courses/".concat(course, "/").concat(module, "/lesson-").concat(id)
        } : {};
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
          key: key,
          className: 'mb-2'
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrapperElement, WrapperProps, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", null, _this3.renderModuleCardLink({
          icon: icon,
          title: title,
          isDisabled: !isUserLesson
        }))));
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _ref5 = this.props,
          app = _ref5.app,
          isFetchingCourseModuleLessonView = _ref5.isFetchingCourseModuleLessonView,
          query = _ref5.router.query;
      var _this$state = this.state,
          moduleProgression = _this$state.moduleProgression,
          moduleLessonView = _this$state.moduleLessonView;
      var module = query.module,
          course = query.course;
      var moduleTitle = Object(_src_Helpers__WEBPACK_IMPORTED_MODULE_13__["extractSlugFromString"])(module).split('-').join(' ');
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "d-flex flex-column module",
        style: {
          paddingTop: '100px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, Object(_src_Helpers__WEBPACK_IMPORTED_MODULE_13__["toTitleCase"])(moduleTitle), " | 1Life")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_src_Components__WEBPACK_IMPORTED_MODULE_6__["Header"], {
        backlinkHref: "/courses/".concat(course),
        title: moduleTitle
      }, !app.isUpdatingUserLesson ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_src_Components__WEBPACK_IMPORTED_MODULE_6__["StarsCast"], {
        progression: moduleProgression || 0
      }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_src_Components_LoadSpinner__WEBPACK_IMPORTED_MODULE_8__["default"], {
        width: '25px',
        height: '25px'
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", null, isFetchingCourseModuleLessonView ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_src_Components__WEBPACK_IMPORTED_MODULE_6__["LoaderScreen"], {
        caption: 'Fetching content...'
      }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: 'container'
      }, htmr__WEBPACK_IMPORTED_MODULE_2___default()(moduleLessonView), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
        className: 'row'
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: 'col-12'
      }, this.renderUpcomingLinks())))));
    }
  }]);

  return ModulePage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    home: state.home,
    app: state.app,
    user: state.user,
    module: state.module,
    getCourseModuleLessons: function getCourseModuleLessons(id) {
      return _src_Selectors__WEBPACK_IMPORTED_MODULE_10__["ModuleSelectors"].getCourseModuleLessons(id)(state);
    },
    isFetchingCourseModuleLessonView: _src_Selectors__WEBPACK_IMPORTED_MODULE_10__["ModuleSelectors"].getIsFetchingCourseModuleLessonView(state),
    isFetchingCourseModuleLessons: _src_Selectors__WEBPACK_IMPORTED_MODULE_10__["ModuleSelectors"].getIsFetchingCourseModuleLessons(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchCourseModuleLessonView: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_src_Actions__WEBPACK_IMPORTED_MODULE_9__["ModuleActions"].fetchCourseModuleLessonView, dispatch),
    fetchCourseModuleLessons: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_src_Actions__WEBPACK_IMPORTED_MODULE_9__["ModuleActions"].fetchCourseModuleLessons, dispatch),
    updateUserLesson: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_src_Actions__WEBPACK_IMPORTED_MODULE_9__["AppActions"].updateUserLesson, dispatch),
    getUserLessons: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_src_Actions__WEBPACK_IMPORTED_MODULE_9__["AppActions"].getUserLessons, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(ModulePage));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/courses\\course\\module\\module")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=module.js.c63ef63ee48942168b40.hot-update.js.map