self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.83ca5aded520f1e2becd.js",
    "revision": "d5a57807a4d5681d3cd7"
  },
  {
    "url": "/_next/static/chunks/styles.18fd07ab001555875251.js",
    "revision": "c93508e1d5aea7ea678f"
  },
  {
    "url": "/_next/static/css/commons.489bb070.chunk.css",
    "revision": "d5a57807a4d5681d3cd7"
  },
  {
    "url": "/_next/static/css/styles.cf93cd81.chunk.css",
    "revision": "c93508e1d5aea7ea678f"
  },
  {
    "url": "/_next/static/runtime/main-5b51af5a66b3006055e0.js",
    "revision": "fad7cfca5b8ba4c01134"
  },
  {
    "url": "/_next/static/runtime/webpack-80dd23e3eafca5314609.js",
    "revision": "44b43abd9436a734f341"
  },
  {
    "url": "/_next/static\\bqcmzJLao_K7Ypgou_giY\\pages\\_app.js",
    "revision": "12d8acc1042c3ec32701"
  },
  {
    "url": "/_next/static\\bqcmzJLao_K7Ypgou_giY\\pages\\_error.js",
    "revision": "726ce71db6b02ed8ef74"
  },
  {
    "url": "/_next/static\\bqcmzJLao_K7Ypgou_giY\\pages\\course.js",
    "revision": "c52bb2c9db51aef7898c"
  },
  {
    "url": "/_next/static\\bqcmzJLao_K7Ypgou_giY\\pages\\course\\course.js",
    "revision": "786f41d894e2213630b1"
  },
  {
    "url": "/_next/static\\bqcmzJLao_K7Ypgou_giY\\pages\\courses.js",
    "revision": "0e351e3420d024a810d7"
  },
  {
    "url": "/_next/static\\bqcmzJLao_K7Ypgou_giY\\pages\\courses\\courses.js",
    "revision": "cff64f199901d6993c6e"
  },
  {
    "url": "/_next/static\\bqcmzJLao_K7Ypgou_giY\\pages\\home.js",
    "revision": "0aa4fa73f2faa3507640"
  },
  {
    "url": "/_next/static\\bqcmzJLao_K7Ypgou_giY\\pages\\home\\home.js",
    "revision": "84143bce5d0ff91ea355"
  },
  {
    "url": "/_next/static\\bqcmzJLao_K7Ypgou_giY\\pages\\index.js",
    "revision": "26360120d504ff68683b"
  },
  {
    "url": "/_next/static\\bqcmzJLao_K7Ypgou_giY\\pages\\lesson.js",
    "revision": "db48b46f5738d5c5391b"
  },
  {
    "url": "/_next/static\\bqcmzJLao_K7Ypgou_giY\\pages\\lesson\\lesson.js",
    "revision": "b4b6a74f410d81d73f8c"
  },
  {
    "url": "/_next/static\\bqcmzJLao_K7Ypgou_giY\\pages\\login.js",
    "revision": "3730453b2d264c5e7f4a"
  },
  {
    "url": "/_next/static\\bqcmzJLao_K7Ypgou_giY\\pages\\login\\login.js",
    "revision": "1404cb8daa0854ab6868"
  },
  {
    "url": "/_next/static\\bqcmzJLao_K7Ypgou_giY\\pages\\module.js",
    "revision": "1766b1f59820159ad81a"
  },
  {
    "url": "/_next/static\\bqcmzJLao_K7Ypgou_giY\\pages\\module\\data.js",
    "revision": "8de3d26be86b812f979e"
  },
  {
    "url": "/_next/static\\bqcmzJLao_K7Ypgou_giY\\pages\\module\\module.js",
    "revision": "006a87b4013737ff9a4d"
  },
  {
    "url": "/_next/static\\bqcmzJLao_K7Ypgou_giY\\pages\\profile.js",
    "revision": "32d002ff3c5cfedec373"
  },
  {
    "url": "/_next/static\\bqcmzJLao_K7Ypgou_giY\\pages\\profile\\profile.js",
    "revision": "0e66246ebe098bc1ccde"
  },
  {
    "url": "/_next/static\\bqcmzJLao_K7Ypgou_giY\\pages\\register.js",
    "revision": "f5b85d904142ad612660"
  },
  {
    "url": "/_next/static\\bqcmzJLao_K7Ypgou_giY\\pages\\register\\register.js",
    "revision": "94231859e9aae1998ca7"
  },
  {
    "url": "/_next/static\\bqcmzJLao_K7Ypgou_giY\\pages\\welcome.js",
    "revision": "1342e524564ebac2d302"
  },
  {
    "url": "/_next/static\\bqcmzJLao_K7Ypgou_giY\\pages\\welcome\\welcome.js",
    "revision": "6312d4ff11b51f03c9d5"
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
    "url": "static/img/lock-gray.svg",
    "revision": "3d40aa7490504ec457c0394afbb3fab3"
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
