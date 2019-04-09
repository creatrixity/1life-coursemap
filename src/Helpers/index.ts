'use strict';

/**
 * Returns the depth of a route path string.
 * 
 * @param {String} routePathString - The path string to resolve.
 * @returns Number;
 */
function findRoutePathDepth (routePathString:any) {
  return routePathString
          .split('/')
          .filter((pathFragment:any) => { return pathFragment !== ''})
          .length;
}

/**
 * Calculates the level of progression within a module.
 * 
 * @param {Array<Object>} lessons 
 * @param {Number} lessonsCount 
 */
function computeModulesProgression (lessons:[], lessonsCount:number) {
  const totalProgressions = lessons.reduce((previousTotalProgression:any, currentLesson:any) => {
    return (previousTotalProgression) + currentLesson.progression
  }, 0);
  
  return totalProgressions / lessonsCount;
}

export {
  computeModulesProgression,
  findRoutePathDepth
}