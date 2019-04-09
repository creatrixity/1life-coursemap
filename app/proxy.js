export default devProxy = {
	'/api': {
		target: 'http://localhost:3333/api/',
		pathRewrite: { '^/api': '/' },
		changeOrigin: true
	}
}