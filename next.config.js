'use strict';

const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass');
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withOffline = require('next-offline')
const withManifest = require('next-manifest');

const withPlugins = require('next-compose-plugins');
const nextEnv = require('next-env');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const dotenvLoad = require('dotenv-load');

const { ENV } = process.env

dotenvLoad();

const env = ENV in process ? ENV.trim(): 'development';

const envSpecifics = {
  development: {
    api: process.env.NEXT_PUBLIC_DEVELOPMENT_API_URL,
  },
  production: {
    api: process.env.NEXT_PUBLIC_PRODUCTION_API_URL,
  },
}[env];

const workboxOpts = {
	runtimeCaching: [
		{
			urlPattern: '/',
			handler: 'NetworkFirst',
			options: {
				cacheableResponse: {
					status: [0, 200]
				}
			}
		},
		{
			urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
			handler: 'CacheFirst',
			options: {
				cacheName: 'image-cache',
				cacheableResponse: {
					status: [0, 200]
				}
			}
		},
		{
			urlPattern: /.*\.(?:css|js)/,
			handler: 'NetworkFirst',
			options: {
				cacheName: 'assets-cache',
				cacheableResponse: {
					status: [0, 200]
				}
			}
		},
		{
			urlPattern: /api/,
			handler: 'NetworkFirst',
			options: {
				cacheableResponse: {
					status: [0, 200]
				}
			}
		},
	]
}

