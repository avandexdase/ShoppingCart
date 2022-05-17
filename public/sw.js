let cacheData = "app";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/",
        'main.js',
        'public/static/images/logo_2x.png',
        'public/static/images/shoppingcart.svg',
        "favicon.ico",
        "public/manifest.json",
        "maskable_icon_x192.png",
        "public/static/images/logo.png"
      ]);
    })
  );
});


this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
  event.respondWith(
      caches.match(event.request).then((result) => {
        if (result) return result;
        let requestUrl = event.request.clone();
        return fetch(requestUrl);
      })
    );
  }
});






