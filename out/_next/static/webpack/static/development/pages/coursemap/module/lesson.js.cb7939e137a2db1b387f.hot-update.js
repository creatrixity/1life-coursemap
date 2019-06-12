webpackHotUpdate("static\\development\\pages\\coursemap\\module\\lesson.js",{

/***/ "./pages/coursemap/module/lesson/lesson.tsx":
/*!**************************************************!*\
  !*** ./pages/coursemap/module/lesson/lesson.tsx ***!
  \**************************************************/
/*! exports provided: LessonPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonPage", function() { return LessonPage; });
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
/* harmony import */ var _src_Actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../src/Actions */ "./src/Actions/index.ts");
/* harmony import */ var _src_Components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../src/Components */ "./src/Components/index.ts");
/* harmony import */ var _src_Components_Icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../src/Components/Icons */ "./src/Components/Icons/index.ts");
/* harmony import */ var _src_Components_LoadSpinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../src/Components/LoadSpinner */ "./src/Components/LoadSpinner/index.tsx");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-player */ "./node_modules/react-player/lib/ReactPlayer.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _coursemap_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../coursemap/module.scss */ "./pages/coursemap/module.scss");
/* harmony import */ var _coursemap_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_coursemap_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_Redux_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../src/Redux/utils */ "./src/Redux/utils.ts");
/* harmony import */ var _src_Helpers_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../src/Helpers/index */ "./src/Helpers/index.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var LessonPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LessonPage, _React$Component);

  function LessonPage(props) {
    var _this;

    _classCallCheck(this, LessonPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LessonPage).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "course", '');

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "currentCourse", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "currentCourseModule", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "currentCourseModuleLessons", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "lessonId", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "module", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "nextModule", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "nextModuleData", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "moduleTitle", null);

    _this.state = {
      moduleProgression: 0,
      ratingCumulative: 0
    };
    _this.handleSaveJournalInput = _this.handleSaveJournalInput.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(LessonPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!Object(_src_Redux_utils__WEBPACK_IMPORTED_MODULE_12__["getToken"])()) return this.props.router.push('/login');
      var _this$props = this.props,
          app = _this$props.app,
          router = _this$props.router;
      var _router$query = router.query,
          course = _router$query.course,
          lesson = _router$query.lesson,
          module = _router$query.module;
      var coursemapModules = app.coursemapModules,
          coursemapModulesContent = app.coursemapModulesContent;
      var lessonId = parseInt(lesson.split('-')[1]);
      var currentCourse = coursemapModules[course];
      var currentCourseModule = currentCourse.modules[module];
      var currentCourseModuleLessons = currentCourseModule && currentCourseModule.lessons;
      this.props.fetchCoursemapModule({
        module: module,
        course: course,
        id: lessonId
      }, coursemapModulesContent);
      this.course = course;
      this.currentCourse = currentCourse;
      this.currentCourseModule = currentCourseModule;
      this.currentCourseModuleLessons = currentCourseModuleLessons;
      this.lessonId = lessonId;
      this.module = module;
      this.moduleTitle = currentCourseModule.title;
      this.nextModule = currentCourseModule.nextModule;
      this.nextModuleData = currentCourse.modules[this.nextModule];
      var moduleId = currentCourseModule.id;
      var moduleLessonsCount = Object.keys(currentCourseModuleLessons).length;
      var user = Object(_src_Redux_utils__WEBPACK_IMPORTED_MODULE_12__["getUser"])();
      this.props.updateUserLesson({
        lessonId: lessonId,
        lessonsCount: moduleLessonsCount,
        moduleId: moduleId,
        courseId: this.currentCourse.id,
        userId: user.id,
        progression: 100
      }, function (lessons) {
        var moduleProgression = Object(_src_Helpers_index__WEBPACK_IMPORTED_MODULE_13__["computeModulesProgression"])(lessons, moduleLessonsCount);

        _this2.setState({
          moduleProgression: moduleProgression
        });
      });
      this.props.getJournalFeedback({
        user_id: user.id,
        course_id: currentCourse.id,
        module_id: currentCourseModule.id,
        lesson_id: lessonId
      }, function (feedback) {
        var feedbackData = feedback[currentCourse.id][currentCourseModule.id][lessonId];
        var feedbackDataKeys = Object.keys(feedbackData).filter(function (key) {
          return feedbackData[key].type === 'rating';
        });
        var ratingCumulative = feedbackDataKeys.reduce(function (previousValue, currentValue, currentIndex) {
          return parseInt(previousValue) + parseInt(feedbackData[feedbackDataKeys[currentIndex]].answer);
        }, 0);

        _this2.setState({
          ratingCumulative: ratingCumulative
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleSaveJournalInput = function () {};
    }
  }, {
    key: "renderModuleCardLink",
    value: function renderModuleCardLink(_ref) {
      var icon = _ref.icon,
          title = _ref.title;
      var Icon = icon;
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: 'card d-flex flex-row module__link-card'
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
      var lessonsCount = Object.keys(this.currentCourseModuleLessons).length;
      var nextLesson = this.currentCourseModuleLessons[this.lessonId + 1];
      var hasValidNextLesson = nextLesson && Object.keys(nextLesson).length > 0;
      var nextLessonTitle = hasValidNextLesson && nextLesson.title;
      var nextLessonType = hasValidNextLesson && nextLesson.type;
      var isAtLastLesson = this.lessonId === lessonsCount;
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", null, !isAtLastLesson && hasValidNextLesson ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: 'mb-5'
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", {
        className: 'h5'
      }, "You've Completed Lesson ", this.lessonId), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", {
        className: 'h6 mb-3 text-black-50'
      }, "Let's move on to the next one."), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        prefetch: true,
        href: "/courses/".concat(this.course, "/").concat(this.module, "/lesson-").concat(this.lessonId + 1)
      }, this.renderModuleCardLink({
        icon: nextLessonType === 'lesson' ? _src_Components_Icons__WEBPACK_IMPORTED_MODULE_8__["PlayIcon"] : _src_Components_Icons__WEBPACK_IMPORTED_MODULE_8__["ToolIcon"],
        title: nextLessonTitle
      }))) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: 'mb-5'
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", {
        className: 'h5 text-brand'
      }, "Great! You've finished this module!"), this.nextModuleData ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", {
        className: 'h6 mb-3 text-black-50'
      }, "You are doing awesome! Let's move on to the next one."), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        prefetch: true,
        href: "/courses/".concat(this.course, "/").concat(this.nextModule)
      }, this.renderModuleCardLink({
        icon: _src_Components_Icons__WEBPACK_IMPORTED_MODULE_8__["PlayIcon"],
        title: this.nextModuleData && this.nextModuleData.title
      }))) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", {
        className: 'h6 mb-3 text-black-50'
      }, "Whoohoo! You have finished this course!"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        prefetch: true,
        href: "/courses"
      }, this.renderModuleCardLink({
        icon: _src_Components_Icons__WEBPACK_IMPORTED_MODULE_8__["PlayIcon"],
        title: 'See all courses'
      })))));
    }
  }, {
    key: "handleSaveJournalInput",
    value: function handleSaveJournalInput(_ref2, callback) {
      var _this3 = this;

      var question = _ref2.question,
          type = _ref2.type,
          value = _ref2.value,
          tag = _ref2.tag;
      this.props.createJournalFeedback({
        question: question,
        answer: value,
        type: type,
        user_id: Object(_src_Redux_utils__WEBPACK_IMPORTED_MODULE_12__["getUser"])().id,
        course_id: this.currentCourse.id,
        module_id: this.currentCourseModule['id'],
        lesson_id: this.lessonId,
        feedback_id: tag
      }, function (data) {
        var coursemapModulesFeedback = _this3.props.app.coursemapModulesFeedback;

        var feedbackData = _objectSpread({}, coursemapModulesFeedback[_this3.currentCourse.id][_this3.currentCourseModule.id][_this3.lessonId], data);

        console.log(feedbackData);
        var feedbackDataKeys = Object.keys(feedbackData).filter(function (key) {
          return feedbackData[key].type === 'rating';
        });
        var ratingCumulative = feedbackDataKeys.reduce(function (previousValue, currentValue, currentIndex) {
          return parseInt(previousValue) + parseInt(feedbackData[feedbackDataKeys[currentIndex]].answer);
        }, 0);

        _this3.setState({
          ratingCumulative: ratingCumulative
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props$app = this.props.app,
          coursemapModulesContent = _this$props$app.coursemapModulesContent,
          coursemapModulesFeedback = _this$props$app.coursemapModulesFeedback;
      var hasModulesFeedback = Object.keys(coursemapModulesFeedback).length;
      var journalInputValue = hasModulesFeedback ? coursemapModulesFeedback[this.currentCourse.id][this.currentCourseModule.id][this.lessonId] : {};
      var lessonData = coursemapModulesContent[this.course] && coursemapModulesContent[this.course][this.module][this.lessonId];
      var lessonContent = lessonData ? lessonData.content : 'Loading...';
      var content = htmr__WEBPACK_IMPORTED_MODULE_2___default()(lessonContent, {
        transform: {
          reactplayer: function reactplayer(props) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_player__WEBPACK_IMPORTED_MODULE_10___default.a, {
              url: props.url,
              width: '100%',
              light: true,
              playing: true
            });
          },
          ratingfeedback: function ratingfeedback(props) {
            var displaythreshold = props.displaythreshold;
            var _this4$state$ratingCu = _this4.state.ratingCumulative,
                ratingCumulative = _this4$state$ratingCu === void 0 ? 0 : _this4$state$ratingCu;

            var _displaythreshold$spl = displaythreshold.split(':'),
                _displaythreshold$spl2 = _slicedToArray(_displaythreshold$spl, 2),
                rangeStart = _displaythreshold$spl2[0],
                rangeEnd = _displaythreshold$spl2[1];

            if (ratingCumulative && ratingCumulative >= parseInt(rangeStart) && ratingCumulative <= parseInt(rangeEnd)) {
              return props.children;
            }

            return null;
          },
          journalinput: function journalinput(props) {
            var tag = parseInt(props.tag);
            var value = journalInputValue && journalInputValue.hasOwnProperty(tag) ? journalInputValue[tag].answer : '';
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_src_Components__WEBPACK_IMPORTED_MODULE_7__["JournalInput"], {
              onSaveJournalInput: _this4.handleSaveJournalInput,
              tag: tag,
              type: props.type || 'textarea',
              name: props.name,
              label: props.label,
              showLabel: !props.showlabel,
              value: value
            });
          }
        }
      });
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "d-flex flex-column module",
        style: {
          paddingTop: '100px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "Lesson ", this.lessonId, " | Module: ", this.moduleTitle)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_src_Components__WEBPACK_IMPORTED_MODULE_7__["Header"], {
        backlinkHref: "/courses/".concat(this.course, "/").concat(this.module),
        title: "Lesson ".concat(this.lessonId),
        style: {
          position: 'fixed',
          top: 0,
          zIndex: 900,
          width: '100%'
        }
      }, !this.props.app.isUpdatingUserLesson ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_src_Components__WEBPACK_IMPORTED_MODULE_7__["StarsCast"], {
        progression: this.state.moduleProgression || 0
      }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_src_Components_LoadSpinner__WEBPACK_IMPORTED_MODULE_9__["default"], {
        width: '25px',
        height: '25px'
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
        className: 'mb-5 container'
      }, content), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
        className: 'container'
      }, this.renderUpcomingLinks()))));
    }
  }]);

  return LessonPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    app: state.app
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateUserLesson: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_src_Actions__WEBPACK_IMPORTED_MODULE_6__["AppActions"].updateUserLesson, dispatch),
    fetchCoursemapModule: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_src_Actions__WEBPACK_IMPORTED_MODULE_6__["AppActions"].fetchCoursemapModule, dispatch),
    createJournalFeedback: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_src_Actions__WEBPACK_IMPORTED_MODULE_6__["AppActions"].createJournalFeedback, dispatch),
    getJournalFeedback: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_src_Actions__WEBPACK_IMPORTED_MODULE_6__["AppActions"].getJournalFeedback, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(LessonPage));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/coursemap\\module\\lesson\\lesson")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=lesson.js.cb7939e137a2db1b387f.hot-update.js.map