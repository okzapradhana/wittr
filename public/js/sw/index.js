self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('wittr-static-v1').then((cache) => {
      return cache.addAll([
        '/',
        'js/main.js',
        'css/main.css',
        'imgs/icon.png',
        'https://fonts.gstatic.com/s/roboto/v15/2UX7WLTfW3W8TclTUvlFyQ.woff',
        'https://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOD8E0i7KZn-EPnyo3HZu7kw.woff'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  // TODO: respond with an entry from the cache if there is one.
  // If there isn't, fetch from the network.
  /*return response is for offline work so it will fetch from the cache
  and display it, but if the cache is empty it will fetch from network*/
  console.log(event.request)
  event.respondWith(
    caches.match(event.request).then((response) => {
      if(response) return response
      return fetch(event.request)
    })
  )
});