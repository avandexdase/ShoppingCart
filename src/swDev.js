export default function swDev() {
    // let sWURL = `${process.env.PUBLIC_URL}/sw.js`;
    let sWURL = `http://localhost:3000/sw.js`;
    navigator.serviceWorker.register(sWURL).then((response)=>{
        console.warn('response', response);
    })
}

// export default function swDev() {
//   function urlBase64ToUint8Array(base64String) {
//     const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
//     const base64 = (base64String + padding)
//       .replace(/\-/g, "+")
//       .replace(/_/g, "/");

//     const rawData = window.atob(base64);
//     const outputArray = new Uint8Array(rawData.length);

//     for (let i = 0; i < rawData.length; ++i) {
//       outputArray[i] = rawData.charCodeAt(i);
//     }
//     return outputArray;
//   }
//   function determineAppServerKey() {
//     var vapidPublicKey =
//       "BjthRQ5myDgc70SKzPCMftGw-n16F7zQBEN7EUD6XxcfTTvrLGWSIG7y_JxiWtVlCFua0S8MTB5RPziBqNx1qIo";
//     return urlBase64ToUint8Array(vapidPublicKey);
//   }
//   let sWURL = `${process.env.PUBLIC_URL}/sw.js`;
//   navigator.serviceWorker.register(sWURL).then((response) => {
//     console.warn("response", response);
//     return response.pushManager.getSubscription().then(function () {
//       return response.pushManager.subscribe({
//         userVisibleOnly: true,
//         applicationServerKey: determineAppServerKey(),
//       });
//     });
//   });
// }
