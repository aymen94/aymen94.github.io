const cacheName = "aymenn.xyz-v1";
const assets = [
	'./',
	'./index.html',
	'./assets/css/style.min.css',
	'./assets/js/main.min.js',
	'./favicon.ico'
];

self.addEventListener('activate', event => {
	event.waitUntil(
		caches.keys().then(keyList => {
			return Promise.all(keyList.map(key => {
				if (key !== cacheName) {
					return caches.delete(key);
				}
			}));
		})
	);
	event.waitUntil(self.clients.claim());
});

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(cacheName)
			.then(cache => cache.addAll(assets))
			.then(() => self.skipWaiting())
	);
});

self.addEventListener('fetch', event => {
	event.respondWith(
		fetch(event.request).then(fetchRes => {
			return caches.open(cacheName).then(cache => {
				cache.put(event.request.url, fetchRes.clone());
				return fetchRes;
			});
		}).catch(() => {
			return caches.match(event.request);
		})
	);
});  
