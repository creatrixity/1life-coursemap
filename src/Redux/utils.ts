/**
 * Returns the user authentication token.
 * 
 * @returns {Object | null}
 */
export function getToken () {
  const token =  window.localStorage.getItem('token');

  if (!token) return null;

  return JSON.parse(token).token;
}

/**
 * Returns the user authentication token.
 * 
 * @returns {Object | null}
 */
export function getUser () {
  const user =  window.localStorage.getItem('user');

  if (!user) return null;

  return JSON.parse(user).user;
}

/**
 * Returns the user authentication token.
 * 
 * @returns {Object | null}
 */
export function getModulesData () {
  // const modulesData =  window.localStorage.getItem('modulesData');

  // if (!modulesData) {
    const data = require('../../pages/coursemap/module/data.ts').default;
    
    return data;
  // };

  // return JSON.parse(modulesData);
}