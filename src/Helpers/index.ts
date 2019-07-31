'use strict';

var toSlug = require('slugify')

/**
 * Functional programming utility that passes a series of arguments
 * one at a time to a series of functions.
 * 
 * @param {Array<Function>} fns - Functions to receive argument fixtures
 * @param {Any} x - The fixed argument to be supplied
 * @return {Function} - Receives the fixed argument to be processed.
 */
const compose = (...fns:Function[]) => (x:any) => fns.reduceRight((prev, fn) => fn(prev), x)

/**
 * CPM is short for CallPrototypeMethod.
 * It invokes the provided method on the arg object's prototype
 */
const cpm = (method:string, ...methodArgs:any) => (arg:any) => arg[method](methodArgs)

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
  
  const total = totalProgressions / lessonsCount;
  return total === Infinity ? 0: total;
}

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
 * Pauses execution for a specified number of miliseconds.
 * @param {Number} timeInMiliseconds - Sleep period
 * @returns Promise<any>
 */
const sleep = (timeInMiliseconds:number) => new Promise((resolve) => setTimeout(resolve, timeInMiliseconds))

/**
 * Functional programming utility that passes a series of arguments
 * one at a time to a series of functions.
 * 
 * @param {Array<Function>} fns - Functions to receive argument fixtures
 * @param {Any} x - The fixed argument to be supplied
 * @return {Function} - Receives the fixed argument to be processed.
 */
const pipe = (...fns:Function[]) => (x:any) => fns.reduce((prev, fn) => fn(prev), x)

/**
 * Returns a slug for a given string.
 * @param {String} str - String to be slugified.
 */
const slugify = (str:String) => {
  return toSlug(str.toLowerCase(), {remove: /[*+~.()'"!?:@]/g})
}

const bifurcateSlug = (slug:string, index:number) => {
  const slugFragment = slug.substring(0, index);
  const idFragment = slug.substring(index + 1, slug.length);

  return [slugFragment, idFragment]
}

const slugExtractor = (slug:string, cb:Function) => pipe(
  cpm('lastIndexOf', '-'),
  parseInt,
  cb
)(slug)

/**
 * Extracts an id from a given slug.
 * @param {String} slug - String to extract id from.
 */
const extractIdFromSlug = (slug:string) => {
  const extractId = (index:number) => bifurcateSlug(slug, index)[1]
  return slugExtractor(slug, extractId)
}

/**
 * Extracts the slug from a given string.
 * @param {String} slug - String to extract slug from.
 */
const extractSlugFromString = (slug:string) => {
  const extractSlug = (index:number) => bifurcateSlug(slug, index)[0]
  return slugExtractor(slug, extractSlug)
}

function toTitleCase(str:string) {
  return str.replace(
      /\w\S*/g,
      (txt:string) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

export {
  compose,
  computeModulesProgression,
  extractIdFromSlug,
  extractSlugFromString,
  findRoutePathDepth,
  sleep,
  slugify,
  toTitleCase,
  pipe
}