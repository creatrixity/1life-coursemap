webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/Helpers/index.ts":
/*!******************************!*\
  !*** ./src/Helpers/index.ts ***!
  \******************************/
/*! exports provided: computeModulesProgression, findRoutePathDepth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeModulesProgression", function() { return computeModulesProgression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findRoutePathDepth", function() { return findRoutePathDepth; });

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
 * Calculates the level of progression within a module.
 * 
 * @param {Array<Object>} lessons 
 * @param {Number} lessonsCount 
 */


function computeModulesProgression(lessons, lessonsCount) {
  var totalProgressions = lessons.reduce(function (previousTotalProgression, currentLesson) {
    return previousTotalProgression + currentLesson.progression;
  }, 0);
  return totalProgressions / lessonsCount;
}



/***/ })

})
//# sourceMappingURL=_app.js.916da80ff629b8745a2f.hot-update.js.map