webpackHotUpdate("static\\development\\pages\\courses\\course\\module\\lesson.js",{

/***/ "./src/Selectors/ModuleSelectors.ts":
/*!******************************************!*\
  !*** ./src/Selectors/ModuleSelectors.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _EntitySelectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EntitySelectors */ "./src/Selectors/EntitySelectors.ts");





var getIsFetchingCourseModuleLessonView = function getIsFetchingCourseModuleLessonView(state) {
  return state.module.isFetchingCourseModuleLessonView;
};

var getIsFetchingCourseModuleLessons = function getIsFetchingCourseModuleLessons(state) {
  return state.module.isFetchingCourseModuleLessons;
};

var getCourseModuleLessons = function getCourseModuleLessons(moduleId) {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])([_EntitySelectors__WEBPACK_IMPORTED_MODULE_1__["default"].getEntities], function (entities) {
    var _ref = entities,
        modules = _ref.modules;
    return moduleId in modules ? modules[moduleId].lessons : [];
  });
};

var getCourseModuleNextLesson = function getCourseModuleNextLesson(moduleId, lessonId) {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])([getCourseModuleLessons(moduleId)], function (lessons) {
    var nextLesson = lessons.filter(function (lesson) {
      return lesson.id + 1 == lessonId;
    });
    return nextLesson.length ? nextLesson[0] : {};
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  getCourseModuleLessons: getCourseModuleLessons,
  getCourseModuleNextLesson: getCourseModuleNextLesson,
  getIsFetchingCourseModuleLessons: getIsFetchingCourseModuleLessons,
  getIsFetchingCourseModuleLessonView: getIsFetchingCourseModuleLessonView
});

/***/ })

})
//# sourceMappingURL=lesson.js.1eaa19cbf2d3e09a5299.hot-update.js.map