export default async function swDev() {
  try {
    // let sWURL = `${process.env.PUBLIC_URL}/sw.js`;
    // let sWURL = `http://localhost:9000/sw.js`;
    const a = await navigator.serviceWorker.register('/sw.js');
    const response = a;
  } catch (error) {}
}
