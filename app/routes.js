const routes = require('next-routes')();

routes
	.add('/', '/home/index')
	.add('/roadmap', '/roadmap/index')
	.add('/roadmap/:module', '/roadmap/module/index')
	.add('/roadmap/:module/:lesson', '/roadmap/module/lesson')
	.add('/welcome', '/welcome')
	.add('/profile', '/profile')
	.add('/login', '/login')
	.add('/register', '/register')

module.exports = routes;