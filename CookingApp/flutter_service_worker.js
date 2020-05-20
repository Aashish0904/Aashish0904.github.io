'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "22336aa92277d3fb5352ca8d06fa46af",
"/": "22336aa92277d3fb5352ca8d06fa46af",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/AssetManifest.json": "be47d9bc42d4b6db35aee92f6d4453bf",
"assets/FontManifest.json": "fc5e89701380fbd9a5a5fef7dbacba33",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/images/briyani.jpeg": "d4065bf3ae041e6116bdd3c96df232f7",
"assets/images/momo.jpeg": "c8d3ad741a316a95f63344acbdabea0e",
"assets/images/cake.jpeg": "d5db98f63335762dea260626f8a4f100",
"assets/images/pizza.jpeg": "f97f1927968a60c623314b665627c59b",
"assets/images/ingredients/chicken.jpeg": "8d84d936d9d612d9fafad916e2d432ed",
"assets/images/ingredients/garlic.jpeg": "e9842b767d2667172011705e0d2ecc4e",
"assets/images/ingredients/basmati.jpeg": "4d7c1ade4bcfbf2ec5af6ca0518d1d27",
"assets/images/ingredients/yeast.jpeg": "b4fc05e4790fbe432073da947e55b880",
"assets/images/ingredients/mozarella.jpeg": "b09ed803b43724bd655fb71ec39b18a2",
"assets/images/ingredients/sugar.jpeg": "fc16b9bb5f93c36b45bffb8d482d7fa9",
"assets/images/ingredients/cherry.jpeg": "85711dc902eddc7cf5e5c6d514ce605f",
"assets/images/ingredients/carrot.jpeg": "c0a68432906803c1201abfc13be72a5e",
"assets/images/ingredients/butter.jpeg": "a9e8d64366a26a69f1de6ed9b97be833",
"assets/images/ingredients/ghee.jpeg": "256ddafc2a9f93c1c273bf90914be457",
"assets/images/ingredients/sauce.jpg": "742e8c5a9d1375a872a1bf7096b38488",
"assets/images/ingredients/soyabean.jpeg": "833601bc17d827d0070719578e1341fc",
"assets/images/ingredients/mushroom.jpg": "e697a59efbddd3d67fb252f62e87bcd5",
"assets/images/ingredients/ginger.jpeg": "f92a72c093e4de1694535f5e5c00e81d",
"assets/images/ingredients/soda.jpeg": "f368c8232142c0bf29085952a5bb444f",
"assets/images/ingredients/darkChoc.jpg": "1547d38953bf9683e7755eaff4f30860",
"assets/images/ingredients/noodle.jpeg": "60d95af74297a21db8fc78b6f1ee6f7b",
"assets/images/ingredients/egg.jpg": "d1f705ed408dbbda572f9be9478a475f",
"assets/images/ingredients/buff.jpeg": "4db63dd3395b22efcae702f5640245f2",
"assets/images/ingredients/leaf.jpeg": "0a9f79a9cc1fff2feee5f3a5e74d06fa",
"assets/images/ingredients/flour.jpeg": "eeead6fa3fecccac2611eb0d001eb488",
"assets/images/ingredients/oil.jpeg": "fb77b50af94531d57210554e17a305f6",
"assets/images/ingredients/whiteChoc.jpeg": "5afdb177c6c17fb51fe61e3a9bf754f4",
"assets/images/ingredients/vanilla.jpeg": "f1ca71ac429a8409a15af3cbff1c9f66",
"assets/images/ingredients/chocolate.jpeg": "79be50217230c6c3110cc20f7a959c25",
"assets/images/ingredients/cabbage.jpeg": "6d7ff23eac0f31d51abcf932a9d71b57",
"assets/images/ingredients/soya.jpeg": "83cbb97a16fe5931aedecb44ef290293",
"assets/images/ingredients/tomato.jpg": "8106a210adce64fe69cd228fdf34eb62",
"assets/images/ingredients/cheese.jpeg": "41890656ef1428b7ac1e7f9e11a0eef3",
"assets/images/ingredients/onion.jpeg": "dabf8cebc78ccb65b1bba19b26539ec0",
"assets/images/ingredients/saffron.jpeg": "7b513a0cf2b5d85a973c33026b251919",
"assets/images/chowmin.jpeg": "b5a8773f3ffcb9535da96014461c658e",
"assets/fonts/Lobster-Regular.ttf": "9406d0ab606cf8cb91c41b65556bd836",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/LICENSE": "0000d255865246c9b55862d96ffd3089",
"manifest.json": "64424f3ac04ec4444fe2c84b915ff1c6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "b8bec1e85e75a3ee1f5405d4272feade"
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
