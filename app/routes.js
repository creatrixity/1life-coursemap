const routes = require('next-routes');

module.exports = routes()
  .add('/', '/home/index')
  .add('courses', 'courses')
  .add('/lesson/:course/:module/:lesson', 'lesson')
  .add('/course/:course', 'course')
  .add('/module/:course/:module', 'module')
  .add('/welcome', '/welcome')
  .add('/profile', '/profile')
  .add('/login', '/login')
  .add('/register', '/register');
