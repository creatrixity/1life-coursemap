const routes = require('next-routes')();

routes
	.add('/', '/home/index')
	.add('/courses', '/courses/index')
	.add('/courses/:course', '/courses/course/index')
	.add('/courses/:course/:module', '/courses/course/module/index')
	.add('/courses/:course/:module/:lesson', '/courses/course/module/lesson')
	.add('/welcome', '/welcome')
	.add('/profile', '/profile')
	.add('/login', '/login')
	.add('/register', '/register')

module.exports = routes;