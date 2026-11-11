const cacheName = "aymenn.xyz-v2.0.1";
const assets = [
    './',
    './index.html',
    './assets/css/style.min.css',
    './assets/js/main.min.js',
    './assets/media/aymen-224.avif',
    './assets/media/aymen-224.webp',
    './assets/media/aymen-224.jpg',
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

// Only the root site is handled here; anything else goes straight to the network.
const isRootSite = url =>
    url.origin === self.location.origin &&
    (url.pathname === '/' ||
        url.pathname === '/index.html' ||
        url.pathname === '/favicon.ico' ||
        url.pathname === '/manifest.json' ||
        url.pathname.startsWith('/assets/'));

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;
    const url = new URL(event.request.url);
    // Same-origin paths outside the root site (other projects) are not touched.
    if (url.origin === self.location.origin ? !isRootSite(url) : !url.protocol.startsWith('http')) return;
    event.respondWith((async () => {
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) {
            // Serve from cache
            return cachedResponse;
        }
        // Perform network request and cache the response. Opaque (no-cors) responses
        // are skipped: Chrome pads each one by several MB in storage quota.
        const fetchRes = await fetch(event.request);
        if (fetchRes.ok) {
            const cache = await caches.open(cacheName);
            cache.put(event.request, fetchRes.clone());
        }
        return fetchRes;
    })());
});
