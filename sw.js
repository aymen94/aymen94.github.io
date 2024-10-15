const cacheName = "aymenn.xyz-v1.1";
const assets = [
    './',
    './index.html',
    './assets/css/style.min.css',
    './assets/js/main.min.js',
    './favicon.ico'
];

self.addEventListener('activate', async event => {
    event.waitUntil((async () => {
        const keyList = await caches.keys();
        await Promise.all(keyList.map(key => {
            if (key !== cacheName) {
                return caches.delete(key);
            }
        }));
        await self.clients.claim();
    })());
});

self.addEventListener('install', event => {
    event.waitUntil((async () => {
        const cache = await caches.open(cacheName);
        await cache.addAll(assets);
        await self.skipWaiting();
    })());
});

self.addEventListener('fetch', event => {
    if (event.request.url.startsWith('http') || event.request.url.startsWith('https')) {
        event.respondWith((async () => {
            const cachedResponse = await caches.match(event.request);
            if (cachedResponse) {
                // Serve from cache
                return cachedResponse;
            }
            // Perform network request and cache the response
            const fetchRes = await fetch(event.request);
            const cache = await caches.open(cacheName);
            cache.put(event.request, fetchRes.clone());
            return fetchRes;
        })());
    }
});
