/* 단비랩 AI 가이드 — 통과 전용 서비스 워커 (캐시 없음).
   홈 화면 설치 조건(안드로이드 크롬)을 채우기 위해서만 있습니다.
   아무것도 저장하지 않고 가로채지도 않습니다 — 모든 요청은 서비스 워커가 없을 때와
   똑같이 네트워크로 나가므로, 새로 올린 내용이 바로 보입니다. */

self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function () {
  /* respondWith() 를 일부러 쓰지 않습니다. 브라우저가 평소대로 받아 갑니다. */
});
