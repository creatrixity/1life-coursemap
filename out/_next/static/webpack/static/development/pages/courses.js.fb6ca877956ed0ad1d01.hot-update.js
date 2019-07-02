webpackHotUpdate("static\\development\\pages\\courses.js",{

/***/ "./pages/courses/courses.tsx":
/*!***********************************!*\
  !*** ./pages/courses/courses.tsx ***!
  \***********************************/
/*! exports provided: CoursesPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesPage", function() { return CoursesPage; });
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
/* harmony import */ var _src_Components_Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/Components/Nav */ "./src/Components/Nav/index.tsx");
/* harmony import */ var _src_Redux_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/Redux/utils */ "./src/Redux/utils.ts");
/* harmony import */ var _coursemap_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../coursemap/module.scss */ "./pages/coursemap/module.scss");
/* harmony import */ var _coursemap_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_coursemap_module_scss__WEBPACK_IMPORTED_MODULE_9__);
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











var CoursesPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CoursesPage, _React$Component);

  function CoursesPage(props) {
    var _this;

    _classCallCheck(this, CoursesPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CoursesPage).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "courses", {});

    _this.state = {
      userModules: []
    };
    return _this;
  }

  _createClass(CoursesPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!Object(_src_Redux_utils__WEBPACK_IMPORTED_MODULE_8__["getToken"])()) return this.props.router.replace('/login');
      var coursemapModules = this.props.app.coursemapModules;
      this.courses = coursemapModules;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "d-flex flex-column"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "Choose a Course | 1Life")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_src_Components_Nav__WEBPACK_IMPORTED_MODULE_7__["Nav"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("nav", {
        className: 'navbar navbar-light bg-white mb-4'
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: 'navbar-brand mb-0 h1'
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
        className: 'img',
        width: 50,
        src: '/static/img/splashLogo.webp',
        alt: ""
      }))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
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
        className: 'h3 coursemap-title text-gray'
      }, "Choose a Course"))), Object.keys(this.courses).map(function (course, idx) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
          className: "col-md-12 mb-4",
          key: idx
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: 'text-center card coursemap-listing coursemap-listing--active'
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
          className: "d-flex flex-column align-items-center"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
          className: 'h4 coursemap-listing__title mb-3'
        }, _this2.courses[course].title), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
          className: "font-style-italic coursemap-listing__subtext text-gray mb-4"
        }, _this2.courses[course].modules && Object.keys(_this2.courses[course].modules).length, " modules"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/courses/".concat(course)
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
          className: "btn btn-success coursemap-listing__btn"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
          className: 'mr-2'
        }, "Start course"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_src_Components_Icons__WEBPACK_IMPORTED_MODULE_6__["ArrowRightIcon"], null))))));
      }))));
    }
  }]);

  return CoursesPage;
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

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(CoursesPage));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/courses\\courses")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=courses.js.fb6ca877956ed0ad1d01.hot-update.js.map