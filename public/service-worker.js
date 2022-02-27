import { skipWaiting, clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { NetworkOnly, NetworkFirst, CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { registerRoute, setDefaultHandler, setCatchHandler } from 'workbox-routing';
import { matchPrecache, precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';

skipWaiting();
clientsClaim();

// must include following lines when using inject manifest module from workbox
// https://developers.google.com/web/tools/workbox/guides/precache-files/workbox-build#add_an_injection_point
const WB_MANIFEST = self.__WB_MANIFEST;
// Precache fallback route and image
WB_MANIFEST.push({
  url: '/fallback',
  revision: '1234567890',
});
precacheAndRoute(WB_MANIFEST);

cleanupOutdatedCaches();
registerRoute(
  '/',
  new NetworkFirst({
    cacheName: 'start-url',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 1,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
);
registerRoute(
  /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
  new CacheFirst({
    cacheName: 'google-fonts',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 4,
        maxAgeSeconds: 31536e3,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
);
registerRoute(
  /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
  new StaleWhileRevalidate({
    cacheName: 'static-font-assets',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 4,
        maxAgeSeconds: 604800,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
);
// disable image cache, so we could observe the placeholder image when offline
registerRoute(
  /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
  new NetworkOnly({
    cacheName: 'static-image-assets',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 64,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
);
registerRoute(
  /\.(?:js)$/i,
  new StaleWhileRevalidate({
    cacheName: 'static-js-assets',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 32,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
);
registerRoute(
  /\.(?:css|less)$/i,
  new StaleWhileRevalidate({
    cacheName: 'static-style-assets',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 32,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
);
registerRoute(
  /\.(?:json|xml|csv)$/i,
  new NetworkFirst({
    cacheName: 'static-data-assets',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 32,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
);
registerRoute(
  /\/api\/.*$/i,
  new NetworkFirst({
    cacheName: 'apis',
    networkTimeoutSeconds: 10,
    plugins: [
      new ExpirationPlugin({
        maxEntries: 16,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
);
registerRoute(
  /.*/i,
  new NetworkFirst({
    cacheName: 'others',
    networkTimeoutSeconds: 10,
    plugins: [
      new ExpirationPlugin({
        maxEntries: 32,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
);

// following lines gives you control of the offline fallback strategies
// https://developers.google.com/web/tools/workbox/guides/advanced-recipes#comprehensive_fallbacks

// Use a stale-while-revalidate strategy for all other requests.
setDefaultHandler(new StaleWhileRevalidate());

// This "catch" handler is triggered when any of the other routes fail to
// generate a response.
setCatchHandler(({ event }) => {
  // The FALLBACK_URL entries must be added to the cache ahead of time, either
  // via runtime or precaching. If they are precached, then call
  // `matchPrecache(FALLBACK_URL)` (from the `workbox-precaching` package)
  // to get the response from the correct cache.
  //
  // Use event, request, and url to figure out how to respond.
  // One approach would be to use request.destination, see
  // https://medium.com/dev-channel/service-worker-caching-strategies-based-on-request-types-57411dd7652c
  switch (event.request.destination) {
    case 'document':
      // If using precached URLs:
      return matchPrecache('/fallback');
    case 'image':
      // If using precached URLs:
      return matchPrecache('/static/images/fallback.png');
    case 'font':
    // If using precached URLs:
    // return matchPrecache(FALLBACK_FONT_URL);
    // return caches.match('/static/fonts/fallback.otf')
    // break
    default:
      // If we don't have a fallback, just return an error response.
      return Response.error();
  }
});
/* self.addEventListener("install", function (event) {
    console.log("Hello world from the Service Worker 🤙");
  }); */


/*(function() {

'use strict';

// Licensed under a CC0 1.0 Universal (CC0 1.0) Public Domain Dedication
// http://creativecommons.org/publicdomain/zero/1.0/
  // Update 'version' if you need to refresh the cache
  var staticCacheName = 'static';
  var version = 'nextJS-1::sitesociete';

  // Store core files in a cache (including a page to display when offline)
  function updateStaticCache() {
      return caches.open(version + staticCacheName)
          .then(function (cache) {
              return cache.addAll([
                  '/',
                  
              ]);
          });
  };

  self.addEventListener('install', function (event) {
      event.waitUntil(updateStaticCache());
  });

  self.addEventListener('activate', function (event) {
      event.waitUntil(
          caches.keys()
              .then(function (keys) {
                  // Remove caches whose name is no longer valid
                  return Promise.all(keys
                      .filter(function (key) {
                        return key.indexOf(version) !== 0;
                      })
                      .map(function (key) {
                        return caches.delete(key);
                      })
                  );
              })
      );
  });

  self.addEventListener('fetch', function (event) {
      var request = event.request;
      // Always fetch non-GET requests from the network
      if (request.method !== 'GET') {
          event.respondWith(
              fetch(request)
                  .catch(function () {
                      return caches.match('/offline.js');
                  })
          );
          return;
      }

      // For HTML requests, try the network first, fall back to the cache, finally the offline page
      if (request.headers.get('Accept').indexOf('text/html') !== -1) {
          // Fix for Chrome bug: https://code.google.com/p/chromium/issues/detail?id=573937
          if (request.mode != 'navigate') {
              request = new Request(request.url, {
                  method: 'GET',
                  headers: request.headers,
                  mode: request.mode,
                  credentials: request.credentials,
                  redirect: request.redirect
              });
          }
          event.respondWith(
              fetch(request)
                  .then(function (response) {
                      // Stash a copy of this page in the cache
                      var copy = response.clone();
                      caches.open(version + staticCacheName)
                          .then(function (cache) {
                              cache.put(request, copy);
                          });
                      return response;
                  })
                  .catch(function () {
                      return caches.match(request)
                          .then(function (response) {
                              return response || caches.match('offline.js');
                          })
                  })
          );
          return;
      }

      // For non-HTML requests, look in the cache first, fall back to the network
      event.respondWith(
          caches.match(request)
              .then(function (response) {
                  return response || fetch(request)
                      .catch(function () {
                          // If the request is for an image, show an offline placeholder
                          if (request.headers.get('Accept').indexOf('image') !== -1) {
                              return new Response('<svg width="400" height="300" role="img" aria-labelledby="offline-title" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><title id="offline-title">Offline Site Vitrine LVdesign</title><g fill="none" fill-rule="evenodd"><path fill="#D8D8D8" d="M0 0h400v300H0z"/><text fill="#9B9B9B" font-family="Helvetica Neue,Arial,Helvetica,sans-serif" font-size="72" font-weight="bold"><tspan x="93" y="172">offline</tspan></text></g></svg>', { headers: { 'Content-Type': 'image/svg+xml' }});
                          }
                      });
              })
      );
  });

})();
*/