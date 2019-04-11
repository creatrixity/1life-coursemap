webpackHotUpdate("static\\development\\pages\\roadmap\\module.js",{

/***/ "./pages/roadmap/module/module.tsx":
/*!*****************************************!*\
  !*** ./pages/roadmap/module/module.tsx ***!
  \*****************************************/
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
/* harmony import */ var _src_Components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/Components */ "./src/Components/index.ts");
/* harmony import */ var _src_Components_Icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/Components/Icons */ "./src/Components/Icons/index.ts");
/* harmony import */ var _src_Components_LoadSpinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../src/Components/LoadSpinner */ "./src/Components/LoadSpinner/index.tsx");
/* harmony import */ var _src_Actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../src/Actions */ "./src/Actions/index.ts");
/* harmony import */ var _roadmap_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../roadmap/module.scss */ "./pages/roadmap/module.scss");
/* harmony import */ var _roadmap_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_roadmap_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_Redux_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../src/Redux/utils */ "./src/Redux/utils.ts");
/* harmony import */ var _src_Helpers_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../src/Helpers/index */ "./src/Helpers/index.ts");
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "content", '');

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "moduleTitle", '');

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "module", '');

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "lessons", {});

    _this.state = {
      moduleProgression: 0,
      userLessons: []
    };
    return _this;
  }

  _createClass(ModulePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!Object(_src_Redux_utils__WEBPACK_IMPORTED_MODULE_11__["getToken"])()) return this.props.router.push('/login');
      var _this$props = this.props,
          app = _this$props.app,
          getUserLessons = _this$props.getUserLessons,
          fetchRoadmapModule = _this$props.fetchRoadmapModule;
      var roadmapModules = app.roadmapModules;
      var module = this.props.router.query.module;
      this.module = module;
      this.props.fetchRoadmapModule({
        module: module
      }, roadmapModules);
      this.content = roadmapModules[module].content || 'Loading...';
      this.moduleTitle = roadmapModules[module].title;
      var moduleLessons = roadmapModules[module].lessons;
      this.lessons = moduleLessons;
      var user = Object(_src_Redux_utils__WEBPACK_IMPORTED_MODULE_11__["getUser"])();
      var moduleProgression;
      getUserLessons({
        moduleId: roadmapModules[module].id,
        userId: user.id
      }, function (userLessons) {
        moduleProgression = Object(_src_Helpers_index__WEBPACK_IMPORTED_MODULE_12__["computeModulesProgression"])(userLessons, Object.keys(moduleLessons).length);

        if (moduleProgression === 0 || !userLessons.length) {
          _this2.props.updateUserLesson({
            lessonId: 1,
            lessonsCount: Object.keys(moduleLessons).length,
            moduleId: roadmapModules[module].id,
            userId: user.id,
            progression: 0
          }, function (lessons) {
            moduleProgression = Object(_src_Helpers_index__WEBPACK_IMPORTED_MODULE_12__["computeModulesProgression"])(lessons, Object.keys(moduleLessons).length);

            _this2.setState({
              moduleProgression: moduleProgression,
              userLessons: lessons.map(function (lesson) {
                return lesson.lesson_id;
              })
            });
          });
        } else {
          _this2.setState({
            moduleProgression: moduleProgression,
            userLessons: userLessons.map(function (userLesson) {
              return userLesson.lesson_id;
            })
          });
        }
      });
    }
  }, {
    key: "renderModuleCardLink",
    value: function renderModuleCardLink(_ref) {
      var icon = _ref.icon,
          title = _ref.title,
          isDisabled = _ref.isDisabled;
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

      var userLessons = this.state.userLessons || [];
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", {
        className: 'h5 mb-3'
      }, "Up Next"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
        className: 'list list-unstyled'
      }, Object.keys(this.lessons).map(function (lessonId, key) {
        var _this3$lessons$lesson = _this3.lessons[lessonId],
            title = _this3$lessons$lesson.title,
            type = _this3$lessons$lesson.type;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
          key: key,
          className: 'mb-2'
        }, userLessons.includes(parseInt(lessonId, 10)) ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          prefetch: true,
          href: "/roadmap/".concat(_this3.module, "/lesson-").concat(lessonId)
        }, _this3.renderModuleCardLink({
          icon: type === 'lesson' ? _src_Components_Icons__WEBPACK_IMPORTED_MODULE_7__["PlayIcon"] : _src_Components_Icons__WEBPACK_IMPORTED_MODULE_7__["ToolIcon"],
          title: title,
          isDisabled: false
        })) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, _this3.renderModuleCardLink({
          icon: type === 'lesson' ? _src_Components_Icons__WEBPACK_IMPORTED_MODULE_7__["PlayIcon"] : _src_Components_Icons__WEBPACK_IMPORTED_MODULE_7__["ToolIcon"],
          title: title,
          isDisabled: true
        })));
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var app = this.props.app.app;
      var roadmapModules = app.roadmapModules;
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "d-flex flex-column module",
        style: {
          paddingTop: '100px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, this.moduleTitle, " | 1Life")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_src_Components__WEBPACK_IMPORTED_MODULE_6__["Header"], {
        backlinkHref: '/roadmap',
        title: this.moduleTitle,
        style: {
          position: 'fixed',
          top: 0,
          zIndex: 900,
          width: '100%'
        }
      }, !this.props.app.isUpdatingUserLesson ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_src_Components__WEBPACK_IMPORTED_MODULE_6__["StarsCast"], {
        progression: this.state.moduleProgression || 0
      }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_src_Components_LoadSpinner__WEBPACK_IMPORTED_MODULE_8__["default"], {
        width: '25px',
        height: '25px'
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: 'container'
      }, htmr__WEBPACK_IMPORTED_MODULE_2___default()(roadmapModules[this.module] ? roadmapModules[this.module].content : 'Loading...'), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
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
    user: state.user
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateUserLesson: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_src_Actions__WEBPACK_IMPORTED_MODULE_9__["AppActions"].updateUserLesson, dispatch),
    getUserLessons: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_src_Actions__WEBPACK_IMPORTED_MODULE_9__["AppActions"].getUserLessons, dispatch),
    fetchRoadmapModule: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_src_Actions__WEBPACK_IMPORTED_MODULE_9__["AppActions"].fetchRoadmapModule, dispatch)
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/roadmap\\module\\module")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=module.js.fb6bddfcfd2ae7b11f06.hot-update.js.map