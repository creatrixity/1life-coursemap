const routes = require('next-routes')();

routes
	.add('/', '/home/index')
	.add('/courses', '/courses/index')
	.add('/courses/:course', '/coursemap/index')
	.add('/courses/:course/:module', '/coursemap/module/index')
	.add('/courses/:course/:module/:lesson', '/coursemap/module/lesson')
	.add('/welcome', '/welcome')
	.add('/profile', '/profile')
	.add('/login', '/login')
	.add('/register', '/register')

module.exports = routes;