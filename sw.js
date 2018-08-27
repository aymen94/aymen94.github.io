const cacheName="aymenn2018";
const assets=[
'./index.html',
'./assets/css/style.css',
'./assets/js/main.js',
'./assets/media/aymen.png',
];
self.addEventListener('activate',e=>{
	e.waitUntil(caches.keys().then(keyList=>keyList.map(key=>{
		if(key!==cacheName)
				return caches.delete(key);
	})));
	self.clients.claim();
});
self.addEventListener('install',e=>{
	e.waitUntil(caches.open(cacheName).then(cache=>cache.addAll(assets).then(()=>self.skipWaiting())));
});
self.addEventListener('fetch',e=>{
	e.respondWith(caches.match(e.request).then(res=>res||fetch(e.request)));
})