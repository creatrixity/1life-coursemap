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
    "url": "/_next/static\\eLnHI177mlw6gTDT139gm\\pages\\_app.js",
    "revision": "f0c4f8ae95b9cac007f4"
  },
  {
    "url": "/_next/static\\eLnHI177mlw6gTDT139gm\\pages\\_error.js",
    "revision": "98dcd8b59fe9141010a8"
  },
  {
    "url": "/_next/static\\eLnHI177mlw6gTDT139gm\\pages\\courses.js",
    "revision": "2af68d51965bf4707f6e"
  },
  {
    "url": "/_next/static\\eLnHI177mlw6gTDT139gm\\pages\\courses\\course.js",
    "revision": "cafa9cdaaca67881192d"
  },
  {
    "url": "/_next/static\\eLnHI177mlw6gTDT139gm\\pages\\courses\\course\\course.js",
    "revision": "6796b628f511f76ff79c"
  },
  {
    "url": "/_next/static\\eLnHI177mlw6gTDT139gm\\pages\\courses\\course\\module.js",
    "revision": "3c5c7d87c7b14a4991c9"
  },
  {
    "url": "/_next/static\\eLnHI177mlw6gTDT139gm\\pages\\courses\\course\\module\\data.js",
    "revision": "6509384b1c0d399b21a4"
  },
  {
    "url": "/_next/static\\eLnHI177mlw6gTDT139gm\\pages\\courses\\course\\module\\lesson.js",
    "revision": "45862d431169de3cbb3c"
  },
  {
    "url": "/_next/static\\eLnHI177mlw6gTDT139gm\\pages\\courses\\course\\module\\lesson\\lesson.js",
    "revision": "bb751259b927794131f4"
  },
  {
    "url": "/_next/static\\eLnHI177mlw6gTDT139gm\\pages\\courses\\course\\module\\module.js",
    "revision": "de5abc378c524c3c0c8e"
  },
  {
    "url": "/_next/static\\eLnHI177mlw6gTDT139gm\\pages\\courses\\courses.js",
    "revision": "3563814da2047bf1a68f"
  },
  {
    "url": "/_next/static\\eLnHI177mlw6gTDT139gm\\pages\\home.js",
    "revision": "8095b7ee2f039c9f971e"
  },
  {
    "url": "/_next/static\\eLnHI177mlw6gTDT139gm\\pages\\home\\home.js",
    "revision": "378d36872faa15ad20f5"
  },
  {
    "url": "/_next/static\\eLnHI177mlw6gTDT139gm\\pages\\index.js",
    "revision": "a0c048dd8848f7189090"
  },
  {
    "url": "/_next/static\\eLnHI177mlw6gTDT139gm\\pages\\login.js",
    "revision": "21eff9209979fe6a83d7"
  },
  {
    "url": "/_next/static\\eLnHI177mlw6gTDT139gm\\pages\\login\\login.js",
    "revision": "242a5c4e482bbbe074fb"
  },
  {
    "url": "/_next/static\\eLnHI177mlw6gTDT139gm\\pages\\profile.js",
    "revision": "f0dcc15c323a5242273d"
  },
  {
    "url": "/_next/static\\eLnHI177mlw6gTDT139gm\\pages\\profile\\profile.js",
    "revision": "72a1b859d1e3444edb10"
  },
  {
    "url": "/_next/static\\eLnHI177mlw6gTDT139gm\\pages\\register.js",
    "revision": "a3be1d94ef907a6e050b"
  },
  {
    "url": "/_next/static\\eLnHI177mlw6gTDT139gm\\pages\\register\\register.js",
    "revision": "638ac584e0c5a308fdfb"
  },
  {
    "url": "/_next/static\\eLnHI177mlw6gTDT139gm\\pages\\welcome.js",
    "revision": "18b7e29108ac3f1a73ae"
  },
  {
    "url": "/_next/static\\eLnHI177mlw6gTDT139gm\\pages\\welcome\\welcome.js",
    "revision": "e063e826c008001d764f"
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
