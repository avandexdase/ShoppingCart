let cacheData = "app";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/",
        'main.js',
        'static/images/logo_2x.png',
        "favicon.ico",
        "manifest.json",
        "maskable_icon_x192.png",
        "static/images/logo.png",
        "/home",
        "/products",
        "/register",
        "/cart"
      ]);
    })
  );
});


this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    if(event.request.url == "http://localhost:9000/favicon.ico")
    event.waitUntil(
      this.registration.showNotification("Apna Bazar", {
        body:"your offline please connect to network"
      })
      );
  event.respondWith(
      caches.match(event.request).then((result) => {
        if (result) return result;
        let requestUrl = event.request.clone();
        return fetch(requestUrl);
      })
    );
  }
});






