'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "bda2b4ee0985adf5058855d27df1b513",
"/": "bda2b4ee0985adf5058855d27df1b513",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/AssetManifest.json": "b8afb6f4859a1e648981a792754636cf",
"assets/FontManifest.json": "483da4de70c5c75146254346eb7aeffb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/LICENSE": "0000d255865246c9b55862d96ffd3089",
"manifest.json": "db5f4c6a111d7b71633bc150d4d8d961",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "d50f1b9fdccdddc2aa081c0f9470108b"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
