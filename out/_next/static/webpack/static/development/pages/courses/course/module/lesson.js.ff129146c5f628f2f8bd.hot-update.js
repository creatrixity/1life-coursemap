webpackHotUpdate("static\\development\\pages\\courses\\course\\module\\lesson.js",{

/***/ "./pages/courses/course/module/lesson/lesson.tsx":
/*!*******************************************************!*\
  !*** ./pages/courses/course/module/lesson/lesson.tsx ***!
  \*******************************************************/
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
/* harmony import */ var _src_Actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../src/Actions */ "./src/Actions/index.ts");
/* harmony import */ var _src_Components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../src/Components */ "./src/Components/index.ts");
/* harmony import */ var _src_Components_Icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../src/Components/Icons */ "./src/Components/Icons/index.ts");
/* harmony import */ var _src_Components_LoadSpinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../src/Components/LoadSpinner */ "./src/Components/LoadSpinner/index.tsx");
/* harmony import */ var _src_Selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../src/Selectors */ "./src/Selectors/index.ts");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-player */ "./node_modules/react-player/lib/ReactPlayer.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../module.scss */ "./pages/courses/course/module/module.scss");
/* harmony import */ var _module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_Redux_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../src/Redux/utils */ "./src/Redux/utils.ts");
/* harmony import */ var _src_Helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../src/Helpers */ "./src/Helpers/index.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "courseId", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "moduleId", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "lessonId", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "module", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "nextModule", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "nextModuleData", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "moduleTitle", null);

    _this.state = {
      moduleProgression: 0,
      ratingCumulative: 0,
      lessonView: '<div></div>'
    };
    _this.handleSaveJournalInput = _this.handleSaveJournalInput.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(LessonPage, [{
    key: "refreshFeedback",
    value: function refreshFeedback(_ref) {
      var _this2 = this;

      var userId = _ref.userId,
          courseId = _ref.courseId,
          moduleId = _ref.moduleId,
          lessonId = _ref.lessonId;
      this.props.getJournalFeedback({
        user_id: userId,
        course_id: courseId,
        module_id: moduleId,
        lesson_id: lessonId
      }, function (feedback) {
        var feedbackData = feedback[courseId][moduleId][lessonId];
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
    key: "renderModuleCardLink",
    value: function renderModuleCardLink(_ref2) {
      var icon = _ref2.icon,
          title = _ref2.title;
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
      var _ref3 = this.props,
          getCourseModuleLessons = _ref3.getCourseModuleLessons,
          getCourseModuleNextLesson = _ref3.getCourseModuleNextLesson,
          router = _ref3.router;
      var _ref4 = router,
          _ref4$query = _ref4.query,
          course = _ref4$query.course,
          module = _ref4$query.module;
      var moduleLessons = getCourseModuleLessons(this.moduleId);
      var lessonsCount = moduleLessons.length;
      var nextLesson = getCourseModuleNextLesson(this.moduleId, this.lessonId);
      var hasValidNextLesson = Object.keys(nextLesson).length > 0;
      var nextLessonTitle = hasValidNextLesson && nextLesson.title;
      var nextLessonType = hasValidNextLesson && nextLesson.type;
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", null, hasValidNextLesson ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: 'mb-5'
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", {
        className: 'h5'
      }, "You've Completed This Lesson"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", {
        className: 'h6 mb-3 text-black-50'
      }, "Let's move on to the next one."), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        prefetch: true,
        href: "/courses/".concat(course, "/").concat(module, "/lesson-").concat(this.lessonId + 1)
      }, this.renderModuleCardLink({
        icon: nextLessonType === 'lesson' ? _src_Components_Icons__WEBPACK_IMPORTED_MODULE_8__["PlayIcon"] : _src_Components_Icons__WEBPACK_IMPORTED_MODULE_8__["ToolIcon"],
        title: nextLessonTitle
      }))) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: 'mb-5'
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", {
        className: 'h5 text-brand'
      }, "Great! You've finished this module!"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", {
        className: 'h6 mb-3 text-black-50'
      }, "Whoohoo! You have finished this module."), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        prefetch: true,
        href: "/courses/".concat(course)
      }, this.renderModuleCardLink({
        icon: _src_Components_Icons__WEBPACK_IMPORTED_MODULE_8__["PlayIcon"],
        title: 'See all modules'
      })))));
    }
  }, {
    key: "handleSaveJournalInput",
    value: function handleSaveJournalInput(_ref5, callback) {
      var _this3 = this;

      var question = _ref5.question,
          type = _ref5.type,
          value = _ref5.value,
          tag = _ref5.tag;
      this.props.createJournalFeedback({
        question: question,
        answer: value,
        type: type,
        user_id: Object(_src_Redux_utils__WEBPACK_IMPORTED_MODULE_13__["getUser"])().id,
        course_id: this.courseId,
        module_id: this.moduleId,
        lesson_id: this.lessonId,
        feedback_id: tag
      }, function () {
        _this3.refreshFeedback({
          userId: Object(_src_Redux_utils__WEBPACK_IMPORTED_MODULE_13__["getUser"])().id,
          courseId: _this3.courseId,
          moduleId: _this3.moduleId,
          lessonId: _this3.lessonId
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      if (!Object(_src_Redux_utils__WEBPACK_IMPORTED_MODULE_13__["getToken"])()) return this.props.router.push('/login');
      var _this$props = this.props,
          app = _this$props.app,
          router = _this$props.router,
          fetchLessonView = _this$props.fetchLessonView,
          updateUserLesson = _this$props.updateUserLesson,
          fetchCourseModuleLessons = _this$props.fetchCourseModuleLessons,
          getCourseModuleLessons = _this$props.getCourseModuleLessons;
      var _ref6 = router.query,
          course = _ref6.course,
          lesson = _ref6.lesson,
          module = _ref6.module; // const { coursemapModules, coursemapModulesContent } = app;

      var courseId = parseInt(Object(_src_Helpers__WEBPACK_IMPORTED_MODULE_14__["extractIdFromSlug"])(course));
      var moduleId = parseInt(Object(_src_Helpers__WEBPACK_IMPORTED_MODULE_14__["extractIdFromSlug"])(module));
      var lessonId = parseInt(Object(_src_Helpers__WEBPACK_IMPORTED_MODULE_14__["extractIdFromSlug"])(lesson));
      var courseSlug = Object(_src_Helpers__WEBPACK_IMPORTED_MODULE_14__["extractSlugFromString"])(course);
      var moduleSlug = Object(_src_Helpers__WEBPACK_IMPORTED_MODULE_14__["extractSlugFromString"])(module);
      this.courseId = courseId;
      this.moduleId = moduleId;
      this.lessonId = lessonId;
      var moduleLessons = getCourseModuleLessons(moduleId);
      fetchLessonView({
        courseSlug: courseSlug,
        moduleSlug: moduleSlug,
        lessonId: lessonId
      }, function (lessonView) {
        _this4.setState({
          lessonView: lessonView
        });

        fetchCourseModuleLessons({
          moduleId: moduleId
        });
      });
      var user = Object(_src_Redux_utils__WEBPACK_IMPORTED_MODULE_13__["getUser"])();
      updateUserLesson({
        courseId: courseId,
        moduleId: moduleId,
        lessonId: lessonId,
        userId: user.id,
        progression: 100
      }, function (lessons) {
        var moduleProgression = Object(_src_Helpers__WEBPACK_IMPORTED_MODULE_14__["computeModulesProgression"])(lessons, moduleLessons.length);
        console.log({
          moduleProgression: moduleProgression
        });

        _this4.setState({
          moduleProgression: moduleProgression
        });
      });
      this.refreshFeedback({
        userId: user.id,
        courseId: courseId,
        moduleId: moduleId,
        lessonId: lessonId
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleSaveJournalInput = function () {};
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props2 = this.props,
          app = _this$props2.app,
          isFetchingLessonView = _this$props2.isFetchingLessonView,
          query = _this$props2.router.query;
      var coursemapModulesFeedback = app.coursemapModulesFeedback;
      var hasModulesFeedback = Object.keys(coursemapModulesFeedback).length;
      var journalInputValue = hasModulesFeedback ? coursemapModulesFeedback[this.courseId][this.moduleId][this.lessonId] : '';
      var content = htmr__WEBPACK_IMPORTED_MODULE_2___default()(this.state.lessonView, {
        transform: {
          reactplayer: function reactplayer(props) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_player__WEBPACK_IMPORTED_MODULE_11___default.a, {
              url: props.url,
              width: '100%',
              light: true,
              playing: true
            });
          },
          ratingfeedback: function ratingfeedback(props) {
            var displaythreshold = props.displaythreshold;
            var _this5$state$ratingCu = _this5.state.ratingCumulative,
                ratingCumulative = _this5$state$ratingCu === void 0 ? 0 : _this5$state$ratingCu;

            var _displaythreshold$spl = displaythreshold.split(':'),
                _displaythreshold$spl2 = _slicedToArray(_displaythreshold$spl, 2),
                rangeStart = _displaythreshold$spl2[0],
                rangeEnd = _displaythreshold$spl2[1];

            var isCumulativeWithinBounds = ratingCumulative && ratingCumulative >= parseInt(rangeStart) && ratingCumulative <= parseInt(rangeEnd);
            return isCumulativeWithinBounds ? props.children : null;
          },
          journalinput: function journalinput(props) {
            var tag = parseInt(props.tag);
            var value = journalInputValue && tag in journalInputValue ? journalInputValue[tag].answer : '';
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_src_Components__WEBPACK_IMPORTED_MODULE_7__["JournalInput"], {
              onSaveJournalInput: _this5.handleSaveJournalInput,
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
        backlinkHref: "/courses/".concat(query.course, "/").concat(query.module),
        title: "Lesson"
      }, !this.props.app.isUpdatingUserLesson ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_src_Components__WEBPACK_IMPORTED_MODULE_7__["StarsCast"], {
        progression: this.state.moduleProgression || 0
      }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_src_Components_LoadSpinner__WEBPACK_IMPORTED_MODULE_9__["default"], {
        width: '25px',
        height: '25px'
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, isFetchingLessonView ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_src_Components__WEBPACK_IMPORTED_MODULE_7__["LoaderScreen"], {
        caption: 'Fetching content...'
      }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
        className: 'mb-5 container'
      }, content), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
        className: 'container'
      }, this.renderUpcomingLinks())))));
    }
  }]);

  return LessonPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    app: state.app,
    isFetchingLessonView: _src_Selectors__WEBPACK_IMPORTED_MODULE_10__["LessonSelectors"].getIsFetchingLessonView(state),
    getCourseModuleLessons: function getCourseModuleLessons(id) {
      return _src_Selectors__WEBPACK_IMPORTED_MODULE_10__["ModuleSelectors"].getCourseModuleLessons(id)(state);
    },
    getCourseModuleNextLesson: function getCourseModuleNextLesson(moduleId, lessonId) {
      return _src_Selectors__WEBPACK_IMPORTED_MODULE_10__["ModuleSelectors"].getCourseModuleNextLesson(moduleId, lessonId)(state);
    }
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchCourseModuleLessons: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_src_Actions__WEBPACK_IMPORTED_MODULE_6__["ModuleActions"].fetchCourseModuleLessons, dispatch),
    updateUserLesson: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_src_Actions__WEBPACK_IMPORTED_MODULE_6__["AppActions"].updateUserLesson, dispatch),
    fetchLessonView: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_src_Actions__WEBPACK_IMPORTED_MODULE_6__["LessonActions"].fetchLessonView, dispatch),
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/courses\\course\\module\\lesson\\lesson")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=lesson.js.ff129146c5f628f2f8bd.hot-update.js.map