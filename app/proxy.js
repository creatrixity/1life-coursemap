export default devProxy = {
	'/api': {
		target: 'http://134.209.63.107/api/',
		pathRewrite: { '^/api': '/' },
		changeOrigin: true
	}
}