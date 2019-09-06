self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.249548d4b6020f73bb51.js",
    "revision": "1a4be5192867974f5dc7"
  },
  {
    "url": "/_next/static/chunks/styles.c01f47dedb34953f0715.js",
    "revision": "57cbe33f02b73c93d4fa"
  },
  {
    "url": "/_next/static/css/commons.b0c4e4fa.chunk.css",
    "revision": "1a4be5192867974f5dc7"
  },
  {
    "url": "/_next/static/css/styles.6fad50c2.chunk.css",
    "revision": "57cbe33f02b73c93d4fa"
  },
  {
    "url": "/_next/static/runtime/main-bd99944b139b5e39024b.js",
    "revision": "c4030b9c9a45c430cdd3"
  },
  {
    "url": "/_next/static/runtime/webpack-80dd23e3eafca5314609.js",
    "revision": "44b43abd9436a734f341"
  },
  {
    "url": "/_next/static\\vZctV43lGaq7ZhwCjQfGf\\pages\\_app.js",
    "revision": "f84106b0ac3ffc669c3f"
  },
  {
    "url": "/_next/static\\vZctV43lGaq7ZhwCjQfGf\\pages\\_error.js",
    "revision": "fb93c42dd4f108a8d0fc"
  },
  {
    "url": "/_next/static\\vZctV43lGaq7ZhwCjQfGf\\pages\\courses.js",
    "revision": "f4661934cf3d47cd15ab"
  },
  {
    "url": "/_next/static\\vZctV43lGaq7ZhwCjQfGf\\pages\\courses\\course.js",
    "revision": "ac34120474175ac013a9"
  },
  {
    "url": "/_next/static\\vZctV43lGaq7ZhwCjQfGf\\pages\\courses\\course\\course.js",
    "revision": "a399a2de70626068f21b"
  },
  {
    "url": "/_next/static\\vZctV43lGaq7ZhwCjQfGf\\pages\\courses\\course\\module.js",
    "revision": "fa859fa13ceb5025d0c3"
  },
  {
    "url": "/_next/static\\vZctV43lGaq7ZhwCjQfGf\\pages\\courses\\course\\module\\data.js",
    "revision": "da799b09ad4e57662cb8"
  },
  {
    "url": "/_next/static\\vZctV43lGaq7ZhwCjQfGf\\pages\\courses\\course\\module\\lesson.js",
    "revision": "96f7bf6737c0da1583bd"
  },
  {
    "url": "/_next/static\\vZctV43lGaq7ZhwCjQfGf\\pages\\courses\\course\\module\\lesson\\lesson.js",
    "revision": "c4446ec3c6da89890f60"
  },
  {
    "url": "/_next/static\\vZctV43lGaq7ZhwCjQfGf\\pages\\courses\\course\\module\\module.js",
    "revision": "ed8db71f13a0e62ea77b"
  },
  {
    "url": "/_next/static\\vZctV43lGaq7ZhwCjQfGf\\pages\\courses\\courses.js",
    "revision": "4f497718a35804204488"
  },
  {
    "url": "/_next/static\\vZctV43lGaq7ZhwCjQfGf\\pages\\home.js",
    "revision": "525a28dc00523c33afa3"
  },
  {
    "url": "/_next/static\\vZctV43lGaq7ZhwCjQfGf\\pages\\home\\home.js",
    "revision": "2712dcf28f2353cd078c"
  },
  {
    "url": "/_next/static\\vZctV43lGaq7ZhwCjQfGf\\pages\\index.js",
    "revision": "b26723b32dc93aa5b696"
  },
  {
    "url": "/_next/static\\vZctV43lGaq7ZhwCjQfGf\\pages\\login.js",
    "revision": "319bc516afc7a177e9e3"
  },
  {
    "url": "/_next/static\\vZctV43lGaq7ZhwCjQfGf\\pages\\login\\login.js",
    "revision": "b8d97fb139b546c65327"
  },
  {
    "url": "/_next/static\\vZctV43lGaq7ZhwCjQfGf\\pages\\profile.js",
    "revision": "61ada26794549a84cb54"
  },
  {
    "url": "/_next/static\\vZctV43lGaq7ZhwCjQfGf\\pages\\profile\\profile.js",
    "revision": "68b3893910f081c1f04d"
  },
  {
    "url": "/_next/static\\vZctV43lGaq7ZhwCjQfGf\\pages\\register.js",
    "revision": "da265014cc6b38f09ac0"
  },
  {
    "url": "/_next/static\\vZctV43lGaq7ZhwCjQfGf\\pages\\register\\register.js",
    "revision": "ab9b9c78db27b792d036"
  },
  {
    "url": "/_next/static\\vZctV43lGaq7ZhwCjQfGf\\pages\\welcome.js",
    "revision": "38a4c94207a6aad7f0e9"
  },
  {
    "url": "/_next/static\\vZctV43lGaq7ZhwCjQfGf\\pages\\welcome\\welcome.js",
    "revision": "b6917897af9eb935cf96"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "static/apple-touch-icon-180x180.png",
    "revision": "4b3f5b91ac14dc94304337fa6a175e2c"
  },
  {
    "url": "static/browserconfig.xml",
    "revision": "b1f2dbf54aaa1afcba0963b9421d9f78"
  },
  {
    "url": "static/css/bootstrap.min.css",
    "revision": "8fe70898895271ddc62823321011273a"
  },
  {
    "url": "static/css/global-overrides.css",
    "revision": "ea6f9ffddaf9c4c1f658e03602d74848"
  },
  {
    "url": "static/fav.ico",
    "revision": "c58c9d2e97dec05c87bbbd0e29ec6da6"
  },
  {
    "url": "static/favicon-16x16.png",
    "revision": "e5a8b68b015a02d8fc335a01a6f4b016"
  },
  {
    "url": "static/favicon-32x32.png",
    "revision": "bfdb86e7072d9ddd6a0e4b1ad9947fe2"
  },
  {
    "url": "static/favicon.ico",
    "revision": "7de66d35bfe5bc80a5ba21e3cbc94efc"
  },
  {
    "url": "static/img/arrowLeft.svg",
    "revision": "ec47c832552963c13f89bb07ffd08d19"
  },
  {
    "url": "static/img/arrowRight.svg",
    "revision": "388958ed82181a30be1445f6ec458066"
  },
  {
    "url": "static/img/cap.svg",
    "revision": "eb3a3db97d2b4c438a18154ee8718e3d"
  },
  {
    "url": "static/img/lock.svg",
    "revision": "f7d203036371b95e1531b3460b36a178"
  },
  {
    "url": "static/img/person.svg",
    "revision": "25cabb353b79433fc1bdfc921de120b7"
  },
  {
    "url": "static/img/splashLogo.webp",
    "revision": "a4fe6fc82176ac8d228285a04d76dbf6"
  },
  {
    "url": "static/img/tool.svg",
    "revision": "c8bb14ceb712288f57e40eda9032bf30"
  },
  {
    "url": "static/manifest.json",
    "revision": "cdec08077d8ce1b7f71a3404d1ea433e"
  },
  {
    "url": "static/pwa-192x192.png",
    "revision": "4e1b0bcb13376483f7abcb8abeb6b710"
  },
  {
    "url": "static/pwa-512x512.png",
    "revision": "4262c8d8e08df21a818d742da8df07a8"
  },
  {
    "url": "static/tile150x150.png",
    "revision": "0d2977680bd2d6dfbad9dd6e95c74e61"
  },
  {
    "url": "static/tile310x150.png",
    "revision": "ba7096a9ea8ed7f3a7287d6bd24f3ec5"
  },
  {
    "url": "static/tile310x310.png",
    "revision": "e10d847891e7425783093f3a43a69e20"
  },
  {
    "url": "static/tile70x70.png",
    "revision": "0f63509005474e8572a6a4e59ca6f714"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
