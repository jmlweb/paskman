// const CACHE_VERSION = 'v1';
const CACHE_VERSION = new Date().getTime();

const CACHE_NAME = `paskman-cache-${CACHE_VERSION}`;
const urlsToCache = [
  '/',
  // '/styles/main.css',
  '/client-bundle.js',
];

self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache)),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then((response2) => {
          // Check if we received a valid response
          if (!response2 || response2.status !== 200 || response2.type !== 'basic') {
            return response2;
          }

          // IMPORTANT: Clone the response. A response is a stream
          // and because we want the browser to consume the response
          // as well as the cache consuming the response, we need
          // to clone it so we have two streams.
          const responseToCache = response2.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response2;
        });
      }),
    );
});
