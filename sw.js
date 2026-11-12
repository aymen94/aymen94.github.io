const cacheName = "aymenn.xyz-v2.0.2";
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
    if (url.origin === self.location.origin ? !isRootSite(url) : !url.protocol.startsWith('http')) return;
    event.respondWith((async () => {
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) {
            return cachedResponse;
        }

        const fetchRes = await fetch(event.request);
        if (fetchRes.ok) {
            const cache = await caches.open(cacheName);
            cache.put(event.request, fetchRes.clone());
        }
        return fetchRes;
    })());
});
