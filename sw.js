/* Danbi Lab — pass-through service worker (no caching).
   It exists only so the Playground can be installed on a home screen:
   Chrome asks for a service worker with a fetch handler before it offers Install.
   Nothing is cached and nothing is intercepted — every request goes to the
   network exactly as it would without this file, so a new deploy shows up at once. */

self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function () {
  /* Deliberately no respondWith(): the browser fetches normally, nothing is stored. */
});
