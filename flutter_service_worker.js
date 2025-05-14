'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6860526c52dd0df56b3bfcc52b43027f",
"assets/AssetManifest.bin.json": "42296d28bc113d71bc80a530f5e0732c",
"assets/AssetManifest.json": "c20ccfec68c4e891b4f534286e495b05",
"assets/assets/fonts/Stock%2520Analysis%2520Font%2520Icon.ttf": "9600618cf532326c770dad87b49ca589",
"assets/assets/stock_data/apple.json": "c4026e5d5256f88ddc2a980cf1e0e60e",
"assets/assets/stock_data/asian_paints.json": "2ee1840aff7355662e067c082fad941c",
"assets/assets/stock_data/colgate.json": "7ca8be264b4a7cf1d24ad18a7689048e",
"assets/assets/stock_data/facebook.json": "f27ddd305d67f1af6f5861e4a4282d4a",
"assets/assets/stock_data/google.json": "058ad38cc9642d2c25d027fce140f19c",
"assets/assets/stock_data/hdfc_bank.json": "a25d86f16b9d3ca62c98ae67293395c1",
"assets/assets/stock_data/indian_oil.json": "5025757c24a0012fc9a8a97fd227d10d",
"assets/assets/stock_data/infosys.json": "9726a395b7e96a08705aba9d12138f6d",
"assets/assets/stock_data/microsoft.json": "eb68d24812b5a96e88af8cfe1af055de",
"assets/assets/stock_data/nestle.json": "9e25e17e79567c135ffaeb3c460b1eb8",
"assets/assets/stock_data/netflix.json": "48e17b31962a7dee776f8da8c4f6de37",
"assets/assets/stock_data/tesla.json": "bba01b2278fbe7e03a860f76eef2a209",
"assets/assets/stock_data/ultratech_cement.json": "e894fe491307dcef31e3e9099f87ec97",
"assets/assets/stock_logo/apple.svg": "9a0c35fcabbc55e48b60273d053d0ec6",
"assets/assets/stock_logo/app_logo.svg": "095b2a379de6256a0761101a068891e7",
"assets/assets/stock_logo/asian_paints.svg": "817ccf0af9b3b517e528db833f57e96c",
"assets/assets/stock_logo/colgate.svg": "ee241c858f9cbec2fc0692ded898652d",
"assets/assets/stock_logo/cover_image.png": "fd1d5ecbf96b35366996d4782e62653f",
"assets/assets/stock_logo/facebook.svg": "751e42ee9891ba4188d1993ea264cf08",
"assets/assets/stock_logo/google.svg": "bdf49aa97cbf769a5ce073330d3d1e89",
"assets/assets/stock_logo/hdfc_bank.svg": "440abc23f4b5350bd68f0505c103e630",
"assets/assets/stock_logo/indian_oil.svg": "7d3c128fceb7687e73b448dc818ca16b",
"assets/assets/stock_logo/infosys.svg": "ba224f7c6614eb211e59760d426748e3",
"assets/assets/stock_logo/microsoft.svg": "b28bddc61f7784056afc005365c06a25",
"assets/assets/stock_logo/nestle.svg": "96bfe35547bf53dfe39f91a5acaf34eb",
"assets/assets/stock_logo/netflix.svg": "235a465f52ec64471f7a5466b2a401ff",
"assets/assets/stock_logo/tesla.svg": "45e4cf89e3a3491688e54e95f6979530",
"assets/assets/stock_logo/ultratech_cement.svg": "d6b34a541502d53753a62b7a045df73a",
"assets/FontManifest.json": "042edf4cafa695cf963a7a7640c6cf23",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "575502680ea20d87751288cabb4c8874",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "c6568e14e8cdebc75c99abf89d9c2ec7",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "e71539106f9b778e9248ff1ae5c44f46",
"icons/Icon-192.png": "a26742730e017f7f1fd105d8c75b8e89",
"icons/Icon-512.png": "c6568e14e8cdebc75c99abf89d9c2ec7",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fd4880e876c6bfd27a2f4b5d6cc68fa2",
"/": "fd4880e876c6bfd27a2f4b5d6cc68fa2",
"main.dart.js": "3937e04016dc8de7f6deace0fcaa0dc4",
"manifest.json": "9ff2ff969ffa9e5a314c8a5e39c09752",
"version.json": "7f1d6e7cc66c84bb4c3b1c70fb9304c9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
