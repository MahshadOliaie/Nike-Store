

const CACHE_NAME = "cache-v1";
const urlsToCache = [
    '/',
    '/index.html',
    '/main.jsx',
    '/index.css',
    '/bar.svg',
    '/logo.png',
    '/bar.user.jpg',
    '/data/api.json',
    '/data/db.json',
    '/data/category.json',
    '/data/categories/basketball',
    "/data/categories/lifestyle",
    "/data/categories/running"
]



self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                cache.addAll(urlsToCache)
            })
    )
})


self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((caches) => {
                return caches || fetch(event.request)
            })
    )
})



self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        caches.delete(cacheName);
                    }
                })
            )
        })
    )

})