module.exports = withPlugins(
	[
		[withTypescript],
		[withCSS],
		[withSass],
		[withOffline],
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
				'/profile/index.html': { page: '/profile' },
				'/courses/index.html': { page: '/courses' },
				'/courses/1life-digital-academy-1/index.html': { page: '/courses/course', query: { course: '1life-digital-academy-1' } },
				'/login/index.html': { page: '/login' },
				'/register/index.html': { page: '/register' },
				'/courses/1life-digital-academy-1/who-am-i-1/index.html': { page: '/courses/course/module', query: { course: '1life-digital-academy-1', module: 'who-am-i-1' } },
				'/courses/1life-digital-academy-1/my-magnificent-future-2/index.html': { page: '/courses/course/module', query: { course: '1life-digital-academy-1', module: 'my-magnificent-future-2' } },
				'/courses/1life-digital-academy-1/my-plan4me-3/index.html': { page: '/courses/course/module', query: { course: '1life-digital-academy-1', module: 'my-plan4me-3' } },
				'/courses/1life-digital-academy-1/financial-offense-4/index.html': { page: '/courses/course/module', query: { course: '1life-digital-academy-1', module: 'financial-offense-4' } },
				'/courses/1life-digital-academy-1/financial-defense-5/index.html': { page: '/courses/course/module', query: { course: '1life-digital-academy-1', module: 'financial-defense-5' } },
				'/courses/1life-digital-academy-1/fit-for-my-future-6/index.html': { page: '/courses/course/module', query: { course: '1life-digital-academy-1', module: 'fit-for-my-future-6' } },
				'/courses/1life-digital-academy-1/who-am-i-1/lesson-1/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'who-am-i-1', lesson: 'lesson-1' } },
				'/courses/1life-digital-academy-1/who-am-i-1/lesson-2/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'who-am-i-1', lesson: 'lesson-2' } },
				'/courses/1life-digital-academy-1/who-am-i-1/lesson-3/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'who-am-i-1', lesson: 'lesson-3' } },
				'/courses/1life-digital-academy-1/who-am-i-1/lesson-4/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'who-am-i-1', lesson: 'lesson-4' } },
				'/courses/1life-digital-academy-1/who-am-i-1/lesson-5/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'who-am-i-1', lesson: 'lesson-5' } },
				'/courses/1life-digital-academy-1/my-magnificent-future-2/lesson-6/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'my-magnificent-future-2', lesson: 'lesson-6' } },
				'/courses/1life-digital-academy-1/my-magnificent-future-2/lesson-7/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'my-magnificent-future-2', lesson: 'lesson-7' } },
				'/courses/1life-digital-academy-1/my-magnificent-future-2/lesson-8/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'my-magnificent-future-2', lesson: 'lesson-8' } },
				'/courses/1life-digital-academy-1/my-magnificent-future-2/lesson-9/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'my-magnificent-future-2', lesson: 'lesson-9' } },
				'/courses/1life-digital-academy-1/my-magnificent-future-2/lesson-10/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'my-magnificent-future-2', lesson: 'lesson-10' } },
				'/courses/1life-digital-academy-1/my-magnificent-future-2/lesson-11/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'my-magnificent-future-2', lesson: 'lesson-11' } },
				'/courses/1life-digital-academy-1/my-magnificent-future-2/lesson-12/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'my-magnificent-future-2', lesson: 'lesson-12' } },
				'/courses/1life-digital-academy-1/my-plan4me-3/lesson-13/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'my-plan4me-3', lesson: 'lesson-13' } },
				'/courses/1life-digital-academy-1/my-plan4me-3/lesson-14/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'my-plan4me-3', lesson: 'lesson-14' } },
				'/courses/1life-digital-academy-1/my-plan4me-3/lesson-15/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'my-plan4me-3', lesson: 'lesson-15' } },
				'/courses/1life-digital-academy-1/my-plan4me-3/lesson-16/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'my-plan4me-3', lesson: 'lesson-16' } },
				'/courses/1life-digital-academy-1/my-plan4me-3/lesson-17/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'my-plan4me-3', lesson: 'lesson-17' } },
				'/courses/1life-digital-academy-1/my-plan4me-3/lesson-18/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'my-plan4me-3', lesson: 'lesson-18' } },
				'/courses/1life-digital-academy-1/my-plan4me-3/lesson-19/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'my-plan4me-3', lesson: 'lesson-19' } },
				'/courses/1life-digital-academy-1/financial-offense-4/lesson-20/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'financial-offense-4', lesson: 'lesson-20' } },
				'/courses/1life-digital-academy-1/financial-offense-4/lesson-21/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'financial-offense-4', lesson: 'lesson-21' } },
				'/courses/1life-digital-academy-1/financial-offense-4/lesson-22/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'financial-offense-4', lesson: 'lesson-22' } },
				'/courses/1life-digital-academy-1/financial-offense-4/lesson-23/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'financial-offense-4', lesson: 'lesson-23' } },
				'/courses/1life-digital-academy-1/financial-offense-4/lesson-24/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'financial-offense-4', lesson: 'lesson-24' } },
				'/courses/1life-digital-academy-1/financial-offense-4/lesson-25/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'financial-offense-4', lesson: 'lesson-25' } },
				'/courses/1life-digital-academy-1/financial-defense-5/lesson-26/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'financial-defense-5', lesson: 'lesson-26' } },
				'/courses/1life-digital-academy-1/financial-defense-5/lesson-27/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'financial-defense-5', lesson: 'lesson-27' } },
				'/courses/1life-digital-academy-1/financial-defense-5/lesson-28/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'financial-defense-5', lesson: 'lesson-28' } },
				'/courses/1life-digital-academy-1/financial-defense-5/lesson-29/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'financial-defense-5', lesson: 'lesson-29' } },
				'/courses/1life-digital-academy-1/financial-defense-5/lesson-30/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'financial-defense-5', lesson: 'lesson-30' } },
				'/courses/1life-digital-academy-1/financial-defense-5/lesson-31/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'financial-defense-5', lesson: 'lesson-31' } },
				'/courses/1life-digital-academy-1/fit-for-my-future-6/lesson-32/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'fit-for-my-future-6', lesson: 'lesson-32' } },
				'/courses/1life-digital-academy-1/fit-for-my-future-6/lesson-33/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'fit-for-my-future-6', lesson: 'lesson-33' } },
				'/courses/1life-digital-academy-1/fit-for-my-future-6/lesson-34/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'fit-for-my-future-6', lesson: 'lesson-34' } },
				'/courses/1life-digital-academy-1/fit-for-my-future-6/lesson-35/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'fit-for-my-future-6', lesson: 'lesson-35' } },
				'/courses/1life-digital-academy-1/fit-for-my-future-6/lesson-36/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'fit-for-my-future-6', lesson: 'lesson-36' } },
				'/courses/1life-digital-academy-1/fit-for-my-future-6/lesson-37/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'fit-for-my-future-6', lesson: 'lesson-37' } },
				'/courses/1life-digital-academy-1/fit-for-my-future-6/lesson-38/index.html': { page: '/courses/course/module/lesson', query: { course: '1life-digital-academy-1', module: 'fit-for-my-future-6', lesson: 'lesson-38' } },
				'/courses/my-1life-roadmap-journal-2/index.html': { page: '/courses/course', query: { course: 'my-1life-roadmap-journal-2' } },
				'/courses/my-1life-roadmap-journal-2/getting-started-7/index.html': { page: '/courses/course/module', query: { course: 'my-1life-roadmap-journal-2', module: 'getting-started-7' } },
				'/courses/my-1life-roadmap-journal-2/first-quarter-8/index.html': { page: '/courses/course/module', query: { course: 'my-1life-roadmap-journal-2', module: 'first-quarter-8' } },
				'/courses/my-1life-roadmap-journal-2/getting-started-7/lesson-39/index.html': { page: '/courses/course/module/lesson', query: { course: 'my-1life-roadmap-journal-2', module: 'getting-started-7', lesson: 'lesson-39' } },
				'/courses/my-1life-roadmap-journal-2/getting-started-7/lesson-40/index.html': { page: '/courses/course/module/lesson', query: { course: 'my-1life-roadmap-journal-2', module: 'getting-started-7', lesson: 'lesson-40' } },
				'/courses/my-1life-roadmap-journal-2/getting-started-7/lesson-41/index.html': { page: '/courses/course/module/lesson', query: { course: 'my-1life-roadmap-journal-2', module: 'getting-started-7', lesson: 'lesson-41' } },
				'/courses/my-1life-roadmap-journal-2/first-quarter-8/lesson-42/index.html': { page: '/courses/course/module/lesson', query: { course: 'my-1life-roadmap-journal-2', module: 'first-quarter-8', lesson: 'lesson-42' } },
				'/courses/my-1life-roadmap-journal-2/first-quarter-8/lesson-43/index.html': { page: '/courses/course/module/lesson', query: { course: 'my-1life-roadmap-journal-2', module: 'first-quarter-8', lesson: 'lesson-43' } },
				'/courses/my-1life-roadmap-journal-2/first-quarter-8/lesson-44/index.html': { page: '/courses/course/module/lesson', query: { course: 'my-1life-roadmap-journal-2', module: 'first-quarter-8', lesson: 'lesson-44' } },
				'/courses/my-1life-roadmap-journal-2/first-quarter-8/lesson-45/index.html': { page: '/courses/course/module/lesson', query: { course: 'my-1life-roadmap-journal-2', module: 'first-quarter-8', lesson: 'lesson-45' } },
				'/courses/my-1life-roadmap-journal-2/first-quarter-8/lesson-46/index.html': { page: '/courses/course/module/lesson', query: { course: 'my-1life-roadmap-journal-2', module: 'first-quarter-8', lesson: 'lesson-46' } },
				'/courses/my-1life-roadmap-journal-2/first-quarter-8/lesson-47/index.html': { page: '/courses/course/module/lesson', query: { course: 'my-1life-roadmap-journal-2', module: 'first-quarter-8', lesson: 'lesson-47' } },
				'/courses/my-1life-roadmap-journal-2/first-quarter-8/lesson-48/index.html': { page: '/courses/course/module/lesson', query: { course: 'my-1life-roadmap-journal-2', module: 'first-quarter-8', lesson: 'lesson-48' } },
				'/courses/my-1life-roadmap-journal-2/second-quarter-9/index.html': { page: '/courses/course/module', query: { course: 'my-1life-roadmap-journal-2', module: 'second-quarter-9' } },
				'/courses/my-1life-roadmap-journal-2/second-quarter-9/lesson-49/index.html': { page: '/courses/course/module/lesson', query: { course: 'my-1life-roadmap-journal-2', module: 'second-quarter-9', lesson: 'lesson-49' } },
				'/courses/my-1life-roadmap-journal-2/second-quarter-9/lesson-50/index.html': { page: '/courses/course/module/lesson', query: { course: 'my-1life-roadmap-journal-2', module: 'second-quarter-9', lesson: 'lesson-50' } },
				'/courses/my-1life-roadmap-journal-2/second-quarter-9/lesson-51/index.html': { page: '/courses/course/module/lesson', query: { course: 'my-1life-roadmap-journal-2', module: 'second-quarter-9', lesson: 'lesson-51' } },
				'/courses/my-1life-roadmap-journal-2/second-quarter-9/lesson-52/index.html': { page: '/courses/course/module/lesson', query: { course: 'my-1life-roadmap-journal-2', module: 'second-quarter-9', lesson: 'lesson-52' } },
				'/courses/my-1life-roadmap-journal-2/second-quarter-9/lesson-53/index.html': { page: '/courses/course/module/lesson', query: { course: 'my-1life-roadmap-journal-2', module: 'second-quarter-9', lesson: 'lesson-53' } },
				'/courses/my-1life-roadmap-journal-2/second-quarter-9/lesson-54/index.html': { page: '/courses/course/module/lesson', query: { course: 'my-1life-roadmap-journal-2', module: 'second-quarter-9', lesson: 'lesson-54' } },
				'/courses/my-1life-roadmap-journal-2/second-quarter-9/lesson-55/index.html': { page: '/courses/course/module/lesson', query: { course: 'my-1life-roadmap-journal-2', module: 'second-quarter-9', lesson: 'lesson-55' } },
				'/courses/my-1life-roadmap-journal-2/second-quarter-9/lesson-56/index.html': { page: '/courses/course/module/lesson', query: { course: 'my-1life-roadmap-journal-2', module: 'second-quarter-9', lesson: 'lesson-56' } },
			}
		}
	}
)