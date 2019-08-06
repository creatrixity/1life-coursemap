webpackHotUpdate("static\\development\\pages\\courses\\course\\module.js",{

/***/ "./src/Helpers/index.ts":
/*!******************************!*\
  !*** ./src/Helpers/index.ts ***!
  \******************************/
/*! exports provided: compose, computeModulesProgression, extractIdFromSlug, extractSlugFromString, findRoutePathDepth, sleep, slugify, toTitleCase, pipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeModulesProgression", function() { return computeModulesProgression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractIdFromSlug", function() { return extractIdFromSlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractSlugFromString", function() { return extractSlugFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findRoutePathDepth", function() { return findRoutePathDepth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleep", function() { return sleep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slugify", function() { return slugify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toTitleCase", function() { return toTitleCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });


var toSlug = __webpack_require__(/*! slugify */ "./node_modules/slugify/index.js");
/**
 * Functional programming utility that passes a series of arguments
 * one at a time to a series of functions.
 * 
 * @param {Array<Function>} fns - Functions to receive argument fixtures
 * @param {Any} x - The fixed argument to be supplied
 * @return {Function} - Receives the fixed argument to be processed.
 */


var compose = function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduceRight(function (prev, fn) {
      return fn(prev);
    }, x);
  };
};
/**
 * CPM is short for CallPrototypeMethod.
 * It invokes the provided method on the arg object's prototype
 */


var cpm = function cpm(method) {
  for (var _len2 = arguments.length, methodArgs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    methodArgs[_key2 - 1] = arguments[_key2];
  }

  return function (arg) {
    return arg[method](methodArgs);
  };
};
/**
 * Calculates the level of progression within a module.
 * 
 * @param {Array<Object>} lessons 
 * @param {Number} lessonsCount 
 */


function computeModulesProgression(lessons, lessonsCount) {
  var totalProgressions = lessons.reduce(function (previousTotalProgression, currentLesson) {
    return previousTotalProgression + currentLesson.progression;
  }, 0);
  var total = totalProgressions / lessonsCount;
  return parseInt(total);
}
/**
 * Returns the depth of a route path string.
 * 
 * @param {String} routePathString - The path string to resolve.
 * @returns Number;
 */


function findRoutePathDepth(routePathString) {
  return routePathString.split('/').filter(function (pathFragment) {
    return pathFragment !== '';
  }).length;
}
/**
 * Pauses execution for a specified number of miliseconds.
 * @param {Number} timeInMiliseconds - Sleep period
 * @returns Promise<any>
 */


var sleep = function sleep(timeInMiliseconds) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, timeInMiliseconds);
  });
};
/**
 * Functional programming utility that passes a series of arguments
 * one at a time to a series of functions.
 * 
 * @param {Array<Function>} fns - Functions to receive argument fixtures
 * @param {Any} x - The fixed argument to be supplied
 * @return {Function} - Receives the fixed argument to be processed.
 */


var pipe = function pipe() {
  for (var _len3 = arguments.length, fns = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    fns[_key3] = arguments[_key3];
  }

  return function (x) {
    return fns.reduce(function (prev, fn) {
      return fn(prev);
    }, x);
  };
};
/**
 * Returns a slug for a given string.
 * @param {String} str - String to be slugified.
 */


var slugify = function slugify(str) {
  return toSlug(str.toLowerCase(), {
    remove: /[*+~.()'"!?:@]/g
  });
};

var bifurcateSlug = function bifurcateSlug(slug, index) {
  var slugFragment = slug.substring(0, index);
  var idFragment = slug.substring(index + 1, slug.length);
  return [slugFragment, idFragment];
};

var slugExtractor = function slugExtractor(slug, cb) {
  return pipe(cpm('lastIndexOf', '-'), parseInt, cb)(slug);
};
/**
 * Extracts an id from a given slug.
 * @param {String} slug - String to extract id from.
 */


var extractIdFromSlug = function extractIdFromSlug(slug) {
  var extractId = function extractId(index) {
    return bifurcateSlug(slug, index)[1];
  };

  return slugExtractor(slug, extractId);
};
/**
 * Extracts the slug from a given string.
 * @param {String} slug - String to extract slug from.
 */


var extractSlugFromString = function extractSlugFromString(slug) {
  var extractSlug = function extractSlug(index) {
    return bifurcateSlug(slug, index)[0];
  };

  return slugExtractor(slug, extractSlug);
};

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}



/***/ })

})
//# sourceMappingURL=module.js.a75d9a03724b7b12511e.hot-update.js.map