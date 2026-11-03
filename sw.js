/* Näppäinaapinen – offline-tuki.
   Kun päivität tiedostoja GitHubiin, vaihda VERSION-numero (esim. v3-2),
   niin laitteet hakevat uuden version. Sivu itse haetaan aina ensin verkosta. */
const VERSION = 'nappainaapinen-v4-1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png',
  './sormikartta.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(VERSION).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Sivut: verkko ensin, jotta päivitykset näkyvät heti. Ilman verkkoa käytetään tallennettua.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); return res; })
        .catch(() => caches.match(req).then((hit) => hit || caches.match('./index.html')))
    );
    return;
  }

  // Omat tiedostot: välimuisti ensin.
  if (url.origin === location.origin) {
    event.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => {
      const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); return res;
    })));
    return;
  }

  // Fontit ja QR-kirjasto: käytä tallennettua ja päivitä taustalla.
  if (/fonts\.(googleapis|gstatic)\.com|cdnjs\.cloudflare\.com/.test(url.host)) {
    event.respondWith(caches.open(VERSION).then((cache) => cache.match(req).then((hit) => {
      const net = fetch(req).then((res) => { cache.put(req, res.clone()); return res; }).catch(() => hit);
      return hit || net;
    })));
  }
});
