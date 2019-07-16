self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.b00785ab2e1b7eb9b77a.js",
    "revision": "438194437642795a636d"
  },
  {
    "url": "/_next/static/chunks/styles.b1009e1762c91511c165.js",
    "revision": "fe2ada1eee33adc35fa0"
  },
  {
    "url": "/_next/static/css/styles.71eff78f.chunk.css",
    "revision": "fe2ada1eee33adc35fa0"
  },
  {
    "url": "/_next/static/runtime/main-3136cbbc5771fae3cb50.js",
    "revision": "3628d2314ca5ec0fb6a9"
  },
  {
    "url": "/_next/static/runtime/webpack-89179faa512dd01fbb62.js",
    "revision": "a9003668d320950c9582"
  },
  {
    "url": "/_next/static\\y9RlgIOmZxllO0Aw4qvoP\\pages\\_app.js",
    "revision": "083ff72d297633f843f3"
  },
  {
    "url": "/_next/static\\y9RlgIOmZxllO0Aw4qvoP\\pages\\_error.js",
    "revision": "63aa69523dfc5ac03be4"
  },
  {
    "url": "/_next/static\\y9RlgIOmZxllO0Aw4qvoP\\pages\\coursemap.js",
    "revision": "d169e828732331596724"
  },
  {
    "url": "/_next/static\\y9RlgIOmZxllO0Aw4qvoP\\pages\\coursemap\\coursemap.js",
    "revision": "869245b577e22e8df443"
  },
  {
    "url": "/_next/static\\y9RlgIOmZxllO0Aw4qvoP\\pages\\coursemap\\module.js",
    "revision": "44f98dab05138d93f8cb"
  },
  {
    "url": "/_next/static\\y9RlgIOmZxllO0Aw4qvoP\\pages\\coursemap\\module\\data.js",
    "revision": "187c3e53a5d8cfd53d77"
  },
  {
    "url": "/_next/static\\y9RlgIOmZxllO0Aw4qvoP\\pages\\coursemap\\module\\lesson.js",
    "revision": "370228bf9f2a9b60f9a8"
  },
  {
    "url": "/_next/static\\y9RlgIOmZxllO0Aw4qvoP\\pages\\coursemap\\module\\lesson\\lesson.js",
    "revision": "29056e106337cb1a73e2"
  },
  {
    "url": "/_next/static\\y9RlgIOmZxllO0Aw4qvoP\\pages\\coursemap\\module\\module.js",
    "revision": "70a1cf95d8409fc90179"
  },
  {
    "url": "/_next/static\\y9RlgIOmZxllO0Aw4qvoP\\pages\\courses.js",
    "revision": "6d01fdaa87e2ef63116d"
  },
  {
    "url": "/_next/static\\y9RlgIOmZxllO0Aw4qvoP\\pages\\courses\\courses.js",
    "revision": "7e243db8f8b1d2ff80bd"
  },
  {
    "url": "/_next/static\\y9RlgIOmZxllO0Aw4qvoP\\pages\\home.js",
    "revision": "c44cd1c4ccabefd2e56a"
  },
  {
    "url": "/_next/static\\y9RlgIOmZxllO0Aw4qvoP\\pages\\home\\home.js",
    "revision": "a33b0cb2a300c03f1285"
  },
  {
    "url": "/_next/static\\y9RlgIOmZxllO0Aw4qvoP\\pages\\index.js",
    "revision": "69d42e517fa1e5d55c0a"
  },
  {
    "url": "/_next/static\\y9RlgIOmZxllO0Aw4qvoP\\pages\\login.js",
    "revision": "5df4769f7d83e86cb64c"
  },
  {
    "url": "/_next/static\\y9RlgIOmZxllO0Aw4qvoP\\pages\\login\\login.js",
    "revision": "4d762ee8916e0b4a44f3"
  },
  {
    "url": "/_next/static\\y9RlgIOmZxllO0Aw4qvoP\\pages\\profile.js",
    "revision": "865d50ee2a80423dc008"
  },
  {
    "url": "/_next/static\\y9RlgIOmZxllO0Aw4qvoP\\pages\\profile\\profile.js",
    "revision": "727d22994a37e54106b6"
  },
  {
    "url": "/_next/static\\y9RlgIOmZxllO0Aw4qvoP\\pages\\register.js",
    "revision": "ada4666538034e480478"
  },
  {
    "url": "/_next/static\\y9RlgIOmZxllO0Aw4qvoP\\pages\\register\\register.js",
    "revision": "9f39868514d8b8bd4b3e"
  },
  {
    "url": "/_next/static\\y9RlgIOmZxllO0Aw4qvoP\\pages\\welcome.js",
    "revision": "178fbe390160399cfa51"
  },
  {
    "url": "/_next/static\\y9RlgIOmZxllO0Aw4qvoP\\pages\\welcome\\welcome.js",
    "revision": "1869554b5c32153ad4bf"
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
    "url": "static/css/bootstrap.min.css",
    "revision": "8fe70898895271ddc62823321011273a"
  },
  {
    "url": "static/css/global-overrides.css",
    "revision": "ea6f9ffddaf9c4c1f658e03602d74848"
  },
  {
    "url": "static/favicon.ico",
    "revision": "c58c9d2e97dec05c87bbbd0e29ec6da6"
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
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
