webpackHotUpdate("static\\development\\pages\\courses.js",{

/***/ "./src/Components/Nav/index.tsx":
/*!**************************************!*\
  !*** ./src/Components/Nav/index.tsx ***!
  \**************************************/
/*! exports provided: Nav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.scss */ "./src/Components/Nav/header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var Nav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav(props) {
    var _this;

    _classCallCheck(this, Nav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Nav).call(this, props));
    _this.state = {
      isMenuOpen: false
    };
    _this.onMenuToggle = _this.onMenuToggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Nav, [{
    key: "onMenuToggle",
    value: function onMenuToggle() {
      this.setState(function (_ref) {
        var isMenuOpen = _ref.isMenuOpen;
        return {
          isMenuOpen: !isMenuOpen
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isMenuOpen = this.state.isMenuOpen;
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "w-100",
        style: {
          height: isMenuOpen ? '200px' : '0',
          overflowY: 'hidden',
          transition: 'height 0.5s ease'
        },
        id: "navbarToggleExternalContent"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "bg-dark p-4"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", {
        className: "text-white text-center h5 mb-4"
      }, "Menu"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
        className: "nav mr-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/courses"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
        className: "nav-link nav-link-bg text-light mb-1 text-center w-100"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
        className: "fa fa-book mr-2"
      }), "All courses")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/profile"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
        className: "nav-link nav-link-bg text-light text-center w-100"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
        className: "fa fa-user mr-2"
      }), "My profile"))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("nav", {
        className: 'navbar navbar-light w-100 bg-white mb-4 d-flex'
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: 'navbar-brand mb-0',
        style: {
          flex: 3
        }
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
        className: 'img',
        width: 50,
        src: '/static/img/splashLogo.webp',
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
        onClick: this.onMenuToggle,
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarToggleExternalContent",
        "aria-controls": "navbarToggleExternalContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: "navbar-toggler-icon"
      }))))));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

})
//# sourceMappingURL=courses.js.eefa23f883e4078ec63a.hot-update.js.map