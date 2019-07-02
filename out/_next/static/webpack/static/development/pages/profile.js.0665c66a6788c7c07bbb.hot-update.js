webpackHotUpdate("static\\development\\pages\\profile.js",{

/***/ "./pages/profile/profile.tsx":
/*!***********************************!*\
  !*** ./pages/profile/profile.tsx ***!
  \***********************************/
/*! exports provided: ProfilePage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_Actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/Actions */ "./src/Actions/index.ts");
/* harmony import */ var _profile_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.scss */ "./pages/profile/profile.scss");
/* harmony import */ var _profile_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_profile_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_Components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/Components */ "./src/Components/index.ts");
/* harmony import */ var _src_Components_Icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/Components/Icons */ "./src/Components/Icons/index.ts");
/* harmony import */ var _src_Components_Nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/Components/Nav */ "./src/Components/Nav/index.tsx");
/* harmony import */ var _src_Redux_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../src/Redux/utils */ "./src/Redux/utils.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var ProfilePage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProfilePage, _React$Component);

  function ProfilePage(props) {
    _classCallCheck(this, ProfilePage);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProfilePage).call(this, props));
  }

  _createClass(ProfilePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!Object(_src_Redux_utils__WEBPACK_IMPORTED_MODULE_10__["getToken"])()) return this.props.router.push('/login');
      var user = Object(_src_Redux_utils__WEBPACK_IMPORTED_MODULE_10__["getUser"])();
      console.log(user);

      if (user) {
        this.props.getUserModules({
          userId: user.id,
          courseId: 2
        }, function (userModules) {
          console.log(userModules);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var user = this.props.user.authenticatedUser;
      var coursemapModules = this.props.app.coursemapModules;
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "d-flex flex-column"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "My Profile | 1Life")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_src_Components_Nav__WEBPACK_IMPORTED_MODULE_9__["Nav"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
        className: 'd-flex flex-column w-100 justify-content-center mb-5 py-5 px-3'
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: 'profile-screen__header text-center mb-4'
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
        className: 'profile-screen__title font-weight-bold text-black-50 mb-3 h3'
      }, "My Profile"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
        className: 'profile-screen__avatar mb-3 rounded-circle d-flex justify-content-center align-items-center'
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_src_Components_Icons__WEBPACK_IMPORTED_MODULE_8__["UserIcon"], {
        fill: '#77B02A'
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
        className: 'text-brand h5'
      }, user ? user.name : ''), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
        className: 'mb-3 d-flex flex-row justify-content-center'
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_src_Components__WEBPACK_IMPORTED_MODULE_7__["StarsCast"], null))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: 'profile-screen__section text-center mb-4'
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
        className: 'profile-screen__title font-weight-bold text-black-50 mb-3 h3'
      }, "Roadmap Progress"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
        className: 'lead mb-4'
      }, "Track your progress. Reflect on your progress on each module.")), Object.keys(coursemapModules).map(function (course, i) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: 'mb-3',
          key: i
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
          className: 'h5'
        }, coursemapModules[course].title), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: 'container'
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
          className: 'list list-unstyled'
        }, Object.keys(coursemapModules[course].modules).map(function (module, k) {
          return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
            key: k,
            className: 'mb-2'
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
            className: 'd-flex'
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: '/home'
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
            className: 'w-75 mr-2 text-brand'
          }, coursemapModules[course].modules[module].title)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: 'w-20 d-flex align-items-center'
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_src_Components__WEBPACK_IMPORTED_MODULE_7__["StarsCast"], {
            progression: 50
          }))));
        }))));
      })));
    }
  }]);

  return ProfilePage;
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
    getUserModules: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_src_Actions__WEBPACK_IMPORTED_MODULE_5__["AppActions"].getUserModules, dispatch),
    Map: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_src_Actions__WEBPACK_IMPORTED_MODULE_5__["HomeActions"].Map, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(ProfilePage));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/profile\\profile")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=profile.js.0665c66a6788c7c07bbb.hot-update.js.map