const cacheName="aymenn";
const assets=[
'./',
'./assets/css/bootstrap.min.css',
'./assets/css/style.css',
'./assets/js/main.js',
'./assets/js/particles.min.js',
'./assets/media/aymen.png',
'./assets/media/blockchain.png',
'./assets/media/blockdiamonds.png',
'./assets/media/cryptovalue.jpg',
'./assets/media/reactflix.jpg',
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