const withPlugins = require('next-compose-plugins');

const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass');
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

const { ENV } = process.env

dotenvLoad();

const env = ENV.trim() || 'development';

const envSpecifics = {
  development: {
    api: process.env.NEXT_PUBLIC_DEVELOPMENT_API_URL,
  },
  production: {
    api: process.env.NEXT_PUBLIC_PRODUCTION_API_URL,
  },
}[env];

module.exports = withPlugins(
	[
		[withTypescript],
		[withCSS],
		[withSass],
		[withBundleAnalyzer],
		[nextEnv()]
	],
	{
		publicRuntimeConfig: {
			envSpecifics
		},
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
				'/coursemap/index.html': { page: '/coursemap' },
				'/login/index.html': { page: '/login' },
				'/register/index.html': { page: '/register' },
				'/coursemap/who-am-i/index.html': { page: '/coursemap/module', query: { module: 'who-am-i' } },
				'/coursemap/my-magnificent-future/index.html': { page: '/coursemap/module', query: { module: 'my-magnificent-future' } },
				'/coursemap/my-plan4me/index.html': { page: '/coursemap/module', query: { module: 'my-plan4me' } },
				'/coursemap/financial-offense/index.html': { page: '/coursemap/module', query: { module: 'financial-offense' } },
				'/coursemap/financial-defense/index.html': { page: '/coursemap/module', query: { module: 'financial-defense' } },
				'/coursemap/fit-for-my-future/index.html': { page: '/coursemap/module', query: { module: 'fit-for-my-future' } },
				'/coursemap/who-am-i/lesson-1/index.html': { page: '/coursemap/module/lesson', query: { module: 'who-am-i', lesson: 'lesson-1' } },
				'/coursemap/who-am-i/lesson-2/index.html': { page: '/coursemap/module/lesson', query: { module: 'who-am-i', lesson: 'lesson-2' } },
				'/coursemap/who-am-i/lesson-3/index.html': { page: '/coursemap/module/lesson', query: { module: 'who-am-i', lesson: 'lesson-3' } },
				'/coursemap/who-am-i/lesson-4/index.html': { page: '/coursemap/module/lesson', query: { module: 'who-am-i', lesson: 'lesson-4' } },
				'/coursemap/who-am-i/lesson-5/index.html': { page: '/coursemap/module/lesson', query: { module: 'who-am-i', lesson: 'lesson-5' } },
				'/coursemap/my-magnificent-future/lesson-1/index.html': { page: '/coursemap/module/lesson', query: { module: 'my-magnificent-future', lesson: 'lesson-1' } },
				'/coursemap/my-magnificent-future/lesson-2/index.html': { page: '/coursemap/module/lesson', query: { module: 'my-magnificent-future', lesson: 'lesson-2' } },
				'/coursemap/my-magnificent-future/lesson-3/index.html': { page: '/coursemap/module/lesson', query: { module: 'my-magnificent-future', lesson: 'lesson-3' } },
				'/coursemap/my-magnificent-future/lesson-4/index.html': { page: '/coursemap/module/lesson', query: { module: 'my-magnificent-future', lesson: 'lesson-4' } },
				'/coursemap/my-magnificent-future/lesson-5/index.html': { page: '/coursemap/module/lesson', query: { module: 'my-magnificent-future', lesson: 'lesson-5' } },
				'/coursemap/my-magnificent-future/lesson-6/index.html': { page: '/coursemap/module/lesson', query: { module: 'my-magnificent-future', lesson: 'lesson-6' } },
				'/coursemap/my-magnificent-future/lesson-7/index.html': { page: '/coursemap/module/lesson', query: { module: 'my-magnificent-future', lesson: 'lesson-7' } },
				'/coursemap/my-plan4me/lesson-1/index.html': { page: '/coursemap/module/lesson', query: { module: 'my-plan4me', lesson: 'lesson-1' } },
				'/coursemap/my-plan4me/lesson-2/index.html': { page: '/coursemap/module/lesson', query: { module: 'my-plan4me', lesson: 'lesson-2' } },
				'/coursemap/my-plan4me/lesson-3/index.html': { page: '/coursemap/module/lesson', query: { module: 'my-plan4me', lesson: 'lesson-3' } },
				'/coursemap/my-plan4me/lesson-4/index.html': { page: '/coursemap/module/lesson', query: { module: 'my-plan4me', lesson: 'lesson-4' } },
				'/coursemap/my-plan4me/lesson-5/index.html': { page: '/coursemap/module/lesson', query: { module: 'my-plan4me', lesson: 'lesson-5' } },
				'/coursemap/my-plan4me/lesson-6/index.html': { page: '/coursemap/module/lesson', query: { module: 'my-plan4me', lesson: 'lesson-6' } },
				'/coursemap/financial-offense/lesson-1/index.html': { page: '/coursemap/module/lesson', query: { module: 'financial-offense', lesson: 'lesson-1' } },
				'/coursemap/financial-offense/lesson-2/index.html': { page: '/coursemap/module/lesson', query: { module: 'financial-offense', lesson: 'lesson-2' } },
				'/coursemap/financial-offense/lesson-3/index.html': { page: '/coursemap/module/lesson', query: { module: 'financial-offense', lesson: 'lesson-3' } },
				'/coursemap/financial-offense/lesson-4/index.html': { page: '/coursemap/module/lesson', query: { module: 'financial-offense', lesson: 'lesson-4' } },
				'/coursemap/financial-offense/lesson-5/index.html': { page: '/coursemap/module/lesson', query: { module: 'financial-offense', lesson: 'lesson-5' } },
				'/coursemap/financial-offense/lesson-6/index.html': { page: '/coursemap/module/lesson', query: { module: 'financial-offense', lesson: 'lesson-6' } },
				'/coursemap/financial-defense/lesson-1/index.html': { page: '/coursemap/module/lesson', query: { module: 'financial-defense', lesson: 'lesson-1' } },
				'/coursemap/financial-defense/lesson-2/index.html': { page: '/coursemap/module/lesson', query: { module: 'financial-defense', lesson: 'lesson-2' } },
				'/coursemap/financial-defense/lesson-3/index.html': { page: '/coursemap/module/lesson', query: { module: 'financial-defense', lesson: 'lesson-3' } },
				'/coursemap/financial-defense/lesson-4/index.html': { page: '/coursemap/module/lesson', query: { module: 'financial-defense', lesson: 'lesson-4' } },
				'/coursemap/financial-defense/lesson-5/index.html': { page: '/coursemap/module/lesson', query: { module: 'financial-defense', lesson: 'lesson-5' } },
				'/coursemap/financial-defense/lesson-6/index.html': { page: '/coursemap/module/lesson', query: { module: 'financial-defense', lesson: 'lesson-6' } },
				'/coursemap/fit-for-my-future/lesson-1/index.html': { page: '/coursemap/module/lesson', query: { module: 'fit-for-my-future', lesson: 'lesson-1' } },
				'/coursemap/fit-for-my-future/lesson-2/index.html': { page: '/coursemap/module/lesson', query: { module: 'fit-for-my-future', lesson: 'lesson-2' } },
				'/coursemap/fit-for-my-future/lesson-3/index.html': { page: '/coursemap/module/lesson', query: { module: 'fit-for-my-future', lesson: 'lesson-3' } },
				'/coursemap/fit-for-my-future/lesson-4/index.html': { page: '/coursemap/module/lesson', query: { module: 'fit-for-my-future', lesson: 'lesson-4' } },
				'/coursemap/fit-for-my-future/lesson-5/index.html': { page: '/coursemap/module/lesson', query: { module: 'fit-for-my-future', lesson: 'lesson-5' } },
				'/coursemap/fit-for-my-future/lesson-6/index.html': { page: '/coursemap/module/lesson', query: { module: 'fit-for-my-future', lesson: 'lesson-6' } },
				'/coursemap/fit-for-my-future/lesson-7/index.html': { page: '/coursemap/module/lesson', query: { module: 'fit-for-my-future', lesson: 'lesson-7' } },
			}
		}
	}
)