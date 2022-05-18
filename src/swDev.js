// Public Key:
// BM6ziLA8aJQDJfzsegyhWN_PNZ1PhiDN0zsJovvfLTuYoj5Tho-wzatQ9FugDLNbRzNia_akSfO3AcvPQY262XI

// Private Key:
// k0hVB8dIS9bAtCbEjMc-LV5CEgdQBjMxRy9J5TsiGws

export default function swDev() {
  function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, "+")
      .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
  function determineAppServerKey() {
    var vapidPublicKey =
      "BM6ziLA8aJQDJfzsegyhWN_PNZ1PhiDN0zsJovvfLTuYoj5Tho-wzatQ9FugDLNbRzNia_akSfO3AcvPQY262XI"
    return urlBase64ToUint8Array(vapidPublicKey);
  }
  // let sWURL = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker.register('/sw.js').then((response) => {
    return response.pushManager.getSubscription().then(function () {
      return response.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: determineAppServerKey(),
      });
    });
  });
}
