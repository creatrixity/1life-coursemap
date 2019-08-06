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
    "url": "/_next/static\\4HhhQcizF3XsOuJiqjQKi\\pages\\_app.js",
    "revision": "2bb79e642c98dca76c30"
  },
  {
    "url": "/_next/static\\4HhhQcizF3XsOuJiqjQKi\\pages\\_error.js",
    "revision": "315cce16d07136f5f5ce"
  },
  {
    "url": "/_next/static\\4HhhQcizF3XsOuJiqjQKi\\pages\\courses.js",
    "revision": "330175c776c289761f31"
  },
  {
    "url": "/_next/static\\4HhhQcizF3XsOuJiqjQKi\\pages\\courses\\course.js",
    "revision": "33d9f49aac7055a17616"
  },
  {
    "url": "/_next/static\\4HhhQcizF3XsOuJiqjQKi\\pages\\courses\\course\\course.js",
    "revision": "3c1b9ff94dd4f0bd1fb6"
  },
  {
    "url": "/_next/static\\4HhhQcizF3XsOuJiqjQKi\\pages\\courses\\course\\module.js",
    "revision": "5b9489fc5dd55ed1701a"
  },
  {
    "url": "/_next/static\\4HhhQcizF3XsOuJiqjQKi\\pages\\courses\\course\\module\\data.js",
    "revision": "87263ada39e1eb27fba2"
  },
  {
    "url": "/_next/static\\4HhhQcizF3XsOuJiqjQKi\\pages\\courses\\course\\module\\lesson.js",
    "revision": "3496a7d5ba929d48b2e1"
  },
  {
    "url": "/_next/static\\4HhhQcizF3XsOuJiqjQKi\\pages\\courses\\course\\module\\lesson\\lesson.js",
    "revision": "a96ccf0dca86e7f34217"
  },
  {
    "url": "/_next/static\\4HhhQcizF3XsOuJiqjQKi\\pages\\courses\\course\\module\\module.js",
    "revision": "73827dba5b24f3e3bc52"
  },
  {
    "url": "/_next/static\\4HhhQcizF3XsOuJiqjQKi\\pages\\courses\\courses.js",
    "revision": "861ffcc1a21a7c8d2e62"
  },
  {
    "url": "/_next/static\\4HhhQcizF3XsOuJiqjQKi\\pages\\home.js",
    "revision": "b8ff989d42dab0f5c5ce"
  },
  {
    "url": "/_next/static\\4HhhQcizF3XsOuJiqjQKi\\pages\\home\\home.js",
    "revision": "0c384f9ae0f3e68e6c74"
  },
  {
    "url": "/_next/static\\4HhhQcizF3XsOuJiqjQKi\\pages\\index.js",
    "revision": "563573c785ae9d78f7fe"
  },
  {
    "url": "/_next/static\\4HhhQcizF3XsOuJiqjQKi\\pages\\login.js",
    "revision": "4f91558322e4f65c6032"
  },
  {
    "url": "/_next/static\\4HhhQcizF3XsOuJiqjQKi\\pages\\login\\login.js",
    "revision": "f83a875999be0f0e195b"
  },
  {
    "url": "/_next/static\\4HhhQcizF3XsOuJiqjQKi\\pages\\profile.js",
    "revision": "94f19694871e0db41337"
  },
  {
    "url": "/_next/static\\4HhhQcizF3XsOuJiqjQKi\\pages\\profile\\profile.js",
    "revision": "1d4908f83a182693cf95"
  },
  {
    "url": "/_next/static\\4HhhQcizF3XsOuJiqjQKi\\pages\\register.js",
    "revision": "9a5ed3acf0ab724769ef"
  },
  {
    "url": "/_next/static\\4HhhQcizF3XsOuJiqjQKi\\pages\\register\\register.js",
    "revision": "a67b075d66f3a83a3090"
  },
  {
    "url": "/_next/static\\4HhhQcizF3XsOuJiqjQKi\\pages\\welcome.js",
    "revision": "f95f073cf40a02e41f4f"
  },
  {
    "url": "/_next/static\\4HhhQcizF3XsOuJiqjQKi\\pages\\welcome\\welcome.js",
    "revision": "d0223a61645b094b6b4d"
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
    "revision": "434a78130f7aaf76db8a90e4467a88a4"
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
    "revision": "3350101c49be23279dab4c484415db60"
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
