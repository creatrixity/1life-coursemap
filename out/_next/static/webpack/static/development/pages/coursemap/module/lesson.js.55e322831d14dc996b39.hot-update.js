webpackHotUpdate("static\\development\\pages\\coursemap\\module\\lesson.js",{

/***/ "./src/Components/JournalInput.tsx":
/*!*****************************************!*\
  !*** ./src/Components/JournalInput.tsx ***!
  \*****************************************/
/*! exports provided: JournalInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalInput", function() { return JournalInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LoadSpinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadSpinner */ "./src/Components/LoadSpinner/index.tsx");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icons */ "./src/Components/Icons/index.ts");
/* harmony import */ var react_rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-rating */ "./node_modules/react-rating/lib/react-rating.esm.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var SVGIcon = function SVGIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", {
    className: props.className,
    pointerEvents: "none"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
    xlinkHref: props.href
  }));
};

/**
 * Journal Input
 */
var JournalInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(JournalInput, _React$Component);

  function JournalInput(props) {
    var _this;

    _classCallCheck(this, JournalInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JournalInput).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      value: '',
      isSavingInput: false
    });

    _this.handleJournalInputChange = _this.handleJournalInputChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this._makeRequest = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["debounce"])(_this._makeRequest, 1000);
    return _this;
  }

  _createClass(JournalInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var value = this.props.value;
      this.setState({
        value: value
      });
    }
  }, {
    key: "renderRating",
    value: function renderRating(label) {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: 'd-flex align-items-center'
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
        className: 'w-70'
      }, label), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
        className: 'w-30'
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_rating__WEBPACK_IMPORTED_MODULE_4__["default"], {
        emptySymbol: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Icons__WEBPACK_IMPORTED_MODULE_3__["StarIcon"], null),
        fullSymbol: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Icons__WEBPACK_IMPORTED_MODULE_3__["StarIcon"], null)
      })));
    }
  }, {
    key: "handleJournalInputChange",
    value: function handleJournalInputChange(e) {
      var _e$currentTarget = e.currentTarget,
          type = _e$currentTarget.type,
          value = _e$currentTarget.value;
      var newValue;

      if (type === 'checkbox') {
        newValue = value === 'on' ? 'off' : 'on';
      } else {
        newValue = value;
      }

      this.setState({
        value: newValue
      });

      this._makeRequest(newValue);
    }
  }, {
    key: "_toggleSavingState",
    value: function _toggleSavingState() {
      this.setState(function (_ref) {
        var isSavingInput = _ref.isSavingInput;
        return {
          isSavingInput: !isSavingInput
        };
      });
    }
  }, {
    key: "_makeRequest",
    value: function _makeRequest(value) {
      var _this2 = this;

      var _this$props = this.props,
          onSaveJournalInput = _this$props.onSaveJournalInput,
          tag = _this$props.tag,
          label = _this$props.label;

      this._toggleSavingState();

      onSaveJournalInput({
        value: value,
        tag: tag,
        question: label
      }, function () {
        _this2._toggleSavingState();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          label = _this$props2.label,
          name = _this$props2.name,
          type = _this$props2.type,
          tag = _this$props2.tag,
          showLabel = _this$props2.showLabel;
      var _this$state = this.state,
          isSavingInput = _this$state.isSavingInput,
          value = _this$state.value;
      if (1) return this.renderRating(label);
      var remainingInputProps = {
        onChange: this.handleJournalInputChange,
        name: name
      };
      var inputTypes = {
        'input': react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", _extends({
          value: value
        }, remainingInputProps, {
          className: 'form-control-line w-100'
        })),
        'textarea': react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("textarea", _extends({
          value: value,
          placeholder: 'Please fill this'
        }, remainingInputProps, {
          className: 'form-control d-block w-100'
        })),
        'checkbox': react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", _extends({
          type: "checkbox",
          id: "journal-checkbox-".concat(tag),
          value: value,
          checked: value === 'on'
        }, remainingInputProps, {
          className: 'styled-checkbox'
        }))
      };
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: 'form-group'
      }, showLabel && type !== 'checkbox' && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
        className: 'label d-flex align-items-center',
        style: {
          fontSize: '90%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: 'mr-2'
      }, label), isSavingInput && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_LoadSpinner__WEBPACK_IMPORTED_MODULE_2__["default"], {
        width: '16px',
        height: '16px',
        color: '#77b02a'
      })), inputTypes[type], showLabel && type === 'checkbox' && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
        htmlFor: "journal-checkbox-".concat(tag)
      }, label));
    }
  }]);

  return JournalInput;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(JournalInput, "defaultProps", {
  onSaveJournalInput: function onSaveJournalInput() {}
});

/***/ })

})
//# sourceMappingURL=lesson.js.55e322831d14dc996b39.hot-update.js.map