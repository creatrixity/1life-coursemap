webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/decode-uri-component/index.js":
/*!****************************************************!*\
  !*** ./node_modules/decode-uri-component/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ "./node_modules/query-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/query-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "./node_modules/strict-uri-encode/index.js");
const decodeComponent = __webpack_require__(/*! decode-uri-component */ "./node_modules/decode-uri-component/index.js");
const splitOnFirst = __webpack_require__(/*! split-on-first */ "./node_modules/split-on-first/index.js");

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return key => (result, value) => {
				const index = result.length;
				if (value === undefined) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[', index, ']'].join('')];
				}

				return [
					...result,
					[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
				];
			};

		case 'bracket':
			return key => (result, value) => {
				if (value === undefined) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[]'].join('')];
				}

				return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
			};

		case 'comma':
			return key => (result, value, index) => {
				if (value === null || value === undefined || value.length === 0) {
					return result;
				}

				if (index === 0) {
					return [[encode(key, options), '=', encode(value, options)].join('')];
				}

				return [[result, encode(value, options)].join(',')];
			};

		default:
			return key => (result, value) => {
				if (value === undefined) {
					return result;
				}

				if (value === null) {
					return [...result, encode(key, options)];
				}

				return [...result, [encode(key, options), '=', encode(value, options)].join('')];
			};
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index':
			return (key, value, accumulator) => {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return (key, value, accumulator) => {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		case 'comma':
			return (key, value, accumulator) => {
				const isArray = typeof value === 'string' && value.split('').indexOf(',') > -1;
				const newValue = isArray ? value.split(',') : value;
				accumulator[key] = newValue;
			};

		default:
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function removeHash(input) {
	const hashStart = input.indexOf('#');
	if (hashStart !== -1) {
		input = input.slice(0, hashStart);
	}

	return input;
}

function extract(input) {
	input = removeHash(input);
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}

	return input.slice(queryStart + 1);
}

function parse(input, options) {
	options = Object.assign({
		decode: true,
		sort: true,
		arrayFormat: 'none',
		parseNumbers: false,
		parseBooleans: false
	}, options);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof input !== 'string') {
		return ret;
	}

	input = input.trim().replace(/^[?#&]/, '');

	if (!input) {
		return ret;
	}

	for (const param of input.split('&')) {
		let [key, value] = splitOnFirst(param.replace(/\+/g, ' '), '=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : decode(value, options);

		if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
			value = Number(value);
		} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
			value = value.toLowerCase() === 'true';
		}

		formatter(decode(key, options), value, ret);
	}

	if (options.sort === false) {
		return ret;
	}

	return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
		const value = ret[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (object, options) => {
	if (!object) {
		return '';
	}

	options = Object.assign({
		encode: true,
		strict: true,
		arrayFormat: 'none'
	}, options);

	const formatter = encoderForArrayFormat(options);
	const keys = Object.keys(object);

	if (options.sort !== false) {
		keys.sort(options.sort);
	}

	return keys.map(key => {
		const value = object[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			return value
				.reduce(formatter(key), [])
				.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(x => x.length > 0).join('&');
};

exports.parseUrl = (input, options) => {
	return {
		url: removeHash(input).split('?')[0] || '',
		query: parse(extract(input), options)
	};
};


/***/ }),

/***/ "./node_modules/split-on-first/index.js":
/*!**********************************************!*\
  !*** ./node_modules/split-on-first/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = (string, separator) => {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (separator === '') {
		return [string];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [string];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
};


/***/ }),

/***/ "./node_modules/strict-uri-encode/index.js":
/*!*************************************************!*\
  !*** ./node_modules/strict-uri-encode/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),

/***/ "./src/Redux/api.ts":
/*!**************************!*\
  !*** ./src/Redux/api.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Actions */ "./src/Actions/index.ts");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/Redux/utils.ts");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/config */ "./node_modules/next/config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_3__);





var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_3___default()(),
    envSpecifics = _getConfig.publicRuntimeConfig.envSpecifics;

var hostAddress = envSpecifics.api;

function prefixHostAddress(url) {
  return "".concat(hostAddress).concat(url);
}
/**
 * Creates a user http request.
 */


function createUser(user) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(prefixHostAddress('/v1/register'), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
}
/**
 * Creates an entry in the journal.
 */


function createJournalFeedback(payload) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(prefixHostAddress('/v1/feedback'), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });
}
/**
 * Fetches journal feedback
 */


function getJournalFeedback(payload) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(prefixHostAddress('/v1/feedback/getFeedback'), {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(_utils__WEBPACK_IMPORTED_MODULE_2__["getToken"]())
    },
    body: JSON.stringify(payload)
  });
}
/**
 * Updates a user module.
 */


