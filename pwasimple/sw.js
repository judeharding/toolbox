console.log("SW loaded");

// Install event
const CACHE_NAME = "pwa-cache-v1";
const urlsToCache = [
	"/divtable",
	"/divtable/divtable.html",
	"/pwasimple.css", // Include other assets like CSS, JS, images, etc.
	"/mmlogo-192x192.png",
];

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches
			.open(CACHE_NAME)
			.then((cache) => {
				console.log("Opened cache");
				return cache.addAll(urlsToCache);
			})
			.catch((error) => {
				console.error("Failed to cache:", error);
			})
	);
});

// Fetch event - Serve cached content when offline
self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			// Cache hit - return the cached response
			return response || fetch(event.request);
		})
	);
});

// Activate event - Update the cache
self.addEventListener("activate", (event) => {
	const cacheWhitelist = [CACHE_NAME];
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cacheName) => {
					if (!cacheWhitelist.includes(cacheName)) {
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});

// Auto play sound on open
// window.addEventListener("load", () => {
// 	const sound = document.getElementById("welcome-sound");
// 	sound.play().catch((error) => {
// 		console.log("Autoplay blocked:", error);
// 	});
// });
