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
    "url": "/_next/static\\~LBHbsh47R6OBlLjxSDrS\\pages\\_app.js",
    "revision": "0e3f40c4437304e235c3"
  },
  {
    "url": "/_next/static\\~LBHbsh47R6OBlLjxSDrS\\pages\\_error.js",
    "revision": "90b7d5707942a237cfb9"
  },
  {
    "url": "/_next/static\\~LBHbsh47R6OBlLjxSDrS\\pages\\courses.js",
    "revision": "ec2fe9679a175f92e5b9"
  },
  {
    "url": "/_next/static\\~LBHbsh47R6OBlLjxSDrS\\pages\\courses\\course.js",
    "revision": "2051e582b19072e6b0e4"
  },
  {
    "url": "/_next/static\\~LBHbsh47R6OBlLjxSDrS\\pages\\courses\\course\\course.js",
    "revision": "105d69b31a1338c07447"
  },
  {
    "url": "/_next/static\\~LBHbsh47R6OBlLjxSDrS\\pages\\courses\\course\\module.js",
    "revision": "bd10cc385fa72ddedad5"
  },
  {
    "url": "/_next/static\\~LBHbsh47R6OBlLjxSDrS\\pages\\courses\\course\\module\\data.js",
    "revision": "daa0615dcbe3e4717b0c"
  },
  {
    "url": "/_next/static\\~LBHbsh47R6OBlLjxSDrS\\pages\\courses\\course\\module\\lesson.js",
    "revision": "d739b2257a46d435563f"
  },
  {
    "url": "/_next/static\\~LBHbsh47R6OBlLjxSDrS\\pages\\courses\\course\\module\\lesson\\lesson.js",
    "revision": "321a97d31b88bb552440"
  },
  {
    "url": "/_next/static\\~LBHbsh47R6OBlLjxSDrS\\pages\\courses\\course\\module\\module.js",
    "revision": "a85dcf06f60078bf8fd6"
  },
  {
    "url": "/_next/static\\~LBHbsh47R6OBlLjxSDrS\\pages\\courses\\courses.js",
    "revision": "895d20ea443011d34cde"
  },
  {
    "url": "/_next/static\\~LBHbsh47R6OBlLjxSDrS\\pages\\home.js",
    "revision": "334932ef1b52223ea2bf"
  },
  {
    "url": "/_next/static\\~LBHbsh47R6OBlLjxSDrS\\pages\\home\\home.js",
    "revision": "e41c60b3ca2b7468d43d"
  },
  {
    "url": "/_next/static\\~LBHbsh47R6OBlLjxSDrS\\pages\\index.js",
    "revision": "dcefde632c3ea8aa17cb"
  },
  {
    "url": "/_next/static\\~LBHbsh47R6OBlLjxSDrS\\pages\\login.js",
    "revision": "105ef85831121f3a7c64"
  },
  {
    "url": "/_next/static\\~LBHbsh47R6OBlLjxSDrS\\pages\\login\\login.js",
    "revision": "801b60560e96ed3223ea"
  },
  {
    "url": "/_next/static\\~LBHbsh47R6OBlLjxSDrS\\pages\\profile.js",
    "revision": "4658a15fda9509c1511a"
  },
  {
    "url": "/_next/static\\~LBHbsh47R6OBlLjxSDrS\\pages\\profile\\profile.js",
    "revision": "acee2e90d45301e9bb3f"
  },
  {
    "url": "/_next/static\\~LBHbsh47R6OBlLjxSDrS\\pages\\register.js",
    "revision": "494954923eea1b3c4277"
  },
  {
    "url": "/_next/static\\~LBHbsh47R6OBlLjxSDrS\\pages\\register\\register.js",
    "revision": "04d29b11e75fb699698e"
  },
  {
    "url": "/_next/static\\~LBHbsh47R6OBlLjxSDrS\\pages\\welcome.js",
    "revision": "38fe83f68b24b2106ad4"
  },
  {
    "url": "/_next/static\\~LBHbsh47R6OBlLjxSDrS\\pages\\welcome\\welcome.js",
    "revision": "4966a8572aa41937842a"
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
