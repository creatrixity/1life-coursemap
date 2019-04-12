webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/Redux/Reducers/app.ts":
/*!***********************************!*\
  !*** ./src/Redux/Reducers/app.ts ***!
  \***********************************/
/*! exports provided: AppReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppReducer", function() { return AppReducer; });
/* harmony import */ var _Definations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Definations */ "./src/Definations/index.ts");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var roadmapModules = {
  "who-am-i": {
    "id": 1,
    "title": "Who Am I?",
    "nextModule": "my-magnificent-future",
    "lessons": {
      "1": {
        "title": "Who am I? Roadmap Journey Starts here!",
        "type": "lesson"
      },
      "2": {
        "title": "My Life Balance Wheel",
        "type": "tool"
      },
      "3": {
        "title": "My DISC Index",
        "type": "tool"
      },
      "4": {
        "title": "My Miracle Morning",
        "type": "tool"
      },
      "5": {
        "title": "Who am I?: Wrap Up",
        "type": "lesson"
      }
    }
  },
  "my-magnificent-future": {
    "id": 2,
    "title": "My Magnificent Future",
    "nextModule": "my-plan4me",
    "lessons": {
      "1": {
        "title": "My Magnificent Future! Turning Dreams into Reality",
        "type": "lesson"
      },
      "2": {
        "title": "My 1Life Fully Lived Portrait",
        "type": "tool"
      },
      "3": {
        "title": "Tool #2: Discover Your Deepest WHYs",
        "type": "tool"
      },
      "4": {
        "title": "Tool #3: My Personal Board of Directors",
        "type": "tool"
      },
      "5": {
        "title": "Tool #4: My Transition Story",
        "type": "tool"
      },
      "6": {
        "title": "My Magnificent Future: Wrap up",
        "type": "lesson"
      },
      "7": {
        "title": "Next Time…",
        "type": "lesson"
      }
    }
  },
  "my-plan4me": {
    "id": 3,
    "title": "My Plan4Me!",
    "nextModule": "financial-offense",
    "lessons": {
      "1": {
        "title": "My Plan4Me! Journey Preparation",
        "type": "lesson"
      },
      "2": {
        "title": "My DISC Index",
        "type": "tool"
      },
      "3": {
        "title": "Tool #2: 1 Year Plan",
        "type": "tool"
      },
      "4": {
        "title": "Tool #3: Putting It All Together",
        "type": "tool"
      },
      "5": {
        "title": "My Plan4Me Wrap up",
        "type": "lesson"
      },
      "6": {
        "title": "Next Time…",
        "type": "lesson"
      }
    }
  },
  "financial-offense": {
    "id": 4,
    "title": "Module 4: Financial Offense",
    "nextModule": "financial-defense",
    "lessons": {
      "1": {
        "title": "Welcome to Finances!",
        "type": "lesson"
      },
      "2": {
        "title": "Welcome to Finances!",
        "type": "lesson"
      },
      "3": {
        "title": "Tool #2: Welcome to Finances!",
        "type": "tool"
      },
      "4": {
        "title": "Tool #3: Maximizing My Income",
        "type": "tool"
      },
      "5": {
        "title": "Financial Offense: Wrap up",
        "type": "lesson"
      },
      "6": {
        "title": "Next Time…",
        "type": "lesson"
      }
    }
  },
  "financial-defense": {
    "id": 5,
    "title": "Module 5: Financial Defense!",
    "nextModule": "fit-for-my-future",
    "lessons": {
      "1": {
        "title": "Introduction: Financial Defense",
        "type": "lesson"
      },
      "2": {
        "title": "Tool #1: Creating a Budget!",
        "type": "lesson"
      },
      "3": {
        "title": "Tool #2: Debt Reduction and Investment Basics",
        "type": "lesson"
      },
      "4": {
        "title": "Tool #3: Sprint and Marathon Plan",
        "type": "lesson"
      },
      "5": {
        "title": "Module 5: Wrap up",
        "type": "lesson"
      },
      "6": {
        "title": "Next Time…",
        "type": "lesson"
      }
    }
  },
  "fit-for-my-future": {
    "id": 6,
    "title": "Module 6: Fit For My Future!",
    "nextModule": null,
    "lessons": {
      "1": {
        "title": "Fit For My Future!",
        "type": "lesson"
      },
      "2": {
        "title": "Tool #1: Fuel for My Future",
        "type": "tool"
      },
      "3": {
        "title": "Tool #2: The Magnificence of Movement",
        "type": "tool"
      },
      "4": {
        "title": "Tool #3: Mindset",
        "type": "tool"
      },
      "5": {
        "title": "Tool #4: Sleep and Systems for Success",
        "type": "tool"
      },
      "6": {
        "title": "Wrap up Module 6",
        "type": "lesson"
      },
      "7": {
        "title": "Final Thoughts – for now!",
        "type": "lesson"
      }
    }
  }
  /**
   * INITIAL_STATE
  */

};
var INITIAL_STATE = {
  prevPathDepth: 0,
  hasRequestError: false,
  isUpdatingUserLesson: false,
  isFetchingRoadmapModules: false,
  roadmapModules: roadmapModules,
  roadmapModulesContent: {}
};

/**
 * REDUCER
*/
var AppReducer = function AppReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _Definations__WEBPACK_IMPORTED_MODULE_0__["ActionConsts"].App.SetReducer:
      return _objectSpread({}, state, action.payload);

    case _Definations__WEBPACK_IMPORTED_MODULE_0__["ActionConsts"].App.ResetReducer:
      return INITIAL_STATE;

    default:
      return state;
  }
};

/***/ })

})
//# sourceMappingURL=_app.js.9ad1a969d7c6463e99da.hot-update.js.map