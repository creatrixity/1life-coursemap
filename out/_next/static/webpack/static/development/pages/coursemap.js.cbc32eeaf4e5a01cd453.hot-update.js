webpackHotUpdate("static\\development\\pages\\coursemap.js",{

/***/ "./pages/coursemap/coursemap.tsx":
/*!***************************************!*\
  !*** ./pages/coursemap/coursemap.tsx ***!
  \***************************************/
/*! exports provided: CoursemapPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursemapPage", function() { return CoursemapPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_Actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/Actions */ "./src/Actions/index.ts");
/* harmony import */ var _src_Components_Icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/Components/Icons */ "./src/Components/Icons/index.ts");
/* harmony import */ var _src_Redux_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/Redux/utils */ "./src/Redux/utils.ts");
/* harmony import */ var _coursemap_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./coursemap.scss */ "./pages/coursemap/coursemap.scss");
/* harmony import */ var _coursemap_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_coursemap_scss__WEBPACK_IMPORTED_MODULE_8__);
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










var CoursemapPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CoursemapPage, _React$Component);

  function CoursemapPage(props) {
    var _this;

    _classCallCheck(this, CoursemapPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CoursemapPage).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "coursemapModules", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "course", '');

    _this.state = {
      userModules: []
    };
    return _this;
  }

  _createClass(CoursemapPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!Object(_src_Redux_utils__WEBPACK_IMPORTED_MODULE_7__["getToken"])()) return this.props.router.replace('/login');
      var _this$props = this.props,
          app = _this$props.app,
          router = _this$props.router;
      var coursemapModules = app.coursemapModules;
      var course = router.query.course;
      this.coursemapModules = coursemapModules;
      this.course = course;
      var user = Object(_src_Redux_utils__WEBPACK_IMPORTED_MODULE_7__["getUser"])();

      if (user) {
        this.props.getUserModules({
          userId: user.id,
          courseId: this.coursemapModules[this.course].id
        }, function (userModules) {
          userModules = userModules.filter(function (userModule) {
            return userModule.progression === 100;
          }).map(function (userModule) {
            return userModule.module_id;
          });

          _this2.setState({
            userModules: userModules
          });
        });
      }
    }
  }, {
    key: "determineModuleStatus",
    value: function determineModuleStatus(moduleId) {
      var userModules = this.state.userModules || [];
      return userModules.includes(moduleId - 1);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "d-flex flex-column"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "My Coursemap | 1Life")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "w-100 h-100",
        id: "navbarToggleExternalContent"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "bg-dark p-4"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", {
        className: "text-white text-center h5"
      }, "Menu"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
        className: "nav mr-auto mt-2"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
        className: "nav-item active"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
        className: "nav-link",
        href: "#"
      }, "Home ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: "sr-only"
      }, "(current)")))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("nav", {
        className: 'navbar navbar-expand-lg navbar-light bg-white mb-4'
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "navbar-collapse",
        id: "navbarTogglerDemo01"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: 'navbar-brand mb-0 h1'
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
        className: 'img',
        width: 50,
        src: '/static/img/splashLogo.webp',
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
        className: 'navbar-toggler',
        type: 'button',
        "data-toggle": 'collapse',
        "data-target": "#navbarTogglerDemo01",
        "aria-controls": "navbarTogglerDemo01",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: "navbar-toggler-icon"
      })))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "row pb-4"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
        className: "col-md-12 mb-5"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: 'd-flex align-items-center'
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
        src: '/static/img/cap.svg',
        className: 'mr-3',
        width: 100
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
        className: 'h4 coursemap-title text-gray'
      }, "Course Modules"))), this.course.length > 0 && Object.keys(this.coursemapModules[this.course].modules).filter(function (moduleKey) {
        return moduleKey !== '__route';
      }).map(function (moduleKey, idx) {
        var moduleObj = _this3.coursemapModules[_this3.course].modules[moduleKey];
        var title = moduleObj.title,
            id = moduleObj.id,
            lessons = moduleObj.lessons;
        var lessonsCount = lessons && Object.keys(lessons).length;
        return _this3.determineModuleStatus(id) || idx === 0 ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
          className: "col-md-12 mb-4",
          key: idx
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: 'text-center card coursemap-listing coursemap-listing--active'
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
          className: "d-flex flex-column align-items-center"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
          className: "coursemap-listing__number font-weight-bold mb-2"
        }, idx + 1), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
          className: 'h4 coursemap-listing__title mb-0'
        }, title), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
          className: "font-style-italic coursemap-listing__subtext text-gray mb-4"
        }, lessonsCount, " ", lessonsCount === 1 ? 'Lesson' : 'Lessons'), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/courses/".concat(_this3.course, "/").concat(moduleKey)
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
          className: "btn btn-success coursemap-listing__btn"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
          className: 'mr-2'
        }, "Let's Go"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_src_Components_Icons__WEBPACK_IMPORTED_MODULE_6__["ArrowRightIcon"], null)))))) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
          className: "col-md-12 mb-4",
          key: idx
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: 'text-center card coursemap-listing'
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
          src: "/static/img/lock.svg",
          className: "coursemap-listing__icon",
          alt: ""
        }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
          className: "d-flex flex-column align-items-center"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
          className: "coursemap-listing__number font-weight-bold mb-2"
        }, idx + 1), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
          className: 'h4 coursemap-listing__title'
        }, _this3.coursemapModules[_this3.course].modules[moduleKey].title), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
          className: "font-style-italic coursemap-listing__subtext text-gray"
        }, _this3.coursemapModules[_this3.course].modules[moduleKey].lessons ? Object.keys(_this3.coursemapModules[_this3.course].modules[moduleKey].lessons).length : 0, " Lessons"))));
      }))));
    }
  }]);

  return CoursemapPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    app: state.app
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getUserModules: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_src_Actions__WEBPACK_IMPORTED_MODULE_5__["AppActions"].getUserModules, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(CoursemapPage));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/coursemap\\coursemap")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=coursemap.js.cbc32eeaf4e5a01cd453.hot-update.js.map