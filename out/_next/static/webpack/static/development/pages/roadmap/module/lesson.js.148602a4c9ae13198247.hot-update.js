webpackHotUpdate("static\\development\\pages\\roadmap\\module\\lesson.js",{

/***/ "./pages/roadmap/module/lesson/lesson.tsx":
/*!************************************************!*\
  !*** ./pages/roadmap/module/lesson/lesson.tsx ***!
  \************************************************/
/*! exports provided: LessonOnePage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonOnePage", function() { return LessonOnePage; });
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
/* harmony import */ var _roadmap_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../roadmap/module.scss */ "./pages/roadmap/module.scss");
/* harmony import */ var _roadmap_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_roadmap_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_Redux_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../src/Redux/utils */ "./src/Redux/utils.ts");
/* harmony import */ var _src_Helpers_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../src/Helpers/index */ "./src/Helpers/index.ts");
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















var LessonOnePage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LessonOnePage, _React$Component);

  function LessonOnePage(props) {
    var _this;

    _classCallCheck(this, LessonOnePage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LessonOnePage).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "content", '');

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "lessonId", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "module", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "nextModule", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "nextModuleData", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "moduleTitle", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "moduleLessons", {});

    _this.state = {
      moduleProgression: 0
    };
    return _this;
  }

  _createClass(LessonOnePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!Object(_src_Redux_utils__WEBPACK_IMPORTED_MODULE_12__["getToken"])()) return this.props.router.push('/login');
      var _this$props = this.props,
          app = _this$props.app,
          router = _this$props.router,
          fetchRoadmapModule = _this$props.fetchRoadmapModule;
      var _router$query = router.query,
          lesson = _router$query.lesson,
          module = _router$query.module;
      var roadmapModules = app.roadmapModules,
          roadmapModulesContent = app.roadmapModulesContent;
      var lessonId = parseInt(lesson.split('-')[1], 10);
      var moduleLessons = roadmapModules[this.module] ? roadmapModules[this.module].lessons : {};
      fetchRoadmapModule({
        module: this.module
      }, roadmapModulesContent);
      this.lessonId = lessonId;
      this.module = module;
      this.moduleTitle = roadmapModules[module].title;
      this.nextModule = roadmapModules[module].nextModule;
      this.nextModuleData = roadmapModules[this.nextModule];
      this.moduleLessons = moduleLessons;
      var moduleId = roadmapModules[module].id;
      var moduleLessonsCount = Object.keys(roadmapModules[this.module].lessons).length;
      var user = Object(_src_Redux_utils__WEBPACK_IMPORTED_MODULE_12__["getUser"])();
      this.props.updateUserLesson({
        lessonId: lessonId,
        lessonsCount: moduleLessonsCount,
        moduleId: moduleId,
        userId: user.id,
        progression: 100
      }, function (lessons) {
        var moduleProgression = Object(_src_Helpers_index__WEBPACK_IMPORTED_MODULE_13__["computeModulesProgression"])(lessons, moduleLessonsCount);

        _this2.setState({
          moduleProgression: moduleProgression
        });
      });
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
      var roadmapModules = this.props.app.roadmapModules;
      var nextLesson = this.module ? roadmapModules[this.module].lessons[this.lessonId + 1] : {};
      var hasValidNextLesson = nextLesson ? Object.keys(nextLesson).length > 0 : false;
      var nextLessonTitle = hasValidNextLesson ? nextLesson.title : '';
      var nextLessonType = hasValidNextLesson ? nextLesson.type : '';
      var isAtLastLesson = roadmapModules[this.module] ? this.lessonId === Object.keys(roadmapModules[this.module].lessons).length : false;
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", null, !isAtLastLesson && hasValidNextLesson ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: 'mb-5'
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", {
        className: 'h5'
      }, "You've Completed Lesson ", this.lessonId), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", {
        className: 'h6 mb-3 text-black-50'
      }, "Let's move on to the next one."), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        prefetch: true,
        href: "/roadmap/".concat(this.module, "/lesson-").concat(this.lessonId + 1)
      }, this.renderModuleCardLink({
        icon: nextLessonType === 'lesson' ? _src_Components_Icons__WEBPACK_IMPORTED_MODULE_8__["PlayIcon"] : _src_Components_Icons__WEBPACK_IMPORTED_MODULE_8__["ToolIcon"],
        title: nextLessonTitle
      }))) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: 'mb-5'
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", {
        className: 'h5 text-brand'
      }, "Great! You've finished this module!"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", {
        className: 'h6 mb-3 text-black-50'
      }, "You are doing awesome! Let's move on to the next one."), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        prefetch: true,
        href: "/roadmap/".concat(this.nextModule)
      }, this.renderModuleCardLink({
        icon: _src_Components_Icons__WEBPACK_IMPORTED_MODULE_8__["PlayIcon"],
        title: this.nextModuleData ? this.nextModuleData.title : ''
      }))));
    }
  }, {
    key: "render",
    value: function render() {
      var app = this.props.app;
      var roadmapModulesContent = app.roadmapModulesContent;
      var content = htmr__WEBPACK_IMPORTED_MODULE_2___default()(roadmapModulesContent[this.module] ? roadmapModulesContent[this.module].content : 'Loading...', {
        transform: {
          reactplayer: function reactplayer(props) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_player__WEBPACK_IMPORTED_MODULE_10___default.a, {
              url: props.url,
              width: '100%',
              light: true,
              playing: true
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
        backlinkHref: "/roadmap/".concat(this.module),
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

  return LessonOnePage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    app: state.app
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateUserLesson: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_src_Actions__WEBPACK_IMPORTED_MODULE_6__["AppActions"].updateUserLesson, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(LessonOnePage));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/roadmap\\module\\lesson\\lesson")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=lesson.js.148602a4c9ae13198247.hot-update.js.map