function updateUserModule(payload) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(prefixHostAddress('/v1/modules/updateUserModule'), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(_utils__WEBPACK_IMPORTED_MODULE_2__["getToken"]())
    },
    body: JSON.stringify(payload)
  });
}
/**
 * Creates a user http request.
 */


function updateUserLesson(payload) {
  var qs = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(prefixHostAddress("/v1/modules/updateUserLesson?".concat(qs.stringify(payload))), {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(_utils__WEBPACK_IMPORTED_MODULE_2__["getToken"]())
    }
  });
}
/**
 * Creates a user http request.
 */


function getUserLessons(payload) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(prefixHostAddress('/v1/modules/getUserLessons'), {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(_utils__WEBPACK_IMPORTED_MODULE_2__["getToken"]())
    },
    body: JSON.stringify(payload)
  });
}
/**
 * Creates a user http request.
 */


function getUserModules(payload) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(prefixHostAddress('/v1/modules/getUserModules'), {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(_utils__WEBPACK_IMPORTED_MODULE_2__["getToken"]())
    },
    body: JSON.stringify(payload)
  });
}
/**
 * Fetches the lesson view for a course module
 * @param {Object} payload
 * @returns Promise<Object>
 */


function fetchCourseModuleLessonView(payload) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(prefixHostAddress('/v1/fetchModuleLessonView'), {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(_utils__WEBPACK_IMPORTED_MODULE_2__["getToken"]())
    },
    body: JSON.stringify(payload)
  });
}
/**
 * Fetches the lesson view for a course module
 * @param {Object} payload
 * @returns Promise<Object>
 */


function fetchLessonsByModuleId(payload) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(prefixHostAddress("/v1/modules/".concat(payload.moduleId)), {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(_utils__WEBPACK_IMPORTED_MODULE_2__["getToken"]())
    },
    body: JSON.stringify(payload)
  });
}
/**
 * Creates a HTTP request that fetches a collection of courses.
 * @returns Promise<Object>
 */


function fetchCourses() {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(prefixHostAddress('/v1/courses'), {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
}
/**
 * Creates a HTTP request that fetches a collection of courses.
 * @returns Promise<Object>
 */


function fetchCourseModules(courseId) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(prefixHostAddress("/v1/courses/".concat(courseId, "/modules")), {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
}
/**
 * Creates a user http request.
 */


function authenticateUser(user) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(prefixHostAddress('/v1/login'), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
}
/**
 * Checks the status of a request.
 * 
 * @param {Object} response
 */


function checkStatus(response) {
  if (response.status >= 200 && response.status < 401) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(response);
  }
}
/**
 * Sets an auth token.
 * 
 * @param {Object<Response>} response
 * @return {Object<Response>}
 */


function setToken(response) {
  if (response.credentials) {
    localStorage.setItem('token', JSON.stringify({
      token: response.credentials.token
    }));
    localStorage.setItem('refreshToken', JSON.stringify({
      refreshToken: response.credentials.refreshToken
    }));
  }

  return response;
}
/**
 * Sets the auth user.
 * 
 * @param {Object<Response>} response
 * @return {Object<Response>}
 */


function setUser(response) {
  if (response.user) {
    localStorage.setItem('user', JSON.stringify({
      user: response.user
    }));
  }

  return response;
}
/**
 * Checks the status of a request.
 * 
 * @param {Object} response
 */


function errorHandler(dispatch, e) {
  console.log('Sorry, we encountered an error trying to process your request. Please try again.');
  dispatch(_Actions__WEBPACK_IMPORTED_MODULE_0__["AppActions"].Map({
    hasRequestError: true
  }));
}

function toText(response) {
  return response.text();
}

function toJSON(response) {
  return response.json();
}

/* harmony default export */ __webpack_exports__["default"] = ({
  authenticateUser: authenticateUser,
  createJournalFeedback: createJournalFeedback,
  getJournalFeedback: getJournalFeedback,
  createUser: createUser,
  checkStatus: checkStatus,
  errorHandler: errorHandler,
  fetchCourses: fetchCourses,
  fetchCourseModules: fetchCourseModules,
  fetchCourseModuleLessonView: fetchCourseModuleLessonView,
  fetchLessonsByModuleId: fetchLessonsByModuleId,
  getUserLessons: getUserLessons,
  getUserModules: getUserModules,
  setToken: setToken,
  setUser: setUser,
  toText: toText,
  toJSON: toJSON,
  updateUserModule: updateUserModule,
  updateUserLesson: updateUserLesson
});

/***/ })

})
//# sourceMappingURL=_app.js.1a58dc7bc58c79b9d201.hot-update.js.map