const withPlugins = require('next-compose-plugins');

const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass');
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const nextRuntimeDotenv = require('next-runtime-dotenv')

const withConfig = nextRuntimeDotenv({
	public: [
		'API_URL'
	]
})

module.exports = withPlugins(
	[
		[withTypescript],
		[withCSS],
		[withSass],
		[withBundleAnalyzer],
		[withConfig]
	],
	{
		analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
		analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
		bundleAnalyzerConfig: {
			server: {
				analyzerMode: 'static',
				reportFilename: '../bundles/server.html'
			},
			browser: {
				analyzerMode: 'static',
				reportFilename: '../bundles/client.html'
			}
		},

		exportPathMap: function() {
			return {
				'/index.html': { page: '/home' },
				'/welcome/index.html': { page: '/welcome' },
				'/roadmap/index.html': { page: '/roadmap' },
				'/login/index.html': { page: '/login' },
				'/register/index.html': { page: '/register' },
				'/roadmap/who-am-i/index.html': { page: '/roadmap/module', query: { module: 'who-am-i' } },
				'/roadmap/my-magnificent-future/index.html': { page: '/roadmap/module', query: { module: 'my-magnificent-future' } },
				'/roadmap/my-plan4me/index.html': { page: '/roadmap/module', query: { module: 'my-plan4me' } },
				'/roadmap/financial-offense/index.html': { page: '/roadmap/module', query: { module: 'financial-offense' } },
				'/roadmap/financial-defense/index.html': { page: '/roadmap/module', query: { module: 'financial-defense' } },
				'/roadmap/fit-for-my-future/index.html': { page: '/roadmap/module', query: { module: 'fit-for-my-future' } },
				'/roadmap/who-am-i/lesson-1/index.html': { page: '/roadmap/module/lesson', query: { module: 'who-am-i', lesson: 'lesson-1' } },
				'/roadmap/who-am-i/lesson-2/index.html': { page: '/roadmap/module/lesson', query: { module: 'who-am-i', lesson: 'lesson-2' } },
				'/roadmap/who-am-i/lesson-3/index.html': { page: '/roadmap/module/lesson', query: { module: 'who-am-i', lesson: 'lesson-3' } },
				'/roadmap/who-am-i/lesson-4/index.html': { page: '/roadmap/module/lesson', query: { module: 'who-am-i', lesson: 'lesson-4' } },
				'/roadmap/who-am-i/lesson-5/index.html': { page: '/roadmap/module/lesson', query: { module: 'who-am-i', lesson: 'lesson-5' } },
			}
		}
	}
)