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
    console.log({
      modules: modules
    });
    return moduleId in modules ? modules[moduleId].lessons : [];
  });
};

var getCourseModuleNextLesson = function getCourseModuleNextLesson(moduleId, lessonId) {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])([getCourseModuleLessons(moduleId)], function (lessons) {
    var nextLesson = lessons.filter(function (lesson) {
      return lesson.id == Number(lessonId) + 1;
    });
    return nextLesson.length ? nextLesson[0] : {};
  });
};

var getCourseModuleLessonsCount = function getCourseModuleLessonsCount(moduleId) {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])([_EntitySelectors__WEBPACK_IMPORTED_MODULE_1__["default"].getEntities], function (entities) {
    var _ref2 = entities,
        modules = _ref2.modules;
    return moduleId in modules ? modules[moduleId].lessons.length : 0;
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  getCourseModuleLessons: getCourseModuleLessons,
  getCourseModuleNextLesson: getCourseModuleNextLesson,
  getIsFetchingCourseModuleLessons: getIsFetchingCourseModuleLessons,
  getCourseModuleLessonsCount: getCourseModuleLessonsCount,
  getIsFetchingCourseModuleLessonView: getIsFetchingCourseModuleLessonView
});

/***/ })

})
//# sourceMappingURL=lesson.js.4c832770add3ab1d521d.hot-update.js.map