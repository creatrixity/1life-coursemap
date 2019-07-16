'use strict';

const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass');
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withOffline = require('next-offline')

const withPlugins = require('next-compose-plugins');
const nextEnv = require('next-env');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
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
		[withOffline],
		[withBundleAnalyzer],
		[nextEnv()]
	],
	{
		webpack: (config, { isServer, buildId, dev }) => {
			if (!isServer && !dev) {
				config.plugins.push(
					new WebpackPwaManifest({
						filename: 'static/manifest.json',
						name: '1Life Coursemap',
						short_name: '1Life Coursemap',
						description: 'A companion reader for the 1Life courses',
						background_color: '#ffffff',
						theme_color: '#5755d9',
						display: 'standalone',
						orientation: 'portrait',
						fingerprints: false,
						inject: false,
						start_url: '/',
						ios: {
							'apple-mobile-web-app-title': '1Life Coursemap',
							'apple-mobile-web-app-status-bar-style': '#5755d9',
						},
						icons: [
							{
								src: path.resolve('static/favicon.ico'),
								sizes: [96, 128, 192, 256, 384, 512],
								destination: '/static',
							},
						],
						includeDirectory: true,
						publicPath: '..',
					})
				);
			}
	
			return config;	
		},
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
				'/courses/1life-digital-academy/index.html': { page: '/coursemap', query: { course: '1life-digital-academy' } },
				'/login/index.html': { page: '/login' },
				'/register/index.html': { page: '/register' },
				'/courses/1life-digital-academy/who-am-i/index.html': { page: '/coursemap/module', query: { course: '1life-digital-academy', module: 'who-am-i' } },
				'/courses/1life-digital-academy/my-magnificent-future/index.html': { page: '/coursemap/module', query: { course: '1life-digital-academy', module: 'my-magnificent-future' } },
				'/courses/1life-digital-academy/my-plan4me/index.html': { page: '/coursemap/module', query: { course: '1life-digital-academy', module: 'my-plan4me' } },
				'/courses/1life-digital-academy/financial-offense/index.html': { page: '/coursemap/module', query: { course: '1life-digital-academy', module: 'financial-offense' } },
				'/courses/1life-digital-academy/financial-defense/index.html': { page: '/coursemap/module', query: { course: '1life-digital-academy', module: 'financial-defense' } },
				'/courses/1life-digital-academy/fit-for-my-future/index.html': { page: '/coursemap/module', query: { course: '1life-digital-academy', module: 'fit-for-my-future' } },
				'/courses/1life-digital-academy/who-am-i/lesson-1/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'who-am-i', lesson: 'lesson-1' } },
				'/courses/1life-digital-academy/who-am-i/lesson-2/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'who-am-i', lesson: 'lesson-2' } },
				'/courses/1life-digital-academy/who-am-i/lesson-3/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'who-am-i', lesson: 'lesson-3' } },
				'/courses/1life-digital-academy/who-am-i/lesson-4/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'who-am-i', lesson: 'lesson-4' } },
				'/courses/1life-digital-academy/who-am-i/lesson-5/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'who-am-i', lesson: 'lesson-5' } },
				'/courses/1life-digital-academy/my-magnificent-future/lesson-1/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'my-magnificent-future', lesson: 'lesson-1' } },
				'/courses/1life-digital-academy/my-magnificent-future/lesson-2/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'my-magnificent-future', lesson: 'lesson-2' } },
				'/courses/1life-digital-academy/my-magnificent-future/lesson-3/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'my-magnificent-future', lesson: 'lesson-3' } },
				'/courses/1life-digital-academy/my-magnificent-future/lesson-4/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'my-magnificent-future', lesson: 'lesson-4' } },
				'/courses/1life-digital-academy/my-magnificent-future/lesson-5/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'my-magnificent-future', lesson: 'lesson-5' } },
				'/courses/1life-digital-academy/my-magnificent-future/lesson-6/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'my-magnificent-future', lesson: 'lesson-6' } },
				'/courses/1life-digital-academy/my-magnificent-future/lesson-7/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'my-magnificent-future', lesson: 'lesson-7' } },
				'/courses/1life-digital-academy/my-plan4me/lesson-1/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'my-plan4me', lesson: 'lesson-1' } },
				'/courses/1life-digital-academy/my-plan4me/lesson-2/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'my-plan4me', lesson: 'lesson-2' } },
				'/courses/1life-digital-academy/my-plan4me/lesson-3/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'my-plan4me', lesson: 'lesson-3' } },
				'/courses/1life-digital-academy/my-plan4me/lesson-4/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'my-plan4me', lesson: 'lesson-4' } },
				'/courses/1life-digital-academy/my-plan4me/lesson-5/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'my-plan4me', lesson: 'lesson-5' } },
				'/courses/1life-digital-academy/my-plan4me/lesson-6/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'my-plan4me', lesson: 'lesson-6' } },
				'/courses/1life-digital-academy/financial-offense/lesson-1/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'financial-offense', lesson: 'lesson-1' } },
				'/courses/1life-digital-academy/financial-offense/lesson-2/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'financial-offense', lesson: 'lesson-2' } },
				'/courses/1life-digital-academy/financial-offense/lesson-3/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'financial-offense', lesson: 'lesson-3' } },
				'/courses/1life-digital-academy/financial-offense/lesson-4/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'financial-offense', lesson: 'lesson-4' } },
				'/courses/1life-digital-academy/financial-offense/lesson-5/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'financial-offense', lesson: 'lesson-5' } },
				'/courses/1life-digital-academy/financial-offense/lesson-6/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'financial-offense', lesson: 'lesson-6' } },
				'/courses/1life-digital-academy/financial-defense/lesson-1/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'financial-defense', lesson: 'lesson-1' } },
				'/courses/1life-digital-academy/financial-defense/lesson-2/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'financial-defense', lesson: 'lesson-2' } },
				'/courses/1life-digital-academy/financial-defense/lesson-3/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'financial-defense', lesson: 'lesson-3' } },
				'/courses/1life-digital-academy/financial-defense/lesson-4/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'financial-defense', lesson: 'lesson-4' } },
				'/courses/1life-digital-academy/financial-defense/lesson-5/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'financial-defense', lesson: 'lesson-5' } },
				'/courses/1life-digital-academy/financial-defense/lesson-6/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'financial-defense', lesson: 'lesson-6' } },
				'/courses/1life-digital-academy/fit-for-my-future/lesson-1/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'fit-for-my-future', lesson: 'lesson-1' } },
				'/courses/1life-digital-academy/fit-for-my-future/lesson-2/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'fit-for-my-future', lesson: 'lesson-2' } },
				'/courses/1life-digital-academy/fit-for-my-future/lesson-3/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'fit-for-my-future', lesson: 'lesson-3' } },
				'/courses/1life-digital-academy/fit-for-my-future/lesson-4/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'fit-for-my-future', lesson: 'lesson-4' } },
				'/courses/1life-digital-academy/fit-for-my-future/lesson-5/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'fit-for-my-future', lesson: 'lesson-5' } },
				'/courses/1life-digital-academy/fit-for-my-future/lesson-6/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'fit-for-my-future', lesson: 'lesson-6' } },
				'/courses/1life-digital-academy/fit-for-my-future/lesson-7/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'fit-for-my-future', lesson: 'lesson-7' } },
				'/courses/1life-digital-academy/fit-for-my-future/lesson-7/index.html': { page: '/coursemap/module/lesson', query: { course: '1life-digital-academy', module: 'fit-for-my-future', lesson: 'lesson-7' } },
				'/courses/my-1life-roadmap-journal/index.html': { page: '/coursemap', query: { course: 'my-1life-roadmap-journal' } },
				'/courses/my-1life-roadmap-journal/getting-started/index.html': { page: '/coursemap/module', query: { course: 'my-1life-roadmap-journal', module: 'getting-started' } },
				'/courses/my-1life-roadmap-journal/first-quarter/index.html': { page: '/coursemap/module', query: { course: 'my-1life-roadmap-journal', module: 'first-quarter' } },
				'/courses/my-1life-roadmap-journal/getting-started/lesson-1/index.html': { page: '/coursemap/module/lesson', query: { course: 'my-1life-roadmap-journal', module: 'getting-started', lesson: 'lesson-1' } },
				'/courses/my-1life-roadmap-journal/getting-started/lesson-2/index.html': { page: '/coursemap/module/lesson', query: { course: 'my-1life-roadmap-journal', module: 'getting-started', lesson: 'lesson-2' } },
				'/courses/my-1life-roadmap-journal/getting-started/lesson-3/index.html': { page: '/coursemap/module/lesson', query: { course: 'my-1life-roadmap-journal', module: 'getting-started', lesson: 'lesson-3' } },
				'/courses/my-1life-roadmap-journal/first-quarter/lesson-1/index.html': { page: '/coursemap/module/lesson', query: { course: 'my-1life-roadmap-journal', module: 'first-quarter', lesson: 'lesson-1' } },
				'/courses/my-1life-roadmap-journal/first-quarter/lesson-2/index.html': { page: '/coursemap/module/lesson', query: { course: 'my-1life-roadmap-journal', module: 'first-quarter', lesson: 'lesson-2' } },
				'/courses/my-1life-roadmap-journal/first-quarter/lesson-3/index.html': { page: '/coursemap/module/lesson', query: { course: 'my-1life-roadmap-journal', module: 'first-quarter', lesson: 'lesson-3' } },
				'/courses/my-1life-roadmap-journal/first-quarter/lesson-4/index.html': { page: '/coursemap/module/lesson', query: { course: 'my-1life-roadmap-journal', module: 'first-quarter', lesson: 'lesson-4' } },
				'/courses/my-1life-roadmap-journal/first-quarter/lesson-5/index.html': { page: '/coursemap/module/lesson', query: { course: 'my-1life-roadmap-journal', module: 'first-quarter', lesson: 'lesson-5' } },
				'/courses/my-1life-roadmap-journal/first-quarter/lesson-6/index.html': { page: '/coursemap/module/lesson', query: { course: 'my-1life-roadmap-journal', module: 'first-quarter', lesson: 'lesson-6' } },
				'/courses/my-1life-roadmap-journal/first-quarter/lesson-7/index.html': { page: '/coursemap/module/lesson', query: { course: 'my-1life-roadmap-journal', module: 'first-quarter', lesson: 'lesson-7' } },
				'/courses/my-1life-roadmap-journal/first-quarter/lesson-8/index.html': { page: '/coursemap/module/lesson', query: { course: 'my-1life-roadmap-journal', module: 'first-quarter', lesson: 'lesson-8' } },
				'/courses/my-1life-roadmap-journal/second-quarter/index.html': { page: '/coursemap/module', query: { course: 'my-1life-roadmap-journal', module: 'second-quarter' } },
				'/courses/my-1life-roadmap-journal/second-quarter/lesson-1/index.html': { page: '/coursemap/module/lesson', query: { course: 'my-1life-roadmap-journal', module: 'second-quarter', lesson: 'lesson-1' } },
				'/courses/my-1life-roadmap-journal/second-quarter/lesson-2/index.html': { page: '/coursemap/module/lesson', query: { course: 'my-1life-roadmap-journal', module: 'second-quarter', lesson: 'lesson-2' } },
				'/courses/my-1life-roadmap-journal/second-quarter/lesson-3/index.html': { page: '/coursemap/module/lesson', query: { course: 'my-1life-roadmap-journal', module: 'second-quarter', lesson: 'lesson-3' } },
				'/courses/my-1life-roadmap-journal/second-quarter/lesson-4/index.html': { page: '/coursemap/module/lesson', query: { course: 'my-1life-roadmap-journal', module: 'second-quarter', lesson: 'lesson-4' } },
				'/courses/my-1life-roadmap-journal/second-quarter/lesson-5/index.html': { page: '/coursemap/module/lesson', query: { course: 'my-1life-roadmap-journal', module: 'second-quarter', lesson: 'lesson-5' } },
				'/courses/my-1life-roadmap-journal/second-quarter/lesson-6/index.html': { page: '/coursemap/module/lesson', query: { course: 'my-1life-roadmap-journal', module: 'second-quarter', lesson: 'lesson-6' } },
				'/courses/my-1life-roadmap-journal/second-quarter/lesson-7/index.html': { page: '/coursemap/module/lesson', query: { course: 'my-1life-roadmap-journal', module: 'second-quarter', lesson: 'lesson-7' } },
				'/courses/my-1life-roadmap-journal/second-quarter/lesson-8/index.html': { page: '/coursemap/module/lesson', query: { course: 'my-1life-roadmap-journal', module: 'second-quarter', lesson: 'lesson-8' } },
			}
		}
	}
)