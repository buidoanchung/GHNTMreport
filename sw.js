const CACHE_NAME = 'talent-hub-cache-v15';
const URLS_TO_CACHE = [
    '/',
    '/index.html',
    '/index.tsx',
    '/App.tsx',
    '/constants.ts',
    '/types.ts',
    '/metadata.json',
    '/data/performanceData.ts',
    '/data/talentData.ts',
    '/data/learningData.ts',
    '/data/planData.ts',
    '/components/Header.tsx',
    '/components/Navigation.tsx',
    '/components/Footer.tsx',
    '/components/charts/ChartComponent.tsx',
    '/components/ui/KpiCard.tsx',
    '/components/ui/SubNav.tsx',
    '/components/views/DashboardView.tsx',
    '/components/views/LearningView.tsx',
    '/components/views/PerformanceView.tsx',
    '/components/views/TalentView.tsx',
    '/components/views/Plan2025View.tsx',
    '/components/views/ReportsView.tsx',
];

// On install, cache the app shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

// On activate, clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// On fetch, use a "cache, falling back to network" strategy
self.addEventListener('fetch', event => {
    // Only apply to GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            // Cache hit, return response from cache
            if (cachedResponse) {
                return cachedResponse;
            }

            // Not in cache, go to the network
            return fetch(event.request).then(networkResponse => {
                // If we get a valid response, clone it, cache it, and return it
                if (networkResponse && networkResponse.status === 200) {
                    // Don't cache chrome extension requests
                    if(event.request.url.startsWith('chrome-extension://')) {
                        return networkResponse;
                    }

                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, responseToCache);
                    });
                }
                return networkResponse;
            }).catch(error => {
                // Network request failed, and it's not in the cache.
                // This happens when the user is offline.
                console.log('Fetch failed; user is likely offline.', error);
                // Optionally, return a fallback offline page here
            });
        })
    );
});